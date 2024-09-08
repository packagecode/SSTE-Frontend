"use client";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { useDept } from "../useDept";
import Image from "next/image";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [notice, setNotice] = useState([]);
  const { deptId } = useDept();

  useEffect(() => {
    fetchNews();
    fetchNotice();
  }, []);

  const fetchNews = async () => {
    const res = await fetch(`${API_URL}/api/news/`);
    const data = await res.json();
    // const filteredData = data.filter((item) => item.department === deptId);
    setNews(data);
  };

  const fetchNotice = async () => {
    const res = await fetch(`${API_URL}/api/notice/`);
    const data = await res.json();
    // const filteredData = data.filter((item) => item.department === deptId);
    setNotice(data);
  };

  function changeDateFormat(date) {
    const d = new Date(date);
    return d.toDateString();
  }

  const filteredNews = news.filter((item) => item.department === deptId);
  const filteredNotice = notice.filter((item) => item.department === deptId);

  return (
    <div className="container mx-auto px-4 py-8 mt-20 sm:mt-10">
      <div className="grid grid-cols-1 gap-10 sm:gap-5 sm:grid-cols-2 space-x-5">
        <div>
          <div className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 max-w-fit items-center text-green-500">
            <p className=" font-extralight text-2xl uppercase">Latest</p>{" "}
            <p className="font-bold text-2xl uppercase"> News</p>
            <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
              <Link href={`${deptId}/news/all/`}>View All</Link>
            </div>
          </div>

          {filteredNews.slice(0, 1).map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
                width={240} height={240}
                layout="responsive"
              />
              <div className="p-6">
                <h1 className="text-2xl font-bold mt-2">{item.title}</h1>
                <p className="text-md text-gray-600 mt-1">
                  {changeDateFormat(item.created_at)}
                </p>
                <p className=" text-gray-700 mt-2 text-justify">
                  {item.content.length > 500
                    ? item.content.slice(0, 500) + "..."
                    : item.content}
                </p>
                <button className="bg-green-500 text-white px-4 py-2 mt-4 hover:bg-green-700 transition-all duration-300">
                  <Link href={`${deptId}/news/view/${item.id}`}>
                    {" "}
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 max-w-fit items-center text-green-500">
            <p className=" font-extralight text-2xl uppercase">Latest</p>{" "}
            <p className="font-bold text-2xl uppercase"> Notice</p>
            <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
              <Link href={`/${deptId}/notice`}>View All</Link>
            </div>
          </div>

          <div className="p-4 bg-white shadow-sm border rounded-lg">
            {filteredNotice.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                className={`p-4 ${
                  idx < notice.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <p className="text-sm text-gray-600 mt-1">
                  {changeDateFormat(item.created_at)}
                </p>
                <h1 className="text-xl font-bold mt-1">{item.title}</h1>
                <Link href={`/${deptId}/notice/view/${item.id}`}>
                  <span className="text-green-500 flex items-center gap-x-1 hover:underline">
                    <FiExternalLink /> View
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
