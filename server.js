require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.use(express);
app.use(express.json());

mongoose.connect(process.env.MONGOODB_URL)
  .then(() => {
    console.log("Database Connected((!))")
    app.listen(3000, () => {
      console.log("Server is Connected((()))")
    })
  })
  .catch((err) => {
    next(err)
  })




