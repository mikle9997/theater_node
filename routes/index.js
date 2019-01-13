var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/afisha', function(req, res, next) {
  res.render('partition/afisha', { title: 'Express' });
});

router.get('/truppa', function(req, res, next) {
  res.render('partition/truppa', { title: 'Express' });
});

router.get('/chulanchik', function(req, res, next) {
  res.render('partition/chulanchik', { title: 'Express' });
});

module.exports = router;
