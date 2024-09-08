"use client";
import { useState, useEffect } from "react";
import React from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";
import Image from "next/image";

const DeanMsg = ({ showfull }) => {
  const [DeanMsg, setDeanMsg] = useState("");

  useEffect(() => {
    fetchDeanMsg();
  }, []);

  const fetchDeanMsg = async () => {
    const res = await fetch(`${API_URL}/api/dept/cse/message/chairman/`);
    const data = await res.json();
    setDeanMsg(data[0]);
  };

  return (
    <div className="h-screen max-h-[700px] flex items-center bg-cover bg-center">
      <div className="container mx-auto lg:p-8 px-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[60%] w-full lg:px-6 lg:pr-14">
          <h1 className="text-3xl mb-1 uppercase">Message from</h1>
          <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
            the Dean
          </h1>
          <p className="font-poppins mb-6 text-justify">{DeanMsg.message}</p>
        </div>
        <div className="lg:w-[40%] w-full lg:block flex justify-center lg:justify-end">
          <Image
            loading="lazy"
            src={DeanMsg.image  || "/placeholder.png"}
            alt="Chairman"
            className="object-contain max-h-[500px]"
            width={240} height={240}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default DeanMsg;
