import React from "react";

export const RidePopup = (props) => {
  return (
    <div className="bg-white rounded-t-3xl p-4 shadow-lg">
      {/* Drag Handle */}
      <div className="flex justify-center mb-3">
        <div
          onClick={() => {
            props.setRidepopup(false);
          }}
          className="w-12 h-1.5 bg-gray-300 rounded-full"
        ></div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-xl mb-5 text-center">New Ride Alert</h3>

      {/* User Info */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="https://i.pinimg.com/1200x/db/48/1c/db481c9fbe79c446f19332d40e3992e5.jpg"
            alt="user"
          />

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Rider
            </p>
            <p className="text-lg font-bold">Kaif</p>
            <p className="text-lg font-bold"> 2.2 Km</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Price
          </p>
          <p className="text-2xl font-bold">₹129.90</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="border-t pt-5 px-2 flex justify-between items-start gap-4">
        {/* Pickup */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 font-medium mb-2">Pick-up</p>
          <div className="flex gap-3">
            <i className="ri-map-pin-fill text-lg text-green-600"></i>
            <div>
              <p className="font-medium">562/11-A</p>
              <p className="text-gray-500 text-sm leading-tight">
                Kaikondrahalli, Bengaluru
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="mt-6 text-gray-400">
          <i className="ri-arrow-right-line text-xl"></i>
        </div>

        {/* Destination */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 font-medium mb-2">Destination</p>
          <div className="flex gap-3">
            <i className="ri-map-pin-fill text-lg text-red-600"></i>
            <div>
              <p className="font-medium">562/11-A</p>
              <p className="text-gray-500 text-sm leading-tight">
                Kaikondrahalli, Bengaluru
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6 px-2">
        <button
          onClick={() => {
            props.setRidepopup(false);
          }}
          className="flex-1 h-12 bg-gray-200 text-lg font-semibold rounded-lg"
        >
          Ignore
        </button>

        <button onClick={()=>{
            props.setConformridepopup(true);
        }} className="flex-1 h-12 bg-green-600 text-lg font-semibold text-white rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};
