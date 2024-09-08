import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const Faculty = ({ image, name, position, bio, slug }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6 my-6 ml-2  text-center">
      {/* <span>{image ||'nothing'}</span> */}
      <Image
        src={image || '/placeholder.png'}
        alt="Team Member 1"
        className="w-24 h-24 object-cover rounded-full mb-4 items-center"
        width={24} height={24}
        loading="lazy"
        layout="responsive"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm font-bold uppercase tracking-widest mb-2">
        {position}
      </p>
      <p className="text-gray-700 text-justify">{bio}</p>
      <div className="flex items-start justify-center gap-x-2 max-w-fit text-gray-700 px-5 py-2 mt-3 uppercase tracking-widest hover:underline hover:cursor-pointer rounded-lg">
        <FiExternalLink className="h-6 w-5" />
        <Link href={`people/details/${slug}`}>View Profile</Link>
      </div>
    </div>
  );
};

export default Faculty;
