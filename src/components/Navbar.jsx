import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import 'animate.css'

const Navbar = () => {
  let Links = [
    { name: "MINISTRIES", link: "/" },
    { name: "MESSAGES", link: "/" },
    { name: "EVENTS", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <div className="bg-white w-full h-[110px] lg:h-40 z-10 drop-shadow-md absolute">
      <div className="px-2 flex  items-center lg:mx-auto justify-between lg:w-8/12 h-full">
        <div className="flex items-center">
          <Image
            src="/assets/mosaic-logo.png"
            width={150}
            height={100}
            alt="logo"
            loading="lazy"
          />
          <ul className="hidden text-sm font-semibold tracking-widest font-sofia gap-4 md:flex mx-28 justify-between">
            {Links.map((link) => (
              <li key={link.name}>
                <Link href={`${link.link}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden  md:flex font-sofia text-white gap-2 lg:text-sm">
          <button className="tracking-widest px-4 py-2  rounded-md bg-[#518185]">
            PRAY
          </button>
          <button className="tracking-widest px-4  rounded-md bg-[#518185]">GIVE</button>
          <button className="tracking-widest px-4 whitespace-nowrap  rounded-md bg-[#ffa42e]">LIVE STREAM</button>
        </div>
        <div className=" md:hidden mr-4 text-2xl" onClick={handleClick}>
          {!open ? (
            <HiMenu size={30} className="text-[#518185] " />
          ) : (
            <HiX size={30} className="text-[#ffa42e]" />
          )}
        </div>
      </div>
<ul className={!open ? "lg:hidden h-screen bg-[#2a3737] animate__animated animate__slideOutLeft animate__faster" : "absolute h-screen animate__animated animate__slideInLeft animate__fast bg-[#2a3737] w-full px-8" }>
        {Links.map((link) => (
          <li key={link.name} className="text-white font-sofia text-xl py-2  tracking-widest">
            <Link href={`${link.link}`} className="">{link.name}</Link>
          </li>
        ))}
        <div className="left-0 absolute items-start flex flex-col gap-1 px-8  my-4 font-sofia text-xl   text-white">
          <button className="px-8  tracking-widest rounded-md bg-[#518185] py-2">
            PRAY
          </button>
          <button className="px-8 tracking-widest py-2 rounded-md bg-[#518185]">GIVE</button>
          <button className="px-8 tracking-widest py-2 rounded-md bg-[#ffa42e]">LIVE STREAM</button>
        </div>
      </ul>
      
    </div>
  );
};

export default Navbar;
