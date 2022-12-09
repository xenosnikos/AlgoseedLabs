import React from "react";
import ProgressBarComponent from "../../../components/ProgressBarComponent";

const EnterLoadingSecondPage = () => {
  return (
    <div className="flex flex-col gap-y-8	items-center">
      <div className="text-xl font-bold">
        Signing in as Guest
      </div>
      <div className="text-sm">
        Loading...
      </div>
      <ProgressBarComponent />
    </div>
  )
}

export default EnterLoadingSecondPage