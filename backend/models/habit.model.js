const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema({

}, {
  timestamps: true,
}) 

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;