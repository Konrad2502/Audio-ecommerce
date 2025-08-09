import React from "react";
import Products from "../components/Products";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SpeakerProduct from "../components/SpeakerProduct";
import FadeInOnScroll from "../features/FadeInScroll";

export default function Speakers() {
  const { products } = useContext(DataContext);

  const speakersProduct = products.filter(
    (earphone) => earphone.category === "speakers"
  );

  return (
    <div className="flex flex-col gap-[100px]">
      <div className="h-[270px] bg-dark text-whiteprimary flex items-center justify-center">
        <h1 className="heading-2">SPEAKERS</h1>
      </div>
      {speakersProduct.map((product, index) => (
        <FadeInOnScroll key={index} delay={index * 100}>
          <SpeakerProduct key={product.id} product={product} index={index} />
        </FadeInOnScroll>
      ))}
      <FadeInOnScroll delay={speakersProduct.length * 100}>
        <Products className="px-[70px]" />
      </FadeInOnScroll>
    </div>
  );
}
