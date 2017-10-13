var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index Page' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Page' });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Form Page' });
});

router.post('/form', function(req, res, next) {
    res.render('form', { title: 'Form Page', email: req.body.email, name: req.body.name, comment: req.body.comment });
});

module.exports = router;
