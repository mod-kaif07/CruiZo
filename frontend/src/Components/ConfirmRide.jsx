import React from "react";


const ConfirmRide = (props) => {
  return (
    <div className="h-140">
      <div
        className=" flex justify-center items-center text-3xl  ml-8 mr-8 rounded-3xl bg-gray-100 "
        onClick={() => {
          props.setConfirmRidepanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill pointer-events-auto  "></i>
      </div>
      <div className=" items-center justify-center flex">
        <h3 className=" font-bold text-2xl pb-3 "> Please Confirm Ride</h3>
      </div>

      <div className=" flex-col items-center  justify-center ">
        <div className=" mb-5  items-center justify-center flex">
          <img
            className="w-40 h-30"
           src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMWFkMjFiNy01OTVjLTQyZTgtYWM1My01Mzk2NmI0YTVmZWUucG5n"
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
        <div className=" mt-5  ml-5 mr-5 h-12 bg-green-600 text-2xl text-white rounded-lg  justify-center flex items-center"
        onClick={()=>{
            props.setVechileFound(true);
            props.setConfirmRidepanel(false);
        }}>
          <button className="font-lg" >Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRide;
