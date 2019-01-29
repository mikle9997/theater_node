const express = require('express');
const router = express.Router();
const db = require('./db');

const actors = require('./admin/actors');
const news = require('./admin/news');
const imgs = require('./admin/imgs');

router.use("/actors", actors);
router.use("/news", news);
router.use("/imgs", imgs);

router.get('/', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    res.render('admin', { login : userLogin });
  }
});

router.get('/all-images', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {  
    const gallery = await db.media.getGallery();
    const actors = await db.media.getActors();
    const news = await db.media.getNews();
    res.render('admin/control/all-images', { gallery, actors, news });
  }
});

module.exports = router;
