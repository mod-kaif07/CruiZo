const captainModel = require("../models/captain.model");
module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  licenseNumber,
  phoneNumber,
  vechile,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !licenseNumber ||
    !phoneNumber ||
    !vechile?.color ||
    !vechile?.platenumber ||
    !vechile?.capacity ||
    !vechile?.vechiletype
  ) {
    throw new Error("All fields are required");
  }
  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    licenseNumber,
    phoneNumber,
    vechile: {
      color: vechile.color,
      platenumber: vechile.platenumber,
      capacity: vechile.capacity,
      vechiletype: vechile.vechiletype,
    },
  });
  return captain;
};
