const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    ownerName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    phnNo: Number,
    emailId: { type: String, required: true },
    carname: String,
    carModel: String,
    engineCapacity: String,
    seatingCapacity: String
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updateAt: 'updated_at'
    }

  }
);

module.exports = mongoose.model('cars', carsSchema);