import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Window, TitleBar} from "react-desktop/macOs";
import {getPageNameFromUrl} from "../../helpers/utils";
import LogoImg from "../../assets/images/logo.svg";

const FullWindowContainer = () => {
  const location = useLocation();
  const pageName = getPageNameFromUrl(location.pathname);

  return (
    <Window
      chrome
      padding="0 0"
      background="white"
    >
      <TitleBar
        title={pageName}
        controls
      />
      <div className="w-full py-11-px">
        <div className="px-3 md:px-111-px mb-7">
          <img
            src={LogoImg}
            alt="logo img"
            width={172}
          />
        </div>
        <Outlet />
      </div>
    </Window>
  )
}

export default FullWindowContainer