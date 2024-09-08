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
      const response = await fetch(`${API_URL}/api/facscience/msgfromdean/`);
      const deptResponse = await fetch(`${API_URL}/api/facscience/department/`);
      const result = await response.json();
      const deptResult = await deptResponse.json();
      setData(result);
      // console.log(result);
      setDeptData(deptResult);
      // console.log(deptResult);
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
      title="Faculty of Science"
      bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyXWOTRTHv-tKEsmpjI2RHFZeWR7iX6klbQ&usqp=CAU"
    >
      {data.map((item, index) => (
        <div key={index} className="grid md:grid-cols-6">
          <div className="md:col-span-4 p-8 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              <div className="flex items-center">
                <p>Message from Dean</p>
              </div>
            </h2>
            <p className="text-lg mb-6 text-gray-800">
              {/* The{" "}
              <strong className="font-semibold text-gray-850 dark:text-white">
                Faculty of Science
              </strong>{" "} */}
              {/* at Sunamgonj Science and Technology University is an exciting moment
            marked by the promise of collaboration, innovation, and academic
            excellence. As we embark on this journey together, we celebrate the
            diverse expertise and passion that each faculty member brings to our
            vibrant community. Our commitment to fostering an inclusive and
            supportive environment ensures that every member feels valued and
            empowered to thrive. Together, we will harness the collective
            strength of our interdisciplinary perspectives to tackle pressing
            challenges and push the boundaries of scientific knowledge. With a
            shared dedication to excellence in teaching, research, and service,
            we look forward to shaping the future of science and technology both
            within our university and beyond. */}
              {item.content}
            </p>
          </div>
          <div className="md:col-span-2 mt-8 flex justify-center relative">
            <Image
              className="w-50 h-50 object-cover bg-green-100 p-2 border border-slate-200 shadow-md rounded-md"
              src={item.image || ''}
              alt=""
              width={50} height={50}
              layout="responsive"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-md flex items-end">
              <div className="p-4">
                <p className="text-white text-lg">
                  {item.name}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        <div className="flex items-center">
          <p>3 Glorious Departments</p>
        </div>
      </h2>
        <div className="md:grid grid-cols-2">
      {deptData.map((item, index) => (
          <div key={index}  className="">
            <div className="relative h-full p-6 bg-slate-100 border border-slate-200 shadow-md rounded-md text-white bg-black bg-opacity-40">
              <Image
                className="relative z-[-999999] top-0 left-0 w-full object-cover rounded-t-md"
                src={item.image || ''}
                alt=""
                width={100} height={100} layout="responsive"
              />
              <h2 className="text-xl mb-2 relative z-10">
                Department of {item.dept_name}
                {/* <strong className="font-semibold text-black-900 dark:text-white">
                  Physics
                </strong>{" "} */}
              </h2>
              <p className="text-black-850 relative z-10">
                {/* The study of matter, energy, and the fundamental forces
                governing the universe. */}
                {item.description}
              </p>
              <Link className="pt-4 grid justify-items-end" href={item.link}>
                <Button className="bg-green-500">Explore</Button>
              </Link>
            </div>

            {/* <div className="relative p-6 bg-slate-100 border border-slate-200 shadow-md rounded-md text-white bg-black bg-opacity-40">
              <img
                className="absolute z-[-999999] top-0 left-0 w-full h-full object-cover rounded-t-md  "
                src="https://images.zapnito.com/cdn-cgi/image/metadata=copyright,fit=scale-down,format=auto,quality=95,width=1280/https://zapnito.s3.amazonaws.com/tenants/46/communities/81/community_image/mdkAS1iiQPu79kxmOTFY_chemistry___materials_headers_chemistry.png"
                alt=""
              />
              <h2 className="text-xl mb-2 relative z-10">
                Department of{" "}
                <strong className="font-semibold text-black-900 dark:text-white">
                  Chemistry
                </strong>{" "}
              </h2>{" "}
              <p className="text-black-850 relative z-10">
                Investigating the properties, composition, and behavior of
                matter.
              </p>
              <Link
                className="pt-4 grid justify-items-end"
                href="/department/chemistry"
              >
                <Button className="bg-green-500">Explore</Button>
              </Link>
            </div> */}

            {/* <div className="relative p-6 bg-slate-100 border border-slate-200 shadow-md rounded-md text-white bg-black bg-opacity-40">
              <img
                className="absolute z-[-999999] top-0 left-0 w-full h-full object-cover rounded-t-md  "
                src="https://st3.depositphotos.com/18803028/35068/i/450/depositphotos_350680696-stock-photo-mathematics-background-formulas-seamless-illustration.jpg"
                alt=""
              />
              <h2 className="text-xl mb-2 relative z-10">
                Department of{" "}
                <strong className="font-semibold text-black-900 dark:text-white">
                  Mathematics
                </strong>{" "}
              </h2>{" "}
              <p className="text-black-850 relative z-10">
                Exploring patterns, structures, and relationships using numbers
                and symbols.
              </p>
              <Link
                className="pt-4 grid justify-items-end"
                href="/department/mathematics"
              >
                <Button className="bg-green-500">Explore</Button>
              </Link>
            </div> */}
        </div>
      ))}
      </div>
    </PageLayout>
  );
};

export default Page;
