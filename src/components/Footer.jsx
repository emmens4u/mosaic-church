import React from "react";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div>
        <Image
          src="/assets/FooterBanner.jpeg"
          alt="footerBanner"
          width={1500}
          height={300}
          className="absolute lg:w-screen lg:h-1/2 object-fill object-center"
        />
        <div className="absolute bg-[#0C3436]  h-1/3 md:h-2/5 lg:h-1/3 mt-28 w-full block  lg:my-[14rem] z-30  ">
            <ul className="flex gap-3 justify-center my-12 animate__animated animate__backInUp cursor-pointer">
              <li className="bg-white p-3 rounded-full">
                <FaYoutube size={25} />
              </li>
              <li className="bg-white p-3 rounded-full">
                <AiOutlineMail size={25} />
              </li>
              <li className="bg-white p-3 rounded-full">
                <FaInstagram size={25} />
              </li>
              <li className="bg-white p-3 rounded-full" >
                <FaPhone size={25} />
              </li>
            </ul>
            <p className="text-sm lg:text-base text-center text-gray-300">Contact us: 417-552-6584</p>
            <p className="text-center lg:text-base text-sm text-gray-300">&copy;2023 Mosaic Church. All rights reserved. Site by <Link href="https://www.linkedin.com/in/emmanuel-mensah-141b42191/" className="text-orange-500">Presh </Link></p>
          </div>
        </div>
    </>
  );
};

export default Footer;
