import React from "react";
import Image from "next/image";
import { images } from "@/helper";

const HeroGrids = () => {
  
  return (
    <>
      <div className="">
        <Image
          src="/assets/gridbackground.jpeg"
          alt="gridbackground"
          width={1800}
          height={1100}
          className="my-14 absolute  sm:block hidden object-cover"
        />
        <div className="lg:pt-[12rem] py-10 my-14 relative  px-6 bg-[#518185] lg:bg-transparent h-1/2 lg:w-3/5 mx-auto">
          <h1 className="text-center text-3xl text-white font-light my-12 lg:my-6">
            Mosaic Minstries
          </h1>
          <div class="lg:grid gap-8 grid-cols-3 flex flex-col relative grid-rows-3">
            {images.map((image) => (
              <div
                key={image.id}
                class="col-span-1 row-span-1 relative flex flex-col items-center"
              >
                <h2 className="absolute z-30 text-white lg:py-20 py-24 text-3xl  whitespace-nowrap font-semibold">
                  {image.text}
                </h2>
                <h2 className="absolute z-30 text-white lg:py-28 py-32 lg:text-sm text-base px-24 whitespace-nowrap lg:font-light font-normal">
                  {image.subtext}
                </h2>
                <div class="absolute w-full md:w-[37.5rem] lg:w-full h-full bg-gray-800 opacity-60 z-10"></div>

                <Image
                  src={image.image}
                  alt="mosaic-kid"
                  width={600}
                  height={600}
                  className="object-cover h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroGrids;
