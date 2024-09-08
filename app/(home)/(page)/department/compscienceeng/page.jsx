"use client";
import React from "react";
import PageLayout from "../../../../component/PageLayout";
import { CardFooter, Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deptData, setDeptData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/faccse/msgfromdean/`);
      const deptResponse = await fetch(`${API_URL}/api/faccse/department/`);
      const result = await response.json();
      const deptResult = await deptResponse.json();
      setData(result);
      console.log(result);
      setDeptData(deptResult);
      console.log(deptResult);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout
      style={true}
      title="Faculty of Engineering and Technology"
      bg="/csebg.jpg"
    >
      {data.map((item, index) => (
        <div key={index} className="grid md:grid-cols-6">
          <div className="md:col-span-4 p-8 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              <div className="flex items-center">
                <p> Message from Dean</p>
              </div>
            </h2>
            <p className="text-lg mb-6 text-gray-800">
              {/* Welcoming the{" "}
              <strong className="font-semibold text-gray-850 dark:text-white">
                Faculty of Engineering and Technology
              </strong>{" "}
              to Sunamgonj Science and Technology University marks an exciting
              chapter of growth and innovation. This esteemed faculty brings a
              wealth of knowledge and expertise in cutting-edge technologies,
              driving forward the frontiers of computing and engineering. As we
              embark on this journey together, we celebrate the diverse talents
              and passions that each faculty member contributes to our academic
              community. Our commitment to fostering an inclusive and dynamic
              environment ensures that both students and staff are empowered to
              excel and innovate. Together, we will explore the transformative
              potential of computer science and engineering, addressing complex
              challenges and creating impactful solutions. We look forward to
              collaborating on groundbreaking research, advancing educational
              excellence, and shaping the future of technology both locally and
              globally. */}
              {item.content}
            </p>
          </div>
          <div className="md:col-span-2 mt-8 flex justify-center relative">
            <Image
              className="w-50 h-50 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
              src={item.image || ""}
              alt=""
              width={50}
              height={50}
              layout="responsive"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-md flex items-end">
              <div className="p-4">
                <p className="text-white text-lg">
                  {/* Prof. Dr. Md. Abu Naim Sheikh */}
                  {item.name}
                  <br />
                  {/* Dean, Faculty of Engineering and Technology */}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="p-8" >
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <p>Renowned Departments</p>
          </div>
        </h2>

        <div className="md:grid md:grid-cols-2 gap-6">
          {deptData.map((item, index) => (
            <div key={index} className="relative p-6 h-full bg-slate-100 border border-slate-200 shadow-md rounded-md text-white bg-black bg-opacity-30">
              <Image
                className="relative z-[-999999] top-0 left-0 w-full object-cover rounded-t-md"
                src={item.image || ""}
                alt=""
                width={100}
                height={100}
                layout="responsive"
              />
              <h2 className="text-xl mb-2 relative z-10">
                Department of {item.dept_name}
                {/* <strong className="font-semibold text-black-900 dark:text-white">
                  Computer Science and Engineering
                </strong>{" "} */}
              </h2>
              <p className="text-black-850 relative z-10">
                {/* The study of discoveries, innovative solutions, and significant
                advancements that will shape the future of computer science and
                engineering */}
                {item.description}
              </p>
              <Link className="pt-4 grid justify-items-end" href={item.link}>
                <Button className="bg-green-500">Explore</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
