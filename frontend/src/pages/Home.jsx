import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[url('https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy81NGY2MDE2MS1jZjZiLTQ0MDEtYTMwOS04YmIxOTZjMDAxNGMuanBn')] bg-cover bg-center flex flex-col justify-between">
      
      {/* Logo Section */}
      <div className="p-4 sm:p-6 md:p-8">
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 transition-all duration-300"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt="Uber Logo"
        />
      </div>

      {/* Bottom Card Section */}
      <div className="bg-white rounded-t-3xl shadow-2xl w-full">
        <div className="px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 max-w-md mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Get Started With Uber
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Your ride is just a tap away
            </p>
          </div>

          <Link
            to="/user-login"
            className="bg-black hover:bg-gray-900 active:bg-gray-800 rounded-xl flex items-center justify-center text-white w-full h-14 sm:h-16 md:h-18 font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Continue
          </Link>

          {/* Optional: Add terms text */}
          <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
            By continuing, you agree to Uber's Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;