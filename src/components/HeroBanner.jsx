import React from "react";
import Image from "next/image";
import VisitBtn from "./visitBtn";

const HeroBanner = () => {
  return (
    <>
      <div className="my-28 lg:my-12 ">
        <Image
          src="/assets/heroBanner.png"
          alt="herobanner"
          width={1600}
          height={1100}
          objectFit="cover"
          sizes="100vw"
          quality={100}
          className="absolute h-[25rem] lg:h-screen object-cover"
        />
        <div className="mx-6 py-[4.5rem] lg:py-60 lg:mx-[21.3rem] absolute  text-white">
          <span className=" font-sofia text-xl ">
            A Church in Lynchburg, VA trying to
          </span>
          <div className=" mt-5 text-3xl lg:text-6xl font-sofia font-medium">
            Live by{" "}
            <span className="font-dancing font-thin  text-[#ffa42e]">
              Faith,
            </span>
          </div>
          <div className=" text-3xl lg:text-6xl font-sofia font-medium">
            be Known by{" "}
            <span className="font-dancing font-thin  text-[#ffa42e]">
              Love,
            </span>
          </div>
          <div className=" text-3xl  lg:text-6xl font-sofia  font-medium">
            & be a Voice of{" "}
            <span className="font-dancing font-thin  text-[#ffa42e]">
              Hope.
            </span>
          </div>
          <VisitBtn />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
