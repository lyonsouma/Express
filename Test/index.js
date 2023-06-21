const express = require('express');
const route = require('../Test/app');

const app = express();

app.use(route);

app.listen(process.env.port || 4300, ()=>{
    console.log('Listening to port 4300')
})