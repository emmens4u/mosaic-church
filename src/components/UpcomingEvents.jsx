import React from "react";
import Image from "next/image";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      image: "/assets/localOutreach.jpeg",
      text: "Prison Outreach",
      subtext:
        "Let's go to support our brothers at the prisons and encourage them and share the word with them. Quam fugiat ea eveniet deleniti maiores.",
      date: "Jan 25",
    },
    {
      id: 2,
      image: "/assets/mosaicPrayer.jpeg",
      text: "Gethsemane Hour",
      subtext:
        "Spend time in the prayer gardens to pour your heart out and cry to God. Quam fugiat ea eveniet deleniti maiores.",
      date: "Jul 2",
    },
  ];
  return (
    <>
      <h2 className="text-center text-3xl text-black font-normal my-12 lg:my-6 ">
        Upcoming Events
      </h2>
      <div className="relative grid grid-cols-1  sm:grid-cols-2 lg:px-36 lg:grid-cols-5 lg:tracking-tight lg:font-light lg:text-sm gap-10 px-8 mb-10">
        {events.map((event) => (
          <div key={event.id} className="relative">
            <div className="bg-[#518185] m-3 lg:w-10 lg:h-10 w-16 right-0 h-16 rounded-md absolute flex flex-col text-white ">
              <span className="font-medium lg:text-xs text-lg text-center">Jan</span>{" "}
              <span className="text-center lg:text-lg text-2xl font-semibold">25</span>
            </div>
            <Image
              src={event.image}
              alt="upcoming-image"
              width={600}
              height={600}
              className="w-full lg:w- object-cover"
            />
            <div className="text-2xl text-gray-800 text-center font-normal my-4">
              {event.text}
            </div>
            <div className="text-justify text-gray-500 my-4">
              {event.subtext}
            </div>
            <div className="text-center text-gray-400">{event.date}, 2023</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingEvents;
