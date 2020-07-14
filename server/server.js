const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose.connect();
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

// Serve the react app when opened.


app.listen(PORT, function () {
  console.log("Server is up and running on localhost:3000");
})