import React, {useEffect, useState} from "react";
import FolderShortcutComponent from "../../components/FolderShortcutComponent";
import FooterComponent from "../../components/FooterComponent";
import WindowComponent from "../../components/WindowComponent";
import FullHomePage from "../../pages/FullPages/FullHomePage";
import FullCaseStudiesPage from "../../pages/FullPages/FullCaseStudiesPage";
import FullAboutPage from "../../pages/FullPages/FullAboutPage";
import FullContactUsPage from "../../pages/FullPages/FullContactUsPage";
import FullSupportPage from "../../pages/FullPages/FullSupportPage";
import FullServicesPage from "../../pages/FullPages/FullServicesPage";
import FullPortfolioPage from "../../pages/FullPages/FullPortfolioPage";
import useScreenSize from "../../hooks/screenSize";
import HomeIcon from "../../assets/icons/shortcuts/home-icon.svg";
import CaseStudiesIcon from "../../assets/icons/shortcuts/case-studies-icon.svg";
import AboutIcon from "../../assets/icons/shortcuts/about-icon.svg";
import ContactUsIcon from "../../assets/icons/shortcuts/contactUs-icon.svg";
import SupportIcon from "../../assets/icons/shortcuts/support-icon.svg";
import ServicesIcon from "../../assets/icons/shortcuts/services-icon.svg";
import PortfolioIcon from "../../assets/icons/shortcuts/portfolio-icon.svg";
import BlogIcon from "../../assets/icons/shortcuts/blog-icon.svg";
import TrashIcon from "../../assets/icons/shortcuts/trash-icon.svg";

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

type shortcutPageType = {
  home: React.ReactNode,
  caseStudies: React.ReactNode,
  about: React.ReactNode,
  contactUs: React.ReactNode,
  support: React.ReactNode,
  services: React.ReactNode,
  portfolio: React.ReactNode,
  blog: React.ReactNode,
  trash: React.ReactNode,
}

const pages = [
  <FullHomePage />,
  <FullCaseStudiesPage />,
  <FullAboutPage />,
  <FullContactUsPage />,
  <FullSupportPage />,
  <FullServicesPage />,
  <FullPortfolioPage />,
  <div>This page is empty.</div>,
  <div>This page is empty.</div>
];

const initShortcutPages: shortcutPageType = {
  home: React.cloneElement(pages[0], {windowSize: {width: 100, height: 100}}),
  caseStudies: React.cloneElement(pages[1], {windowSize: {width: 100, height: 100}}),
  about: React.cloneElement(pages[2], {windowSize: {width: 100, height: 100}}),
  contactUs: React.cloneElement(pages[3], {windowSize: {width: 100, height: 100}}),
  support: React.cloneElement(pages[4], {windowSize: {width: 100, height: 100}}),
  services: React.cloneElement(pages[5], {windowSize: {width: 100, height: 100}}),
  portfolio: React.cloneElement(pages[6], {windowSize: {width: 100, height: 100}}),
  blog: React.cloneElement(pages[7], {windowSize: {width: 100, height: 100}}),
  trash: React.cloneElement(pages[8], {windowSize: {width: 100, height: 100}}),
}

type shortcutType = {
  key: keyof typeof initShortcutPages,
  title: string,
  icon: string,
  width: number,
  height: number,
  xPercent: number,
  yPercent: number,
  xGap: number,
  yGap: number,
  isWindowOpen: boolean,
  isFullWindow: boolean,
  windowZIndex: number,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
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
    isFullWindow: false,
    windowZIndex: 30,
  }
];

const WindowsContainer = () => {
  const [shortcuts, setShortcuts] = useState<shortcutType[]>(initShortcuts);
  const [shortcutPages, setShortcutPages] = useState(initShortcutPages);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [touchAmount, setTouchAmount] = useState<number>(0);
  const [touchedShortcutIndex, setTouchedShortcutIndex] = useState<number|null>(null);
  const [width, height] = useScreenSize();

  const onStop = (index: number, data: any) => {
    updatePositions(index, data);
  }

  const onDoubleClickShortcut = (index: number) => {
    openWindow(index);
  }

  const onDoubleTabShortcut = (index: number) => {
    openWindow(index);
  }

  const onClickWindow = (index: number) => {
    const tempShortcuts = [...shortcuts];
    if (index === null || !tempShortcuts[index])
    return;
    tempShortcuts[index].isWindowOpen = false;
    tempShortcuts[index].isFullWindow = false;
    setShortcuts(tempShortcuts);
  }

  const onMinimizeWindow = (index: number) => {
    const tempShortcuts = [...shortcuts];
    tempShortcuts[index].isWindowOpen = false;
    setShortcuts(tempShortcuts);
  }

  const onResizeWindow = (index: number) => {
    const tempShortcuts = [...shortcuts];
    if (index === null || !tempShortcuts[index])
    return;
    tempShortcuts[index].isFullWindow = !tempShortcuts[index].isFullWindow;
    setShortcuts(tempShortcuts);
  }

  const openWindow = (index: number) => {
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
  }

  const updateShortcutPages = () => {
    const tempShortcutPages = {...shortcutPages};

    Object.keys(tempShortcutPages).forEach((shortcutKey) => {
      const index = shortcuts.findIndex(shortcut => shortcut.key === shortcutKey);
      tempShortcutPages[shortcutKey as keyof typeof shortcutPages] = React.cloneElement(pages[index], {
        windowSize: {
          width: calculateWindowSize(index).width,
          height: calculateWindowSize(index).height
        }
      });
    });

    setShortcutPages(tempShortcutPages);
  }

  const calculateWindowSize = (index: number) => {
    return {
      width: shortcuts[index] && shortcuts[index].isFullWindow ? width : width > 450 ? width * 0.8 : width * 0.96,
      height: shortcuts[index] && shortcuts[index].isFullWindow ? height - footerHeight : height * 0.8 - footerHeight
    }
  }

  useEffect(() => {
    if (typeof touchedShortcutIndex !== "number")
      return;

    let clickTimer = null;

    if (touchAmount === 1) {
      clickTimer = setTimeout(() => {
        setTouchAmount(0);
      }, 400);
    }

    if (touchAmount === 2) {
      setTouchAmount(0);
      if (clickTimer)
        clearTimeout(clickTimer)
      onDoubleTabShortcut(touchedShortcutIndex);
    }
  }, [touchAmount, touchedShortcutIndex])

  useEffect(() => {
    updateShortcutPages();

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
    else {
      updateShortcutPages();
      localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
    }
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
            onDoubleClick={(e) => {
              onDoubleClickShortcut(index);
            }}
            onTouchEnd={(e) => {
              setTouchedShortcutIndex(index);
              setTouchAmount(touchAmount + 1);
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
        if (shortcut && shortcut.isWindowOpen)
          return (
            <WindowComponent
              key={index}
              title={shortcut.title}
              width={calculateWindowSize(index).width}
              height={calculateWindowSize(index).height}
              isFullWindow={shortcut.isFullWindow}
              zIndex={shortcut.windowZIndex}
              body={shortcutPages[`${shortcut.key}`]}
              onCloseClick={() => onClickWindow(index)}
              onMinimizeClick={() => onMinimizeWindow(index)}
              onResizeClick={() => onResizeWindow(index)}
            />
          )
      })}
      <FooterComponent />
    </div>
  )
}

export default WindowsContainer