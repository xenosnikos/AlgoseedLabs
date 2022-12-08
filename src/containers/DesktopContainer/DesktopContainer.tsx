import React from "react";
import {Outlet} from "react-router-dom";

const DesktopContainer = () => {
  return (
    <div>
      Desktop Container
      <Outlet />
    </div>
  )
}

export default DesktopContainer