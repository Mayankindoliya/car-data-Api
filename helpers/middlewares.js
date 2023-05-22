const jwt = require('../helpers/jwt')
const carsOwner = require('../models/cars')


async function authenticationMiddleware(req, res, next) {
  const carOwnerHeader = req.headers.authorization
  try {
    //verify the token
    if (carOwnerHeader) {
     const token = carOwnerHeader.split(' ') [1]
     const payload = jwt.verifyToken(token)
     const carowner = await carsOwner.findOne({_id: payload.id}, "ownerName emailId address").lean()
     carowner.id = carowner._id
     req.carowner = carowner
    }
    next()
  }
  catch(err) {
    console.log("Error during Authorization")
    next (err)
  }

};


function erroHandlersMiddleware(err, req, res, next) {
  console.log(err)
  res.json({ 'message': err.message, 'stack': err.stack })
};


module.exports = {
  erroHandlersMiddleware,
  authenticationMiddleware
};