import React from "react";
import driverSearching from "/images/driver_searching.gif";

const LookingforDriver = (props) => {
  return (
    <div className="h-140">
      <div
        className=" flex justify-center items-center text-3xl  ml-8 mr-8 rounded-3xl bg-gray-100 "
        onClick={() => {
          props.setVechileFound(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill pointer-events-auto  "></i>
      </div>
      <div className=" items-center justify-center flex">
        <h3 className=" font-bold text-2xl pb-3 "> Looking For Driver </h3>
      </div>

      <div className=" flex-col items-center  justify-center ">
        <div className=" mb-5  items-center justify-center flex">
          <img
            className="w-40 h-30"
            src={driverSearching}
            alt="car icon"
            
          />
        </div>

        <div className=" mb-5 flex-col  ">
          <div className="mb-5 p-2.5 border-b-2">
            <p className="font-medium text-lg">
              <i className="ri-map-pin-fill text-xl"> &nbsp;</i>sks pg
              jeegjeetpur
            </p>
            <span className="text-gray-700 ml-8"> Haridwar, uttrakhand </span>
          </div>

          <div className="mb-5 p-2.5 border-b-2">
            <p className="font-medium text-lg">
              <i className="ri-rectangle-fill"></i>&nbsp; Fet Campaus Bhadrabad
            </p>
            <span className="text-gray-700 ml-9">Haridwar , uttrakhand</span>
          </div>

          <div className="mb-5 p-2.5 border-b-2">
            <p className="font-medium text-lg">
              <i className="ri-bill-fill"></i> &nbsp; ₹ 194.39
            </p>

            <span className="text-gray-700 ml-9">Cash Cash </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingforDriver;
