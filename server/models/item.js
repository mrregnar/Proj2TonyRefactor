require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String,
    // required: true,
  },
  itemSize: {
    type: String,
    // required: true,
  },
  itemQuantity: {
    type: Number,
    // required: true,
  },
});

//const Item = mongoose.model('Item', itemSchema)

module.exports = mongoose.model("Item", itemSchema);
