const express = require("express");
const router = express.Router();
const User = require("../models/user");

console.log("User.js has been called");

router.get("/", async (req, res) => {
  try {
    console.log("Item.js get '/' can you speak to the DB?");
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  console.log("trying to post...");
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.itemPassword,
    phoneNumber: req.body.phoneNumber,
    communityName: req.body.communityName,
    contactMethod: req.body.contactMethod,
  });
  try {
    console.log("to try is not to do");
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (request, res) => {
  console.log("trying to patch");
  let userToUpdate = request.body;
  try {
    let data = await User.findByIdAndUpdate(request.params.id, userToUpdate);
    console.log("User Updated", data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (request, res) => {
  const id = request.params.id;
  await User.findByIdAndDelete({ _id: id }, function (err) {
    if (!err) {
      console.log("User deleted");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
