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
import PageLayout from "../../../component/PageLayout";
import Image from "next/image";

const API_URL = "http://192.168.0.101:8000";

function CardItem({ name, designation, department, image }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <Image src={image | ''} alt="profile-picture" width={80} height={80} layout="responsive" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
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
      style={false}
      title="Department Of Computer Science & Engineering"
      bg="cse2.webp"
    >
      <div className=" p-8">
        <h2 className="text-3xl font-bold mb-4">Goals and Objectives</h2>
        <p className="text-lg mb-6">
          The Department of Computer Science and Engineering strives to inspire
          excellence in the creation, application, and dissemination of
          knowledge in computer science and engineering through comprehensive
          educational programs; research in collaboration with industry, NGOs,
          and government; diffusion through scholarly publications, and service
          to the national and international community.
        </p>

        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <ul className="list-disc pl-8 mb-6">
          <li className="text-lg">
            To educate students in the fundamental principles of computer
            science and the cutting-edge skills needed to solve the complex
            problems of society.
          </li>
          <li className="text-lg">
            To contribute to the development and progress of computer science,
            and software and information technology, to provide innovative,
            creative solutions for societal needs.
          </li>
          <li className="text-lg">
            To disseminate research through publications, public service, and
            professional activities to impact society in a transformative way.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
        <ul className="list-disc pl-8 mb-6">
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
        </ul>

        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc pl-8">
          <li className="text-lg mb-2">
            Developed the nation’s first nanosatellite which led Bangladesh into
            space-age.
          </li>
          <li className="text-lg mb-2">
            Student teams became champions in the “Sustainable Tourism” and
            “Violence against Women” categories of the 2016 National Hackathon.
          </li>
          <li className="text-lg mb-2">
            Won best paper award in the 19th International Conference on
            Computer and Information Technology, ICCIT 2016.
          </li>
        </ul>
      </div>
      <h2 className="text-3xl font-bold mb-4">Faculty Members</h2>

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
