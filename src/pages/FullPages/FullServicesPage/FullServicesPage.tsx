import React from "react";
import cn from "classnames";
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

const FullServicesPage = (props: any) => {
  return (
    <div className={cn("w-full h-fit grid  gap-y-20",
      props.windowSize.width > 720 ? "grid-cols-4" : props.windowSize.width > 500 ? "grid-cols-3" : props.windowSize.width > 360 ? "grid-cols-2" : "grid-cols-1"
    )}>
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
  )
}

export default FullServicesPage