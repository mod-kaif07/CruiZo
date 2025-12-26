import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import DiffrentvechileOption from "../Components/DiffrentvechileOption";
import ConfirmRide from "../Components/ConfirmRide";
import LookingforDriver from "../Components/LookingforDriver";
import WaitingforDriver_panel from "../Components/WaitingforDriver_panel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destnation, setDestnation] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const panelref = useRef(null);
  const [vechilepanal, setVechilepanal] = useState(false);
  const Vechilepanaelref = useRef(null);
  const [confirmRidepanel, setConfirmRidepanel] = useState(false);
  const confirmRidpaneleRef = useRef(null);
  const [vechileFound, setVechileFound] = useState(false);
  const VechilefoundRef = useRef("");
  const [WatingForDriver, setWatingForDriver] = useState(false);
  const WatingForDriverRef = useRef();

  const submmithandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(panelref.current, {
      height: panelopen ? "70%" : "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [panelopen]);

  useGSAP(
    function () {
      if (vechilepanal) {
        gsap.to(Vechilepanaelref.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(Vechilepanaelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vechilepanal]
  );

  useGSAP(
    function () {
      if (confirmRidepanel) {
        gsap.to(confirmRidpaneleRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidpaneleRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidepanel]
  );

  useGSAP(
    function () {
      if (vechileFound) {
        gsap.to(VechilefoundRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(VechilefoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vechileFound]
  );

  useGSAP(
    function () {
      if (WatingForDriver) {
        gsap.to(WatingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(WatingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [WatingForDriver]
  );

  return (
    <div className="min-h-screen relative">
      {/* 🗺️ Map */}
      <div className="flex-1 w-full object-cover ">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-1 mb-2.5 w-full  ">
        {/* White panel */}
        <div className="h-[35%] p-5 bg-white">
          <div className="flex justify-between items-center">
            <h4 className="text-3xl font-semibold ml-3 mt-2">Find a Trip</h4>
            {!panelopen ? (
              <i
                className="ri-arrow-up-s-line text-2xl pr-8 cursor-pointer"
                onClick={() => setPanelopen(true)}
              ></i>
            ) : (
              <i
                className="ri-arrow-down-s-line text-2xl pr-8 cursor-pointer"
                onClick={() => setPanelopen(false)}
              ></i>
            )}
          </div>

          <form className="px-3" onSubmit={submmithandler}>
            <input
              onClick={() => setPanelopen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add Pick-up"
              className="w-full bg-[#eee] text-base rounded-xl px-4 pt-2 py-3 mt-2 focus:outline-none"
            />

            <input
              onClick={() => setPanelopen(true)}
              value={destnation}
              onChange={(e) => setDestnation(e.target.value)}
              type="text"
              placeholder="Add Destination"
              className="w-full bg-[#eee] text-base rounded-xl px-4 py-3 mt-4 mb-5 focus:outline-none"
            />
          </form>
        </div>

        {/* Red panel */}
        <div ref={panelref} className="bg-white h-0  overflow-hidden ">
          <div
            onClick={() => setPanelopen(false)}
            className="w-12 h-1 bg-black rounded-full mx-auto mb-4 cursor-pointer"
          ></div>
          <LocationSearchPanel
            vechilepanal={vechilepanal}
            setPanelopen={setPanelopen}
            setVechilepanal={setVechilepanal}
          />
          {/* optional drag handle */}
        </div>
      </div>
      <div
        ref={Vechilepanaelref}
        className="fixed w-full z-10 bottom-0   translate-y-full bg-white p-5"
      >
        <DiffrentvechileOption
          vechilepanal={vechilepanal}
          setConfirmRidepanel={setConfirmRidepanel}
          setVechilepanal={setVechilepanal}
        />
      </div>
      <div
        ref={confirmRidpaneleRef}
        className="fixed w-full z-10 bottom-0   translate-y-full bg-white p-5"
      >
        <ConfirmRide
          setConfirmRidepanel={setConfirmRidepanel}
          setVechileFound={setVechileFound}
        />
      </div>

      <div
        ref={VechilefoundRef}
        className="fixed w-full z-10 bottom-0   translate-y-full bg-white p-5"
      >
        <LookingforDriver setVechileFound={setVechileFound} />
      </div>

      <div
        ref={WatingForDriverRef}
        className="fixed w-full z-10 bottom-0   bg-white p-5"
      >
        <WaitingforDriver_panel setWatingForDriver={setWatingForDriver} />
      </div>
    </div>
  );
};

export default Home;
