const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async ( req, res, next ) => {
  res.render('admin');
});

router.get('/news', async ( req, res, next ) => {
  const news = await db.news.getAll();
  res.render('admin/news', { news, moment });
});

router.get('/add-news', async ( req, res, next ) => {
  const news = await db.news.getAll();
  res.render('admin/add-news', { news, moment });
});

router.get('/all-images', async ( req, res, next ) => {
  const gallery = await db.media.getGallery();
  const actors = await db.media.getActors();
  const news = await db.media.getNews();
  res.render('admin/control/all-images', { gallery, actors, news });
});

router.get('/actors-list', async ( req, res, next ) => {
  res.render('admin/actors-list');
});



module.exports = router;
