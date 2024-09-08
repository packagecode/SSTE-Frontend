"use client";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import Link from "next/link";

const Page = () => {
  const [availableJobs, setAvailableJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch(`${API_URL}/api/career/jobs/`);
    const data = await res.json();
    setAvailableJobs(data);
    console.log(data);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Avaiable jobs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableJobs.map((job) => (
          <>
            <div
              key={job.id}
              className="bg-white shadow-lg p-8 rounded-md hover:shadow-xl transition-all duration-500"
            >
              <div className="border px-3 py-1 text-sm rounded-lg text-green-500 mb-5 max-w-fit border-green-500">
                {job.job_department}
              </div>
              <h2 className="text-xl font-bold mb-2">{job.job_title}</h2>
              <p className="text-md mb-2 text-justify">{job.job_description}</p>
              <ul className="text-md mb-2 list-disc p-4 space-y-2">
                <li>
                  <b>Salary:</b> {job.job_salary} BDT
                </li>
                <li>
                  <b>Location:</b> {job.job_location}
                </li>
                <li>
                  <b>Experience:</b> {job.job_experience}
                </li>
                <li>
                  <b>Posted on:</b> {job.posted_on}
                </li>
                <li>
                  <b>Deadline:</b> {job.job_deadline}
                </li>
                <li>
                  <b>Vacancy:</b> {job.job_vacancy}
                </li>
                <li>
                  <b>Employment Type:</b> {job.job_type}
                </li>
              </ul>
              <div className="flex items-center">
                <Link
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                  href={`career/apply/${job.id}`}
                >
                  Apply
                </Link>
                <Link
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
                  href={job.pdf ? job.pdf : `/`}
                >
                  Download PDF
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
