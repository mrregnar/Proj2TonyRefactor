const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.post("/", (request, response) => {
  console.log("post new item");
  const itemName = request.body.itemName;
  const itemSize = request.body.itemSize;
  const itemQuantity = request.body.itemQuantity;

  const newItem = new Item({
    itemName,
    itemSize,
    itemQuantity,
  });

  newItem.save();
});

module.exports = router;
