import React from "react";
import { Button } from "react-desktop/macOs";
import InputComponent from "../../../components/InputComponent";
import TextAreaComponent from "../../../components/TextAreaComponent";
import ContactCardComponent from "../../../components/ContactCardComponent";
import FullFooterComponent from "../../../components/FullFooterComponent";
import FooterComponent from "../../../components/FooterComponent";
import EmailIcon from "../../../assets/icons/email.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import MapImg from "../../../assets/images/map.svg";

const contactMethods = [
  {
    type: "email",
    title: "Email us",
    icon: EmailIcon,
    value: "info@algoseedlabs.com",
    description: "Our support team will get back to you within 48 hours during standard business hours."
  },
  {
    type: "phone",
    title: "Phone us",
    icon: PhoneIcon,
    value: "+1 (514) 400-9624",
    description: "Our customer support line is open from Monday to Friday, during the hours of 10:00 AM to 6:00 PM (Eastern Time). "
  }
]
const FullContactUsPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-x-40 gap-y-10 px-3 md:px-111-px mb-16 lg:mb-40">
        <div className="w-full">
          <div className="page-header mb-12">
            <span className="text-blue-200">Contact</span> Us
          </div>
          <div className="font-['Courier'] text-base mb-2">
            // Get in touch //
          </div>
          <div className="font-['Open_Sans'] text-2xl font-bold mb-11">
            Contact us
          </div>
          <div className="flex flex-col gap-y-7">
            <InputComponent
              type="text"
              title="Name"
            />
            <InputComponent
              type="email"
              title="Email Address"
            />
            <InputComponent
              type="text"
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
        <div className="w-full flex flex-col gap-y-14">
          {contactMethods.map((item, index) => {
            return (
              <ContactCardComponent
                key={index}
                {...item}
              />
            )
          })}
        </div>
      </div>
      <div className="px-3 md:px-111-px">
        <div className="font-['Courier'] text-base text-center mb-2">
          // Algoseed HQ //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-11">
          Our Office
        </div>
        <img
          className="w-full mb-12"
          src={MapImg}
          alt="map img"
        />
        <div className="flex justify-center">
          <Button
            className="mb-20"
            color="blue"
            size={16}
            padding="14px 36px"
          >
            View in Google Maps
          </Button>
        </div>
      </div>
      <FullFooterComponent
        windowSize={{width: 20, height: 20}}
      />
      <FooterComponent />
    </div>
  )
}

export default FullContactUsPage