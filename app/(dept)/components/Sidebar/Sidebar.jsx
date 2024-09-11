"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiInfo,
  FiBell,
  FiGrid,
  FiUsers,
  FiMessageSquare,
  FiArrowLeft,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useDept } from "../../[deptName]/useDept";

const Sidebar = () => {
  const deptName = useDept().deptId;
  const pathname = usePathname();
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredAcademics, setHoveredAcademics] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function generateLink(
    path,
    text,
    svg,
    isHovered,
    setHovered,
    hasSubmenu = false,
    submenuItems = []
  ) {
    const isActive =
      pathname === path ||
      submenuItems.some((subItem) => pathname.startsWith(subItem.path)) ||
      pathname.startsWith(path);

    return (
      <div
        onMouseEnter={() => hasSubmenu && setHovered(true)}
        onMouseLeave={() => hasSubmenu && setHovered(false)}
        className="relative"
      >
        <Link href={path}>
          <div
            className={`hover:bg-gray-200 py-[8px] cursor-pointer rounded-xl px-5 transition-all duration-500 ${
              isActive && "bg-green-500 hover:bg-green-500 text-white"
            }`}
          >
            <p className="flex items-center gap-x-2">
              {svg} {text}
            </p>
          </div>
        </Link>
        {hasSubmenu && (isHovered || isActive) && (
          <div className="ml-6 mt-2 flex flex-col gap-y-2 transition-all duration-500 opacity-100 translate-x-0">
            {submenuItems.map((item) => generateSubLink(item.path, item.text))}
          </div>
        )}
      </div>
    );
  }

  function generateSubLink(path, text) {
    return (
      <Link href={path} key={path}>
        <div
          className={`hover:bg-gray-200 py-[4px] cursor-pointer rounded-xl px-4 transition-all duration-500 ${
            pathname === path && "bg-green-500 hover:bg-green-500 text-white"
          }`}
        >
          <p className="flex items-center gap-x-2">{text}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-bold md:px-6">
      <button
        className="md:hidden p-4 z-[999999999999999999]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={32} />}
      </button>
      <div
        className={`fixed inset-0 sm:z-[999999999999999999999999999999999999999999999999999] top-0 z-[99999999999] bg-white p-4 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:flex md:flex-col md:gap-y-3 md:bg-transparent`}
      >
        <div className="md:hidden mb-4">
          <button className="text-left" onClick={() => setIsSidebarOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <Link href={`/${deptName}`}>
          <div
            className={`hover:bg-gray-200 py-[8px] cursor-pointer rounded-xl px-5 transition-all duration-500 ${
              pathname === "/" + deptName &&
              "bg-green-500 hover:bg-green-500 text-white"
            }`}
          >
            <p className="flex items-center gap-x-2">
              <FiHome /> Home
            </p>
          </div>
        </Link>
        {generateLink(
          "#",
          "About",
          <FiInfo />,
          hoveredAbout,
          setHoveredAbout,
          true,
          [
            {
              path: `/${deptName}/about/message/chairman`,
              text: "Message from the Chairman",
            },
            // { path: "/cse/about/message/dean", text: "Message from the Dean" },
            { path: `/${deptName}/about/mission`, text: "Mission" },
            { path: `/${deptName}/about/vision`, text: "Vision" },
            { path: `/${deptName}/about/history`, text: "History" },
          ]
        )}
        {generateLink(`/${deptName}/notice`, "Notice", <FiBell />)}
        {generateLink(
          "#",
          "Academics",
          <FiGrid />,
          hoveredAcademics,
          setHoveredAcademics,
          true,
          [
            { path: `/${deptName}/academic/syllabus`, text: "Syllabus" },
            { path: `/${deptName}/academic/admission`, text: "Admission" },
          ]
        )}
        {generateLink(`/${deptName}/faculty/people`, "Faculty", <FiUsers />)}
        {generateLink(`/${deptName}/contact`, "Contact", <FiMessageSquare />)}
        {/* {generateLink("/", "University Website", <FiArrowLeft />)} */}
        <a href="/" className="flex items-center gap-2">
          <FiArrowLeft className="" /> Back to Home
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
