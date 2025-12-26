import React from "react";

const WaitingforDriver_panel = (props) => {
  return (
    <div className="bg-white rounded-t-3xl p-4">
      {/* Drag Handle */}
      <div
        className="flex justify-center mb-3"
        onClick={() => {
          props.setWatingForDriver(false);
        }}
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
      </div>

      <h3 className="font-bold text-xl mb-4">Ride Details</h3>

      {/* Driver Info */}
      <div className="flex items-center justify-between mb-4">
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

      {/* Message Box */}
      <div className="mb-4">
        <div className="flex items-center bg-gray-100 rounded-full px-8 py-3">
          <input
            type="text"
            placeholder="Send a message..."
            className="bg-transparent outline-none flex-1 text-gray-600"
          />
          <i className="ri-send-plane-fill text-gray-500 text-lg"></i>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between text-center ml-5 mr-5 mb-5">
        <Action icon="ri-shield-check-line" label="Safety" />
        <Action icon="ri-share-line" label="Share trip" />
        <Action icon="ri-phone-line" label="Call driver" />
      </div>

      {/* Address */}
      <div className="border-t pt-4 ml-5 mr-5">
        <div className="flex gap-3">
          <i className="ri-map-pin-fill text-lg"></i>
          <div>
            <p className="font-medium">562/11-A</p>
            <p className="text-gray-500 text-sm">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Action = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
      <i className={`${icon} text-xl text-blue-600`}></i>
    </div>
    <p className="text-sm">{label}</p>
  </div>
);

export default WaitingforDriver_panel;
