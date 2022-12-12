import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import FolderShortcutComponent from "../../components/FolderShortcutComponent";
import FooterComponent from "../../components/FooterComponent";
import LogoImg from "../../assets/images/logo-1.svg";
import HomeIcon from "../../assets/icons/shortcuts/home-icon.svg";
import CaseStudiesIcon from "../../assets/icons/shortcuts/case-studies-icon.svg";
import AboutIcon from "../../assets/icons/shortcuts/about-icon.svg";
import ContactUsIcon from "../../assets/icons/shortcuts/contactUs-icon.svg";
import SupportIcon from "../../assets/icons/shortcuts/support-icon.svg";
import PortfolioIcon from "../../assets/icons/shortcuts/portfolio-icon.svg";
import BlogIcon from "../../assets/icons/shortcuts/blog-icon.svg";
import TrashIcon from "../../assets/icons/shortcuts/trash-icon.svg";
import ServicesIcon from "../../assets/icons/shortcuts/services-icon.svg";

const shortcuts = [
  {title: "Home", icon: HomeIcon, link: "/full/home"},
  {title: "Case Studies", icon: CaseStudiesIcon, link: "/full/caseStudies"},
  {title: "About", icon: AboutIcon, link: "/full/about"},
  {title: "Contact Us", icon: ContactUsIcon, link: "/full/contact"},
  {title: "Support", icon: SupportIcon, link: "/full/support"},
  {title: "Services", icon: ServicesIcon, link: "/desktop/services"},
  {title: "Portfolio", icon: PortfolioIcon, link: "/full/portfolio"},
  {title: "Blog", icon: BlogIcon},
  {title: "Trash", icon: TrashIcon},
];

const DesktopContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-1 relative flex justify-center items-center">
      <img
        className="absolute m-0 z-0"
        src={LogoImg}
        alt="logo"
      />
      {shortcuts.map((shortcut, index) => {
        return (
          <div key={index} onClick={e => {
            if (e.detail === 2 && shortcut.link) {
              navigate(shortcut.link);
            }
          }}>
            <FolderShortcutComponent
              title={shortcut.title}
              icon={shortcut.icon}
            />
          </div>
        )
      })}
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default DesktopContainer