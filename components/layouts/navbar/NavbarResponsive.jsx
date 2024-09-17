"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CgChevronDoubleRight,
  CgChevronDown,
  CgChevronRight,
} from "react-icons/cg";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState({
    about: false,
    administration: false,
    academics: false,
    admission: false,
  });
  const timeoutIds = useRef({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    if (timeoutIds.current[menu]) {
      clearTimeout(timeoutIds.current[menu]);
    }
    setIsOpenMenu((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    timeoutIds.current[menu] = setTimeout(() => {
      setIsOpenMenu((prevState) => ({
        ...prevState,
        [menu]: false,
      }));
    }, 50);
  };

  return (
    <>
      <header className="bg-green-600">
        <div className="container mx-auto md:flex items-center justify-center py-4 px-6">
          <div className="md:flex items-center">
            <div className="place-items-center grid">
              <Image
                src="/logo.png"
                alt="SSTU Logo"
                className="md:h-28 mr-4 h-auto"
                width={100}
                height={100}
              />
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold text-sm md:text-3xl">
                Sunamgonj Science and Technology University
              </h1>
              <h2 className="text-white text-lg md:text-3xl">
                সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
              </h2>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-green-700 sticky top-0 z-[99999999999999999999]">
        <div className="justify-center items-center md:flex space-x-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0 md:hidden">
                <Image
                  src="/logo.png"
                  alt="SSTU Logo"
                  className="h-10 w-10"
                  width={100}
                  height={100}
                />
              </div> */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={() => handleMouseLeave("about")}
                  >
                    <Link
                      href="#"
                      className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About SSTU
                    </Link>
                    {isOpenMenu.about && (
                      <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden z-[999999]">
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/at-a-glance/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">
                              At a glance
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/act-of-the-university/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">SSTU ACT</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/organogram/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">
                              SSTU Organogram
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/bulletin/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">
                              SSTU Bulletin
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/monogram/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">
                              SSTU Monogram
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/campus-map/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">
                              Campus Map
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                            href="/about-us/gallery/"
                          >
                            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                              <CgChevronDoubleRight className="fill-green-500" />
                            </div>
                            <span className="whitespace-nowrap">Gallery</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("administration")}
                    onMouseLeave={() => handleMouseLeave("administration")}
                  >
                    <Link
                      href="#"
                      className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Administration
                    </Link>
                    {isOpenMenu.administration && (
                      <ul className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden z-[99999]">
                        <div className="flex gap-x-3 p-4">
                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              Statutory Office
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/office-of-vice-chancellor"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Vice Chancellor&#39;s Office
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/office-of-registrar"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Registrar&#39;s Office
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/librarian-ofc"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Librarian&#39;s Office
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/controllers-ofc"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Controller&#39;s Office
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/exam-controller-ofc"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Exam Controller&#39;s Office
                                </span>
                              </Link>
                            </li>
                          </div>
                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              Authority
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/syndicatelist"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Syndicate
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/academic-council"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Academic Council
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/finance-committee"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Finance Committee
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/plan-develop-com"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Planning and Development Committee
                                </span>
                              </Link>
                            </li>
                          </div>
                        </div>
                        <div className="flex gap-x-3 p-4">
                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              Office of the Deans
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/department/science"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Faculty of Science
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/department/compscienceeng"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Faculty of Engineering & Technology
                                </span>
                              </Link>
                            </li>
                          </div>
                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              Office of the Directors
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/students-welfare"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Students&#39; Welfare
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/research-extension"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Research & Extension
                                </span>
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("academics")}
                    onMouseLeave={() => handleMouseLeave("academics")}
                  >
                    <Link
                      href="#"
                      className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Academics
                    </Link>
                    {isOpenMenu.academics && (
                      <ul className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden z-[999999]">
                        <div className="flex flex-col gap-y-3 p-4">
                          <div>
                            {/* <p className="text-md font-bold mb-3 text-green-500">
                   Faculty of Science
                 </p> */}
                            <li>
                              <Link
                                className="text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/department/science"
                              >
                                <p className="text-md font-bold mb-3 text-green-500">
                                  Faculty of Science
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/math"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Department of Mathematics
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/phy"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Department of Physics
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/chem"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Department of Chemistry
                                </span>
                              </Link>
                            </li>
                          </div>

                          <div>
                            <Link
                              className="text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                              href="/department/compscienceeng"
                            >
                              <p className="text-md font-bold mb-3 text-green-500">
                                Faculty of Engineering and Technology
                              </p>
                            </Link>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/cse/"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Department of Computer Science & Engineering
                                </span>
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("admission")}
                    onMouseLeave={() => handleMouseLeave("admission")}
                  >
                    <Link
                      href="#"
                      className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Admission
                    </Link>
                    {isOpenMenu.admission && (
                      <ul className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden z-[99999]">
                        <div className="flex flex-col gap-y-3 p-4">
                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              Undergraduate
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/admission-test"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Admission Test
                                </span>
                              </Link>
                            </li>
                          </div>

                          <div>
                            <p className="text-md font-bold mb-3 text-green-500">
                              International Students
                            </p>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/entry-requirement"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  Entry Requirements
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                                href="/how-to-apply"
                              >
                                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                                  <CgChevronDoubleRight className="fill-green-500" />
                                </div>
                                <span className="whitespace-nowrap">
                                  How to Apply
                                </span>
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>
                  <Link
                    href="/research-extension"
                    className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Research
                  </Link>
                  <Link
                    href="/notice/all/"
                    className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Notices
                  </Link>
                  <Link
                    href="/career"
                    className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-green-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
              onClick={() =>
                isOpenMenu.about
                  ? handleMouseLeave("about")
                  : handleMouseEnter("about")
              }
              onMouseLeave={() => handleMouseLeave("about")}
            >
              About SSTU{" "}
              {!isOpenMenu.about && (
                <CgChevronRight className="float-end mt-1" />
              )}
              {isOpenMenu.about && <CgChevronDown className="float-end mt-1" />}
            </Link>
            {isOpenMenu.about && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/about-us/at-a-glance/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> At a
                  glance
                </Link>
                <Link
                  href="/about-us/act-of-the-university/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> SSTU ACT
                </Link>
                <Link
                  href="/about-us/organogram/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> SSTU
                  Organogram
                </Link>
                <Link
                  href="/about-us/bulletin/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> SSTU
                  Bulletin
                </Link>
                <Link
                  href="/about-us/monogram/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> SSTU
                  Monogram
                </Link>
                <Link
                  href="/about-us/campus-map/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Campus
                  Map
                </Link>
                <Link
                  href="/about-us/gallery/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Gallery
                </Link>
              </div>
            )}
            <Link
              href="#"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
              onClick={() =>
                isOpenMenu.administration
                  ? handleMouseLeave("administration")
                  : handleMouseEnter("administration")
              }
              onMouseLeave={() => handleMouseLeave("administration")}
            >
              Administration{" "}
              {!isOpenMenu.administration && (
                <CgChevronRight className="float-end mt-1" />
              )}
              {isOpenMenu.administration && (
                <CgChevronDown className="float-end mt-1" />
              )}
            </Link>
            {isOpenMenu.administration && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-center text-white">Statutory Office</div>
                <Link
                  href="/office-of-vice-chancellor"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Vice
                  Chancellor&#39;s Office
                </Link>
                <Link
                  href="/office-of-registrar"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Registrar&#39;s Office
                </Link>
                <Link
                  href="/librarian-ofc"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Librarian&#39;s Office
                </Link>
                <Link
                  href="/controllers-ofc"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Controller&#39;s Office
                </Link>
                <Link
                  href="/exam-controller-ofc"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Exam
                  Controller&#39;s Office
                </Link>
                <div className="text-center text-white">Authority</div>
                <Link
                  href="/syndicatelist"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Syndicate
                </Link>
                <Link
                  href="/academic-council"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Academic
                  Council
                </Link>
                <Link
                  href="/finance-committee"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Finance
                  Committee
                </Link>
                <Link
                  href="/plan-develop-com"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Planning
                  and Development Committee
                </Link>
                <div className="text-center text-white">
                  Office of the Deans
                </div>
                <Link
                  href="/department/science"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Faculty
                  of Science
                </Link>
                <Link
                  href="/department/compscienceeng"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Faculty
                  of Engineering & Technology
                </Link>
                <div className="text-center text-white">
                  Office of the Directors
                </div>
                <Link
                  href="/students-welfare"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Students&#39; Welfare
                </Link>
                <Link
                  href="/research-extension"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Research
                  & Extension
                </Link>
              </div>
            )}
            <Link
              href="#"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
              onClick={() =>
                isOpenMenu.academics
                  ? handleMouseLeave("academics")
                  : handleMouseEnter("academics")
              }
              onMouseLeave={() => handleMouseLeave("academics")}
            >
              Academics{" "}
              {!isOpenMenu.academics && (
                <CgChevronRight className="float-end mt-1" />
              )}
              {isOpenMenu.academics && (
                <CgChevronDown className="float-end mt-1" />
              )}
            </Link>
            {isOpenMenu.academics && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-center text-white">Faculty of Science</div>
                <Link
                  href="/math"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Department of Mathematics
                </Link>
                <Link
                  href="/phy"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Department of Physics
                </Link>
                <Link
                  href="/chem"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Department of Chemistry
                </Link>
                <div className="text-center text-white">
                  Faculty of Engineering and Technology
                </div>
                <Link
                  href="/cse/"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Department of Computer Science & Engineering
                </Link>
              </div>
            )}
            <Link
              href="#"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
              onClick={() =>
                isOpenMenu.admission
                  ? handleMouseLeave("admission")
                  : handleMouseEnter("admission")
              }
              onMouseLeave={() => handleMouseLeave("admission")}
            >
              Admission{" "}
              {!isOpenMenu.admission && (
                <CgChevronRight className="float-end mt-1" />
              )}
              {isOpenMenu.admission && (
                <CgChevronDown className="float-end mt-1" />
              )}
            </Link>
            {isOpenMenu.admission && (
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-center text-white">Undergraduate</div>
                <Link
                  href="/admission-test"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" />{" "}
                  Admission Test
                </Link>
                <div className="text-center text-white">
                  International Students
                </div>
                <Link
                  href="/entry-requirement"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> Entry
                  Requirements
                </Link>
                <Link
                  href="/how-to-apply"
                  className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
                >
                  <CgChevronDoubleRight className="float-start mt-1" /> How to
                  Apply
                </Link>
              </div>
            )}
            <Link
              href="/research-extension"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
            >
              Research
            </Link>
            <Link
              href="/notice/all/"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
            >
              Notices
            </Link>
            <Link
              href="/career"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-gray-300 hover:bg-green-800 px-3 py-2 block rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarResponsive;
