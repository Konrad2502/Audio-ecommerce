import React from "react";
import ProductButton from "./ui/ProductButton";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../features/FadeInScroll";

export default function Advert() {
  return (
    <div className="px-[70px] my-[200px] flex flex-col gap-10">
      <FadeInOnScroll delay={0}>
        <div className="h-auto md:h-[560px] bg-primary rounded-xl flex items-center justify-center relative">
          <img
            className="absolute left-[-120px] z-10"
            src="/assets/home/desktop/pattern-circles.svg"
            alt="advert-logo"
          />
          <div className="flex flex-col items-center gap-14 py-10 md:flex-row md:gap-28 relative z-20">
            <img
              className="w-[200px] h-[250px] md:w-[250px] md:h-[300px]"
              src="assets/home/desktop/image-speaker-zx9.png"
              alt="speaker"
            />
            <div className="w-[250px] flex flex-col gap-6 items-center justify-between text-center md:items-start md:text-left">
              <h2 className="heading-2 text-whiteprimary"> ZX9 speaker</h2>
              <p className="text-whiteprimary">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/products/6">
                <ProductButton />
              </Link>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={150}>
        <div
          className="h-[320px] rounded-xl flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/home/desktop/image-speaker-zx7.jpg')",
          }}
        >
          <div className="mx-8 md:mx-[150px]">
            <h3 className="heading-3 mb-6">ZX7 speaker</h3>
            <Link to="/products/5">
              <ProductButton />
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={300}>
        <div className="h-[320px] flex flex-col md:flex-row gap-5">
          <div
            style={{
              backgroundImage:
                "url('/assets/home/desktop/image-earphones-yx1.jpg')",
            }}
            className="basis-1/2 rounded-xl bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="basis-1/2 bg-lightgrey rounded-xl flex flex-col justify-center">
            <div className="text-center">
              <h3 className="heading-3 mb-6">YX1 earphones</h3>
              <Link to="/products/1">
                <ProductButton />
              </Link>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
