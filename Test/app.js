const express = require('express');

const route = express.Router();

route.get('/School',(req, res)=>{
    res.send('Welcome to school database')
});

module.exports = route;