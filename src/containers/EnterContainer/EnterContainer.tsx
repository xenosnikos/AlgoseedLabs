import React from "react";
import {Outlet} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";

const EnterContainer = () => {
  return (
    <div className="w-screen h-screen relative bg-blue-1">
      <div className="w-screen h-52-px absolute top-0 left-0 bg-black-1 z-10">

      </div>
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="w-full lg:w-2/5 h-full flex items-center relative desktop-left-bg px-12 py-20">
          <img
            src={LogoImg}
            alt="logo"
          />
          <div className="absolute bottom-20 left-12">
            <div>
              <i>Algoseed Labs Ltd. Website</i>
            </div>
            <div>
              <i>Headquartered in Montreal, Quebec, Canada</i>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 h-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div className="w-screen h-52-px absolute bottom-0 left-0 bg-black-1 z-10">

      </div>
    </div>
  )
}

export default EnterContainer