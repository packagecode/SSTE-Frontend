"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-white py-4 border-b-2 border-b-green-500 flex flex-col md:flex-row items-center px-4 md:px-20">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-20 md:h-24 pr-0 md:pr-20 w-auto"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-y-1 text-center md:text-left mt-4 md:mt-0">
          <p className="text-xl tracking-widest font-bold uppercase"> Career</p>

          <span className="font-bold uppercase tracking-widest text-green-700">
            Sunamgonj Science and Technology University
          </span>
        </div>
        {/* links */}
        <div className="ml-auto flex gap-x-4 mt-4 md:mt-0">
          <Link
            href="/"
            className="text-green-500 max-w-fit px-2 py-1 font-bold rounded-md"
          >
            Main Website
          </Link>
          <Link
            href="/career"
            className="bg-green-500 max-w-fit px-2 py-1 text-white rounded-md"
          >
            Home
          </Link>
          <Link
            href="/career/guidelines"
            className="bg-green-500 max-w-fit px-2 py-1 text-white rounded-md"
          >
            Application Guidelines
          </Link>
          <Link
            href="/career/resources"
            className="bg-green-500 max-w-fit px-2 py-1 text-white rounded-md"
          >
            Resources
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//bg-green-500 max-w-fit px-2 py-1 text-white rounded-md
