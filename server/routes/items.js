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

router.get("/:id", async (req, res) => {
  try {
    console.log("Item.js get '/' can you speak to the DB?");
    const items = await Item.findById(request.params.Item);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

router.put("/:id", async (request, res) => {
  console.log("trying to patch");
  let itemToUpdate = request.body;
  try {
    let data = await Item.findByIdAndUpdate(request.params.id, itemToUpdate);
    console.log("Updated Item", data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (request, res) => {
  const id = request.params.id;
  await Item.findByIdAndDelete({ _id: id }, function (err) {
    if (!err) {
      console.log("item deleted");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
