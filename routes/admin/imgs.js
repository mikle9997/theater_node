const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const db = require('../db');
const fs = require('fs');

router.get('/', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const gallery = await db.media.getGallery();
    const actors = await db.media.getActors();
    const news = await db.media.getNews();
    res.render('admin/imgs', { gallery, actors, news });
  }
});

/* POST add Image */
router.post( "/", ( req, res ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    let filePathName = "";
    const storage = multer.diskStorage( {
      destination: ( req, file, cb ) => {
        cb( null, './public/images/gallery' );
      },
      filename: (req, file, cb) => {      
        const filePath = Date.now().toString(16) + path.extname(file.originalname);
        cb(null, filePath);

        filePathName = filePath;
      }
    });
    const upload = multer({
      storage,
      fileFilter: (req, file, cb) => {      
        if (file.originalname == "") {
          const err = new Error("Extention");
          err.code = "NO_FILE";
          return cb(err);
        }

        const ext = path.extname(file.originalname);      
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
          const err = new Error("Extention");
          err.code = "EXTENTION";
          return cb(err);
        }
        cb(null, true);
      }
    }).single("file");
    
    upload( req, res, err => {
      let item = req.body.item;
      let error = "";
      if (err) {
        if (err.code === "EXTENTION") {
          error = "Только jpeg и png!";
        } else {
          error = err.code;
        }
      } else if ( filePathName == "" ) {
        err = true;
        error = "Файл не выбран!"
      } else {
        db.media.insertData( '/images/gallery/' + filePathName, item );
      }
      res.json({
        ok: !err,
        error
      });
    });
  }
});

// Remove file from disk and db
router.delete('/', async ( req, res, next ) => {
  const userLogin = req.session.userLogin;
  const userId = req.session.userId;

  if (!userLogin || !userId) {
    res.redirect('/auth');
  } else {
    const { id }  = req.body;    
    const imgs = await db.media.getById(id);
    const { img } = imgs[0];

    fs.unlink( 'public' + img, (err) => {
      if (err) console.log(err);
    });
    
    await db.media.deleteImg(id);
    res.json();
  }
});

module.exports = router;
