// components/SyndicateCard.jsx
import React from "react";
import Image from "next/image";

const SyndicateCard = ({ name, title, department, university, imageUrl }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
      <Image
        className="w-full md:h-2/3 h-2/5 rounded-full border-4 border-green-500 mb-4 syndicate-img"
        src={imageUrl || ''}
        alt={name}
        width={24} height={100} layout="responsive"
      />
      <div className="text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-green-600">{title}</p>
        {department && <p>{department}</p>}
        <p>{university}</p>
      </div>
    </div>
  );
};

export default SyndicateCard;
