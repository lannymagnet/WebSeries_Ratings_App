const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/review_app")
  .then(() => {
    console.log("Sucesfully connected to database.");
  })
  .catch((error) => {
    console.log("Error connecting to database.");
    console.log("Error:", error);
  });
