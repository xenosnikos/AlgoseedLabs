import React from "react";
import { Window, TitleBar } from "react-desktop/macOs";
import MobileIcon from "../../../assets/icons/services/mobile-icon.svg";
import IntegrationsIcon from "../../../assets/icons/services/integrations-icon.svg";
import AnalyticsIcon from "../../../assets/icons/services/analytics-icon.svg";
import SEOIcon from "../../../assets/icons/services/seo-icon.svg";

const services = [
  {name: "Web Applications", icon: MobileIcon},
  {name: "Mobile Applications", icon: MobileIcon},
  {name: "E-Commerce", icon: MobileIcon},
  {name: "UI / UX", icon: MobileIcon},
  {name: "Integrations", icon: IntegrationsIcon},
  {name: "Analytics", icon: AnalyticsIcon},
  {name: "SEO", icon: SEOIcon},
];

const DesktopServicesPage = () => {
  return (
    <Window
      chrome
      width={808}
      height={517}
      className="absolute"
    >
      <TitleBar
        title="Services"
        controls
      />
      <div className="w-full h-fit grid grid-cols-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={service.icon}
                alt={`${service.name} icon`}
              />
              {service.name}
            </div>
          )
        })}
      </div>
    </Window>
  )
}

export default DesktopServicesPage