import React from "react";
import LightIcon from "../../assets/icons/light.svg";
import BatteryIcon from "../../assets/icons/battery.svg";

const FooterComponent = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full h-39-px bg-black flex justify-between items-center px-3 md:px-12">
      <button className="bg-black text-sm text-white px-2.5 py-0.5 border-4 border-white">
        CONTACT
      </button>
      <div className="flex items-center gap-x-3">
        <img
          src={LightIcon}
          alt="light icon"
        />
        <img
          src={BatteryIcon}
          alt="battery icon"
        />
        <div className="text-sm	text-white">
          05:26 PM EDT
        </div>
      </div>
    </div>
  )
}

export default FooterComponent