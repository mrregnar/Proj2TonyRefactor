const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.post("/", async (req, res) => {
  console.log("trying to post...");
  const item = new Item({
    itemName: req.body.itemName,
    itemSize: req.body.itemSize,
    itemQuantity: req.body.itemQuantity,
  });
  try {
    console.log("to try is not to do");
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
