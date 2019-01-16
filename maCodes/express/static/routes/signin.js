const express = require('express');
const router = express.Router();

router.get("/signin", (req, res) => {
   res.send("signin")
});

router.post("/signin", (req, res) => {
    res.send("signin post")
});

module.exports = router;
