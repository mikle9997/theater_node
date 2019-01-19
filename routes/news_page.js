const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/:id', async ( req, res, next ) => {
  const id = req.params.id;
  const post = (await db.news.getById( id ))[0];  
  if (post == null) {
    res.redirect('/');
  }  
  res.render('partition/news-page', { post, moment });
});

module.exports = router;
