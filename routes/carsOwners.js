const express = require('express');

const carsOwnerControllers = require('../controllers/carsOwner');

const router = express.Router();

router.post('/registercar', (req, res, next) => {
  carsOwnerControllers.registerCarsOwner(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});

module.exports = router;