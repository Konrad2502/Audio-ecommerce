import React, { useContext } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import LikeProducts from "../components/LikeProducts";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(DataContext);

  const product = products.find((item) => item.id === parseInt(id));
  return (
    <div className="px-[70px] py-[100px] flex flex-col gap-[100px]">
      {product ? (
        <>
          <Link to={`/${product.category}`}>
            <p className="text-greyprimary cursor-pointer hover:text-gray-600 hover:font-bold transition-all duration-300">
              Go back
            </p>
          </Link>

          <div className="flex justify-between items-center gap-[100px]">
            <img
              src={product.image.desktop}
              alt={product.name}
              className="w-1/2 rounded-lg object-contain"
            />
            <div className="w-1/2 flex flex-col gap-6">
              {product.new && (
                <p className="subtitle-1 text-primary">NEW PRODUCT</p>
              )}
              <h1 className="heading-2">{product.name}</h1>
              <p className="text-greyprimary">{product.description}</p>
              <p className="font-bold text-lg tracking-wide">
                ${product.price}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex bg-lightgrey px-4 py-2 gap-4">
                  <button className="text-sm font-bold text-blackprimary">
                    -
                  </button>
                  <span className="text-sm font-bold">1</span>
                  <button className="text-sm font-bold text-blackprimary">
                    +
                  </button>
                </div>
                <PrimaryButton>ADD TO CART</PrimaryButton>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-[100px]">
            <div className="w-[60%] flex flex-col gap-6">
              <h2 className="heading-3">FEATURES</h2>
              <p className="text-greyprimary">{product.features}</p>
            </div>

            <div className="w-[40%] flex flex-col gap-4">
              <h2 className="heading-3">IN THE BOX</h2>
              <ul className="flex flex-col gap-2 text-greyprimary">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-primary font-bold">
                      {item.quantity}x
                    </span>
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Gallery product={product}/>
          <LikeProducts product={product} />
          <Products />
        </>
      ) : (
        <p className="text-center text-red-500">Product not found.</p>
      )}
    </div>
  );
}
