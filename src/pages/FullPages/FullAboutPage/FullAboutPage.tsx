import React from "react";
import cn from "classnames";
import { Button } from "react-desktop/macOs";
import ContactUsComponent from "../../../components/ContactUsComponent";
import FullFooterComponent from "../../../components/FullFooterComponent";
import FooterComponent from "../../../components/FooterComponent";
import {values} from "../../../helpers/data";
import AboutIImg from "../../../assets/images/about/about-1.svg";
import MissionImg from "../../../assets/images/about/mission.svg";
import HistoryImg from "../../../assets/images/about/history.svg";
import CompanyImg from "../../../assets/images/about/company.svg";
import ClutchImg from "../../../assets/images/about/clutch.svg";
import ProcessImg from "../../../assets/images/about/process.svg";
import AvatarImg from "../../../assets/images/about/avatar.svg";
import ContactImg from "../../../assets/images/about/contact.jpg";

const data = [
  {
    title: "// Above & beyond //",
    subTitle: "Our mission",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 💡",
    image: MissionImg
  },
  {
    title: "// Home grown //",
    subTitle: "Our history",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 💡",
    image: HistoryImg
  },
  {
    title: "// Who we are //",
    subTitle: "A leading software company in Canada",
    content: "Algoseed Labs is a Montreal based boutique mobile apps and web development company. We operate across a wide range of sectors from small business to enterprise. We provide world class solutions to every customer, every step of the way, from design to development using trend and market analysis as well as a/b testing to provide the most intuitive experience with the most robust security. Top companies from throughout the world have chosen our team to provide them with development & design services.",
    image: CompanyImg
  },
];

const profiles = [
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
  {
    name: "Nick Xenos",
    title: "CEO & Lead Developer",
    avatar: AvatarImg
  },
];

const FullAboutPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-x-9 px-3 md:px-111-px">
        <div className="w-full lg:w-1/2">
          <div className="page-header mb-6">
            About <span className="text-blue-200">Algoseed Labs</span>
          </div>
          <div className="font-['Open_Sans'] text-2xl	font-bold mb-9">
            We’re building a future that we can all be proud of
          </div>
          <div className="font-['Open_Sans'] text-base mb-6">
            We offer services in key areas of enterprise mobile app development, enterprise content management solutions (CMS), customer relationship management (CRM), and software product engineering (SPE).
          </div>
          <div className="font-['Open_Sans'] text-base mb-6">
            We provide state-of-the-art DevOps services to optimize software processes for businesses. We follow a consultative-driven approach to providing end-to-end expertise in providing the best-customized software solutions and being one of the top software development companies in <b>Montreal, Canada.</b>
          </div>
          <div className="font-['Open_Sans'] text-base	">
            We are also a professional <b>Shopify Certified</b> partner to build highly recommendable E-Commerce Websites on Shopify Platform.
          </div>
        </div>
        <img
          className="w-full lg:w-1/2"
          src={AboutIImg}
          alt="about 1 img"
        />
      </div>
      <div className="flex flex-col gap-y-16 px-3 md:px-111-px mt-14">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={cn("flex flex-col lg:flex-row gap-x-20 gap-y-4", index === 1 && "lg:flex-row-reverse")}
            >
              <img
                className="w-full lg:w-1/2"
                src={item.image}
                alt={`${item.title} image`}
              />
              <div className="w-full lg:w-1/2">
                <div className="font-['Courier'] text-base mb-2.5">
                  {item.title}
                </div>
                <div className="font-['Open_Sans'] text-2xl font-bold mb-3.5">
                  {item.subTitle}
                </div>
                <div className="font-['Open_Sans'] text-sm">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="values-bg px-3 md:px-111-px py-60-px mt-28">
        <div className="font-['Courier'] text-base text-center text-white mb-2.5">
          // Why should you work with us //
        </div>
        <div className="font-['Open_Sans'] text-2xl text-center font-bold text-white mb-24">
          Our values
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-24	gap-y-16">
          {values.map((value, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-y-8 font-['Open_Sans'] text-xl	text-white  text-center max-w-347-px min-w-347-px h-349-px bg-blue-1 px-6 m-auto border border-white"
              >
                <img
                  src={value.icon}
                  alt={`values-${index} icon`}
                />
                <div dangerouslySetInnerHTML={{__html: value.content}}>

                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center pl-3 md:pl-111-px py-20">
        <div>
          <div className="font-['Courier'] text-base mb-2.5">
            // Clutch reviews //
          </div>
          <div className="font-['Open_Sans'] text-2xl font-bold mb-10">
            Individually, we are one drop. <br /> Together, we are an ocean.
          </div>
          <Button
            color="blue"
            padding="13px 39px"
            size={12}
          >
            See Reviews
          </Button>
        </div>
        <img
          src={ClutchImg}
          alt="clutch"
        />
      </div>
      <div className="process-bg px-3 md:px-111-px py-16">
        <div className="font-['Courier'] text-base text-center text-white mb-2.5">
          // How our system operates //
        </div>
        <div className="font-['Open_Sans'] text-2xl text-center font-bold text-white mb-5">
          Our process
        </div>
        <div className="font-['Open_Sans'] text-sm text-white text-center">
          Our process is the core part of our organization. Here’s a summary of how the average project’s process looks.
        </div>
        <img
          className="mb-24"
          src={ProcessImg}
          alt="process"
        />
        <div className="font-['Courier'] text-base text-center mb-2.5">
          // Who you’re working with //
        </div>
        <div className="font-['Open_Sans'] text-2xl text-center font-bold mb-10">
          Our Team
        </div>
        <div className="grid grid-cols-team-profiles gap-x-48 gap-y-8">
          {profiles.map((profile, index) => {
            return (
              <div
                className="flex flex-col items-center"
                key={index}
              >
                <div
                  className="w-32 h-32 rounded-full mb-2.5"
                  style={{backgroundImage: `url(${AvatarImg})`}}
                >
                </div>
                <div className="font-['Open_Sans'] text-base font-bold mb-2">
                  {profile.name}
                </div>
                <div className="font-['Open_Sans'] text-sm">
                  {profile.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ContactUsComponent
        image={ContactImg}
      />
      <FullFooterComponent />
    </div>
  )
}

export default FullAboutPage