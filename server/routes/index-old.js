var express = require("express");
var router = express.Router();

console.log("Hitting the Index File");

/* GET home page. */
router.get("/", (request, response) => {
  response.send("Express is in the house Woot Woot");
});

module.exports = router;
