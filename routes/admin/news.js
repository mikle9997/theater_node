const express = require('express');
const router = express.Router();
const db = require('../db');
const moment = require('moment');

router.get('/', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const news = await db.news.getAll();
    res.render('admin/news', { news, moment });
  }
});

router.delete('/', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const { id } = req.body;
    await db.news.deletePost(id);
    res.send();
  }
});

router.get('/add', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    res.render('admin/add-news');
  }
});

router.post('/add', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const {name, text, date, img} = req.body;
    await db.news.insertPost( name, text, date, img);
    res.send();
  }
});

router.get('/edit/:id', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const id = req.params.id;
    const post = (await db.news.getById( id ))[0];  
    if (post == null) {
      res.redirect('/');
    }
    res.render('admin/edit-news', { post, moment });
  }
});

router.put('/edit', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const {id, name, text, date, img} = req.body;
    await db.news.updatePost( id, name, text, date, img);
    res.send();
  }
});

module.exports = router;
