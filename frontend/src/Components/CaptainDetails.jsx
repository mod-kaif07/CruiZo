import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="bg-white rounded-t-3xl h-1/2 bottom-0 rounded-4xl  p-4">
        <div className="flex justify-between  mr-1 ">
          <h3 className="font-bold tracking-[2px]  text-xl mb-4">
            Captain Details
          </h3>
          <div className="flex flex-col items-center">
            <h4 className="flex items-baseline gap-1 font-bold text-2xl text-red-600">
              <span className="text-lg">₹</span>
              295.29
            </h4>
            <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-500">
              Today’s Earnings
            </p>
          </div>
        </div>

        {/* Driver Info */}
        <div className="flex items-center justify-between ml-5 mb-4">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="driver"
            />

            <div>
              <div className="text-sm text-gray-500 tracking-wide">Vikash</div>
              <div className="text-xl font-bold tracking-wider uppercase">
                BRO1B2494
              </div>
              <div className="text-sm text-gray-500">Maruti Suzuki</div>
            </div>
          </div>

          <img
            className="w-40"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=400/height=250/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMWFkMjFiNy01OTVjLTQyZTgtYWM1My01Mzk2NmI0YTVmZWUucG5n"
            alt="car"
          />
        </div>
        <div className="flex rounded-3xl shadow-lg mt-5 shadow-black justify-between items-center h-45 bg-white">
          <div className="bg-gray-200 pt-2 pb-2 rounded-2xl  shadow-black w-35 h-30  text-center ml-4">
            <div>
              <i className="ri-time-line text-3xl text-gray-700"></i>
            </div>
            <p className=" text-xl font-bold">10.2</p>
            <span className=" text-xs text-gray-700">HOURS ONLINE</span>
          </div>
          <div className="bg-gray-200 pt-2 pb-2 rounded-2xl  shadow-black w-36 h-30 text-center ml-4">
            <div>
              <i className="ri-speed-up-line text-3xl text-gray-700"></i>
            </div>
            <p className=" text-xl font-bold">52.8</p>
            <span className=" text-xs text-gray-700">TOTAL DISTANCE</span>
          </div>
          <div className="bg-gray-200 pt-2 pb-2 rounded-2xl  shadow-black w-35 h-30 text-center ml-4 mr-4">
            <div>
              <i className="ri-sticky-note-2-line text-3xl text-gray-700"></i>
            </div>
            <p className=" text-xl font-bold">10.2</p>
            <span className=" text-xs text-gray-700">HOURS ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
