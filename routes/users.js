const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const User = require("../models/User");
const router = express.Router({ mergeParams: true });

const advancedResults = require("../middlewares/advancedResults");
// authentication middleware
const { protect, authorize } = require("../middlewares/auth");

// all of our routes now use these two middlewares
router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
