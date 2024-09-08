"use client";
import PageLayout from "@/app/component/PageLayout";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  const [bulletinData, setBulletinData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchBulletin();
  }, []);

  const fetchBulletin = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/bulletin/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setBulletinData(data);
      if (data.length > 0) {
        setSelectedImage(data[0].image); // Set the first image as the default
      }
    } catch (error) {
      console.error("Error fetching bulletin data:", error);
    }
  };

  const ShowImage = ({ img }) => {
    return (
      <div>
        {img ? (
          <Image
            src={img}
            alt="bulletin"
            className="w-full h-screen object-cover"
            width={100} height={100}
            layout="responsive"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    );
  };

  return (
    <PageLayout
      style={true}
      title="Bulletin"
      bg="https://images.pexels.com/photos/19813735/pexels-photo-19813735/free-photo-of-scrabble-tiles-with-the-words-news-update.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="">
          <div className="flex flex-col gap-2">
            {bulletinData.map((data) => (
              <button
                key={data.id}
                className={`py-5 px-3 bg-gray-50 ${
                  selectedImage === data.image
                    ? "bg-blue-100"
                    : "hover:bg-gray-200"
                } active:bg-blue-200`}
                onClick={() => setSelectedImage(data.image)}
              >
                <h1>{data.title}</h1>
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-2">
            <ShowImage img={selectedImage} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
