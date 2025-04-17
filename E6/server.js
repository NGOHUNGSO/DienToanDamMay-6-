const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/foodE6", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});

const path = require("path");

// Cho phép truy cập file tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, "public")));