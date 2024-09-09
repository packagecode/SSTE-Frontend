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
            <p className="text-justify mb-4">
              {aboutData.content?.length > 900
                ? aboutData.content.slice(0, 900) + "..."
                : aboutData.content}
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
