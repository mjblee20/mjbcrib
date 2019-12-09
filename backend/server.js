const express = require('express');
// allows us to bypass CORS
const cors = require('cors');
// allows us to connect to MongoDB Database
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

// Middleware Functions
app.use(cors());
app.use(express.json());

// Setting up connection to the MongDB Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

// Importing the CRUD operations allowing updating the database
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const habitsRouter = require('./routes/habits');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/habits', habitsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

// 'use strict';

// const express = require('express');
// const { Server } = require('ws');

// const PORT = process.env.PORT || 3000;
// const INDEX = '/index.html';

// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const wss = new Server({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.on('close', () => console.log('Client disconnected'));
// });

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);