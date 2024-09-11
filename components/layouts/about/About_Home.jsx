"use client";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

export const About_Home = () => {
  const [aboutData, setAboutData] = useState([]);
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  useEffect(() => {
    fetchAbout();
    fetchImages();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setAboutData(data[0]);
    } catch (error) {
      console.error("Error fetching about data:", error);
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
    <div
      className="md:h-[600px] md:flex items-center bg-cover bg-center relative w-full clear-both"
      style={{
        backgroundImage: "url('/bgg2.png')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-cover bg-center absolute bottom-[-100px] right-16 h-72 w-72 bg-opacity-50 z-[] rotate-[30deg] opacity-55"
        style={{
          backgroundImage: "url('/sqbg2.png')",
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto">
        <div className="md:flex p-6 md:space-x-10 items-center bg-slate-200 bg-opacity-75 rounded-lg">
          {/* Text Section */}
          <div className="md:w-2/3 mb-10">
            <h2 className="text-2xl font-bold mb-2">ABOUT</h2>
            <h2 className="md:text-2xl text-white pb-4">
              <span className="bg-green-600 px-3">
                Sunamgonj Science and Technology University
              </span>
            </h2>
            {aboutData.content === undefined ? (
              <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[600px] mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px] mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-100 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              </div>
            ) : (
              <p className="text-justify mb-4">
                {aboutData.content?.length > 900
                  ? aboutData.content.slice(0, 900) + "..."
                  : aboutData.content}
              </p>
            )}
            <button className="bg-green-600 text-white py-2 px-4 rounded">
              <Link href="/about-us">READ MORE</Link>
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-2/5 md:space-y-4">
            {/* <Image
              src={
                aboutData.image
                  ? aboutData.image
                  : "https://via.placeholder.com/150"
              }
              alt="collage"
              className="rounded-lg"
              width={150}
              height={150}
              layout="responsive"
              // objectFit="contain"
            /> */}
            {images.length === 0 ? (
              <div role="status" className="animate-pulse md:items-center">
                <svg
                  className="w-full h-full text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            ) : (
              <div className="bg-white shadow-lg rounded-lg">
                <Slider {...settings}>
                  {images.map((src, index) => (
                    <div key={index} className="h-84">
                      <Image
                        src={src || ""}
                        alt={`Slide ${index}`}
                        className="w-full h-auto rounded hover:scale-110 transition-all duration-200"
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
