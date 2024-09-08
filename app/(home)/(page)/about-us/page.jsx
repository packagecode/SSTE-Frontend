"use client";
import React from "react";
import PageLayout from "../../../component/PageLayout";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  const [aboutDatra, setAboutData] = useState([]);
  const [missionData, setMissionData] = useState([]);
  const [visionData, setVisionData] = useState([]);

  useEffect(() => {
    fetchAbout();
    fetchMission();
    fetchVision();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setAboutData(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  const fetchMission = async () => {
    try {
      const response = await fetch(`${API_URL}/api/mission/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setMissionData(data[0]);
    } catch (error) {
      console.error("Error fetching mission data:", error);
    }
  };

  const fetchVision = async () => {
    try {
      const response = await fetch(`${API_URL}/api/vision/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setVisionData(data[0]);
    } catch (error) {
      console.error("Error fetching vision data:", error);
    }
  };

  return (
    <PageLayout
      style={true}
      title="About Us"
      bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
    >
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-7 p-8 text-justify">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            <div className="flex items-center">
              <p>Know More About Us</p>
            </div>
          </h2>
          <p className="text-justify text-lg mb-6 text-gray-800">
            {/* image */}

            <div className="flex py-10 justify-center">
              <Image
                src={aboutDatra.image}
                alt="about us image"
                className="w-full object-cover h-96"
                width={96} height={96}
                layout="responsive"
              />
            </div>

            {aboutDatra.content}
          </p>
        </div>
        <div className="md:col-span-7 p-8 text-justify">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            <div className="flex items-center">
              <p>Vision</p>
            </div>
          </h2>
          <p className="text-justify text-lg mb-6 text-gray-800">
            {visionData.content}
          </p>
        </div>
        <div className="md:col-span-7 p-8 text-justify">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            <div className="flex items-center">
              <p>Mission</p>
            </div>
          </h2>

          {missionData.content && (
            <p
              className="text-justify text-lg mb-6 text-gray-800"
              dangerouslySetInnerHTML={{ __html: missionData.content }}
            ></p>
          )}
        </div>
      </div>
      <style jsx global>
        {`
          ul {
            list-style-type: disc;
            padding-left: 20px;
          }
          ul li {
            margin-bottom: 5px;
          }
          ol {
            list-style-type: decimal;
            padding-left: 20px;
          }
          ol li {
            margin-bottom: 5px;
          }
        `}
      </style>
    </PageLayout>
  );
};

export default Page;
