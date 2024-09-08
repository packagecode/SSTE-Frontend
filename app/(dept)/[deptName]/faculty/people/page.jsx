"use client";
import React from "react";
import Faculty from "../../components/Faculty";
import { API_URL } from "@/app/apiurl";
import { useState } from "react";
import { useEffect } from "react";
import { useDept } from "../../useDept";

const Page = () => {
  const [dept, setDept] = useState("");
  const { deptId } = useDept();

  useEffect(() => {
    if (deptId === "cse") {
      setDept("CSE");
    } else if (deptId === "math") {
      setDept("MAT");
    } else if (deptId === "phy") {
      setDept("PHY");
    } else if (deptId === "chem") {
      setDept("CHEM");
    }
  }, [deptId]);

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/people/teachers`);
      const data = await res.json();
      // console.log(data);
      setTeachers(data);
    }catch(err){
      console.log(err)
    }
  
  };

  const filteredTeachers = teachers?.filter((t) => t?.department === dept);

  const dean = filteredTeachers.filter((t) => t?.designation === "Dean");
  const chairman = filteredTeachers.filter((t) => t?.designation === "Chairman");
  const prof = filteredTeachers.filter((t) => t?.designation === "Professor");
  const asp = filteredTeachers.filter((t) => t?.designation === "ASP");
  const ap = filteredTeachers.filter((t) => t?.designation === "AP");
  const lecturer = filteredTeachers.filter((t) => t?.designation === "Lecturer");

  return (
    <div className="my-10 container mx-auto">
      {dean.length > 0 && (
        <>
          <div className="pl-5 mb-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
            Dean of the department
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dean?.map((d, index) => (
              <Faculty
                key={index}
                image={d.profile_photo}
                name={d.name}
                position="Dean"
                bio={d.short_bio.slice(0, 100) + "..."}
                slug={d.code}
              />
            ))}
          </div>
        </>
      )}

      {chairman.length > 0 && (
        <>
          <div className="pl-5 mb-10 mt-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
            Chairman of the department
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {chairman.map((d, index) => (
              <Faculty
                key={index}
                image={d.profile_photo}
                name={d.name}
                position="Chairman"
                bio={d.short_bio.slice(0, 100) + "..."}
                slug={d.code}
              />
            ))}
          </div>
        </>
      )}

      {prof.length > 0 && (
        <>
          <div className="pl-5 mb-10 mt-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
            Professors of the department
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prof.map((d, index) => (
              <Faculty
                key={index}
                image={d.profile_photo}
                name={d.name}
                position="Professor"
                bio={d.short_bio.slice(0, 100) + "..."}
                slug={d.code}
              />
            ))}
          </div>
        </>
      )}

      {asp.length > 0 && (
        <>
          <div className="pl-5 mb-10 mt-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
            Associate Professors of the department
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {asp.map((d, index) => (
              <Faculty
                key={index}
                image={d.profile_photo}
                name={d.name}
                position="Associate Professor"
                bio={d.short_bio.slice(0, 100) + "..."}
                slug={d.code}
              />
            ))}
          </div>
        </>
      )}

      {ap.length > 0 && (
        <>
          <div className="pl-5 mb-10 mt-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
            Assistant Professors of the department
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ap.map((d,index) => (
              <Faculty
                key={index}
                image={d.profile_photo}
                name={d.name}
                position="Assistant Professor"
                bio={d.short_bio.slice(0, 100) + "..."}
                slug={d.code}
              />
            ))}
          </div>
        </>
      )}

      <div className="pl-5 mb-10 mt-10 border-l-2 border-l-green-500 font-bold text-lg uppercase tracking-widest">
        Lecturers of the department
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {lecturer.map((d,index) => (
          <Faculty
            key={index}
            image={d.profile_photo}
            name={d.name}
            position="Lecturer"
            bio={d.short_bio.slice(0, 100) + "..."}
            slug={d.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
