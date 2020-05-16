const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const routes = require('./routes')

app.use('/',routes)
app.use(bodyParser.json())
app.use((err,req,res,next)=>{
    res.json(err);
})

module.exports = app;