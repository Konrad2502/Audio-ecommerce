import React, { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import { Link } from "react-router-dom";

export default function Hero() {
  const [bgImage, setBgImage] = useState("/assets/home/desktop/image-hero.jpg");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setBgImage("/assets/home/desktop/image-hero.jpg");
      } else {
        setBgImage("/assets/home/mobile/image-header.jpg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="h-[650px] bg-cover bg-center px-6 md:px-[70px] flex items-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col w-full md:max-w-[600px] gap-6  text-center md:text-left md:items-start items-center">
        <h5 className="subtitle-1 text-gray-500 font-bold">New product</h5>
        <h1 className="heading-2 md:heading-1 text-whiteprimary">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-greyprimary text-base">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/products/4">
          <PrimaryButton>See product</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
