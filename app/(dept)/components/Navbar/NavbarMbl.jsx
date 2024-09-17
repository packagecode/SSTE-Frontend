"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDept } from "../../[deptName]/useDept";

const NavbarMbl = () => {
  const { deptName } = useDept();
  useEffect(() => {
    if (deptName)
      document.title = `Department of ${deptName} - Sunamgonj Science and Technology University`;
  }, [deptName]);
  return (
    <div className="bg-white py-6 border-b-2 border-b-green-500 flex flex-col md:flex-row items-center px-4 md:px-20 fixed top-0 w-full">
      <div className="flex items-center justify-between gap-x-4 ml-8 pl-8">
        <Image
          src="/logo.png"
          alt="logo"
          className="h-16 w-auto md:h-24 md:pr-20"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-y-1 md:text-left md:mt-0">
          <p className="text-sm font-medium uppercase"> Department of</p>
          <p className="text font-bold uppercase tracking-widest">{deptName}</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarMbl;
