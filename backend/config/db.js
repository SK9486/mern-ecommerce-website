const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

const dbURI = process.env.MONGO_URI;

console.log("Mongo URI:", dbURI); // Debugging line to check if URI is loaded correctly

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));
