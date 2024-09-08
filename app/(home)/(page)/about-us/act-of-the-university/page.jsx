"use client";
import PageLayout from "@/app/component/PageLayout";
import React from "react";
import { API_URL } from "@/app/apiurl";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [actData, setActData] = useState([]);

  useEffect(() => {
    fetchAct();
  }, []);

  const fetchAct = async () => {
    try {
      const response = await fetch(`${API_URL}/api/about/sstu-act/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setActData(data[0]);
    } catch (error) {
      console.error("Error fetching act data:", error);
    }
  };

  return (
    <PageLayout
      style={true}
      title="Act of the University"
      bg="https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <div>
        <Image src={actData.image} alt="Act of the University" className="w-full" width={100} height={100} layout="responsive"/>
      </div>
    </PageLayout>
  );
};

export default Page;
