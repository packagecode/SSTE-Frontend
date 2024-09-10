"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDept } from "../../[deptName]/useDept";
import Image from "next/image";

const Navbar = () => {
  const { deptName } = useDept();
  useEffect(() => {
   if(deptName) document.title = `Department of ${deptName} - Sunamgonj Science and Technology University`;
  }, [deptName]);
  return (
    <>
      <div className="bg-white py-6 border-b-2 border-b-green-500 flex flex-col md:flex-row items-center px-4 md:px-20">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-full h-28 md:h-28 pr-0 md:pr-20"
            width={100} height={100}
          />
        </div>
        <div className="flex flex-col gap-y-1 text-center md:text-left mt-4 md:mt-0">
          <p className="text-md font-medium uppercase"> Department of</p>
          <p className="text-2xl font-bold uppercase tracking-widest">
            {deptName}
          </p>
          <span className="font-bold uppercase tracking-widest text-green-700">
            Sunamgonj Science and Technology University
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//bg-green-500 max-w-fit px-2 py-1 text-white rounded-md
