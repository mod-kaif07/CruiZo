import React from "react";
import driverSearching from "/images/driver_searching.gif";
import payment from "/images/payment.gif";
import { Link } from "react-router-dom";
const Riding = () => {
  return (
    <div className="h-screen">
      <div className=" h-1/2 ">
        <Link to="/user-home">
          <div className="absolute mt-5 ml-5 flex items-center justify-center rounded-full h-10 w-10 bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
            <i className="text-2xl ri-home-8-fill"></i>
          </div>
        </Link>

        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
      <div className="h-1/2">
        <div className="h-150">
          <div className=" flex justify-center items-center text-xl  ml-8 mr-8 rounded-3xl bg-gray-100 ">
            <i className="ri-arrow-down-wide-fill pointer-events-auto  "></i>
          </div>
          <div className="  ml-4 items-start justify-start flex">
            <h3 className=" font-bold text-xl pb-3 "> Make a Payment </h3>
          </div>

          <div className=" flex-col items-center  justify-center ">
            <div className=" mb-5  items-center justify-center flex">
              <img
                className="w-50 h-20"
                src={payment}
                alt="car icon"
                
              />
            </div>

            <div className="mb-5 px-2 space-y-4">
              {/* Pickup Location */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <i className="ri-map-pin-fill text-lg text-black mt-1"></i>
                  <div>
                    <p className="font-lg font-bold text-base text-black">
                      Fet Campus, Bhadrabad
                    </p>
                    <span className="text-sm text-gray-500">
                      Haridwar, Uttarakhand
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <i className="ri-bill-fill text-lg text-black mt-1"></i>
                  <div>
                    <p className="font-lg  text-base font-bold text-black">
                      ₹194.39
                    </p>
                    <span className="text-sm text-gray-500">Cash</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-600 h-10 flex items-center justify-center ml-4 mr-4 rounded-lg">
              <button className="text-xl text-bold text-white">Make Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
