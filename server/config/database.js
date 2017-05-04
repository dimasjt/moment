import mongoose from 'mongoose';

const mongodb = 'mongodb://localhost:27017/moment';

mongoose.Promise = global.Promise;

module.exports = () => {
  mongoose.createConnection(mongodb, (error) => {
    if (error) {
      throw error;
    }
  });
};
