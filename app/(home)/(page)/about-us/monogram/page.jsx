"use client";
import PageLayout from "@/app/component/PageLayout";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  const [monogramData, setMonogramData] = useState([]);

  useEffect(() => {
    fetchMonogram();
  }, []);

  const fetchMonogram = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/monogram/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setMonogramData(data[0]);
    } catch (error) {
      console.error("Error fetching act data:", error);
    }
  };
  return (
    <PageLayout
      style={true}
      title="Monogram"
      bg="https://monogramcc.com/static/003b52d5e6ea723a44e38b1067bb4a99/d4645/home_hero_adca631210.jpg"
    >
      <div className="flex items-center justify-center">
        <div className="w-1/3">
          <Image src={monogramData.image || '/logo.png'} alt="Monogram" width={100} height={100} layout="responsive" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
