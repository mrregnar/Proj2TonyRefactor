const mongoose = require("mongoose");
const mongoDB_URL = "mongodb://localhost/FoodSharer";

mongoose.connect(mongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", (_) => console.log("MongoDB is now connected:", mongoDB_URL));
db.on("error", (err) => console.error("MongoDB connection error!", err));
