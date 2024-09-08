"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { API_URL } from "@/app/apiurl";
import { useDept } from "../../useDept";
import Image from "next/image";

function CardItem({ image, title, description, date, id, event }) {
  const { deptId } = useDept();
  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          className=" w-full object-cover h-72"
          src={image}
          alt="ui/ux review check"
          width={72} height={72}
          layout="responsive"
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
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">{date}</Typography>
        {event ? (
          <Link href={`${deptId}/events/view/${id}`}>
            <Button color="green" className="">
              Read More
            </Button>
          </Link>
        ) : (
          <Link href={`/${deptId}/news/view/${id}`}>
            <Button color="green" className="">
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
  const { deptId } = useDept();

  useEffect(() => {
    fetchNews();
    fetchEvents();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${API_URL}/api/news`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      console.log(data);
      console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  // filter events and news data

  const filtererdNews = newsData.filter((item) => item.department === deptId);
  const filtererdEvents = events.filter((item) => item.department === deptId);

  return (
    <div className="container mx-auto pb-10 mt-10">
      <div className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 max-w-fit items-center text-green-500">
        <div className=" font-extralight text-2xl">ALL</div>{" "}
        <div className="font-bold text-2xl"> NEWS </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filtererdNews.map((news, index) => (
          <div className="" key={index}>
            <CardItem
              key={news.id}
              id={news.id}
              image={news.image}
              event={false}
              title={
                news.title?.length > 50
                  ? news.title.slice(0, 50) + "..."
                  : news.title
              }
              description={news.content.slice(0, 150) + "..."}
              date={news.date}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-x-2 mb-8 mt-10 pb-5 border-b-2 border-b-green-500 max-w-fit items-center text-green-500">
        <div className=" font-extralight text-2xl">ALL</div>{" "}
        <div className="font-bold text-2xl"> EVENTS</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {filtererdEvents.map((news, index) => (
          <div className="" key={index}>
            <CardItem
              key={news.id}
              image={news.image}
              event={true}
              id={news.id}
              title={
                news.title?.length > 50
                  ? news.title.slice(0, 50) + "..."
                  : news.title
              }
              description={news.content.slice(0, 150) + "..."}
              date={news.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
