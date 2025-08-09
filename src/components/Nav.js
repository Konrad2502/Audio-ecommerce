import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const { openModal, totalItems } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    openModal();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const delays = ["delay-300", "delay-500", "delay-700", "delay-1000"];

  return (
    <>
      <nav className=" w-full flex py-6 justify-between items-center text-white bg-dark px-4 md:px-[70px] border-b border-gray-600 relative z-50">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />

        <ul className="hidden md:flex gap-8 uppercase text-sm">
          {["/", "/headphones", "/speakers", "/earphones"].map((path, i) => (
            <Link
              key={path}
              to={path}
              className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300"
            >
              {["Home", "Headphones", "Speakers", "Earphones"][i]}
            </Link>
          ))}
        </ul>

        <div className="md:hidden flex gap-4 items-center">
          <button className="relative" onClick={handleClick}>
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
            <ShoppingCartIcon className="w-7 h-7 hover:text-primary transition" />
          </button>
          {isMenuOpen ? (
            <IoClose
              className="w-8 h-8 text-white cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiMenu
              onClick={toggleMenu}
              className="w-8 h-8 text-white cursor-pointer hover:text-primary transition"
            />
          )}
        </div>

        <button className="relative hidden md:block" onClick={handleClick}>
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
          <ShoppingCartIcon className="w-8 h-8 hover:text-primary transition" />
        </button>
      </nav>

      <div
        className={`
        absolute left-0 w-full bg-white text-black z-40 shadow-md
        transition-all duration-500 ease-in-out origin-top
        flex flex-col items-center justify-center p-6 gap-4 text-lg uppercase font-semibold tracking-wide
        md:hidden h-[300px]
        ${
          isMenuOpen
            ? "top-[80px] opacity-100 pointer-events-auto"
            : "top-[-300px] opacity-0 pointer-events-none"
        }
          `}
      >
        {["/", "/headphones", "/speakers", "/earphones"].map((path, i) => (
          <Link
            key={path}
            to={path}
            onClick={toggleMenu}
            className={`
      hover:text-primary transition-all duration-500 transform
      ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
      ${delays[i]}
    `}
          >
            {["Home", "Headphones", "Speakers", "Earphones"][i]}
          </Link>
        ))}
      </div>
    </>
  );
}
