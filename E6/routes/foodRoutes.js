const express = require("express");
const foodModel = require("../models/food");
const app = express();

// GET - đọc tất cả món ăn
app.get("/foods", async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.send(foods);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
module.exports = app;

app.post("/food", async (req, res) => {
    const food = new foodModel(req.body);
    try {
      await food.save();
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.patch("/food/:id", async (req, res) => {
    try {
      await foodModel.findByIdAndUpdate(req.params.id, req.body);
      res.send("Updated successfully");
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.delete("/food/:id", async (req, res) => {
    try {
      const food = await foodModel.findByIdAndDelete(req.params.id);
      if (!food) return res.status(404).send("No item found");
      res.send("Deleted successfully");
    } catch (error) {
      res.status(500).send(error);
    }
  });
  