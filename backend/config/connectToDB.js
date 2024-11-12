const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect('htttps//localhost-272003/ data', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectToDB;
