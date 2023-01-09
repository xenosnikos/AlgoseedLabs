import React, {useEffect, useState} from "react";
import FolderShortcutComponent from "../../components/FolderShortcutComponent";
import FooterComponent from "../../components/FooterComponent";
import WindowComponent from "../../components/WindowComponent";
import FullHomePage from "../../pages/FullPages/FullHomePage";
import useWindowSize from "../../hooks/windowSize";
import HomeIcon from "../../assets/icons/shortcuts/home-icon.svg";
import CaseStudiesIcon from "../../assets/icons/shortcuts/case-studies-icon.svg";
import AboutIcon from "../../assets/icons/shortcuts/about-icon.svg";
import ContactUsIcon from "../../assets/icons/shortcuts/contactUs-icon.svg";
import SupportIcon from "../../assets/icons/shortcuts/support-icon.svg";
import ServicesIcon from "../../assets/icons/shortcuts/services-icon.svg";
import PortfolioIcon from "../../assets/icons/shortcuts/portfolio-icon.svg";
import BlogIcon from "../../assets/icons/shortcuts/blog-icon.svg";
import TrashIcon from "../../assets/icons/shortcuts/trash-icon.svg";
import FullCaseStudiesPage from "../../pages/FullPages/FullCaseStudiesPage";
import FullAboutPage from "../../pages/FullPages/FullAboutPage";
import FullContactUsPage from "../../pages/FullPages/FullContactUsPage";
import FullSupportPage from "../../pages/FullPages/FullSupportPage";
import FullServicesPage from "../../pages/FullPages/FullServicesPage";
import FullPortfolioPage from "../../pages/FullPages/FullPortfolioPage";

const initYPercent = 5;
const initXPadding = 20;
const initYPadding = 10;
const homeShortcutWidth = 60;
const homeShortcutHeight = 95;
const caseStudiesShortcutWidth = 82;
const caseStudiesShortcutHeight = 95;
const aboutShortcutWidth = 70;
const aboutShortcutHeight = 94;
const contactUsShortcutWidth = 77;
const contactUsShortcutHeight = 93;
const supportShortcutWidth = 57;
const supportShortcutHeight = 94;
const servicesShortcutWidth = 70;
const servicesShortcutHeight = 94;
const portfolioShortcutWidth = 82;
const portfolioShortcutHeight = 94;
const footerHeight = 40;

const shortcutPages = {
  home: <FullHomePage />,
  caseStudies: <FullCaseStudiesPage />,
  about: <FullAboutPage />,
  contactUs: <FullContactUsPage />,
  support: <FullSupportPage />,
  services: <FullServicesPage />,
  portfolio: <FullPortfolioPage />,
  blog: <div>This page is empty.</div>,
  trash: <div>This page is empty.</div>
}

type shortcutType = {
  key: keyof typeof shortcutPages,
  title: string,
  icon: string,
  width: number,
  height: number,
  xPercent: number,
  yPercent: number,
  xGap: number,
  yGap: number,
  isWindowOpen: boolean,
  windowZIndex: number
}

const initShortcuts: shortcutType[] = [
  {
    key: "home",
    title: "Home",
    icon: HomeIcon,
    width: homeShortcutWidth,
    height: homeShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: 0,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "caseStudies",
    title: "Case Studies",
    icon: CaseStudiesIcon,
    width: caseStudiesShortcutWidth,
    height: caseStudiesShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + 5,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "about",
    title: "About",
    icon: AboutIcon,
    width: aboutShortcutWidth,
    height: aboutShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + caseStudiesShortcutHeight + 5 * 2,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "contactUs",
    title: "Contact Us",
    icon: ContactUsIcon,
    width: contactUsShortcutWidth,
    height: contactUsShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + caseStudiesShortcutHeight + aboutShortcutHeight + 5 * 3,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "support",
    title: "Support",
    icon: SupportIcon,
    width: supportShortcutWidth,
    height: supportShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + caseStudiesShortcutHeight + aboutShortcutHeight + contactUsShortcutHeight + 5 * 4,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "services",
    title: "Services",
    icon: ServicesIcon,
    width: servicesShortcutWidth,
    height: servicesShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + caseStudiesShortcutHeight + aboutShortcutHeight + contactUsShortcutHeight + supportShortcutHeight + 5 * 5,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "portfolio",
    title: "Portfolio",
    icon: PortfolioIcon,
    width: portfolioShortcutWidth,
    height: portfolioShortcutHeight,
    xPercent: 0,
    yPercent: initYPercent,
    xGap: 0,
    yGap: homeShortcutHeight + caseStudiesShortcutHeight + aboutShortcutHeight + contactUsShortcutHeight + supportShortcutHeight + servicesShortcutHeight + 5 * 6,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "blog",
    title: "Blog",
    icon: BlogIcon,
    width: portfolioShortcutWidth,
    height: portfolioShortcutHeight,
    xPercent: 92,
    yPercent: initYPercent,
    xGap: 0,
    yGap: 0,
    isWindowOpen: false,
    windowZIndex: 30,
  },
  {
    key: "trash",
    title: "Trash",
    icon: TrashIcon,
    width: portfolioShortcutWidth,
    height: portfolioShortcutHeight,
    xPercent: 92,
    yPercent: 80,
    xGap: 0,
    yGap: 0,
    isWindowOpen: false,
    windowZIndex: 30,
  }
];

const WindowsContainer = () => {
  const [shortcuts, setShortcuts] = useState(initShortcuts);
  const [initialized, setInitialized] = useState(false);
  const [width, height] = useWindowSize();

  const onStop = (index: number, data: any) => {
    updatePositions(index, data);
  }

  const onClickShortcut = (index: number) => {
    const tempShortcuts = [...shortcuts];

    tempShortcuts.forEach((shortcut, shortcutIndex) => {
      if (shortcutIndex === index)
        tempShortcuts[shortcutIndex].windowZIndex = 40;
      else
        tempShortcuts[shortcutIndex].windowZIndex = 30;
    });
    tempShortcuts[index].isWindowOpen = true;

    setShortcuts(tempShortcuts);
  }

  const updatePositions = (index: number, data: any) => {
    const tempShortcuts = [...shortcuts];

    let updatedXPercent = (data.x - initXPadding) / width * 100;
    let updatedYPercent = (data.y - initYPadding) / height * 100;

    if (data.x < initXPadding)
      updatedXPercent = 0;
    if (data.y < initXPadding)
      updatedYPercent = initYPercent;

    if (data.x > width - initXPadding - tempShortcuts[index].width)
      updatedXPercent = (width - 2 * initXPadding - tempShortcuts[index].width) / width * 100;
    if (data.y > height - initXPadding - tempShortcuts[index].height - footerHeight)
      updatedYPercent = (height - 2 * initYPadding - tempShortcuts[index].height - footerHeight) / height * 100;

    tempShortcuts[index].xPercent = updatedXPercent;
    tempShortcuts[index].yPercent = updatedYPercent;
    tempShortcuts[index].xGap = 0;
    tempShortcuts[index].yGap = 0;

    setShortcuts(tempShortcuts);
    localStorage.setItem("shortcuts", JSON.stringify(tempShortcuts));
  }

  useEffect(() => {
    if (!initialized)
      return;

    shortcuts.forEach((shortcut, index) => {
      updatePositions(
        index,
        {
          x: shortcut.xPercent / 100 * width + initXPadding + shortcut.xGap || 0,
          y: shortcut.yPercent / 100 * height + initYPadding + shortcut.yGap || 0
        }
      );
    });
  }, [width, height])

  useEffect(() => {
    if (!initialized)
      setInitialized(true);
  }, [shortcuts])

  useEffect(() => {
    (async () => {
      let localShortcuts = localStorage.getItem("shortcuts");
      if (localShortcuts) {
        localShortcuts = JSON.parse(localShortcuts);
        if (localShortcuts && Array.isArray(localShortcuts)) {
          const newLocalShortcuts = await localShortcuts.map((shortcut, index) => {
            return {...shortcut, isWindowOpen: false};
          });
          setShortcuts(newLocalShortcuts);
        }
      } else {
        localStorage.setItem("shortcuts", JSON.stringify(initShortcuts));
      }
    })();
  }, [])

  return (
    <div className="w-screen h-screen bg-blue-1 relative">
      <video className="fixed left-0 top-0 min-w-full min-h-full max-w-none z-[1]" autoPlay muted loop id="myVideo">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      {shortcuts.map((shortcut, index) => {
        return (
          <div
            key={index}
            className="absolute z-20"
            onClick={(e) => {
              if (e.detail === 2)
                onClickShortcut(index);
            }}
          >
            <FolderShortcutComponent
              title={shortcut.title}
              icon={shortcut.icon}
              onStop={(data: any) => onStop(index, data)}
              x={shortcut.xPercent / 100 * width + initXPadding + shortcut.xGap || 0}
              y={shortcut.yPercent / 100 * height + initYPadding + shortcut.yGap || 0}
            />
          </div>
        )
      })}
      {shortcuts.map((shortcut, index) => {
        if (shortcut.isWindowOpen)
          return (
            <WindowComponent
              key={index}
              title={shortcut.title}
              width={width * 0.8}
              height={height * 0.7}
              zIndex={shortcut.windowZIndex}
              body={shortcutPages[`${shortcut.key}`]}
            />
          )
      })}
      <FooterComponent />
    </div>
  )
}

export default WindowsContainer