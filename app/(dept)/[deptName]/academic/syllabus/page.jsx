"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDept } from "../../useDept";
import Link from "next/link";

const SyllabusTable = ({ data }) => (
  <table className="w-full mt-4 border-collapse">
    <thead>
      <tr>
        <th className="border p-2">Course Code</th>
        <th className="border p-2">Course Title</th>
        <th className="border p-2">Course Type</th>
        <th className="border p-2">Course Credit</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="border p-2">{item.course_code}</td>
          <td className="border p-2">{item.course_title}</td>
          <td className="border p-2">{item.course_type}</td>
          <td className="border p-2">{item.credit}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Syllabus = () => {
  const { api } = useDept();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const contentRefs = useRef([]);
  const [syllabusData, setSyllabusData] = useState([]);
  const [curriculum, setCurriculum] = useState([]);

  useEffect(() => {
    if(api === "") return;
    const fetchSyllabus = async () => {
      try {
        const response = await fetch(`${api}/syllabus`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setSyllabusData(data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching syllabus data:", error);
      }
    };

    const fetchCurriculum = async () => {
      try {
        const response = await fetch(`${api}/curriculum`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setCurriculum(data[0]);
      } catch (error) {
        console.error("Error fetching curriculum data:", error);
      }
    };

    fetchSyllabus();
    fetchCurriculum();
  }, [api]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          dropdownOpen === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [dropdownOpen]);

  // Group data by semester
  const groupedData = syllabusData.reduce((acc, item) => {
    if (!acc[item.semester]) {
      acc[item.semester] = [];
    }
    acc[item.semester].push(item);
    return acc;
  }, {});

  return (
    <div className="container mt-10 mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Syllabus
      </h1>
      <div className="space-y-3">
        {Object.keys(groupedData).map((semester, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-2 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center ">
              <h2
                onClick={() => toggleDropdown(index)}
                className="text-1xl font-semibold mb-2 cursor-pointer"
              >
                {semester === "11"
                  ? "1st Year 1st Semester"
                  : semester === "12"
                  ? "1st Year 2nd Semester"
                  : semester === "21"
                  ? "2nd Year 1st Semester"
                  : semester === "22"
                  ? "2nd Year 2nd Semester"
                  : semester === "31"
                  ? "3rd Year 1st Semester"
                  : semester === "32"
                  ? "3rd Year 2nd Semester"
                  : semester === "41"
                  ? "4th Year 1st Semester"
                  : semester === "42"
                  ? "4th Year 2nd Semester"
                  : "Unknown Semester"}
              </h2>
              <button onClick={() => toggleDropdown(index)} className="text-xl">
                {dropdownOpen === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="transition-all duration-500 ease-in-out overflow-hidden max-h-0"
            >
              <SyllabusTable data={groupedData[semester]} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          href={`${curriculum.pdf}`}
          className="bg-green-500 text-white py-3 px-4 rounded-md mt-2 inline-block cursor-pointer hover:bg-green-700 transition-all duration-500"
        >
          Download Full Syllabus
        </Link>
      </div>
    </div>
  );
};

export default Syllabus;
