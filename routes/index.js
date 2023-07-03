var express = require("express");

const {
  validationRules,
  UsersController,
} = require("../controllers/UserController");
const UserModel = require("../models/user");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", layout: "layout" });
});

router.get("/users", UsersController.getAllUsers);

router.get("/adduser", (req, res) => {
  res.render("addUser");
});

router.get("/adduser/:id", UsersController.getUser);

router.post("/adduser", validationRules, UsersController.addUser);

router.post("/adduser/:id", UsersController.updateUser);

router.delete("/deleteuser/:id", UsersController.deleteUser);

module.exports = router;
