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
    >
      <TitleBar
        title={pageName}
        controls
      />
      <div className="w-full px-20">
        <div className="mb-7">
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