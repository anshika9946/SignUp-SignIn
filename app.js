const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.port || 8080;

const app =express();

app.get('/',(err,res)=>{
    res.send("hello")
})

app.listen(port)