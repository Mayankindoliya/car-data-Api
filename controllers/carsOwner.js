const Cars = require('../models/cars');

const bcrypt = require('bcrypt');

class carsOwnerControllers {

  static async registerCarsOwner(document) {
    const existingOwner = await Cars.findOne({ $or: [{ emailId: document.emailId }, { ownerName: document.ownerName }] }).lean()
    if (existingOwner) {
      throw new Error("Owner Already Exists?")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(document.password, salt)
    document.password = hash
    const cars = await Cars.create(document)
    return cars
  }

  static async registerforCarService(document) {
    const existingOwner = await Cars.findOne({ ownerName: document.ownerName }, 'password emailId').lean()
    if (!existingOwner) {
      throw new Error('owner does not Exists')
    }
    if (!bcrypt.compareSync(document.password, existingOwner.password)) {
      throw new Error("password does not match")
    }
    return existingOwner
  }; 
}
module.exports = carsOwnerControllers;