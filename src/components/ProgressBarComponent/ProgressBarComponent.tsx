import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const ProgressBarComponent = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    if (amount > 14 && intervalRef?.current) {
      clearInterval(intervalRef.current);
      navigate("/desktop");
    }
  }, [amount])

  useEffect(() => {
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      setAmount(amount => amount + 1);
    }, 500)

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [])

  return (
    <div className="flex gap-x-1 w-318-px h-33-px border-2 border-black p-1">
      {Array(amount).fill(1).map((value, index) => {
        return (
          <div className="w-1-15-% h-full bg-black" key={index}>

          </div>
        )
      })}
    </div>
  )
}

export default ProgressBarComponent