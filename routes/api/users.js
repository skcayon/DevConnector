const express = require("express");
const router = express.Router();

// @route   GET request to api/users/test
// @desc    Tests users route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
