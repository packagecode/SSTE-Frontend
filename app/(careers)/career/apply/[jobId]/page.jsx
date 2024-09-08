"use client";
import React from "react";
import { useParams } from "next/navigation";
import { API_URL } from "@/app/apiurl";
import { useEffect, useState } from "react";

const Applypage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    job: "",
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`${API_URL}/api/career/jobs/${jobId}`);
      const data = await res.json();
      setJob(data);
      console.log(data);
    };
    fetchJob();
  }, [jobId]);

  function closeModal() {
    setIsModalOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    const form = new FormData();
    form.append("job", jobId);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("resume", formData.resume);

    fetch(`${API_URL}/api/career/appliedresume/`, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="container mx-auto p-8">
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h1 className="text-2xl font-bold mb-4">
              Apply for {job.job_title}
            </h1>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="job" value={jobId} />
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700"
                >
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Submit
              </button>
            </form>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        {job.job_title}
      </h1>
      <div className="bg-white shadow-lg p-8 rounded-md hover:shadow-xl transition-all duration-500">
        <h2 className="text-xl font-bold mb-2">{job.job_title}</h2>
        <div className="pt-10">
          <div>
            <h3 className="text-md mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
              Job Description
            </h3>
            <p className="text-md mb-2 text-justify">{job.job_description}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-md mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
              Job Responsibilities
            </h3>
            <p className="text-md mb-2 text-justify">
              {job.job_responsibilities}
            </p>
          </div>
        </div>
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
        <div className="flex">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={openModal}
          >
            Apply
          </button>
          <a
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
            href={job.pdf ? job.pdf : `/`}
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Applypage;
