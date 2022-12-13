import React from "react";

type props = {
  title: string
}

const TextAreaComponent: React.FC<props> = ({title}) => {
  return (
    <textarea
      className="border-b border-black outline-0 placeholder:text-black"
      rows={5}
      placeholder={title}
    />
  )
}

export default TextAreaComponent