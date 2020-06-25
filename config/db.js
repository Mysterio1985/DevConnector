const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const conenctDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.emit(1);
  }
};

module.exports = conenctDB;
