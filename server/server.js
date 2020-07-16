const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// mongoose.connect();
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Serve the react app when opened.


app.listen(PORT, function () {
  console.log("Server is up and running on localhost:3000");
})