const router = require('express').Router();
let book = require('../models/book.model');

router.route('/').get((req, res) => {
  book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;

  const newbook = new book({title,image,price});

  newbook.save()
    .then(() => res.json('book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  book.findByIdAndDelete(req.params.id)
    .then(() => res.json('book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;