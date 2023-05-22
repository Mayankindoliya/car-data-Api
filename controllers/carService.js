const carService = require('../models/carService');

class carServiceSontrollers {
   static async carServiceDetails(document, carowner) {
    if(!carowner) {
      throw new Error('CarOwner does not Exits')
    }
    document.owner = carowner 
   const carservice = await carService.create(document)
   return carservice
   }
};

module.exports = carServiceSontrollers;
