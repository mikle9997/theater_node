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

// Create new post
router.post('/add', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const {name, author, text, date, time, duration, place, producer, choreographer, actors, img} = req.body;
    console.log(text);
    
    await db.news.createPost(name, author, text, date, time, duration, place, producer, choreographer, actors, img);
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

// Edit post
router.put('/edit', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const {id, name, author, text, date, time, duration, place, producer, choreographer, actors, img} = req.body;
    await db.news.updatePost( id, name, author, text, date, time, duration, place, producer, choreographer, actors, img);
    res.send();
  }
});

// Set soonscene
router.put('/soon-scene', async ( req, res, next ) => {
  const id = req.body.id;
  const oldPost = await db.news.getFav();
  let oldId = 0;
  if (oldPost[0]) {
    oldId = oldPost[0].id;
    db.news.setFav( oldId, 0 );
  }
  db.news.setFav( id, 1 ); 
  res.send();
});

module.exports = router;
