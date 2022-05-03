'use strict';
const express = require('express');
let router =  express.Router();

router.get('/cars', (req, res) => {
    res.send('this is things car')
  });
  
  router.post('/cars', function (req, res) {
    res.send('POST request to the homepage')
  });



module.exports = router;

