"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import NoticeSkeleton from "@/components/skeleton/NoticeSkeleton";

// function CardItem({ title, description, date, image }) {
//   return (
//     <Card className="w-[24rem] overflow-hidden">
//       <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
//         <img className=" w-full object-cover h-72" src={image} alt="ui/ux review check" />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h4" color="blue-gray">
//           {title}
//         </Typography>
//         <Typography variant="lead" color="gray" className="mt-3 font-normal">
//           {description}
//         </Typography>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between">
//         <Typography className="font-normal">{date}</Typography>
//         <Link href="/notice/view/test">
//           <Button color="green" className="">
//             Read More
//           </Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

const LatestNotice = () => {
  const [noticeData, setnoticeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notice`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      // console.log(data);
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      setnoticeData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notice data:", error);
    }
  };

  function changeDateFormat(date) {
    const newDate = new Date(date);
    return newDate.toDateString();
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md md:p-4 md:float-right md:w-1/3 w-full">
      <div className="border-b-2 border-green-500 pb-2 mb-4">
        <h2 className="text-lg font-semibold text-black-700">Notice Board</h2>
      </div>
      {loading && (
        <div className="flex flex-col justify-between">
          <NoticeSkeleton />
          <NoticeSkeleton />
          <NoticeSkeleton />
          <NoticeSkeleton />
          <NoticeSkeleton />
        </div>
      )}
      {noticeData.length > 0 && !loading && (
        <div className="flex flex-col justify-between">
          <ul className="space-y-4">
            {noticeData.slice(0, 6).map((notice, index) => (
              <li key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-13 bg-green-600 text-white rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-bold">
                      {changeDateFormat(notice.created_at).split(" ")[2]}
                    </p>
                    <p className="text-sm font-bold">
                      {changeDateFormat(notice.created_at).split(" ")[1]}
                    </p>
                    <p className="text-sm font-bold">
                      {changeDateFormat(notice.created_at).split(" ")[3]}
                    </p>

                    {/* <p className="text-lg">{notice.date.split(" ")[0]}</p>
                  <p className="text-sm">{notice.date.split(" ")[1]}</p>
                  <p className="text-sm">{notice.date.split(" ")[2]}</p> */}
                  </div>
                </div>
                <div className="text-gray-700">
                  <Link href={`/notice/view/${notice.id}`}>{notice.title}</Link>
                </div>
              </li>
            ))}
          </ul>
          <Link className="pt-4 grid justify-items-end" href="/notice/all">
            <Button color="green" className="" size="sm">
              Read More
            </Button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LatestNotice;
