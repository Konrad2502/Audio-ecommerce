import React from 'react'

export default function InfoBlock() {
  return (
    <div className="flex px-[70px] my-[200px] h-[600px]">
      <div className="basis-1/2 pr-12 flex flex-col justify-center">
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
        className="h-full w-1/2 object-cover"
        src="/assets/shared/desktop/image-gallery-1.jpg"
        alt="info"
      />
    </div>
  );
}

