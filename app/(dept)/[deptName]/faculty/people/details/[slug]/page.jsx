"use client";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import { useParams } from "next/navigation";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import LeafletMapComponent from "@/components/layouts/footer/LeafletMapComponent";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";

const Page = () => {
  const { slug } = useParams();
  const [teacher, setTeacher] = useState({});
  const [researches, setResearches] = useState([]);

  function changeDateFormat(date) {
    const d = new Date(date);
    return d.toDateString();
  }

  useEffect(() => {
    const fetchTeacher = async () => {
      const res = await fetch(`${API_URL}/api/people/teachers/${slug}`);
      const data = await res.json();
      setTeacher(data);
    };
    fetchTeacher();
  }, [slug]);

  useEffect(() => {
    const fetchResearches = async () => {
      const res = await fetch(`${API_URL}/api/research/latest/`);
      const data = await res.json();
      setResearches(data);
    };
    fetchResearches();
  }, []);

  console.log(teacher);
  console.log(researches);

  const workExperience = teacher.work_experience || [];
  const education = teacher.education || [];
  const contactInfo = [
    {
      label: "Email",
      value: teacher.email,
    },
    {
      label: "Phone",
      value: teacher.phone,
    },
    {
      label: "Office",
      value: teacher.room_no,
    },
  ];

  const filteredResearches = researches.filter((research) =>
    research.user.some((user) => user.username === teacher.user)
  );

  const data = [
    {
      label: "Quick Overview",
      value: "quick_overview",
      desc: (
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-8 py-10">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-green-700 rounded-md group-hover:bg-yellow-800 group-hover:text-white group-hover:rotate-6 transition-all duration-300 h-32 w-32 flex items-center justify-center text-white text-2xl font-bold tracking-widest">
              {teacher.code}
            </div>
            <div className="text-xl uppercase tracking-widest font-bold">
              {teacher.name}
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-blue-900 rounded-md group-hover:bg-gray-300 group-hover:text-gray-900 group-hover:rotate-6 transition-all duration-300 h-32 min-w-32 flex items-center justify-center text-white text-2xl font-bold tracking-widest">
              {teacher.department}
            </div>
            <div className="text-xl uppercase tracking-widest font-bold">
              {teacher.department === "CSE"
                ? "Computer Science and Engineering"
                : teacher.department === "MAT"
                ? "Mathematics"
                : teacher.department === "PHY"
                ? "Physics"
                : teacher.department === "CHEM"
                ? "Chemistry"
                : ""}
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-gray-900 rounded-md group-hover:bg-red-400 group-hover:text-white group-hover:rotate-6 transition-all duration-300 h-32 min-w-32 flex items-center justify-center uppercase text-white text-2xl font-bold tracking-widest">
              {teacher.designation?.length > 7
                ? teacher.designation.slice(0, 4)
                : teacher.designation}
            </div>
            <div className="text-xl uppercase tracking-widest font-bold">
              {teacher.designation} since{" "}
              {changeDateFormat(teacher.joining_date)}
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-red-400 rounded-md group-hover:bg-black group-hover:text-white group-hover:rotate-6 transition-all duration-300 h-32 min-w-32 flex items-center justify-center uppercase text-white text-lg font-bold tracking-widest">
              RESEARCH <br />
              INTEREST
            </div>
            <div className="text-sm uppercase tracking-widest flex flex-wrap gap-2">
              {teacher.research_interest
                ?.split(",")
                .slice(0, 6)
                .map((interest) => (
                  <span
                    key={interest}
                    className="bg-blue-800 text-white px-2 py-1 rounded-md"
                  >
                    {interest}
                  </span>
                ))}
            </div>
          </div>

          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="bg-gray-300 rounded-md group-hover:bg-blue-900 group-hover:text-white group-hover:rotate-6 transition-all duration-300 h-32 min-w-32 flex items-center justify-center uppercase text-gray-900 text-2xl font-bold tracking-widest">
              FIND <br />
              ME
            </div>
            <div className="text-xl uppercase tracking-widest font-bold">
              {teacher.room_no}
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="bg-yellow-800 rounded-md group-hover:bg-green-700 group-hover:rotate-6 transition-all duration-300 h-32 min-w-32 flex items-center justify-center uppercase text-white text-2xl font-bold tracking-widest">
              CALL
            </div>
            <div className="text-2xl uppercase tracking-widest font-bold">
              {teacher.phone}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Work Experience",
      value: "work_experience",
      desc: (
        <ul>
          {workExperience.map((exp) => (
            <li key={exp.id} className="mb-3 bg-gray-50 p-5">
              <p className="font-semibold">{exp.designation}</p>
              <p className="text-sm font-bold uppercase mb-1">
                {exp.organization}
              </p>
              <p className="text-xs text-gray-500">
                {changeDateFormat(exp.start_date)} -{" "}
                {changeDateFormat(exp.end_date)}
              </p>
              <p className="text-xs">{exp.description}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Education",
      value: "education",
      desc: (
        <ul>
          {education.map((edu) => (
            <li key={edu.id} className="mb-3 bg-gray-50 p-5">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm font-bold uppercase tracking-widest">
                {edu.institute}
              </p>
              <p className="text-xs text-gray-500">
                {changeDateFormat(edu.start_date)} -{" "}
                {changeDateFormat(edu.end_date)}
              </p>
              <p className="text-xs">{edu.description}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Contact Info",
      value: "contact_info",
      desc: (
        <div className="flex flex-col gap-3">
          <div className="pt-5 pb-3">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-2">
                <p className="font-bold">{info.label}: </p>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
          <b className="font-bold uppercase tracking-widest">Social Links</b>
          <div className="flex items-center gap-3 mb-3">
            {teacher.facebook && (
              <a href={teacher.facebook} target="_blank">
                <FaFacebook className="h-6 w-6" />
              </a>
            )}
            {teacher.twitter && (
              <a href={teacher.twitter} target="_blank">
                <FaTwitter className="h-6 w-6" />
              </a>
            )}
            {teacher.linkedin && (
              <a href={teacher.linkedin} target="_blank">
                <FaLinkedin className="h-6 w-6" />
              </a>
            )}
            {teacher.youtube && (
              <a href={teacher.youtube} target="_blank">
                <FaYoutube className="h-6 w-6" />
              </a>
            )}
          </div>
          <LeafletMapComponent />
        </div>
      ),
    },
    {
      label: "Researches",
      value: "researches",
      desc: (
        <section className="sm:mx-auto sm:container mx-10 my-10">
          <div className="flex my-10 items-center gap-3">
            <span className="bg-green-500 text-white px-2 py-1 text-sm uppercase">
              Research Interests
            </span>
            <b>-</b>
            <div className="flex items-center gap-2 flex-wrap">
              {teacher.research_interest?.split(",").map((interest) => (
                <span
                  key={interest}
                  className="bg-gray-300 text-gray-900 text-sm px-2 py-1"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          {filteredResearches === null ? (
            <p>Loading...</p>
          ) : (
            <div className=" grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {filteredResearches.map((items) => (
                <article
                  className=" bg-white shadow-lg border rounded-md duration-300 hover:shadow-sm"
                  key={items.id}
                >
                  <a href={`${slug}/research/${items.id}`}>
                    <div className="relative">
                      <Image
                        src={items.thumbnail || "/placeholder.png"}
                        loading="lazy"
                        alt={items.j_name}
                        className="w-full h-48 object-cover rounded-t-md"
                        width={48} height={48}
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
                      <h3 className="text-md text-gray-900">{items.title}</h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </section>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center gap-y-3 mb-5">
        {teacher.profile_photo && (
          <Image
            src={teacher.profile_photo}
            alt="profile-picture"
            className="h-32 w-32 rounded-full object-cover bg-slate-200 p-1 shadow-lg border border-slate-500"
            width={32} height={32}
            layout="responsive"
          />
        )}
        <h1 className="font-bold text-xl uppercase text-center">
          {teacher.name}
        </h1>
        <p className="text-center uppercase tracking-widest font-bold text-sm">
          {teacher.designation}
        </p>
        <div className="text-justify whitespace-pre-line mt-5 bg-gray-50 p-10 border-l-4 border-l-green-400">
          {teacher.short_bio}
        </div>
      </div>
      <Tabs value={activeTab} className="relative z-10">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-green-500 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-green-500" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="relative z-0">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Page;
