import React from "react";
import {Outlet} from "react-router-dom";

const EnterContainer = () => {
  return (
    <div>
      Enter Container
      <Outlet />
    </div>
  )
}

export default EnterContainer