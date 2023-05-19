const Cars = require('../models/cars');

const bcrypt = require('bcrypt');

class carsOwnerControllers {
  static async registerCarsOwner(document) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(document.password, salt)
    document.password = hash
    const cars = await Cars.create(document)
    return cars
  }
};

module.exports = carsOwnerControllers;