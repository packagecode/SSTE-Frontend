"use client";
import { useState, useEffect } from "react";
import React from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";
import { useDept } from "../useDept";
import Image from "next/image";

const ChairmanMsg = ({ showfull, path }) => {
  const [chairmanMsg, setChairmanMsg] = useState("");
  const { api , deptId} = useDept();

  useEffect(() => {
    if (api) {
      const fetchChairmanMsg = async () => {
        const res = await fetch(`${api}/message/chairman/`);
        const data = await res.json();
        setChairmanMsg(data[0]);
        // console.log(data[0]);
      };
      fetchChairmanMsg();
    }
  }, [api]);

  return (
    <div
      className="h-screen sm:max-h-[700px] flex items-center bg-cover bg-center mt-24 md:mt-0"
      style={{
        backgroundImage: "url('dept/msgbg2.png')",
      }}
    >
      <div className="container mx-auto lg:p-8 px-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[60%] w-full lg:px-6 lg:pr-14">
          <h1 className="text-3xl mb-1 uppercase">Message from</h1>
          <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
            the Chairman
          </h1>
          {chairmanMsg && (
            <p className="font-poppins mb-6 text-justify">
              {showfull
                ? chairmanMsg.message
                : chairmanMsg.message?.length > 800
                ? chairmanMsg.message.slice(0, 800) + "..."
                : chairmanMsg.message?.length < 800
                ? chairmanMsg.message
                : "Loading..."}
            </p>
          )}
          {!showfull && (
            <Link href={`/${deptId}/about/message/chairman`}>
              <div className="bg-gradient-to-tr from-green-500 to-green-900 text-white py-3 px-4 rounded-md mt-2 inline-block cursor-pointer hover:bg-gradient-to-t hover:from-green-700 hover:to-green-900 transition-all duration-500">
                Read More
              </div>
            </Link>
          )}
        </div>
        <div className="lg:w-[40%] w-full lg:block flex justify-center lg:justify-end">
          {chairmanMsg && (
            <Image
              src={chairmanMsg.image || "/placeholder.png"}
              alt="Chairman"
              className="object-contain max-h-[500px]"
              width={240}
              height={240}
              loading="lazy"
              layout="responsive"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChairmanMsg;
