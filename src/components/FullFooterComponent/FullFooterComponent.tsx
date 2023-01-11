import React from "react";
import {Link, useLocation} from "react-router-dom";
import cn from "classnames";
import { TextInput, Button } from "react-desktop/macOs";
import LogoImg from "../../assets/images/logo.svg";
import {socials} from "../../helpers/data";
import {windowSizeType} from "../../helpers/types";

const menus = [
  {title: "HOME", link: "/full/home"},
  {title: "SERVICES", link: "/desktop/services"},
  {title: "CASE STUDIES", link: "/full/caseStudies"},
  {title: "SUPPORT", link: "/full/support"},
  {title: "ABOUT", link: "/full/about"},
  {title: "TEAM", link: "/full/contact"}
];

type props = {
  windowSize: windowSizeType
}

const FullFooterComponent: React.FC<props> = ({ windowSize }) => {
  const location = useLocation();

  return (
    <div className={cn(
      "flex flex-col lg:flex-row justify-between gap-y-5 bg-blue-2 py-14 mb-7",
          windowSize.width > 1000 ? "px-111-px" : "px-3"
    )}>
      <div className="flex flex-col">
        <img
          className="mb-7	"
          src={LogoImg}
          width={172}
          alt="logo"
        />
        <div className="font-['Open_Sans'] text-xs">
          For all business inquiries, please contact
        </div>
        <div className="font-['Open_Sans'] text-xs font-bold mb-5">
          info@algoseedlabs.com
        </div>
        <div className="relative">
          <TextInput
            className="footer-email-input"
            width={258}
            size={10}
            rounded={10}
            focusRing
            defaultValue=""
            placeholder="Email"
          />
          <Button
            className="absolute left-40 top-3 z-30"
            color="blue"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 justify-between items-start lg:items-end h-auto">
        <div className="flex flex-wrap gap-y-3 gap-x-12">
          {menus.map((menu, index) => {
            return (
              <Link
                key={index}
                to={menu.link}
                className={cn("text-sm", location.pathname === menu.link && "font-bold")}
              >
                {menu.title}
              </Link>
            )
          })}
        </div>
        <div className="flex gap-x-3.5">
          {socials.map((social, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center w-9 h-9 bg-blue-1 rounded-full shadow-lg shadow-black"
              >
                <img
                  src={social.icon}
                  alt={`${social.title} icon`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FullFooterComponent