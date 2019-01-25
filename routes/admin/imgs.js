const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async ( req, res, next ) => {
    const gallery = await db.media.getGallery();
    const actors = await db.media.getActors();
    const news = await db.media.getNews();
    res.render('admin/imgs', { gallery, actors, news });
  });

module.exports = router;
