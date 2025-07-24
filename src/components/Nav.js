import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const { cartItems, openModal } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const handleClick = () => {
    openModal();
  };
  return (
    <div className="flex py-6 justify-between items-center text-white bg-dark px-[70px] border-b-[1px] border-solid border-gray-600">
      <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      <ul className="flex gap-8 uppercase text-sm">
        <Link
          to="/"
          className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/headphones"
          className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300"
        >
          Headphones
        </Link>
        <Link
          to="/speakers"
          className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300"
        >
          Speakers
        </Link>
        <Link
          to="/earphones"
          className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300"
        >
          Earphones
        </Link>
      </ul>
      <button className="relative">
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
        <ShoppingCartIcon
          onClick={handleClick}
          className="w-8 h-8 hover:scale-110 hover:text-primary transition-all duration-300"
        />
      </button>
    </div>
  );
}
