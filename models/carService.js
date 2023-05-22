const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carServiceSchema = new Schema(
  {
   serviceType: String,
   description: String,
   owner: {
    id:{type: Schema.Types.ObjectId, required: true},
    ownerName: String
   }
  },
  {
    timestamps:{
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model('carService', carServiceSchema);