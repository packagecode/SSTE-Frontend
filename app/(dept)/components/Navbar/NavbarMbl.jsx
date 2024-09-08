import React from "react";
import Image from "next/image";

const NavbarMbl = () => {
  return (
    <div className="bg-white py-6 border-b-2 border-b-green-500 flex flex-col md:flex-row items-center px-4 md:px-20 fixed top-0 w-full">
      <div className="flex items-center justify-between gap-x-4 ml-8 pl-8">
        <Image src="/logo.png" alt="logo" className="h-16 w-auto md:h-24 md:pr-20" width={100} height={100} />
        <div className="flex flex-col gap-y-1 md:text-left md:mt-0">
          <p className="text-sm font-medium uppercase"> Department of</p>
          <p className="text font-bold uppercase tracking-widest">
            Computer Science and Engineeringds
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarMbl;
