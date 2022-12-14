import React from "react";
import cn from "classnames";
import { Button } from 'react-desktop/macOs';
import InputComponent from "../InputComponent";
import TextAreaComponent from "../TextAreaComponent";
import {windowSizeType} from "../../helpers/types";

type props = {
  image: string,
  windowSize: windowSizeType
}

const ContactUsComponent: React.FC<props> = ({ image, windowSize }) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-x-40 gap-y-10 py-24",
           windowSize.width > 970 ? "px-111-px" : "px-3"
    )}>
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <div className="font-['Courier'] text-base text-center mb-2">
          // Get in touch //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-6">
          Contact us
        </div>
        <div className="font-['Open_Sans'] text-sm mb-5">
          Algoseed Labs is a Montreal based boutique <b>web & mobile application development</b> company. Our company operates across a wide range of sectors from small businesses to enterprise firms. We provide world class solutions to all customers, every step of the way. From design to development, using trend and market analysis, as well as A/B testing to provide the most intuitive experience with the most robust security.
        </div>
        <div className="font-['Open_Sans'] text-sm mb-9">
          We are keen in keeping long term relationships with our clients by being fully accountable stakeholders.
        </div>
        <div className="w-full flex flex-col gap-y-7">
          <InputComponent
            type="text"
            title="Name"
          />
          <InputComponent
            type="email"
            title="Email Address"
          />
          <InputComponent
            type="phone"
            title="Contact Number"
          />
          <TextAreaComponent
            title="Message"
          />
          <Button
            className="w-fit mt-5"
            color="blue"
            size={16}
            padding="14px 36px"
          >
            Send Message
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="m-auto lg:m-0"
          src={image}
          alt="contact us"
        />
      </div>
    </div>
  )
}

export default ContactUsComponent