import React from "react";

export default function InfoBlock() {
  return (
    <div className="flex flex-col md:flex-row px-[70px] my-[100px] md:my-[200px] h-auto md:h-[600px]">
      <div className="md:basis-1/2 md:pr-12 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
        <h2 className="heading-2">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="text-greyprimary mt-4">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className="w-full h-[300px] md:h-full md:w-1/2 object-cover rounded-xl"
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="info"
      />
    </div>
  );
}
