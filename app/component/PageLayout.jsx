import React from "react";

const PageLayout = ({ title, bg, children, style }) => {
  let localClassName;
  if (style) {
    localClassName =
      "w-full container mx-auto shadow-md border rounded-md mt-16 md:p-10 text-black";
  } else {
    localClassName = "container mx-auto";
  }
  return (
    <div className="min-h-screen">
      <div
        className="text-white font-bold text-4xl text-center object-cover bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-black bg-opacity-45 pt-40 pb-40  h-52 ">{title}</div>
      </div>
      <div className={localClassName}>{children}</div>
    </div>
  );
};

export default PageLayout;
