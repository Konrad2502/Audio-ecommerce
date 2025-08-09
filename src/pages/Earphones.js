import React, { useContext } from "react";
import Products from "../components/Products";
import { DataContext } from "../context/DataContext";
import EarphoneProduct from "../components/EarphoneProduct";
import FadeInOnScroll from "../features/FadeInScroll";

export default function Earphones() {
  const { products } = useContext(DataContext);

  const earphonesProduct = products.filter(
    (earphone) => earphone.category === "earphones"
  );

  return (
    <div className="flex flex-col gap-[100px]">
      <div className="h-[270px] bg-dark text-whiteprimary flex items-center justify-center">
        <h1 className="heading-2">EARPHONES</h1>
      </div>
      {earphonesProduct.map((product, index) => (
        <FadeInOnScroll key={index} delay={index * 100}>
          <EarphoneProduct key={product.id} product={product} index={index} />
        </FadeInOnScroll>
      ))}
      <FadeInOnScroll delay={earphonesProduct.length * 100}>
        <Products className="px-[70px]" />
      </FadeInOnScroll>
    </div>
  );
}
