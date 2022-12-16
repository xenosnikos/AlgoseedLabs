import React from "react";

type props = {
  type: string,
  title: string
  icon: string,
  value: string,
  description: string
}

const ContactCardComponent: React.FC<props> = ({
  type,
  title,
  icon,
  value,
  description
}) => {
  return (
    <div className="flex flex-col gap-y-7	px-8 py-11 border border-black">
      <div className="flex items-center gap-x-7 font-['Open_Sans'] text-2xl font-bold">
        <img
          src={icon}
          alt={`${type} icon`}
        />
        {title}
      </div>
      <div className="font-['Open_Sans'] text-sm">
        {description}
      </div>
      <a
        className="font-['Open_Sans'] text-2xl font-semibold text-blue-1 underline"
        href={`${type === "email" ? "mailto:" : "tel:"}${value}`}
      >
        {value}
      </a>
    </div>
  )
}

export default ContactCardComponent