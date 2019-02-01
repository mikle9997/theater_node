const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async (req, res, next) => {
  const news = await db.news.getLast( 3 );
  let main = await db.news.getFav();
  if (!main) main = news[0];
  res.render('index', { main, news, moment });
});

router.get('/news', async (req, res, next) => {
  const news = await db.news.getAll();
  res.render('partition/news', { news, moment });
});

router.get('/actors', async (req, res, next) => {
  const actors = await db.actors.getAll();
  res.render('partition/actors', { actors });
});

router.get('/gallery', async (req, res, next) => {
  const gallery = await db.media.getGallery();
  res.render('partition/gallery', { gallery });
});

router.get('/about', async (req, res, next) => {
  res.render('partition/about');
});

module.exports = router;
