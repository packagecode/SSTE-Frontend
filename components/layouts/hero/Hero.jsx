"use client";
import React, { useState, useEffect } from "react";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestNotice from "../notice/LatestNotice";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const [msgFromVc, setMsgFromVc] = useState([]);
  const [msgFromProVc, setMsgFromProVc] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchMsgFromVC();
    // fetchMsgFromProVC();
    fetchImages();
  }, []);

  const fetchMsgFromVC = async () => {
    try {
      const response = await fetch(`${API_URL}/api/message/vc/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setMsgFromVc(data[0]);
    } catch (error) {
      console.error("Error fetching message from VC:", error);
    }
  };

  const fetchMsgFromProVC = async () => {
    try {
      const response = await fetch(`${API_URL}/api/message/provc/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      let MsgFromProVc = data[0];
      MsgFromProVc.content = 'Welcome to Sunamgonj Science and Technology University Website.  This website of SSTU aims at providing the user with th...  This website of SSTU aims at providing the user with th... This website of SSTU aims at providing the user with th... Sunamgonj Science and Technology University (SSTU), Sunamganj is a renowned university with the mark of its magnificent progress. Various kinds of activities, academic and extra-curriculum, have brought this university to both national and international focus. Both teachers and students spontaneously participate in different programs to make the university a centre for excellence. Research activities have earned fame of the university at both home and aboard. We are contented and committed to take the university forward with the help of the teachers, students,officers and employees who have been toiling hard to retain peace and order in the campus. We strongly adhere to all forms of progressive ideas as we bear the spirit of freedom, conscience and liberal thought. The university established in 2020 currently has 4 departments and enhancement of research capabilities. This website of SSTU aims at providing the user with the latest information related to what we stand for, what we offer and how we operate our academic and research arena.';
      // setMsgFromProVc(data[0]);
      // console.log(MsgFromProVc);
      setMsgFromProVc(MsgFromProVc);
    } catch (error) {
      console.error("Error fetching message from Pro-VC:", error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}/api/home-slider`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      const images = data.map((slide) => slide.image);
      setImages(images);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  return (
    <div className="w-full md:flex md:p-6 md:space-x-6 mt-8 mx-auto clear-both justify-center">
      {/* Left Section */}
      {/* <div className="w-full md:w-2/4">
          <div className="bg-white shadow-lg rounded-lg">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src || ''}
                    alt={`Slide ${index}`}
                    className="w-full h-auto rounded"
                    width={100} height={100}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div> */}

      {/* Message From VC */}
      <div className="bg-white md:w-1/2 justify-center shadow-lg rounded-lg p-4 border border-gray-200 ">
        <div className="border-b-2 border-green-500 pb-2 mb-4">
          <h2 className="text-lg font-semibold text-green-500">
            Message From VC
          </h2>
        </div>
        <div className="">
          <Image
            src={
              msgFromVc.image
                ? msgFromVc.image
                : "https://sstu.ac.bd/wp-content/uploads/2024/01/1674212931820-240x300.jpg"
            }
            alt="VC"
            className="w-45 h-24 float-left px-4 hover:scale-110 transition-all duration-200"
            width={24}
            height={24}
            layout="responsive"
          />
          <p className="text-justify">
            {msgFromVc.content?.length > 1250
              ? msgFromVc.content.substring(0, 1250) + "..."
              : msgFromVc.content}
            {msgFromVc.content?.length > 1250 && (
              <a href="/message-from-vc" className="text-blue-500 ml-1">
                Read more
              </a>
            )}
          </p>
        </div>
      </div>

      {/* Message From Pro-VC */}
      {/* <div className="bg-white md:w-1/3 shadow-lg md:h-auto rounded-lg p-4 border border-gray-200 ">
        <div className="border-b-2 border-green-500 pb-2 mb-4">
          <h2 className="text-lg font-semibold text-green-500">
            Message From Pro VC
          </h2>
        </div>
        <div className="">
          <Image
            src={
              msgFromProVc.image
                ? msgFromProVc.image
                : "https://sstu.ac.bd/wp-content/uploads/2024/01/1674212931820-240x300.jpg"
            }
            alt="ProVC"
            className="w-45 h-24 float-left px-2 hover:scale-110 transition-all duration-200"
            width={24}
            height={24}
            layout="responsive"
          />
          <p className="text-justify">
            {msgFromProVc.content?.length > 1000
              ? msgFromProVc.content.substring(0, 1000) + "..."
              : msgFromProVc.content}
            {msgFromProVc.content?.length > 1200 && (
              <a href="/message-from-provc" className="text-blue-500 ml-1">
                Read more
              </a>
            )}
          </p>
        </div>
      </div> */}
      <LatestNotice />
      <style jsx global>
        {`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          
          @media (min-width: 770px) {
            .w-45 {
              width: 45% !important;
            }
        }
        `}
      </style>
    </div>
  );
}

export default Hero;
