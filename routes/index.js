const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async (req, res, next) => {
  const news = await db.news.getThreeLast();
  res.render('index', { news, moment });
});

router.get('/news', async (req, res, next) => {
  const news = await db.news.getAll();
  res.render('partition/afisha', { news, moment });
});

router.get('/troupe', async (req, res, next) => {
  const troupe = await db.troupe.getAll();
  res.render('partition/troupe', { troupe });
});

router.get('/gallery', async (req, res, next) => {
  const gallery = await db.media.getGallery();
  res.render('partition/gallery', { gallery });
});

module.exports = router;
