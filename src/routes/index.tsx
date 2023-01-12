import React from "react";
import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import EnterContainer from "../containers/EnterContainer";
import DesktopContainer from "../containers/DesktopContainer";
import WindowsContainer from "../containers/WindowsContainer";
import EnterIndexPage from "../pages/EnterPages/EnterIndexPage";
import EnterLoadingFirstPage from "../pages/EnterPages/EnterLoadingFirstPage";
import EnterLoadingSecondPage from "../pages/EnterPages/EnterLoadingSecondPage";
import DesktopIndexPage from "../pages/DesktopPages/DesktopIndexPage";
import DesktopServicesPage from "../pages/DesktopPages/DesktopServicesPage";
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
  }
]);

export default router