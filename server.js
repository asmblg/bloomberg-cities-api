require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(routes);

mongoose
  .set({
    strictQuery: false
  })
  .connect(MONGODB_URI, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      readPreference: 'nearest'
    })
  .then(() => {
    console.log('Connected to', MONGODB_URI || 'Dev DB');
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(err => {
    console.log('DB Connection ERROR: ', err);
  });

  // Middleware to log the database connection details
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to', MONGODB_URI);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});



