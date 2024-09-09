"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/app/apiurl";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Image from "next/image";

const ShowImageModal = ({ image, closeModal, caption }) => {
  const openLink = () => {
    window.open(image, "_blank");
  };
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999999]">
    //   <div className="bg-white p-10 rounded-lg relative flex  flex-col items-center gap-y-4">
    //     <button
    //       onClick={closeModal}
    //       className="absolute top-0 right-0 p-3 h-8 w-8 flex items-center justify-center m-2 bg-red-500 text-white rounded-full"
    //     >
    //       X
    //     </button>
    //     <Image
    //       className="h-96 w-full object-cover object-center"
    //       src={image || ''}
    //       alt="Image" layout="responsive"
    //       width={100} height={96}
    //     />
    //     <div className="">{caption}</div>
    //   </div>
    // </div>
    <div
      class="relative z-10 z-[999999]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/*   
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}

      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/*       
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       */}
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-3 h-8 w-8 flex items-center justify-center m-2 bg-red-500 text-white rounded-full"
            >
              X
            </button>
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 clear-both mt-10">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <Image
                  className="h-96 w-full object-cover object-center hover:cursor-pointer"
                  src={image || ""}
                  alt="Image"
                  layout="responsive"
                  width={100}
                  height={96}
                  onClick={openLink}
                />
                <div class="mt-2">
                  <p class="text-lg text-gray-500">{caption}</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={closeModal}
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampusLife = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");

  function closeModal() {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  function openModal(image, caption) {
    setIsModalOpen(true);
    setSelectedImage(image);
    setCaption(caption);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}/api/gallery`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

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

  return (
    <>
      <div className="mt-20 mb-10 justify-center items-center flex flex-col gap-y-3">
        <p className="font-semibold text-2xl text-green-700 md:text-3xl text-center">
          CAMPUS LIFE
        </p>
        <div className="border-t border-2 border-green-500 w-14"></div>
      </div>
      <div
        className="container mx-auto md:p-5"
        style={{
          backgroundImage: "url('hmbg4.png')",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={images.length > 4}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-48 mx-5 cursor-pointer"
              onClick={() => openModal(image.image, image.title)}
            >
              <Image
                className="h-48 max-w-full rounded-lg object-cover object-center hover:scale-110 transition-all duration-200"
                src={image.image || ""}
                alt="Image"
                width={100}
                height={48}
                layout="responsive"
              />
            </div>
          ))}
        </Carousel>
      </div>
      {isModalOpen && (
        <ShowImageModal
          image={selectedImage}
          caption={caption}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default CampusLife;
