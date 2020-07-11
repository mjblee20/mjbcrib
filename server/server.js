const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, function () {
  console.log("Server is up and running on localhost:3000");
})