// Purpose: Handle all routes related to user
const express = require("express");
const router = express.Router();

const {
    handleGetAllUsers
} = require("../controllers/user");

router.get("/", handleGetAllUsers);

module.exports = router;