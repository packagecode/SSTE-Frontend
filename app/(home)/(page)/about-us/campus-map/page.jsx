"use client";
import PageLayout from "@/app/component/PageLayout";
import LeafletMapComponent from "@/components/layouts/footer/LeafletMapComponent";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  const [campusMap, setCampusMap] = useState([]);

  // useEffect(() => {
  //   fetchMonogram();
  // }, []);

  const fetchMonogram = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/campus-map/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setCampusMap(data[0]);
    } catch (error) {
      console.error("Error fetching act data:", error);
    }
  };

  return (
    <PageLayout
      style={true}
      title="Campus Map"
      bg="https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      {/* <div className="flex items-center justify-center">
        <div className="">
          <Image src={campusMap.image} alt="Monogram" width={100} height={100 } layout="responsive"/>
        </div>
      </div> */}
      <LeafletMapComponent />
    </PageLayout>
  );
};

export default Page;
