const express = require("express");
const { update } = require("../controllers/userController");
const { deleteuser } = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.put("/users", update);
userRoutes.delete("/users", deleteuser);

module.exports = userRoutes;
