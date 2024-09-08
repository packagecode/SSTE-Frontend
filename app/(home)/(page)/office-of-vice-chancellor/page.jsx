"use client";
import React from "react";
import PageLayout from "../../../component/PageLayout";
import { API_URL } from "@/app/apiurl";
import { useState, useEffect } from "react";
import Image from "next/image";

const OfficeofVC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/statutory/vc/`);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <PageLayout
        title="Office of the Vice-Chancellor"
        bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
        style={true}
      >
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6  rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1 flex justify-center">
                <Image
                  className="w-48 h-48 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
                  src={item.image || ''}
                  alt="Prof. Dr. Md. Abu Naim Sheikh"
                  width={48} height={48} layout="responsive"
                />
              </div>
              <div className="md:col-span-2 text-gray-900">
                <p>
                  Welcome to the Office of the Vice-Chancellor at Sunamgonj
                  Science and Technology University.
                </p>
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                  Meet {item.name}, our Vice-Chancellor:
                </h2>
                <p className="mt-2 text-gray-700">
                  Prof. {item.name}, our esteemed Vice-Chancellor, is a
                  visionary leader dedicated to advancing education, research,
                  and innovation at Sunamgonj Science and Technology University.
                  With a wealth of experience in academia and a deep commitment
                  to the university’s mission, {item.name} leads the way in
                  shaping the future of our institution.
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  Contact Information:
                </h3>
                <p className="mt-2 text-gray-700">
                  If you wish to get in touch with Prof. Dr. Md. Abu Naim Sheikh
                  or the Office of the Vice-Chancellor, please use the following
                  contact details:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Email:{" "}
                    <a href={`mailto:${item.email}`} className="text-blue-500">
                      {item.email}
                    </a>
                  </li>
                  <li>
                    Alternative Email:{" "}
                    <a
                      href={`mailto:${item.alternate_email}`}
                      className="text-blue-500"
                    >
                      {item.alternate_email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </PageLayout>
    </div>
  );
};

export default OfficeofVC;
