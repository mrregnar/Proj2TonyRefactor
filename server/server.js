const express = require("express");
app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const PORT = 3001;

app.use(express.json());

const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

//const indexRouter = require("./routes/index");
//app.use("/", indexRouter);

const deleteItemRouter = require("./routes/deleteItem");
app.use("/delete", deleteItemRouter);

const newItemRouter = require("./routes/newItem");
app.use("/newitem", newItemRouter);

app.listen(PORT, function () {
  console.log(`Express is running and listening on port: ${PORT}`);
});

// const mongoose = require('mongoose')

// const mongoDBURL = 'mongodb://localhost/FoodSharer'

// app.use(bodyParser.json()); // replace with app.use(express.json) //https://dev.to/taylorbeeston/you-probably-don-t-need-body-parser-in-your-express-apps-3nio
// app.use(cors());

// mongoose.connect(mongoDBURL,  { useNewUrlParser: true, useUnifiedTopology: true  })

// const itemSchema = {
//     itemName: String,
//     itemSize: String,
//     itemQuantity: Number
// }

// const Item = require("./models/item");
// app.use("/items", Item);

//app.get("/", (request, response) => {
//   response.send("Express is in the house Woot Woot");
// });

// app.get("/items", (request, response) => {
//   //   console.log("can you speak to the DB?");
//   Item.find().then((items) => response.json(items));
// });

// app.post("/newitem", (request, response) => {
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

// app.delete("/delete/:id", (request, response) => {
//   const id = request.params.id;
//   Item.findByIdAndDelete({ _id: id }, function (err) {
//     if (!err) {
//       console.log("item deleted");
//     } else {
//       console.log(err);
//     }
//   });
// });
