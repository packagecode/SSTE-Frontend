"use client";
import { CgMail, CgPhone, CgPin } from "react-icons/cg";
import React from "react";
import LeafletMapComponent from "./LeafletMapComponent";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const [footerData, setFooterData] = useState({
    contact: {},
    academics: [],
    research: [],
    services: [],
    admissions: [],
    clubs: [],
    importantLinks: [],
    webServices: [],
    campusLife: [],
    yt_link: "",
  });

  useEffect(() => {
    fetchFooter().then((r) => {});
  }, []);

  const fetchFooter = async () => {
    try {
      const response = await fetch(`${API_URL}/api/footer/contact/`);
      const AcademicResponse = await fetch(`${API_URL}/api/footer/academics/`);
      const ResearchResponse = await fetch(`${API_URL}/api/footer/research/`);
      const ServicesResponse = await fetch(`${API_URL}/api/footer/services/`);
      const AdmissionResponse = await fetch(
        `${API_URL}/api/footer/admissions/`
      );
      const ClubResponse = await fetch(`${API_URL}/api/footer/clubsandcells/`);
      const ImportantResponse = await fetch(
        `${API_URL}/api/footer/importantlink/`
      );
      const WebResponse = await fetch(`${API_URL}/api/footer/webservices/`);
      const CampusResponse = await fetch(`${API_URL}/api/footer/campuslife/`);
      const ytResponse = await fetch(`${API_URL}/api/footer/footerytvideo/`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      const AcademicData = await AcademicResponse.json();
      const ResearchData = await ResearchResponse.json();
      const ServicesData = await ServicesResponse.json();
      const AdmissionData = await AdmissionResponse.json();
      const ClubData = await ClubResponse.json();
      const ImportantData = await ImportantResponse.json();
      const WebData = await WebResponse.json();
      const CampusData = await CampusResponse.json();
      const ytData = await ytResponse.json();
      setFooterData({
        contact: data[0] ? data[0] : {},
        academics: AcademicData,
        research: ResearchData,
        services: ServicesData,
        admissions: AdmissionData,
        clubs: ClubData,
        importantLinks: ImportantData,
        webServices: WebData,
        campusLife: CampusData,
        yt_link: ytData[0] ? ytData[0].video_link : "",
      });
    } catch (error) {
      console.error("Error fetching footer data:", error);
    }
  };

  return (
    <>
      <div className="bg-green-900 mt-10 p-10 md:flex items-center justify-center gap-x-10">
        {/* youtube video iframe */}
        <iframe
          // width="560"
          height="300"
          src={footerData.yt_link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="md:w-1/3 footer-iframe w-full"
          allowFullScreen
        ></iframe>
        <div className="md:w-1/3">
          <LeafletMapComponent />
        </div>
      </div>
      <footer className="pt-5 bg-green-700 text-white">
        <div className="px-4 md:px-32 md:grid grid-cols-6 md:grid-cols-3 gap-6">
          <div className="grid grid-cols-3 gap-y-6 gap-x-6">
            {/* col1 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Academics</h4>
              {footerData.academics.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            {/* col2 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Club and Cells</h4>
              {footerData.clubs.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            {/* col3 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Services</h4>
              {footerData.services.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            {/* col4 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Admissions</h4>
              {footerData.admissions.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            {/* col5 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Research</h4>
              {footerData.research.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            {/* col6 */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold">Important Link</h4>
              {footerData.importantLinks.map((el, idx) => (
                <ul key={idx} className=" text-gray-200">
                  <li>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center col-span-1 mb-10">
            <Image
              src="/logo.png"
              alt="logo"
              className="w-40 mb-2"
              width={100}
              height={44}
            />
            <p className="text-white text-center font-bold md:text-xl uppercase">
              Sunamganj Science & Technology University
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-6 space-y-6">
              <ul className="text-gray-200">
                <h4 className="text-white font-semibold">Web Services</h4>
                {footerData.webServices.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className=" text-gray-200">
                <h4 className="text-white font-semibold">Campus Life</h4>
                {footerData.campusLife.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:text-green-400 duration-150 cursor-pointer"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <h4 className="text-white font-semibold">Contact</h4>
              <p className="text-gray-200">
                Sunamganj Science & Technology University
              </p>
              <div className="text-gray-200 flex gap-x-2 items-center">
                <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                  <CgPin className="inline-block" />
                </div>
                {footerData.contact.address
                  ? footerData.contact.address
                  : "Sunamganj, Bangladesh"}
              </div>
              <div className="text-gray-200 flex gap-x-2 items-center">
                <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                  <CgPhone className="inline-block" />
                </div>
                {footerData.contact.phone
                  ? footerData.contact.phone
                  : "+880 123 456 7890"}
              </div>
              <div className="text-gray-200 flex gap-x-2 items-center">
                <div className="text-green-500 flex text-lg rounded-full justify-center bg-white items-center w-8 h-8">
                  <CgMail className="inline-block" />
                </div>
                {footerData.contact.email
                  ? footerData.contact.email
                  : "sss@sstu.bd"}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-5 min-w-full bg-green-900 items-center justify-between text-center sm:flex sm:px-44">
          <p className="text-gray-400">
            © 2024 Sunamgonj Science & Technology University. All rights
            reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
            <a href={footerData.contact.facebook_link}>
              <FaFacebook className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
            <a href={footerData.contact.twitter_link}>
              <FaTwitter className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
            <a href={footerData.contact.youtube_link}>
              <FaYoutube className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-iframe {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
