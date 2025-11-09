import React, { useState } from "react";

const Captainlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captaindata, setcaptaindata] = useState({});
  
  const summitHnadler = (e) => {
    e.preventDefault();

    setcaptaindata({
      email: email,
      password: password,
    });
    console.log(captaindata);
    setemail("");
    setpassword("");
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
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
              Captain!! Enter Details to Login
            </h3>
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
              <a
                href="/captain-signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Register as Captain
              </a>
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
            <a
              className="bg-amber-700 rounded-xl flex items-center justify-center text-white w-full h-10 md:h-12 font-medium hover:bg-amber-800 transition-all"
              href="/user-login"
            >
              User Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Captainlogin;