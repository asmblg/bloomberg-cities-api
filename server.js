require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(cors());

mongoose
  .set({
    strictQuery: false
  })
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to', MONGODB_URI ? 'Production DB' : 'Dev DB');
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(err => {
    console.log('DB Connection ERROR: ', err);
  });



