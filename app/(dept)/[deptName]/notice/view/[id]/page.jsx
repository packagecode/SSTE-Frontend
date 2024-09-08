"use client";
import PageLayout from "@/app/component/PageLayout";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { API_URL } from "@/app/apiurl";
import ShowPDF from "@/components/utils/ShowPDF";

const Page = () => {
  console.log("==========================");
  const noticeid = useParams().id;
  const [noticeData, setnoticeData] = useState([]);
  console.log(noticeid);
  console.log("==========================");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/notice/${noticeid}`);
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
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-2xl font-bold">{noticeData.title}</h3>
        <p className="text-gray-500 mt-2 text-sm">
          {changeDateFormat(noticeData.created_at)}
        </p>
        <p className="text-gray-500 mt-2">{noticeData.content}</p>

        {noticeData.pdf && <ShowPDF pdfUrl={noticeData.pdf} />}
      </div>
    </div>
  );
};

export default Page;
