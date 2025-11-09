const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post(
  "/registerCaptain",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("licenseNumber").notEmpty().withMessage("License number is required"),
    body("phoneNumber").notEmpty().withMessage("Phone number is required"),
    body("vechile.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters"),
    body("vechile.platenumber")
      .notEmpty()
      .withMessage("Plate number is required"),
    body("vechile.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vechile.vechiletype")
      .isIn(["bike", "car", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.register
);

router.post("/loginCaptain",[
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
], captainController.login);

router.get("/captainProfile",authCaptain, captainController.getCaptainProfile);
router.get("/logoutCaptain",authCaptain, captainController.logoutCaptain);
module.exports = router;
