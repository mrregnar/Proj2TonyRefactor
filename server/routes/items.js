const express = require("express");
const router = express.Router();
const Item = require("../models/item");

console.log("Item.js has been called");

router.get("/", async (req, res) => {
  try {
    console.log("Item.js get '/' can you speak to the DB?");
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
