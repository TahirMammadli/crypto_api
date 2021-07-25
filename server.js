const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cryptoContoller = require('./controller/crypto.js')

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post('/crypto', cryptoContoller.saveToDb)
app.get('/crypto', cryptoContoller.getFromDb)


mongoose.connect(MONGODB_URI,
{ useNewUrlParser: true, useUnifiedTopology:true  })
.then(res => {
    console.log('Connected!')
    app.listen(3000);
})
.catch(err => console.log(err))
