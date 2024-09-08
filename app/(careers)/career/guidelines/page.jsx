"use client";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";

const CareerGuidelines = () => {
  const [guidelines, setGuidelines] = useState([]);
  useEffect(() => {
    fetchGuidelines();
  }, []);

  const fetchGuidelines = async () => {
    const res = await fetch(`${API_URL}/api/career/guidelines/`);
    const data = await res.json();
    setGuidelines(data);
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Career Guidelines
      </h1>
      {guidelines.map((guideline,index) => (
        <p className="text-md mb-2 text-justify" key={index}>
          <b>{guideline.title}</b>
          <p>{guideline.content}</p>
        </p>
      ))}
    </div>
  );
};

export default CareerGuidelines;
