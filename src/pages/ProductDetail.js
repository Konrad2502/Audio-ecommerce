import React, { useContext, useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import LikeProducts from "../components/LikeProducts";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import { useCart } from "../context/CartContext";
import FadeInOnScroll from "../features/FadeInScroll";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart, cartItems, updateQuantity, openModal } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);

  const [localQuantity, setLocalQuantity] = useState(1);

  const quantity = cartItem ? cartItem.quantity : localQuantity;

  return (
    <div className="px-[70px] py-[100px] flex flex-col gap-[100px]">
      {product ? (
        <>
          <FadeInOnScroll>
            <Link to={`/${product.category}`}>
              <p className="text-greyprimary cursor-pointer hover:text-gray-600 hover:font-bold transition-all duration-300">
                Go back
              </p>
            </Link>

            <div className=" flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-[100px] sm:h-[650px]">
              <picture className="w-full sm:w-1/2 h-[300px] sm:h-full">
                <source
                  media="(min-width: 1024px)"
                  srcSet={product.image.desktop}
                />

                <source
                  media="(min-width: 640px)"
                  srcSet={product.image.tablet}
                />

                <img
                  src={product.image.mobile}
                  alt={product.name}
                  className="h-full w-full object-contain rounded-lg"
                />
              </picture>
              <div className="w-full sm:w-1/2 flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                {product.new && (
                  <p className="subtitle-1 text-primary">NEW PRODUCT</p>
                )}
                <h1 className="heading-2">{product.name}</h1>
                <p className="text-greyprimary">{product.description}</p>
                <p className="font-bold text-lg tracking-wide">
                  ${product.price * quantity}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex bg-lightgrey px-4 py-2 gap-4">
                    <button
                      onClick={() =>
                        cartItem
                          ? updateQuantity(product.id, quantity - 1)
                          : setLocalQuantity((q) => Math.max(1, q - 1))
                      }
                      className="text-sm font-bold text-blackprimary"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold">{quantity}</span>
                    <button
                      onClick={() =>
                        cartItem
                          ? updateQuantity(product.id, quantity + 1)
                          : setLocalQuantity((q) => q + 1)
                      }
                      className="text-sm font-bold text-blackprimary"
                    >
                      +
                    </button>
                  </div>
                  <PrimaryButton
                    onClick={() => {
                      addToCart(product, localQuantity);
                      openModal();
                    }}
                  >
                    ADD TO CART
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-[100px]">
              <div className="w-full lg:w-[60%] flex flex-col gap-6">
                <h2 className="heading-3">FEATURES</h2>
                <p className="text-greyprimary">{product.features}</p>
              </div>

              <div className="w-full sm:w-[40%] flex flex-col gap-4">
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
          </FadeInOnScroll>
          <Gallery product={product} />
          <FadeInOnScroll>
            <LikeProducts product={product} />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Products />
          </FadeInOnScroll>
        </>
      ) : (
        <p className="text-center text-red-500">Product not found.</p>
      )}
    </div>
  );
}
