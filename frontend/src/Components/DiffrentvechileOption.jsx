import React from "react";

const DiffrentvechileOption = (props) => {
  return (
    <div>
      <div
        className=" flex justify-center items-center text-3xl  ml-8 mr-8 rounded-3xl bg-gray-100 "
        onClick={() => {
          props.setVechilepanal(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill pointer-events-auto  "></i>
      </div>
      <div>
        <h3 className=" font-bold text-2xl pb-3 ml-2">Choose a Vechile</h3>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidepanel(true);
          props.setVechilepanal(false);
        }}
        className="mb-2 w-full flex items-center justify-between gap-4 p-4 bg-white border rounded-xl shadow-xl 
             focus-within:border-black focus-within:ring-2 focus-within:ring-black/20
             outline-none cursor-pointer transition"
      >
        <img
          className="h-10 w-17 flex items-center "
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMWFkMjFiNy01OTVjLTQyZTgtYWM1My01Mzk2NmI0YTVmZWUucG5n"
          alt="car icon"
        />
        <div className="bg-white w-1/2">
          <h4 className=" text-medium font-extrabold">
            Curizo-Car &nbsp;
            <i className="ri-user-line">
              <span>3</span>
            </i>
          </h4>
          <h5 className=" text-sm font-bold"> 2 mins away </h5>
          <p className="  text-xsm">Addordable, compact rides</p>
        </div>
        <h2 className="font-bold flex text-xl">
          <i className="ri-money-rupee-circle-line"></i> 193.20
        </h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidepanel(true);
          props.setVechilepanal(false);
        }}
        className="mb-2 w-full flex items-center justify-between gap-4 p-4 bg-white border rounded-xl shadow-xl 
             focus-within:border-black focus-within:ring-2 focus-within:ring-black/20
             outline-none cursor-pointer transition"
      >
        <img
          className="h-10 w-17 flex items-center "
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt="car icon"
        />
        <div className="bg-white w-1/2">
          <h4 className=" text-medium font-extrabold">
            Curizo-Auto &nbsp;
            <i className="ri-user-line">
              <span>2</span>
            </i>
          </h4>
          <h5 className=" text-sm font-bold"> 6 mins away </h5>
          <p className="  text-xsm">Addordable, compact rides</p>
        </div>
        <h2 className="font-bold flex text-xl">
          <i className="ri-money-rupee-circle-line"></i> 113.20
        </h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidepanel(true);
          props.setVechilepanal(false);
        }}
        className="mb-2 w-full flex items-center justify-between gap-4 p-4 bg-white border rounded-xl shadow-xl 
             focus-within:border-black focus-within:ring-2 focus-within:ring-black/20
             outline-none cursor-pointer transition"
      >
        <img
          className="h-10 w-17 flex items-center "
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1152/height=768/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jMjM2MjE0MC05YmRjLTQzYWMtYjE0OS1kNzM2MTBmY2Q5YjIucG5n"
          alt="car icon"
        />
        <div className="bg-white w-1/2">
          <h4 className=" text-medium font-extrabold">
            Cruizo-bike &nbsp;
            <i className="ri-user-line">
              <span>1</span>
            </i>
          </h4>
          <h5 className=" text-sm font-bold"> 2 mins away </h5>
          <p className="  text-xsm">Addordable, compact rides</p>
        </div>
        <h2 className="font-bold flex text-xl">
          <i className="ri-money-rupee-circle-line"></i> 66.20
        </h2>
      </div>
    </div>
  );
};

export default DiffrentvechileOption;
