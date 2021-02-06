const express = require("express");
const Items = require("../models/items-model");

const router = express.Router();

// Endpoint to read a list of all items
router.get("/", async (req, res, next) => {
  try {
    res.json(await Items.find());
  } catch (err) {
    next(err);
  }
});

// Endpoint to create and add a new item to the item list.
router.post("/list", async (req, res, next) => {
  try {
    const { location, name, description, price } = req.body;

    const newItem = await Items.add({
      location,
      name,
      description,
      price,
    });

    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
