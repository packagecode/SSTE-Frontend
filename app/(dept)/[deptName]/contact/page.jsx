"use client";
// import LeafletMapComponent from "@/components/layouts/footer/LeafletMapComponent";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import { CgMail, CgPhone, CgPin } from "react-icons/cg";
import dynamic from "next/dynamic";

const DynamicLeafletMapComponent = dynamic(() => import('../../../../components/layouts/footer/LeafletMapComponent'), {
  ssr: false
});
const Contact = () => {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetchFooter().then(r => {});
  }, []);

  const fetchFooter = async () => {
    try {
      const response = await fetch(`${API_URL}/api/footer-contact/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setFooterData(data[0]);
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-10 mx-auto px-4 py-8">
      <h1 className="text-3xl mb-4 uppercase font-bold tracking-widest pl-5 border-l-4 border-l-green-500">
        Get in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 uppercase">
            Contact Information
          </h2>
          <p className="text-lg mb-4">
            If you have any questions, feel free to reach out to us. We are here
            to help!
          </p>
          <div className="flex flex-col gap-y-3">
            <DynamicLeafletMapComponent />
            <h4 className=" font-semibold">Address</h4>
            <p className="">Sunamganj Science & Technology University</p>
            <div className=" flex gap-x-2 items-center">
              <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                <CgPin className="inline-block" />
              </div>
              {footerData.address
                ? footerData.address
                : "Sunamganj, Bangladesh"}
            </div>
            <div className=" flex gap-x-2 items-center">
              <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                <CgPhone className="inline-block" />
              </div>
              {footerData.phone ? footerData.phone : "+880 123 456 7890"}
            </div>
            <div className=" flex gap-x-2 items-center">
              <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                <CgMail className="inline-block" />
              </div>
              {footerData.email ? footerData.email : "sss@sstu.bd"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
