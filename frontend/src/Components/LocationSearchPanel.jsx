import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {


  const locations = [
    {
      id: 1,
      icon: "ri-map-pin-fill",
      title: "Haridwar, Uttarakhand",
      subtitle: "SKPS PG, Jagjeetpur, 249404",
    },
    {
      id: 2,
      icon: "ri-map-pin-fill",
      title: "Dehradun, Uttarakhand",
      subtitle: "ISBT Road, Dehradun, 248001",
    },
    {
      id: 3,
      icon: "ri-map-pin-fill",
      title: "Rishikesh, Uttarakhand",
      subtitle: "Tapovan, Rishikesh, 249201",
    },
   
  ];

  return (
    <div className="w-full px-4 py-2">
      {locations.map(function (locations,idex) {
        return (
          <div key={idex} onClick={()=>{
            props.setVechilepanal(true)
            props.setPanelopen(false)
          }}
            className="flex items-center gap-4 mb-2 p-4 bg-white rounded-xl shadow-sm active:bg-gray-100 transition"
           
          >
            {/* Icon */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#eee] text-xl text-black">
              <i className="ri-map-pin-fill"></i>
            </div>

            {/* Address */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 leading-snug">
                {locations.subtitle}
              </p>
              <p className="text-xs text-gray-500">{locations.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
