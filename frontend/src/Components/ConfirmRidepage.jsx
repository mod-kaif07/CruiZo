import React from "react";

const ConfirmRidepage = (props) => {
  return (
    <div className="w-full h-full bg-white rounded-t-3xl p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold">User Details</h3>
        <i
          onClick={() => {
            props.setRidepopup(false);
            props.setConformridepopup(false);
          }}
          className="ri-arrow-down-wide-fill text-2xl cursor-pointer"
        ></i>
      </div>

      {/* Rider Info */}
      <div className="flex items-center justify-between mb-6">
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
          </div>
        </div>

        <p className="text-2xl font-bold text-gray-800">2.2 km</p>
      </div>

      {/* Trip Details */}
      <div className="space-y-5">

        {/* Pickup */}
        <div className="border-b pb-3">
          <p className="flex items-center font-medium text-lg">
            <i className="ri-map-pin-fill text-xl text-green-600 mr-2"></i>
            SKS PG Jeegjeetpur
          </p>
          <p className="text-sm text-gray-600 ml-7">
            Haridwar, Uttarakhand
          </p>
        </div>

        {/* Destination */}
        <div className="border-b pb-3">
          <p className="flex items-center font-medium text-lg">
            <i className="ri-flag-fill text-xl text-red-600 mr-2"></i>
            FET Campus Bhadrabad
          </p>
          <p className="text-sm text-gray-600 ml-7">
            Haridwar, Uttarakhand
          </p>
        </div>

        {/* Note */}
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">Note</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            incidunt iste labore accusantium nulla impedit.
          </p>
        </div>

        {/* Fare */}
        <div className="border-t pt-4">
          <p className="flex items-center font-bold text-xl">
            <i className="ri-bill-fill text-xl mr-2"></i>
            ₹194.39
          </p>
          <p className="text-sm text-gray-500 ml-7">Cash Payment</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-8">
        <button
          onClick={() => {
            props.setRidepopup(false);
            props.setConformridepopup(false);
          }}
          className="flex-1 h-12 bg-gray-200 text-lg font-semibold rounded-lg"
        >
          Ignore
        </button>

        <button
          onClick={() => {
            props.setConformridepopup(true);
          }}
          className="flex-1 h-12 bg-green-600 text-lg font-semibold text-white rounded-lg"
        >
          Confirm
        </button>
      </div>

    </div>
  );
};

export default ConfirmRidepage;
