import React from "react";
import VisitBtn from "./VisitBtn";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

const HeroBanner2 = () => {
  return (
    <>
      <div className="relative mt-[35rem] px-5 lg:mt-[54%] lg:flex flex-row text-white">
        <div className="lg:px-28 lg:ml-52 lg:w-1/2">
          <h1 className="text-red-600 font-cedar text-3xl">Nice to meet you.</h1>
          <h3 className="lg:leading-7 leading-7 text-[#2a3737] text-opacity-70 text-justify tracking-wide mt-7 lg:mt-6">
            Welcome to our church! We are a community of believers who gather to
            worship God, learn from His Word, and fellowship with one another.
            Our services are designed to be engaging, inspiring, and meaningful.
            We worship through music, prayer, and teaching, and we seek to
            create an atmosphere of reverence and joy.
          </h3>
          <VisitBtn />
        </div>
        <div className="lg:w-1/2 text-[#2a3737] my-9 lg:my-auto text-opacity-70r">
          <h1 className="text-xl text-gray-800  font-medium lg:font-normal">Weekly Gatherings</h1>
          <h3 className="lg:mt-8 mt-5">Sundays indoors & via live stream: 8am</h3>
          <h3 className="mt-4">
            <i>Mosaic kids meets in the children&apos;s Service</i>
          </h3>
          <div>
            <h1 className="text-xl text-gray-800 my-5 lg:font-normal font-medium">Location</h1>
            <span className="space-y-1">
                <h3>The Lapaz Shopping Center</h3>
                <h3>233 Adeleke Street, Hse 77</h3>
                <h3>Lynchburg, VA 24501</h3>
            </span>
                <div className="flex items-center mt-6 underline underline-offset-4 decoration-gray-300 decoration-1 text-[#518185] font-semibold gap-1">Get Directions <HiOutlineArrowLongRight /> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner2;
