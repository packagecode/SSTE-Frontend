"use client";
import React from "react";
import { API_URL } from "@/app/apiurl";
import { useState, useEffect } from "react";
import Link from "next/link";

const ResourcePage = () => {
  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch(`${API_URL}/api/career/resources`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setResourceData(data);
      console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      console.log(data);
      console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
    } catch (error) {
      console.error("Error fetching resource data:", error);
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Resources
      </h1>
      {resourceData.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 px-10 py-8 my-2 flex items-center justify-between"
        >
          <div>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-justify">{item.content}</p>
          </div>
          <div>
            <Link href={`${item.pdf}`} className="text-green-500 font-bold">
              Download
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcePage;
