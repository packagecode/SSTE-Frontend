"use client";
import React from "react";
import PageLayout from "@/app/component/PageLayout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";

const Page = () => {
  const [msgFromProVc, setMsgFromProVc] = useState([]);
  const fetchMsgFromProVC = async () => {
    try {
      const response = await fetch(`${API_URL}/api/message/provc/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setMsgFromProVc(data[0]);
      // console.log(data[0]);
    } catch (error) {
      console.error("Error fetching message from Pro-VC:", error);
    }
  };

  useEffect(() => {
    fetchMsgFromProVC();
  }, []);

  return (
    <PageLayout
      title="Message from Pro Vice Chancellor"
      bg="/hero2.jpg"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto ">
        <div className="bg-white p-5 rounded-lg shadow-lg shadow-gray-500">
          <h1 className="text-2xl font-semibold text-gray-900 text-start mb-3 border-l-2 border-l-green-500 pl-5 ml-5">
            Message from Vice Chancellor
          </h1>
          <div className="grid grid-cols-12 justify-center  relative">
            <div className="px-8 mx-auto col-span-9">
              <p className="text-justify text-lg mb-6 text-gray-800">
                {msgFromProVc.content}
              </p>
            </div>
            <div className="flex justify-center items-start col-span-3 place-items-center">
              <div className="relative">
                <Image
                  className="w-50 h-50 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
                  src={msgFromProVc.image}
                  alt=""
                  width={50} height={50} layout="responsive"
                />
                <div className="absolute bottom-0 inset-x-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-md flex items-end">
                  <div className="p-4">
                    <p className="text-white text-lg">
                      {msgFromProVc.provc_name}
                      <br />
                      {msgFromProVc.affliation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
