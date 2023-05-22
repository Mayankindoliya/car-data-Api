require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const middlewares = require('./helpers/middlewares');
const routes = require('./routes');

app.use(express.json());

app.use(middlewares.authenticationMiddleware);
app.use(routes);

// error handler middlerware
app.use(middlewares.erroHandlersMiddleware);



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




