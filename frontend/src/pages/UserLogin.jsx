import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userdta, setuserdta] = useState({});

  const navigate = useNavigate();

  const { userdata, setuserdata } = useContext(UserDataContext);

  const summitHnadler = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        loginData
      );

      if (response.status == 200) {
        const data = response.data;

        setuserdata(data.User);
        localStorage.setItem("userToken", data.token);
        navigate("/user-home");
      }
      setemail("");
      setpassword("");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
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
            <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
              What's your email?
            </h1>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 text-sm bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <button
              onClick={summitHnadler}
              className="w-full bg-black text-white py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all active:scale-98"
            >
              Continue
            </button>
          </div>

          <div>
            <p className="text-center text-sm text-gray-600">
              New here? &nbsp;
              <Link
                to="/user-signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Create an account
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

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          <div className="text-center pt-4 w-full">
            <Link
              className="bg-amber-700 rounded-xl flex items-center justify-center text-white w-full h-10 md:h-12 font-medium hover:bg-amber-800 transition-all"
              to="/captain-login"
            >
              Captain Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
