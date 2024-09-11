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
import Image from "next/image";
import Carousel from "react-multi-carousel";

function CardItem({ image, title, description, date, id, event }) {
  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <div className="md:h-48">
          <Image
            className="w-full object-cover hover:scale-110 transition-all duration-200"
            src={image || ""}
            alt="ui/ux review check"
            width={100}
            height={72}
            layout="responsive"
          />
        </div>
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
          <Link href={`/events/view/${id}`}>
            <Button color="green" className="">
              Read More
            </Button>
          </Link>
        ) : (
          <Link href={`/news/view/${id}`}>
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
  const [featuredNews, setFeaturedNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchNews();
    fetchFeaturedNews();
    fetchEvents();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(`${API_URL}/api/news`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      //sort the data by created_at desc
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      // console.log(data);
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      setNewsData(data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const fetchFeaturedNews = async () => {
    try {
      const response = await fetch(`${API_URL}/api/featured-news`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      // sort the data by created_at desc
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      // console.log(data.news);
      // console.log("-/-/-/-/-/-//-/-/-/-/-/-/-//-/-");
      setFeaturedNews(data[0].news);
    } catch (error) {
      console.error("Error fetching featured news data:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      //sort the data by created_at desc
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  // merge events and news data
  // const mergedData = [...newsData, ...events];

  return (
    <div className="mb-10">
      <div className="container mx-auto pt-10 ">
        <Typography className="flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 md:max-w-fit items-center text-green-500">
          <span className="font-bold text-2xl">NEWS</span>
          <span className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
            <Link href="/news/all">View All</Link>
          </span>
        </Typography>
        <div
          className="md:flex gap-x-2 items-center justify-center p-10 rounded-lg"
          style={{
            backgroundImage: "url('lnbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Card
            shadow={false}
            className="md:flex relative grid md:h-[20rem] md:w-1/4 items-end justify-center overflow-hidden text-center mb-4"
          >
            <Image
              src={featuredNews.image ? `${API_URL}${featuredNews.image}` : "/placeholder.png"}
              alt="news"
              className="w-full md:h-[20rem] object-cover hover:scale-110 transition-all duration-200 hover:cursor-pointer"
              width={100}
              height={100}
              layout="responsive"
            />
            <CardBody className="relative md:py-14 px-6 md:px-12">
              <Typography
                variant="h4"
                color="black"
                className="mb-6 font-medium leading-[1.5]"
              >
                <span className="text-3xl font-bold">LATEST</span>
                <span className="text-3xl font-bold">NEWS</span>
              </Typography>
            </CardBody>
          </Card>
          <div className="md:w-2/4 text-justify flex flex-col gap-y-3 md:ml-5">
            <span className="text-2xl font-bold text-white">
              {featuredNews.title}
            </span>
            <span className=" text-white opacity-90">
              {featuredNews.content}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-10 mt-3">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {newsData.slice(0, 4).map((news, index) => (
            <div className="" key={index}>
              <CardItem
                key={news.id}
                id={news.id}
                image={news.image}
                event={false}
                title={
                  news.title?.length > 40
                    ? news.title.slice(0, 40) + "..."
                    : news.title
                }
                description={news.content.slice(0, 150) + "..."}
                date={news.date}
              />
            </div>
          ))}
        </div> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={newsData.length > 4}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {newsData.slice(0, 4).map((news, index) => (
            <div className="p-3" key={index}>
              <CardItem
                key={news.id}
                id={news.id}
                image={news.image}
                event={false}
                title={
                  news.title?.length > 40
                    ? news.title.slice(0, 40) + "..."
                    : news.title
                }
                description={news.content.slice(0, 150) + "..."}
                date={news.date}
              />
            </div>
          ))}
        </Carousel>

        <Typography className="mt-20 flex gap-x-2 mb-8 pb-5 border-b-2 border-b-green-500 md:max-w-fit items-center text-green-500">
          <span className="font-bold text-2xl">EVENTS</span>
          <span className="pl-5 ml-5 border-l-2 border-slate-900 hover:translate-x-5 transition-all duration-200">
            <Link href="/news/all">View All</Link>
          </span>
        </Typography>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
          </div> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={events.length > 4}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {events.slice(0, 4).map((news, index) => (
            <div className="p-3" key={index}>
              <CardItem
                key={news.id}
                image={news.image}
                event={true}
                id={news.id}
                title={
                  news.title?.length > 40
                    ? news.title.slice(0, 40) + "..."
                    : news.title
                }
                description={news.content.slice(0, 150) + "..."}
                date={news.date}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestNews;
