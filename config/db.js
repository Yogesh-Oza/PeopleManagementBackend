const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // Mongo DB connection code
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Mongodb database");
    
  } catch (error) {
    console.log("Error connecting to MongoDb", error.message);
  }
};

module.exports = { connectDb };
