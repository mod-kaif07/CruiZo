import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../Components/CaptainDetails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RidePopup } from "../Components/RidePopup";
import ConfirmRidepage from "../Components/ConfirmRidepage";

const CaptainHome = () => {
  const [Ridepopup, setRidepopup] = useState(true);
  const RidepopupRef = useRef(null);
  const [Conformridepopup, setConformridepopup] = useState(false);

  const Conformridepopup_Ref = useRef(null);

  useGSAP(
    function () {
      if (Ridepopup) {
        gsap.to(RidepopupRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(RidepopupRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [Ridepopup]
  );

  useGSAP(
    function () {
      if (Conformridepopup) {
        gsap.to(Conformridepopup_Ref.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(Conformridepopup_Ref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [Conformridepopup]
  );
  return (
    <div className=" h-screen">
      <div className="relative h-1/2">
        {/* Home Icon (Left) */}
        <Link to="/captain-home">
          <div className="absolute top-5 left-5 z-10 flex items-center justify-center rounded-full h-10 w-10 bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
            <i className="text-2xl ri-home-8-fill"></i>
          </div>
        </Link>

        {/* Logout Icon (Right, on Map) */}
        <Link to="/captains/logoutCaptain">
          <div className="absolute top-5 right-5 z-10 flex items-center justify-center rounded-full h-10 w-10 bg-gray-200 hover:bg-gray-300 cursor-pointer transition">
            <i className="text-2xl ri-logout-circle-r-fill"></i>
          </div>
        </Link>

        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <CaptainDetails />
      </div>
      <div
        ref={RidepopupRef}
        className="fixed w-full z-10 bottom-0  translate-y-full   bg-white p-5"
      >
        <RidePopup
          setRidepopup={setRidepopup}
          setConformridepopup={setConformridepopup}
        />
      </div>

      <div
        ref={Conformridepopup_Ref}
        className="fixed w-full h-screen z-10 bottom-0  translate-y-full   bg-white p-5"
      >
        <ConfirmRidepage
          setRidepopup={setRidepopup}
          setConformridepopup={setConformridepopup}
        />
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

export default CaptainHome;
