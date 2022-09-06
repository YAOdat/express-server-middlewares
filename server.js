'use strict'

const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config
const squareCheck = require('./middlewares/validate-number.js')
const errorHandler = require('./error-handlers/500');

const port = process.env.PORT || 4001


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Home Page. Copy this link: <h1>https://odat-express-middleware.herokuapp.com/square?num=5</h1> and paste it in the URL placeholder')
  
})  

app.get('/square', squareCheck(), (req, res) => {
    
    console.log('ولا غالب إلا الله')
})


app.use(errorHandler);

function start(port) {
app.listen(port, () => console.log('The server is up on port',port ))
}

module.exports = {
    app: app,
    start: start
  }