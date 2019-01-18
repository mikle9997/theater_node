const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async function(req, res, next) {
  const news = await db.getAfishaThreeLast();
  res.render('index', { news, moment });
});

router.get('/news', async function(req, res, next) {
  const news = await db.getAfishaAll();
  res.render('partition/afisha', { news, moment });
});

router.get('/troupe', async function(req, res, next) {
  const troupe = await db.getTroupe();
  res.render('partition/troupe', { troupe });
});

router.get('/chulanchik', async function(req, res, next) {
  res.render('partition/chulanchik', { title: 'Express' });
});

module.exports = router;
