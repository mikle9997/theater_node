const express = require('express');
const router = express.Router();
const db = require('./db');
const moment = require('moment');

router.get('/', async ( req, res, next ) => {
  res.render('admin');
});

router.get('/list', async ( req, res, next ) => {
  res.render('admin_partition/list');
});

router.get('/actors-list', async ( req, res, next ) => {
  res.render('admin_partition/actors-list');
});


module.exports = router;
