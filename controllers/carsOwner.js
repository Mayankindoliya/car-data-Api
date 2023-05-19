const Cars = require('../models/cars');

const bcrypt = require('bcrypt');

class carsOwnerControllers {

  static async registerCarsOwner(document) {
   const existingOwner = await Cars.findOne({$or: [{emailId: document.emailId}, {ownerName: document.ownerName}]}).lean()
   if(existingOwner) {
    throw new Error("Owner Already Exists?")
   }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(document.password, salt)
    document.password = hash
    const cars = await Cars.create(document)
    return cars
  }

  static async 
};

module.exports = carsOwnerControllers;