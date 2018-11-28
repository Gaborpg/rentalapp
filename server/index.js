//imports
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

//add all the method etc
const app = express();

//add port from env
const PORT = process.env.PORT || 3001;


mongoose.connect(config.DB_URL, {useNewUrlParser: true}).then(
  () => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  }
);

app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, function () {
  console.log('I am running!')
});
