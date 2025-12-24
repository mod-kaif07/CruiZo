import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    licenseNumber: "",
    phoneNumber: "",
    vehicleColor: "",
    plateNumber: "",
    capacity: "",
    vehicleType: "car",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      email: formData.email,
      password: formData.password,
      licenseNumber: formData.licenseNumber,
      phoneNumber: formData.phoneNumber,
      vechile: {
        color: formData.vehicleColor,
        platenumber: formData.plateNumber,
        capacity: parseInt(formData.capacity),
        vechiletype: formData.vehicleType,
      },
    };

    console.log("Captain Registration Data:", captainData);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/registerCaptain`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("c-token", data.token);
      navigate("/captain-home");
    }

    // Reset form
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      licenseNumber: "",
      phoneNumber: "",
      vehicleColor: "",
      plateNumber: "",
      capacity: "",
      vehicleType: "car",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-20 h-30 lg:mx-70 flex items-center">
          <img
            className="w-24 md:w-32 mt-6 ml-4 rounded-full"
            src="https://i.pinimg.com/736x/de/e2/72/dee272b3aac93e50b2bb1274ebafe1d4.jpg"
            alt="logo"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
              Register as Captain
            </h1>
            <p className="text-sm text-gray-600">Create your captain account</p>
          </div>

          <div className="space-y-4">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Personal Information
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  minLength={3}
                  required
                />

                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  minLength={3}
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                minLength={5}
                required
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                minLength={6}
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  required
                />

                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  placeholder="License number"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="space-y-4 pt-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Vehicle Information
              </h2>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl appearance-none cursor-pointer"
                    required
                  >
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="auto">Auto</option>
                  </select>

                  <input
                    type="text"
                    name="vehicleColor"
                    value={formData.vehicleColor}
                    onChange={handleChange}
                    placeholder="Vehicle color"
                    className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                    minLength={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="plateNumber"
                    value={formData.plateNumber}
                    onChange={handleChange}
                    placeholder="Plate number"
                    className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                    required
                  />

                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Passenger capacity"
                    className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                    min="1"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              onClick={submitHandler}
              className="w-full bg-black text-white py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all active:scale-98 mt-6"
            >
              Create Captain Account
            </button>
          </div>

          <div>
            <p className="text-center text-sm text-gray-600">
              Already have an account? &nbsp;
              <Link
                to="/captain-login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="relative my-8 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center items-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="text-center pt-4 w-full">
            <Link
              className="bg-amber-700 rounded-xl flex items-center justify-center text-white w-full h-10 md:h-12 font-medium hover:bg-amber-800 transition-all"
              to="/user-signup"
            >
              Register as User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSign;
