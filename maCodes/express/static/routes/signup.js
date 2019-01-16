const express = require('express');
const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("signiup")
});

router.post("/signup", (req, res) => {
    res.send("signup post")
});

module.exports = router;