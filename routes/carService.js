const express = require('express');
const carServiceControllers = require('../controllers/carService');

const router = express.Router();

router.post('/serviceDetails', (req, res, next) => {
  carServiceControllers.carServiceDetails(req.body, req.carowner)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});


module.exports = router;