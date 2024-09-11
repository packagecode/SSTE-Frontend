"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";
import Image from "next/image";

const LatestResearch = ({ viewall }) => {
  const [researchData, setResearchData] = useState(null);

  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    try {
      const response = await fetch(`${API_URL}/api/research/latest/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setResearchData(data);
    } catch (error) {
      console.error("Error fetching research data:", error);
      // Optionally, set a fallback or error state here if needed
      setResearchData([]);
    }
  };

  return (
    <section className="mx-auto container mx-10">
      <div className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 md:max-w-fit items-center text-green-500">
        <p className="font-extralight text-2xl">LATEST </p>
        <p className="font-bold text-2xl"> RESEARCH </p>
        {viewall && (
          <div className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
            <Link href="/research-extension">View All</Link>
          </div>
        )}
      </div>
      {researchData === null ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {researchData.map((items) => (
            <article
              className=" bg-white shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={items.id}
            >
              <Link href={`/research-extension/view/${items.id}`}>
                <div className="relative">
                  <Image
                    src={items.thumbnail || ""}
                    loading="lazy"
                    alt={items.j_name}
                    className="w-full h-48 object-cover rounded-t-md"
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                  <div className="absolute top-5 left-5 bg-green-400 px-2 py-1 text-white font-semibold rounded-lg text-sm">
                    {items.year ? items.year : "Unknown"}
                  </div>
                </div>
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex flex-col gap-x-3">
                    <span className=" text-gray-900 mb-2">
                      {items.authors?.length > 50
                        ? items.authors.slice(0, 50) + "..."
                        : items.authors}
                    </span>
                    <hr />
                    <span className="text-gray-900 font-bold mt-2">
                      {items.j_name}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestResearch;
