import React from "react";
import FadeInOnScroll from "../features/FadeInScroll";

export default function Gallery({ product }) {
  return (
    <div className="py-[100px] flex flex-col gap-6 sm:flex-row">
      <div className="flex flex-col gap-6 w-full sm:w-1/2">
        <FadeInOnScroll delay={100}>
          <img
            src={product.gallery.first.desktop}
            alt="gallery-1"
            className="rounded-lg object-cover w-full h-[200px] sm:h-[280px] transform transition duration-300 hover:scale-105"
          />
        </FadeInOnScroll>
        <FadeInOnScroll delay={200}>
          <img
            src={product.gallery.second.desktop}
            alt="gallery-2"
            className="rounded-lg object-cover w-full h-[200px] sm:h-[280px] transform transition duration-300 hover:scale-105"
          />
        </FadeInOnScroll>
      </div>

      <div className="w-full sm:w-1/2">
        <FadeInOnScroll className="h-full w-full" delay={300}>
          <img
            src={product.gallery.third.desktop}
            alt="gallery-3"
            className="rounded-lg object-cover w-full h-[200px] sm:h-full transform transition duration-300 hover:scale-105"
          />
        </FadeInOnScroll>
      </div>
    </div>
  );
}
