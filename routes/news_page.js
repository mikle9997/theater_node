const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/:id', async ( req, res, next ) => {
  const id = req.params.id;
  let post = (await db.news.getById( id ))[0];  
  if (post == null) {
    res.redirect('/');
  }
  post.text = post.text.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
  res.render('partition/news-page', { post, moment });
});

module.exports = router;
