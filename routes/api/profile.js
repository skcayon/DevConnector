const express = require("express");
const router = express.Router();

// @route   GET request to api/profile/test
// @desc    Tests profile route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
