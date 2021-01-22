const express = require('express');
const router  = express.Router();
const Name = require('../models/Name.model')

/* GET home page */
router.get('/', (req, res) => 
  res.json({ message: 'Index rendered.' })
);

router.post("/name", (req, res, next) => {
  console.log(req.body);
  Name.create(req.body)
    .then((nameDoc) => res.status(200).json(nameDoc))
    .catch((err) => next(err));
});


module.exports = router;
