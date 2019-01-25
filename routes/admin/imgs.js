const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async ( req, res, next ) => {
    res.render('admin/imgs.ejs');
});

module.exports = router;
