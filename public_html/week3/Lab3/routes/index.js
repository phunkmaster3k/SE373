var express = require('express');
var router = express.Router();
var debug = require('debug')('Lab3:form');
var menuItems = [2,4,5,10,20];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 3' });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Form Page', items: menuItems });
});

router.post('/form', function(req, res, next) {
    res.render('form', { items: menuItems, pickVal: req.body.picker });
});
module.exports = router;
