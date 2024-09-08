"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgChevronDoubleRight, CgChevronDown } from "react-icons/cg";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex z-[999999999999] justify-between items-center py-3 fixed top-0 w-full ${
        scrolling
          ? "bg-white text-gray-900 shadow-md transition-all duration-300"
          : "bg-transparent text-gray-900 transition-all duration-300 "
      }`}
    >
      <div className="relative">
        <div className=" px-4 py-4 fixed top-[-10px] left-5 flex items-center justify-between gap-x-2">
          <Link href="/">
            <Image src="/logo.png" className="w-full h-20" alt="logo" width={100} height={100}  layout="responsive" />
          </Link>
        </div>
        <div className="text-3xl px-4 py-4 fixed top-[10px] left-[140px]">
          {/* সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় */}
          Sunamgonj Science & Technology University
        </div>
      </div>
      <ul className="flex flex-wrap justify-center items-center font-medium text-lg px-4">
        <li className="p-4 lg:px-2">
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="/"
          >
            Home
          </Link>
        </li>

        <li
          className="p-4 lg:px-2 relative flex items-center space-x-1"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="#0"
            aria-expanded={open}
          >
            About SSTU
          </Link>
          <button
            className="shrink-0 p-1"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <CgChevronDown
              className={`w-4 h-4 ${
                scrolling ? "fill-slate-500" : "fill-slate-50"
              }`}
            />
          </button>
          <ul
            className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden"
            style={{ display: open ? "block" : "none" }}
            onFocusOut={() => setOpen(false)}
          >
            <li>
              <Link
                className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
              >
                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                  <CgChevronDoubleRight className="fill-green-500" />
                </div>
                <span className="whitespace-nowrap">Gallery</span>
              </Link>
            </li>
          </ul>
        </li>

        {/* Menu 2 */}
        <li
          className="p-4 lg:px-2 relative flex items-center space-x-1"
          onMouseEnter={() => setOpen2(true)}
          onMouseLeave={() => setOpen2(false)}
        >
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="#0"
            aria-expanded={open}
          >
            Administration
          </Link>
          <button
            className="shrink-0 p-1"
            aria-expanded={open}
            onClick={() => setOpen2(!open)}
          >
            <CgChevronDown
              className={`w-4 h-4 ${
                scrolling ? "fill-slate-500" : "fill-slate-50"
              }`}
            />
          </button>
          <ul
            className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden"
            style={{ display: open2 ? "block" : "none" }}
            onFocusOut={() => setOpen(false)}
          >
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
                    href="syndicatelist"
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
                    <span className="whitespace-nowrap">Academic Council</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-slate-900 hover:text-green-500 transition-all duration-100 ease-in-out  hover:bg-slate-50 flex items-center p-2"
                    href="finance-committee"
                  >
                    <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                      <CgChevronDoubleRight className="fill-green-500" />
                    </div>
                    <span className="whitespace-nowrap">Finance Committee</span>
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
                    <span className="whitespace-nowrap">Students&#39; Welfare</span>
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
        </li>

        <li
          className="p-4 lg:px-2 relative flex items-center space-x-1"
          onMouseEnter={() => setOpen3(true)}
          onMouseLeave={() => setOpen3(false)}
        >
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="#0"
            aria-expanded={open}
          >
            Academics
          </Link>
          <button
            className="shrink-0 p-1"
            aria-expanded={open}
            onClick={() => setOpen3(!open)}
          >
            <CgChevronDown
              className={`w-4 h-4 ${
                scrolling ? "fill-slate-500" : "fill-slate-50"
              }`}
            />
          </button>
          <ul
            className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden"
            style={{ display: open3 ? "block" : "none" }}
            onFocusOut={() => setOpen(false)}
          >
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
                    href="/department/mathematics"
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
                    href="/department/physics"
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
                    href="/department/chemistry"
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
                    href="/department/cse"
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
        </li>
        {/* Menu 4 */}
        <li
          className="p-4 lg:px-2 relative flex items-center space-x-1"
          onMouseEnter={() => setOpen4(true)}
          onMouseLeave={() => setOpen4(false)}
        >
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="#0"
            aria-expanded={open}
          >
            Admission
          </Link>
          <button
            className="shrink-0 p-1"
            aria-expanded={open}
            onClick={() => setOpen4(!open)}
          >
            <CgChevronDown
              className={`w-4 h-4 ${
                scrolling ? "fill-slate-500" : "fill-slate-50"
              }`}
            />
          </button>
          <ul
            className="origin-top-left absolute top-full left-0 -translate-x-1/2 min-w-max bg-white text-gray-900 border border-slate-200 p-2 rounded-lg shadow-xl [x-cloak]:hidden"
            style={{ display: open4 ? "block" : "none" }}
            onFocusOut={() => setOpen(false)}
          >
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
                    <span className="whitespace-nowrap">Admission Test</span>
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
        </li>
        <li className="p-4 lg:px-2">
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="/contact-us"
          >
            Research
          </Link>
        </li>
        <li className="p-4 lg:px-2">
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="#"
          >
            Notices
          </Link>
        </li>
        <li className="p-4 lg:px-2">
          <Link
            className=" hover:text-green-500 transition-all duration-100 ease-in-out"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
