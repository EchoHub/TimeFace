var express = require('express');
var router = express.Router();

var _path = '../public/modules/';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(_path + 'index', { title: '时光流影TIMEFACE – 全球首个文化生活自出版社交平台' });
});

module.exports = router;
