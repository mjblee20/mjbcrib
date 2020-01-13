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
app.use()
app.use(express.json());

// Setting up connection to the MongDB Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.catch(err => console.log(err))

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

// Importing the CRUD operations allowing updating the database
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const habitsRouter = require('./routes/habits');
const blogsRouter = require('./routes/blogs');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/habits', habitsRouter);
app.use('/blogs', blogsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})