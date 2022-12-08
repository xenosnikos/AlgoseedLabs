import React from "react";
import { useNavigate } from "react-router-dom";

const EnterIndexPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-black w-274-px h-74-px text-white text-2xl font-bold border-2 border-white-1"
        onClick={() => {
          navigate("/enter/loading1")
        }}
      >
        ENTER
      </button>
    </div>
  )
}

export default EnterIndexPage