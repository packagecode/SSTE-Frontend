"use client";

import React, { useState, useEffect, useRef } from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState({
    about: false,
    administration: false,
    academics: false,
    admission: false,
    research: false,
    notices: false,
  });

  const timeoutIds = useRef({});

  const handleMouseEnter = (menu) => {
    if (timeoutIds.current[menu]) {
      clearTimeout(timeoutIds.current[menu]);
    }
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    timeoutIds.current[menu] = setTimeout(() => {
      setIsOpen((prevState) => ({
        ...prevState,
        [menu]: false,
      }));
    }, 50);
  };

  // useEffect(() => {
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <>
      <header className="bg-green-600">
        <div className="container mx-auto flex items-center justify-center py-4 px-6">
          <Link href="/">
            <div className="flex items-center">
              <Image src="/logo.png" alt="SSTU Logo" className="h-20 mr-4" width={100} height={100}/>
              <div className="text-center">
                <h1 className="text-white text-3xl font-bold">
                  Sunamgonj Science and Technology University
                </h1>
                <h2 className="text-white text-3xl">
                  সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <nav className="bg-green-700 sticky top-0 z-[99999999999999999999]">
        <div className="container mx-auto flex space-x-6 py-3 px-6 justify-center items-center">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave("about")}
          >
            <a href="#" className="text-white hover:text-gray-300">
              About SSTU
            </a>
            {isOpen.about && (
              <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden z-[999999]">
                <li>
                  <Link
                    className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                    href="/about-us/at-a-glance/"
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      <CgChevronDoubleRight className="fill-green-500" />
                    </div>
                    <span className="whitespace-nowrap">At a glance</span>
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
                    <span className="whitespace-nowrap">SSTU Organogram</span>
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
                    <span className="whitespace-nowrap">SSTU Bulletin</span>
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
                    <span className="whitespace-nowrap">SSTU Monogram</span>
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
                    <span className="whitespace-nowrap">Campus Map</span>
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
            <a href="#" className="text-white hover:text-gray-300">
              Administration
            </a>
            {isOpen.administration && (
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
                        <span className="whitespace-nowrap">Syndicate</span>
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
            <a href="#" className="text-white hover:text-gray-300">
              Academics
            </a>
            {isOpen.academics && (
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
            <a href="#" className="text-white hover:text-gray-300">
              Admission
            </a>
            {isOpen.admission && (
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
                        <span className="whitespace-nowrap">How to Apply</span>
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            )}
          </div>
          <div className="relative">
            <a
              href="/research-extension/"
              className="text-white hover:text-gray-300"
            >
              Research
            </a>
          </div>
          <div className="relative">
            <a href="/notice/all/" className="text-white hover:text-gray-300">
              Notices
            </a>
          </div>
          <div className="relative">
            <a href="/career/" className="text-white hover:text-gray-300">
              Career
            </a>
          </div>
          <a href="/contact-us/" className="text-white hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
