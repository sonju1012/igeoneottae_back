var express = require('express');
var router = express();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('index');
});

var port = 2000;
router.listen(port, function(){
  console.log('server on! https://localhost:'+port);
})

module.exports = router;
