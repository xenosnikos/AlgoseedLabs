import React from "react";
import cn from "classnames";
import { Button } from 'react-desktop/macOs';
import {services, languages, works} from "../../../helpers/data";
import HomeLogoImg from "../../../assets/images/home/home-splash.svg";

const FullHomePage = () => {
  return (
    <div className="w-full">
      <div className="flex gap-x-24 items-start px-111-px mb-16">
        <img
          src={HomeLogoImg}
          alt="home logo"
        />
        <div>
          <p className="page-header mb-8">
            Ready to <span className="text-blue-500	">upgrade</span> your company's digital <br /> <span className="text-blue-200">business presence?</span>
          </p>
          <p className="text-2xl font-bold mb-5">
            We build stunning websites & applications for all industries.
          </p>
          <p className="text-xl mb-9">
            We <b>dream, design, code & develop.</b> We are a team of professionals who are committed to provide end to end innovative solutions and deliver unparalleled results.
          </p>
          <div className="flex gap-x-6">
            <Button
              color="blue"
              padding="14px 36px"
              size="16"
            >
              Contact Us
            </Button>
            <Button
              color="white"
              padding="14px 36px"
              size="16"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
      <div className="px-111-px mb-16">
        <p className="text-center text-base mb-2">
          // What we can do for you //
        </p>
        <h5 className="text-2xl	font-bold text-center mb-10">
          Services we can help you with
        </h5>
        <div className="grid grid-cols-3 gap-14 justify-between">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={cn("w-347-px h-349-px flex flex-col justify-between bg-white p-8 border border-black", index % 3 === 0 ? "mr-auto" : index % 3 === 1 ? "m-auto" : "ml-auto")}
              >
                <div className="flex flex-col items-center">
                  <img
                    className="mb-4"
                    src={service.icon}
                    alt={`${service.title} icon`}
                    height={70}
                  />
                  <div className="text-2xl text-center mb-3.5">
                    {service.title}
                  </div>
                  <div className="text-center">
                    {service.description}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    color="blue"
                    padding="13px 40px"
                  >
                    See More
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="home-languages-bg px-111-px pt-20 pb-353-px">
        <div className="font-['Courier'] text-base text-white mb-2.5">
          // Tech stacks we deliver //
        </div>
        <div className="grid grid-cols-home-languages gap-x-16 gap-y-12">
          <div className="col-span-2">
            <div className="font-['Open_Sans'] text-2xl font-bold text-white mb-4">
              Technology languages we’re skilled at
            </div>
            <div className="font-['Open_Sans'] text-[13px]	text-white">
              Our dedicated team of designers, analysts, developers and testers use the latest tools and technologies to stay up to date with the market. We are continuously learning and contributing to pushing the limit of what is possible. Our squad always provides relevant documentation and ongoing support to keep our clients in the loop and satisfied, no matter what stage of the development process a project is in. We seek to understand our clients ideas and deliver on quality results to propel those ideas in the right direction. Our software development solutions are secure, stablel & strapped with the latest  advanced technologies to help gain an edge over the competition.
            </div>
          </div>
          {languages.map((language, index) => {
            return (
              <div
                key={index}
                className={cn("h-52 flex flex-col items-center justify-center gap-y-3.5 border border-white", index % 2 === 0 ? "bg-blue-1 text-white" : "bg-blue-2 text-blue-1")}
              >
                <img
                  src={language.icon}
                  alt={`${language.title} icon`}
                />
                <p>{language.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="px-111-px mt-241--px">
        <div className="font-['Courier'] text-base text-center mb-2">
          // Our projects //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-10">
          Some of our most finest work
        </div>
        <div className="grid grid-cols-home-works gap-32">
          {works.map((work, index) => {
            return (
              <div
                className={cn("flex items-end justify-center bg-center bg-cover bg-no-repeat p-11", index === 0 ? "row-span-2" : "h-96")}
                style={{backgroundImage: `url(${work.image})`}}
              >
                <Button
                  color="blue"
                  padding="13px 40px"
                  size="12"
                >
                  See More
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FullHomePage