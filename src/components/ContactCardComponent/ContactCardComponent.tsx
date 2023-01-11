import React from "react";
import cn from "classnames";
import {windowSizeType} from "../../helpers/types";

type props = {
  type: string,
  title: string
  icon: string,
  value: string,
  description: string,
  windowSize: windowSizeType
}

const ContactCardComponent: React.FC<props> = ({
  type,
  title,
  icon,
  value,
  description,
  windowSize
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-y-7	 py-11 border border-black",
           windowSize.width > 326 ? "px-8" : "px-1"
      )}>
      <div className={cn(
        "flex items-center gap-x-7 font-['Open_Sans'] text-2xl font-bold",
             windowSize.width > 362 ? "flex-row" : "flex-col"
        )}>
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
        className={cn(
          "font-['Open_Sans'] font-semibold text-blue-1 underline",
               windowSize.width > 400 ? "text-2xl" : "text-base"
        )}
        href={`${type === "email" ? "mailto:" : "tel:"}${value}`}
      >
        {value}
      </a>
    </div>
  )
}

export default ContactCardComponent