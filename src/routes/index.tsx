import React from "react";
import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import EnterContainer from "../containers/EnterContainer";
import DesktopContainer from "../containers/DesktopContainer";
import WindowsContainer from "../containers/WindowsContainer";
import FullWindowContainer from "../containers/FullWindowContainer";
import EnterIndexPage from "../pages/EnterPages/EnterIndexPage";
import EnterLoadingFirstPage from "../pages/EnterPages/EnterLoadingFirstPage";
import EnterLoadingSecondPage from "../pages/EnterPages/EnterLoadingSecondPage";
import DesktopIndexPage from "../pages/DesktopPages/DesktopIndexPage";
import DesktopServicesPage from "../pages/DesktopPages/DesktopServicesPage";
import FullHomePage from "../pages/FullPages/FullHomePage";
import FullServicesPage from "../pages/FullPages/FullServicesPage";
import FullAboutPage from "../pages/FullPages/FullAboutPage";
import FullContactUsPage from "../pages/FullPages/FullContactUsPage";
import FullPortfolioPage from "../pages/FullPages/FullPortfolioPage";
import FullCaseStudiesPage from "../pages/FullPages/FullCaseStudiesPage";
import FullSupportPage from "../pages/FullPages/FullSupportPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to="/enter" replace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/enter",
    element: <EnterContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <EnterIndexPage />
      },
      {
        path: "/enter/loading1",
        element: <EnterLoadingFirstPage />
      },
      {
        path: "/enter/loading2",
        element: <EnterLoadingSecondPage />
      }
    ]
  },
  {
    path: "/desktop",
    element: <DesktopContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DesktopIndexPage />
      },
      {
        path: "/desktop/services",
        element: <DesktopServicesPage />
      }
    ]
  },
  {
    path: "/windows",
    element: <WindowsContainer />
  },
  {
    path: "/full",
    element: <FullWindowContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/full/home" replace />
      },
      {
        path: "/full/home",
        element: <FullHomePage />
      },
      {
        path: "/full/services",
        element: <FullServicesPage />
      },
      {
        path: "/full/about",
        element: <FullAboutPage />
      },
      {
        path: "/full/contact",
        element: <FullContactUsPage />
      },
      {
        path: "/full/portfolio",
        element: <FullPortfolioPage />
      },
      {
        path: "/full/caseStudies",
        element: <FullCaseStudiesPage />
      },
      {
        path: "/full/support",
        element: <FullSupportPage />
      }
    ]
  }
]);

export default router