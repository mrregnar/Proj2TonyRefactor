const express = require("express");
const router = express.Router();
const Item = require("../models/item");

console.log("Item.js has been called");

router.get("/", (request, response) => {
  console.log("can you speak to the DB?");
  Item.find().then((items) => response.json(items));
});

// router.post("/newitem", (request, response) => {
//   console.log("post new item");
//   const itemName = request.body.itemName;
//   const itemSize = request.body.itemSize;
//   const itemQuantity = request.body.itemQuantity;

//   const newItem = new Item({
//     itemName,
//     itemSize,
//     itemQuantity,
//   });

//   newItem.save();
// });

// router.delete("/delete/:id", (request, response) => {
//   const id = request.params.id;
//   Item.findByIdAndDelete({ _id: id }, function (err) {
//     if (!err) {
//       console.log("item deleted");
//     } else {
//       console.log(err);
//     }
//   });
// });

module.exports = router;
