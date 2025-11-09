const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const { json } = require("express");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, licenseNumber, phoneNumber, vechile } =
    req.body;
  const isCaptainAlreadyexit = await captainModel.findOne({ email });
  if (isCaptainAlreadyexit) {
    return res.status(400).json({ Message: "Captain Already Registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    licenseNumber,
    phoneNumber,
    vechile,
  });
  const token = captain.generateAuthToken();
  return res.status(201).json({ captain, token });
};

module.exports.login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({ Message: "Invalid captain and password" });
  }

  const ismatch = await captain.comparePassword(password);

  if (!ismatch) {
    return res.status(401).json({ Message: "Invalid captain and password" });
  }

  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};
module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ Message: "Logout Successfully" });
};
