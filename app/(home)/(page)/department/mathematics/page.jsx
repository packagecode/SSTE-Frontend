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


function CardItem({ name, designation, department, image }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <Image
          src={image || ""}
          alt="profile-picture"
          width={80}
          height={80}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Link href="/teachers/faculty/hor">
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
      console.log(data[1]);
      setteacherData(data[1]);
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
      title="Department Of Mathematics"
      bg="https://as2.ftcdn.net/v2/jpg/02/14/62/49/1000_F_214624906_RTgBecY8t0FdGEyNhLnsEan39wPiHxTZ.jpg"
    >
      <div className=" p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Mathematics Excites Us</p>
          </div>
        </h2>
        <p className="text-lg mb-6 text-gray-800">
          The{" "}
          <strong className="font-semibold text-gray-850 dark:text-white">
            Department of Mathematics
          </strong>{" "}
          at Sunamgonj Science and Technology University is a dynamic academic
          community committed to the dedication to mathematical knowledge,
          research excellence, and the development of mathematical talent. Our
          department is dedicated to creating a dynamic and inclusive
          environment for both students and staff, encouraging mathematical
          discovery and creativity. Discover the fundamentals of calculus,
          including limits, continuity, differentiation, and integration in
          several dimensions. Focus on rigorous proofs and applications in
          physics and engineering.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-5"></div>
            <p> Mission</p>
          </div>
        </h2>
        <ul className="list-disc pl-8 mb-6 text-gray-800">
          <li className="text-lg">
            To educate students in the fundamental principles of mathematics and
            develop their skills to solve complex problems in various fields.
          </li>
          <li className="text-lg">
            To contribute to the advancement of mathematical knowledge and
            research, providing innovative solutions to societal challenges.
          </li>
          <li className="text-lg">
            To disseminate research through publications, public service, and
            professional activities, making a transformative impact on society.
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
          <li className="text-lg">Applied Mathematics</li>
          <li className="text-lg">Calculus</li>
          <li className="text-lg">Computational Mathematics</li>
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
