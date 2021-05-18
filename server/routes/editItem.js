const express = require("express");
const router = express.Router();
const Item = require("../models/item");

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

module.exports = router;

// await Item.findByIdAndUpdate({ _id: id }, function (err) {
//   if (request.body.itemName != null) {
//     res.body.itemName = request.body.itemName;
//   }
//   if (request.body.itemSize != null) {
//     res.body.itemSize = request.body.itemSize;
//   }
//   if (request.body.itemQuantity != null) {
//     res.body.itemQuantity = request.body.itemQuantity;
//   }
//   if (!err) {
//     console.log("item updated");
//   } else {
//     console.log(err);
//   }
// });
