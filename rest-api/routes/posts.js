const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("this is the POSTS route");
});

module.exports = router;
