import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Advert from "../components/Advert";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products className="px-[70px]" />
      <Advert />
    </div>
  );
}
