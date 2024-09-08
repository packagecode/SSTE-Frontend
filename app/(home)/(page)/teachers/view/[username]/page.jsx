"use client";
import PageLayout from "@/app/component/PageLayout";
import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import Image from "next/image";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="text-right flex flex-col items-end">
        <p className="font-bold border-b-2 border-green-500 mb-3">
          Contact Information
        </p>
        <p>
          Level: 4 Kha-224
          <br />
          Merul Badda Dhaka 1212. Bangladesh
        </p>
        <p className="text-right flex gap-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <a href="tel:0155443322">0155443322</a>
        </p>
        <p className="text-right flex gap-x-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <a href="mailto:ahw@sstu.ac.bd">ahw@sstu.ac.bd</a>
        </p>
      </div>
    </div>
  );
}

function ResearchInfo({ research }) {
  return (
    <div className="mt-6">
      <p className="font-bold border-b-2 border-green-500 mb-3">
        Research Articles
      </p>
      <div className="flex items-center gap-x-2 mb-4">
        <button className="border border-green-500 text-green-500 hover:bg-green-500 transition-all duration-200 hover:text-white cursor-pointer rounded-lg px-3 py-1">
          Journal
        </button>
        <button className="border border-green-500 text-green-500 hover:bg-green-500 transition-all duration-200 hover:text-white cursor-pointer rounded-lg px-3 py-1">
          Conference
        </button>
        <button className="border border-green-500 text-green-500 hover:bg-green-500 transition-all duration-200 hover:text-white cursor-pointer rounded-lg px-3 py-1">
          Others
        </button>
      </div>
      <div>
        {research.length ? (
          research.map((paper, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-semibold">{paper.title}</p>
              <p className="text-sm">{paper.authors}</p>
              <p className="text-xs text-gray-500">{paper.journal}</p>
            </div>
          ))
        ) : (
          <p>No research articles available.</p>
        )}
      </div>
    </div>
  );
}

function CollapsibleSection({ title, children, isOpen, onToggle }) {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full text-left border-b-2 border-green-500 mb-3 font-bold"
      >
        {title}
      </button>
      <Collapse isOpened={isOpen}>
        <div className="pl-4">{children}</div>
      </Collapse>
    </div>
  );
}

const Page = () => {
  const [research, setResearch] = useState([]);
  const [isEducationOpen, setIsEducationOpen] = useState(true);
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);
  const [isResearchInterestsOpen, setIsResearchInterestsOpen] = useState(true);

  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    try {
      const response = await fetch(`http://192.168.0.101:8000/api/research/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setResearch(data);
    } catch (error) {
      console.error("Error fetching research data:", error);
    }
  };

  const userProfile = {
    first_name: "Md. Anwar Hussen",
    last_name: "Wadud",
    image: "http://192.168.0.101:8000/media/images/teacher/anwarBUBT.jpeg",
    cover_image:
      "https://www.brainwareuniversity.ac.in/blog/wp-content/uploads/2022/03/Computer-science-engineering.jpg",
    bio: "Test Bio",
    facebook: "john.doe",
    twitter: "john_doe",
  };

  const workExperience = [
    {
      title: "Assistant Professor",
      company: "Bangladesh University of Business and Technology",
      start_date: "2019",
      end_date: "2021",
    },
  ];

  const education = [
    {
      degree: "BSc. in Computer Science & Engineering",
      school: "Mawlana Bhashani Science and Technology University",
      start_date: "2012",
      end_date: "2017",
    },
    {
      degree: "MSc in Computer Science & Engineering",
      school: "BUET",
      start_date: "2020",
      end_date: "2022",
    },
  ];

  const researchInterests =
    "Adhoc networking, network security, cognitive modeling.";

  return (
    <PageLayout
      title="Md. Anwar Hussen Wadud"
      bg={userProfile.cover_image}
      style={true}
    >
      <div className="flex flex-col gap-y-3 mb-5 items-center">
        <Image
          src={userProfile.image || ''}
          alt="profile-picture"
          className="h-32 w-32 rounded-full object-cover bg-slate-200 p-1 shadow-lg border border-slate-500"
          width={32} height={32} layout="responsive"
        />
        <h1 className="font-bold text-lg uppercase text-center">
          Anwar Hussen Wadud
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-x-5">
        <div>
          <p className="text-justify mb-4">
            Anwar Hussen Wadud is an Associate Professor in the Computer Science
            and Engineering Department under the School of Data and Sciences at
            Brac University. She received her Ph.D. degree in Information
            Systems with an emphasis on cognitive modeling. She has been with
            Brac University since 2003. Prior to joining BRAC University, she
            had five years of industry experience. Her research interests lie in
            the broad areas of Adhoc networking, network security, and cognitive
            modeling. She was a part of a Malaysian Government initiative under
            the Exploratory Research Grant Scheme (ERGS), under which she has a
            patent from the Malaysian IPO authority.
          </p>
          <ContactInfo />
        </div>
        <div className="flex flex-col gap-y-3">
          <CollapsibleSection
            title="Education"
            isOpen={isEducationOpen}
            onToggle={() => setIsEducationOpen(!isEducationOpen)}
          >
            <ul>
              {education.map((edu, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm">{edu.school}</p>
                  <p className="text-xs text-gray-500">
                    {edu.start_date} - {edu.end_date}
                  </p>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            title="Work Experience"
            isOpen={isExperienceOpen}
            onToggle={() => setIsExperienceOpen(!isExperienceOpen)}
          >
            <ul>
              {workExperience.map((exp, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-sm">{exp.company}</p>
                  <p className="text-xs text-gray-500">
                    {exp.start_date} - {exp.end_date}
                  </p>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          <CollapsibleSection
            title="Research Interests"
            isOpen={isResearchInterestsOpen}
            onToggle={() =>
              setIsResearchInterestsOpen(!isResearchInterestsOpen)
            }
          >
            <p>{researchInterests}</p>
          </CollapsibleSection>

          <ResearchInfo research={research} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
