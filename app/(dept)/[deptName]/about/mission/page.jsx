"use client";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import { useDept } from "../../useDept";

const Page = () => {
  const [mission, setMission] = useState("");

  const { api } = useDept();

  useEffect(() => {
    if (api) {
      const fetchMission = async () => {
        const res = await fetch(`${api}/mission/`);
        const data = await res.json();
        setMission(data[0]);
        // console.log(data[0]);
      };

      fetchMission();
    }
  }, [api]);


  return (
    <div className="container mt-10 mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Mission
      </h1>
      {
        mission && (
          <p
            className="font-poppins mb-6 text-justify"
            dangerouslySetInnerHTML={{ __html: mission.content }}
          ></p>
        )
      }
      <style jsx global>
        {`
          ul {
            list-style-type: disc;
            padding-left: 20px;
          }
          ul li {
            margin-bottom: 5px;
          }
          ol {
            list-style-type: decimal;
            padding-left: 20px;
          }
          ol li {
            margin-bottom: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Page;
