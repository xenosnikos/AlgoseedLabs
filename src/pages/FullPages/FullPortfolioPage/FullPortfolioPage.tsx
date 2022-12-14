import React from "react";
import cn from "classnames";
import FullFooterComponent from "../../../components/FullFooterComponent";
import Work2Img from "../../../assets/images/home/work-2.svg";
import Work3Img from "../../../assets/images/home/work-3.svg";
import Work4Img from "../../../assets/images/home/work-4.svg";
import Work5Img from "../../../assets/images/home/work-5.svg";

const works = [
  {image: Work3Img},
  {image: Work2Img},
  {image: Work3Img},
  {image: Work5Img},
  {image: Work4Img},
  {image: Work5Img},
  {image: Work3Img},
  {image: Work2Img},
  {image: Work3Img},
]

const FullPortfolioPage = (props: any) => {
  return (
    <div>
      <div className={cn(props.windowSize.width > 1200 ? "px-111-px" : "px-3")}>
        <div className="page-header text-blue-200 text-center mb-12">
          Portfolio
        </div>
        <div className="font-['Courier'] text-base text-center mb-2">
          // Our projects //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-11">
          Some of our finest works
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-16">
          {works.map((work, index) => {
            return (
              <img
                className="m-auto"
                key={index}
                src={work.image}
                alt="work"
              />
            )
          })}
        </div>
      </div>
      <FullFooterComponent
        windowSize={{width: 20, height: 20}}
      />
    </div>
  )
}

export default FullPortfolioPage