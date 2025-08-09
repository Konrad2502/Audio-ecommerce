import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Advert from "../components/Advert";
import FadeInOnScroll from "../features/FadeInScroll";

export default function Home() {
  return (
    <div>
      <Hero />
      <FadeInOnScroll delay={200}>
        <Products className="px-[70px] pt-[100px]" />
      </FadeInOnScroll>
      <Advert />
    </div>
  );
}
