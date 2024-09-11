"use client";
import React, { useState, useEffect } from "react";
import "animate.css";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";

function MainSilder() {
  const [noticeData, setNoticeData] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [simages, setSimages] = useState([]);

  useEffect(() => {
    fetchNotices();
    fetchSlides();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notice`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setNoticeData(data);
    } catch (error) {
      console.error("Error fetching notice data:", error);
    }
  };

  const fetchSlides = async () => {
    try {
      const response = await fetch(`${API_URL}/api/hero-slider`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setSlideData(data);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slideData.length]);

  return (
    <>
      <div className="relative w-full md:h-screen max-h-[800px] overflow-hidden flex flex-col items-center h-80">
        {slideData.length == 0 ? (
          <div role="status" className="animate-pulse ">
            <svg
              className="w-full h-screen text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          slideData.map((slide, index) => (
            // <a href={slide.button_link}>
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="flex flex-col items-center justify-start w-full h-full bg-gray-900 bg-opacity-70 py-12 px-10">
                  <div className="flex items-center h-full">
                    <div className="flex flex-col gap-y-2">
                      <div className="text-gray-300 h-48 animate__animated animate__fadeInRight">
                        <p className="md:text-4xl text-1xl mb-2 text-gray-300 font-bold">
                          {slide.title}
                        </p>
                        <p className="hidden md:block text-4xl mb-4 text-gray-300 font-bold">
                          {slide.subtitle}
                        </p>
                        <p className="hidden md:block text-gray-300 mb-4">
                          {slide.content}
                        </p>
                        <div className="py-4">
                          <Link
                            href={slide.button_link}
                            className="bg-green-500 text-white px-4 md:py-2 rounded-lg mt-4"
                          >
                            {slide.button_text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // </a>
          ))
        )}
        <div className="text-xl absolute md:bottom-20 w-full max-w-7xl">
          <div className="relative overflow-hidden whitespace-nowrap bg-black bg-opacity-50 py-2 w-full text-white md:rounded-xl">
            <div className="animate-marquee inline-block">
              {noticeData.slice(0, 5).map((notice, index) => (
                <span key={index} className="px-5">
                  <Link href={`/notice/view/${notice.id}`}>{notice.title}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(120%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
}

export default MainSilder;
