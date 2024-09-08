"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import PageLayout from "../../../../component/PageLayout";
import Image from "next/image";

function CardItem({ image, title, description, date, id, event }) {
  function changeDateFormat(date) {
    const newDate = new Date(date);
    return newDate.toDateString();
  }
  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          className="w-full h-72"
          src={image || ""}
          alt="ui/ux review check"
          width={72}
          height={72} 
          // layout="responsive"
        />
      </CardHeader>
      <CardBody className=" ">
        <Typography className="h-[4rem]" variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="text-sm text-justify  h-[5rem] font-normal"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between pt-0">
        <Typography className="font-normal text-sm">
          {changeDateFormat(date)}
        </Typography>
        {event ? (
          <Link href={`/events/view/${id}`}>
            <Button color="green" className="">
              Read More
            </Button>
          </Link>
        ) : (
          <Link href={`/notice/view/${id}`}>
            <Button color="green" className="btn-sm py-2 px-4">
              Read More
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchNews();
    // fetchEvents();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notice`);
      if (!response.ok) {
        console.error("Error fetching news data:", error);
      }
      const data = await response.json();

      //desc order all notices data
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      // console.log(data);
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      setNewsData(data.slice(0, 12));
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notice`);
      if (!response.ok) {
        console.error("Error fetching events data:", error);
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  // merge events and news data
   const mergedData = [...newsData, ...events];

  return (
    <PageLayout style={false} title="Notices" bg="/notice_bg.png">
      <div className="container mx-auto pb-10 mt-10">
        <div className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 max-w-fit items-center text-green-500">
          <p className=" font-extralight text-2xl">ALL</p>{" "}
          <p className="font-bold text-2xl"> NOTICES</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {newsData.map((news, index) => (
            <div className="mb-10" key={index}>
              <CardItem
                key={news.id}
                id={news.id}
                image={news.image}
                event={false}
                date={news.created_at}
                title={
                  news.title?.length > 50
                    ? news.title.slice(0, 50) + "..."
                    : news.title
                }
                description={news.content.slice(0, 150) + "..."}
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default LatestNews;
