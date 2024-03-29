import React, {useEffect, useState} from "react";
import cn from "classnames";
import { Button } from 'react-desktop/macOs';
import Slider from "react-slick";
import {
  services,
  languages,
  works,
  recognitions,
  accomplishments,
  testimonials
} from "../../../helpers/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUsComponent from "../../../components/ContactUsComponent";
import FullFooterComponent from "../../../components/FullFooterComponent";
import HomeLogoImg from "../../../assets/images/home/home-splash.svg";
import ContactUsImg from "../../../assets/images/home/contact-logo.svg";
import useScreenSize from "../../../hooks/screenSize";

const initRecognitionsSliderSetting = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
}

const initTestimonialsSliderSetting = {
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  dotsClass: "testimonial-slider-dot"
}

const FullHomePage = (props: any) => {
  const [recognitionsSliderSetting, setRecognitionsSliderSetting] = useState(initRecognitionsSliderSetting);
  const [testimonialsSliderSetting, setTestimonialsSliderSetting] = useState(initTestimonialsSliderSetting);
  const [width, height] = useScreenSize();

  useEffect(() => {
    if (width < 800) {
      setTestimonialsSliderSetting({...testimonialsSliderSetting, slidesToShow: 1});
    } else {
      setTestimonialsSliderSetting({...testimonialsSliderSetting, slidesToShow: 2});
    }
    if (width < 500) {
      setRecognitionsSliderSetting({...recognitionsSliderSetting, slidesToShow: 2});
    } else if (width < 360) {
      setRecognitionsSliderSetting({...recognitionsSliderSetting, slidesToShow: 1});
    } else {
      setRecognitionsSliderSetting({...recognitionsSliderSetting, slidesToShow: 4});
    }
  }, [width, height])

  return (
    <div className="w-full">
      <div className={cn(
        "flex gap-x-24 items-start mb-16",
            props.windowSize.width > 1000 ? "px-111-px" : "px-3",
            props.windowSize.width > 865 ? "flex-row" : "flex-col",
        )}
      >
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
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2">
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
      <div className="px-3 md:px-111-px mb-16">
        <p className="text-center text-base mb-2">
          // What we can do for you //
        </p>
        <h5 className="text-2xl	font-bold text-center mb-10">
          Services we can help you with
        </h5>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center md:justify-between">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "max-w-347-px min-h-349-px h-full flex flex-col justify-between bg-white p-8 border border-black m-auto",
                  index % 3 === 0 ? "xl:mr-auto" : index % 3 === 1 ? "m-auto" : "xl:ml-auto"
                )}
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
      <div className={cn(
        "home-languages-bg pt-20 pb-353-px",
             props.windowSize.width > 804 ? "px-111-px" : "px-3",
        )}>
        <div className="font-['Courier'] text-base text-white mb-2.5">
          // Tech stacks we deliver //
        </div>
        <div className="grid grid-cols-home-languages gap-x-16 gap-y-12">
          <div className="sm:col-span-2">
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
      <div className="px-3 md:px-111-px mt-241--px mb-16">
        <div className="font-['Courier'] text-base text-center mb-2">
          // Our projects //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-10">
          Some of our most finest work
        </div>
        <div className="grid grid-cols-home-works md:grid-cols-md-home-works gap-32">
          {works.map((work, index) => {
            return (
              <div
                key={index}
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
      <div className="px-3 md:px-111-px mb-28">
        <div className="font-['Courier'] text-base mb-2">
          // Awards & mentions //
        </div>
        <div className="font-['Open_Sans'] text-2xl font-bold mb-9">
          Recognitions
        </div>
        <div className="border px-3 md:px-20 py-11 border-black">
          <Slider {...recognitionsSliderSetting}>
            {recognitions.map((recognition, index) => {
              return (
                <div
                  key={index}
                  className="p-2"
                >
                  <img
                    src={recognition.image}
                    alt={`${index} recognition img`}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <div className={cn(
        "bg-blue-2 py-20",
             props.windowSize.width > 930 ? "px-111-px" : "px-3",
        )}>
        <div className={cn(
          "flex flex-wrap gap-x-2 mb-12",
              props.windowSize.width > 782 ? "justify-between" : "justify-center",
        )}>
          <div className="w-full max-w-347-px h-349-px flex flex-col justify-center items-center bg-white border border-black">
            <img
              className="mb-6"
              src={accomplishments[0].icon}
              alt={`${accomplishments[0].title} icon`}
            />
            <div className="font-['Open_Sans'] text-2xl font-bold mb-3.5">
              {accomplishments[0].amount}
            </div>
            <div className="font-['Open_Sans'] text-xl">
              {accomplishments[0].title}
            </div>
          </div>
          <div className="w-full max-w-347-px h-349-px flex flex-col justify-center items-center bg-white border border-black mt-10">
            <img
              className="mb-6"
              src={accomplishments[1].icon}
              alt={`${accomplishments[1].title} icon`}
            />
            <div className="font-['Open_Sans'] text-2xl font-bold mb-3.5">
              {accomplishments[1].amount}
            </div>
            <div className="font-['Open_Sans'] text-xl">
              {accomplishments[1].title}
            </div>
          </div>
          <div className="w-full max-w-347-px">
            <div className="font-['Courier'] text-base text-right mb-2">
              // Performance counters //
            </div>
            <div className="font-['Open_Sans'] text-2xl font-bold text-right mb-9">
              Accomplishments
            </div>
            <div className="h-349-px flex flex-col justify-center items-center bg-white border border-black">
              <img
                className="mb-6"
                src={accomplishments[2].icon}
                alt={`${accomplishments[2].title} icon`}
              />
              <div className="font-['Open_Sans'] text-2xl font-bold mb-3.5">
                {accomplishments[2].amount}
              </div>
              <div className="font-['Open_Sans'] text-xl">
                {accomplishments[2].title}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-['Courier'] text-base text-center mb-2">
            // What our clients have to say //
          </div>
          <div className="font-['Open_Sans'] text-2xl font-bold text-center mb-10">
            Testimonials
          </div>
          <div>
            <Slider {...testimonialsSliderSetting}>
              {testimonials.map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    className="px-2"
                  >
                    <div
                      className="testimonial-width bg-white px-7 py-6	border border-black"
                    >
                      <div className="flex flex-col md:flex-row gap-x-7 mb-8">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name} avatar`}
                          className="border border-black"
                        />
                        <div>
                          <div className="font-['Open_Sans'] text-2xl font-bold mb-2">
                            {testimonial.name}
                          </div>
                          <div className="font-['Open_Sans'] text-2xl mb-0.5">
                            {testimonial.title}
                          </div>
                          <div className="font-['Open_Sans'] text-xl font-light italic mb-1">
                            {testimonial.address1}
                          </div>
                          <div className="font-['Open_Sans'] text-xl font-light italic">
                            {testimonial.address2}
                          </div>
                        </div>
                      </div>
                      <div className="font-['Open_Sans'] text-sm">
                        {testimonial.description}
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      <ContactUsComponent
        image={ContactUsImg}
        windowSize={props.windowSize}
      />
      <FullFooterComponent
        windowSize={props.windowSize}
      />
    </div>
  )
}

export default FullHomePage