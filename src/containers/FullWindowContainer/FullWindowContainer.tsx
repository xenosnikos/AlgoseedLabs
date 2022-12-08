import React from "react";
import {Outlet} from "react-router-dom";

const FullWindowContainer = () => {
  return (
    <div>
      Full Window Container
      <Outlet />
    </div>
  )
}

export default FullWindowContainer