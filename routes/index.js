const express = require("express");
const router = express.Router();
const path = require("path");

//Method - 'GET'
//Route - '/'
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../", "/views/index"));
});

module.exports = router;
