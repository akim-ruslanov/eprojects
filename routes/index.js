var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'eProjects', main_page: true });
});


// TODO: pull data from somewhere
router.get('/blog', function(req, res, next) {
  res.render('blog', {blogInfo: 'NONE', title:"Blog", main_page: false})
})

router.get('/contact', function(req, res, next) {
  res.render('contact', {blogInfo: 'NONE', title:"Contact", main_page: false})
})


router.get('/news', function(req, res, next) {
  res.render('newsletter', {blogInfo: 'NONE', title:"Newsletter", main_page: false})
})

module.exports = router;
