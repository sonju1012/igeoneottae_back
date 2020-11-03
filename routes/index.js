var express = require('express');
var router = express();
var mdbConn = require('../db/db_connection');
var mariadb = require('mariadb');
/* GET home page. */


router.get('/', function(req, res){
  res.send(mdbConn.getUserList().then((rows)=>{
    console.log(rows[0].user_id);
  }).catch((err)=>{
    console.error(err);
  }))
})

router.post('/', function(req, res, next){
  const user_id = 'test';
  const sql = `INSERT INTO USER (user_id) VALUES ('${user_id}')`;
  mariadb.query(sql, function(err, rows){
    console.log(rows);
  }).catch((err)=>{
    console.error(err);
  })
})

const port = 3000;
router.listen(port, ()=>{
  console.log('listen'+port);
})