const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  image: {
    type: String
  },
  price: {
    type: Number
  }
}, {
  timestamps: true,
});

const book = mongoose.model('book', bookSchema);

module.exports = book;