const express = require('express');
const router = express.Router();

const myObj = require('../controllers/questionOne')();
const myObjTwo = require('../controllers/questionTwo');
const myObjThree = require('../controllers/questionThree');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(myObj.privateVar); // outputs undefined
  console.log(myObj.publicVar); // outputs I am public
  console.log(myObj.privateFnc); // outputs undefined
  console.log(myObj.publicFnc); // outputs fnc()


  myObjTwo().then((data) => {
    console.dir(data);
  });

  myObjThree().then((data) => {
    console.log(data);
  });

  res.render('index', { title: 'Express'});
});

module.exports = router;
