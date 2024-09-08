"use client";
import React from "react";
import SyndicateCard from "../../../component/SyndicateCard";
import PageLayout from "../../../component/PageLayout";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/authority/syndicate/`);
      const result = await response.json();
      setData(result);
      // console.log(result);
      setLoading(false);
    } catch (error){
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
      title="Syndicate Members"
      bg="https://img.freepik.com/free-vector/3d-abstract-background-with-paper-cut-shape-colorful-green-carving-art_1217-4066.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714003200&semt=ais"
      style={true}
    >
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">The Syndicate</h2>
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
//     name: "Prof. Dr. Kazi Muheymin-Us-Sakib",
//     title: "Member",
//     department: "Institute of Information Technology",
//     university: "Dhaka University",
//     imageUrl: "https://duap.du.ac.bd/upload/img/iit_sakib.jpg",
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
//     name: "Prof. Dr. Md. Khaled Hossain",
//     title: "Member",
//     department: "Department of Bangla",
//     university: "Jahangirnagar University",
//     imageUrl: "https://juniv.edu/storage/image/teacher/541_w1c7jGLe.jpg",
//   },
//   {
//     name: "Mr. Md. Zharul Islam",
//     title: "Member",
//     department: "Joint Secretary, Secondary & Higher Education Division",
//     university: "Ministry of Education",
//     imageUrl: "https://example.com/path/to/image4.jpg",
//   },
//   {
//     name: "Ms. Rownak Jahan",
//     title: "Member",
//     department: "Joint Secretary",
//     university: "Ministry of Finance",
//     imageUrl:
//       "https://mof.gov.bd/sites/default/files/files/mof.portal.gov.bd/officer_list/9f62c60c_6809_4581_8e23_61750f355618/Rownak%20Jahan.jpg",
//   },
//   {
//     name: "Prof. Dr. Mohammad Alamgir",
//     title: "Member",
//     department: "Department of Civil Engineering",
//     university: "Khulna University of Engineering & Technology",
//     imageUrl:
//       "https://www.kuet.ac.bd/department/CE/images/faculty/100_2015-11-18_1447816815.jpg",
//   },
//   {
//     name: "Engr. Md. Abul Khair Salim",
//     title: "Member",
//     department: "Managing Director & CEO",
//     university: "Nabo Uddoge Limited",
//     imageUrl: "https://example.com/path/to/image4.jpg",
//   },
//   {
//     name: "Mr. Md. Khairul Huda",
//     title: "Member",
//     department: "Managing Director",
//     university: "Euro Petro Product Ltd.",
//     imageUrl:
//       "data:image/jpeg;base64,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",
//   },
// ];

export default Page;
