const express = require("express");
const router = express.Router();
const Item = require("../models/item");

console.log("deleteItem.js has been called");

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
