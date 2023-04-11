const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("트윗 유저 조회");
});

module.exports = router;
