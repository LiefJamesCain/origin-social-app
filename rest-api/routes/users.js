const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("this is the USER route");
});

module.exports = router;
