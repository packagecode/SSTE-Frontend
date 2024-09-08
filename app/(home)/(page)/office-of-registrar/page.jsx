"use client";
import React from "react";
import PageLayout from "../../../component/PageLayout";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const OfficeofRegister = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/statutory/reg/`);
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
        title="Office of the Registrar"
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
                  Welcome to the Office of the Registrar at Sunamgonj Science
                  and Technology University!
                </p>
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                  Meet {item.name}, our Registrar:
                </h2>
                <p className="mt-2 text-gray-700">
                  {item.name}, our dedicated Registrar, plays a crucial role in
                  ensuring the smooth operation of academic processes and
                  student services. With extensive knowledge of university
                  policies and a commitment to student success, {item.name} and
                  his team are here to support you throughout your academic
                  journey.
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  Contact Information:
                </h3>
                <p className="mt-2 text-gray-700">
                  If you have any questions or require assistance from the
                  Office of the Registrar, please don’t hesitate to reach out:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Email:{" "}
                    <a href={`mailto:${item.email}`} className="text-blue-500">
                      {/* registrar@sstu.ac.bd */}
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
                  <li>
                    Phone:{" "}
                    <a href={`tel:${item.phone}`} className="text-green-500">
                      {item.phone}
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

export default OfficeofRegister;
