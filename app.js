const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')

const port = process.env.port || 8080;

const app =express();

app.set('view engine','ejs')

app.use(express.static('public'))

//for bodyParser
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

//calling 
app.use('/',homeRouter)

app.listen(port)