"use client";
import React from "react";
import PageLayout from "../../../component/PageLayout";
import SyndicateCard from "../../../component/SyndicateCard";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/authority/finance/`);
      const result = await response.json();
      setData(result);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <PageLayout
      title="Finance Committee"
      bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
      style={true}
    >
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Finance Committee Members
          </h2>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((member, index) => (
              <SyndicateCard
                key={index}
                name={member.name}
                title={member.designation}
                deparment={member.affliation}
                imageUrl={member.image}
                university={member.organization}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx global>
        {`
            .syndicate-img {
              height: 65% !important;
            } 

            .syndicate-img-no {
              height: auto !important;
            }
            `}
      </style>
    </PageLayout>
  );
};

// const members = [
//   {
//     name: "Prof. Dr. Md Abu Naim Sheikh",
//     title: "Chairman",
//     department: "Vice-Chancellor",
//     university: "Sunamgonj Science and Technology University",
//     imageUrl:
//       "https://sstu.ac.bd/wp-content/uploads/2024/01/1674212931820-240x300.jpg",
//   },
//   {
//     name: "Prof. Dr. Abu Talib Md. Kaosar Jamil",
//     title: "Member",
//     department: "Department of Physics",
//     university: "Dhaka University of Engineering & Technology",
//     imageUrl:
//       "https://www.duet.ac.bd/storage/profile_photo/dr-abu-talib-md-kaosar-jamil-1667114395241-175.jpg",
//   },
//   {
//     name: "Mr. Muhammad Jaminur Rahman",
//     title: "Member",
//     department: "Director, Public University Management Division",
//     university: "University Grants Commission of Bangladesh",
//     imageUrl: "",
//   },
//   {
//     name: "Mr. Ahammed Shibli",
//     title: "Member",
//     department:
//       "Deputy Secretary (Planning-3), Secondary and Higher Education Division",
//     university: "Ministry of Education",
//     imageUrl: "",
//   },
//   {
//     name: "Mr. Md. Mahbub Morshed",
//     title: "Member",
//     department: "Deputy Secretary, Finance Division",
//     university: "Ministry of Finance",
//     imageUrl: "",
//   },
//   {
//     name: "Mr. S. M Imrul Hasan",
//     title: "Member",
//     department:
//       "Deputy Secretary (Planning-2), Secondary and Higher Education Division",
//     university: "Ministry of Education",
//     imageUrl: "",
//   },
// ];

export default Page;
