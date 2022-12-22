import React, {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import FolderShortcutComponent from "../../components/FolderShortcutComponent";
import FooterComponent from "../../components/FooterComponent";
import HomeIcon from "../../assets/icons/shortcuts/home-icon.svg";
import CaseStudiesIcon from "../../assets/icons/shortcuts/case-studies-icon.svg";
import AboutIcon from "../../assets/icons/shortcuts/about-icon.svg";
import ContactUsIcon from "../../assets/icons/shortcuts/contactUs-icon.svg";
import SupportIcon from "../../assets/icons/shortcuts/support-icon.svg";
import PortfolioIcon from "../../assets/icons/shortcuts/portfolio-icon.svg";
import BlogIcon from "../../assets/icons/shortcuts/blog-icon.svg";
import TrashIcon from "../../assets/icons/shortcuts/trash-icon.svg";
import ServicesIcon from "../../assets/icons/shortcuts/services-icon.svg";

const initShortcuts = [
  {title: "Home", icon: HomeIcon, link: "/full/home", x: -618, y: -407},
  {title: "Case Studies", icon: CaseStudiesIcon, link: "/full/caseStudies", x: -685, y: -164},
  {title: "About", icon: AboutIcon, link: "/full/about", x: -766, y: 335},
  {title: "Contact Us", icon: ContactUsIcon, link: "/full/contact", x: -837, y: 204},
  {title: "Support", icon: SupportIcon, link: "/full/support", x: -909, y: -290},
  {title: "Services", icon: ServicesIcon, link: "/desktop/services", x: -967, y: 73},
  {title: "Portfolio", icon: PortfolioIcon, link: "/full/portfolio", x: -1041, y: -44},
  {title: "Blog", icon: BlogIcon, x: 684, y: -406},
  {title: "Trash", icon: TrashIcon, x: 589, y: 362},
];

const DesktopContainer = () => {
  const navigate = useNavigate();
  const [shortcuts, setShortcuts] = useState(initShortcuts);

  const onStop = (index: number, data: any) => {
    const tempShortcuts = [...shortcuts];
    tempShortcuts[index].x = data.x;
    tempShortcuts[index].y = data.y;
    setShortcuts(tempShortcuts);
    localStorage.setItem("shortcuts", JSON.stringify(tempShortcuts));
  }

  useEffect(() => {
    const localShortcuts = localStorage.getItem("shortcuts");
    if (localShortcuts) {
      setShortcuts(JSON.parse(localShortcuts));
    } else {
      localStorage.setItem("shortcuts", JSON.stringify(initShortcuts));
    }
  }, [])

  return (
    <div className="min-h-screen bg-blue-1 relative flex justify-center items-center">
      {/*<img*/}
      {/*  className="absolute m-0 z-0"*/}
      {/*  src={LogoImg}*/}
      {/*  alt="logo"*/}
      {/*/>*/}
      <video className="fixed left-0 top-0 min-w-full min-h-full max-w-none" autoPlay muted loop id="myVideo">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      {shortcuts.map((shortcut, index) => {
        return (
          <div
            key={index}
            onClick={e => {
            if (e.detail === 2 && shortcut.link) {
              navigate(shortcut.link);
            }
          }}>
            <FolderShortcutComponent
              title={shortcut.title}
              icon={shortcut.icon}
              x={shortcut.x}
              y={shortcut.y}
              onStop={(data:any) => onStop(index, data)}
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