"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import PageLayout from "../../../../component/PageLayout";
import Link from "next/link";
import Image from "next/image";

const API_URL = "http://192.168.0.101:8000";

function CardItem({ name, designation, department, image }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <Image src={image} alt="profile-picture" width={100} height={100} layout="responsive"/>
      </CardHeader>
      <CardBody className="text-center">
        <Link href="/teachers/view/ahw">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
        </Link>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {designation}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

const Page = () => {
  const [teacherData, setteacherData] = useState([]);

  const fetchTeacherData = async () => {
    try {
      const response = await fetch(`http://192.168.0.101:8000/api/teachers/3/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data[0]);
      setteacherData(data[0]);
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  };

  useEffect(() => {
    fetchTeacherData();
  }, []);

  return (
    <PageLayout
      style={true}
      title="Department Of Chemistry"
      bg="https://council.science/wp-content/uploads/2017/04/IUPAC-feature-image-512x256.jpg"
    >
      <div className=" p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Beauty of Chemistry</p>
          </div>
        </h2>
        <p className="text-lg mb-6 text-gray-800">
          The{" "}
          <strong className="font-semibold text-gray-850 dark:text-white">
            Department of Chemistry
          </strong>{" "}
          at Sunamgonj Science and Technology University is dedicated to
          excellence in education and research. Our mission is to advance
          chemical knowledge, prepare the next generation of scientists with
          comprehensive education and hands-on experience, and contribute to
          societal progress through innovative research and public outreach, all
          while fostering an inclusive, collaborative, and ethically responsible
          environment.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Mission</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">
            To bring comprehensive understanding of chemistry principles,
            empowering students to address multifaceted challenges.
          </li>
          <li className="text-lg">
            To drive innovation in chemical knowledge and research, offering
            solutions to pressing societal issues.
          </li>
          <li className="text-lg">
            To share research outcomes via publications, public service, and
            professional engagements, catalyzing societal transformation.
          </li>
        </ul>

        {/* <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Academic Programs</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">Bachelor of Science in Computer Science</li>
          <li className="text-lg">
            Bachelor of Science in Computer Science and Engineering
          </li>
          <li className="text-lg">
            Master of Science in Computer Science and Engineering
          </li>
          <li className="text-lg">
            Master of Engineering in Computer Science and Engineering
          </li>
          <li className="text-lg">Master in Computer Applications</li>
        </ul> */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Major Programs</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">Organic Chemistry</li>
          <li className="text-lg">Inorganic Chemistry</li>
          <li className="text-lg">Biochemistry</li>
        </ul>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Faculty Members</h2>

      <div className="flex flex-wrap justify-center gap-10">
        <CardItem
          name={teacherData.name}
          designation={teacherData.designation}
          department={teacherData.department}
          image={teacherData.image}
        />
      </div>
    </PageLayout>
  );
};

export default Page;
