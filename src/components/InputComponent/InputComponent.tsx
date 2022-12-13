import React from "react";

type props = {
  type: string,
  title: string,
}

const InputComponent: React.FC<props> = ({
  type,
  title
}) => {
  return (
    <input
      className="w-full pb-3.5 border-b border-black outline-0 placeholder:text-black"
      type={type}
      title={title}
      placeholder={title}
    />
  )
}

export default InputComponent