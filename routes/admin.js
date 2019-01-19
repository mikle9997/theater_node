const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async ( req, res, next ) => {
  res.render('admin');
});

module.exports = router;
