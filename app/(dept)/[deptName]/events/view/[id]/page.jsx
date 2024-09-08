"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  console.log("==========================");
  const noticeid = useParams().id;
  const [noticeData, setnoticeData] = useState([]);
  console.log(noticeid);
  console.log("==========================");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events/${noticeid}`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setnoticeData(data);
      } catch (error) {
        console.error("Error fetching notice data:", error);
      }
    };
    fetchNotices();
  }, [noticeid]);

  const changeDateFormat = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  console.log(`${noticeData.pdf}&embedded=true`);

  return (
    <div className="container mx-auto min-h-screen mb-10">
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-2xl font-bold">{noticeData.title}</h3>
        <p className="text-gray-500 mt-2 text-sm">
          {changeDateFormat(noticeData.created_at)}
        </p>
        <p className="text-gray-500 mt-2 text-justify">{noticeData.content}</p>
        <div className="mt-10">
          <p className="font-bold mb-5">Attachment:</p>
          <Image
            className="w-full object-cover h-full"
            src={noticeData.image}
            alt="ui/ux review check"
            width={240} height={240}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
