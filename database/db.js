const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    const conn = await mongoose.connect('mongodb+srv://restaurant-user:testing123@restaurant-mern.ccooznt.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        //useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;