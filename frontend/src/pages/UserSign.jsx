import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const { userdata, setuserdata } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      if (response.status == 201) {
        const data = response.data;
        localStorage.setItem("userToken", data.token);
        setuserdata(data.User);
        navigate("/home");
      }

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-20 h-30 pl-5.5 mt-3.5 lg:mx-70 flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
            <span className="font-extrabold text-gray-900">Crui</span>
            <span className="font-light text-indigo-600">Zo</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
              Create your account
            </h1>
            <p className="text-sm text-gray-600">Join us today</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  minLength={3}
                  required
                />

                <input
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                  minLength={3}
                />
              </div>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                minLength={5}
                required
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 text-sm bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all rounded-xl"
                minLength={6}
                required
              />
            </div>

            <button
              type="submit"
              onClick={submitHandler}
              className="w-full bg-black text-white py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all active:scale-98 mt-6"
            >
              Create Account
            </button>
          </div>

          <div>
            <p className="text-center text-sm text-gray-600">
              Already have an account? &nbsp;
              <Link
                to="/user-login"
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
              to="/captain-signup"
            >
              Register as Captain
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSign;
