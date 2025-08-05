import React from "react";
import PrimaryButton from "./ui/PrimaryButton";
import { Link } from "react-router-dom";

export default function SpeakerProduct({ product, index }) {
  return (
    <section
      className={`
        flex flex-col items-center justify-center gap-10 px-6
        lg:flex-row lg:justify-between lg:gap-[100px] lg:px-[70px] lg:h-[560px]
        ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
      `}
    >
      <picture className="h-[300px] w-full lg:h-full lg:w-auto flex justify-center">
        <source
          media="(min-width: 1024px)"
          srcSet={product.categoryImage.desktop}
        />

        <source
          media="(min-width: 640px)"
          srcSet={product.categoryImage.tablet}
        />

        <img
          className="h-full w-[100%] object-contain rounded-lg"
          src={product.categoryImage.mobile}
          alt={product.slug}
        />
      </picture>

      <div className="flex flex-col items-center text-center gap-6 w-full lg:items-start lg:text-left lg:w-[40%]">
        {index === 0 && <p className="subtitle-1 text-primary">NEW PRODUCT</p>}
        <h2 className="heading-3 lg:heading-2">{product.name}</h2>
        <p className="text-greyprimary max-w-md">{product.description}</p>
        <Link to={`/products/${product.id}`}>
          <PrimaryButton>SEE PRODUCT</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
