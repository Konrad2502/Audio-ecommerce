import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-6 md:px-[70px] py-12">
      <div className="flex flex-col items-center text-center gap-10 lg:flex-row lg:justify-between lg:items-start lg:text-left">
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-[600px]">
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            className="w-[150px]"
          />

          <nav className="flex flex-col gap-4 uppercase text-sm tracking-[0.1em] text-white lg:flex-row lg:gap-8">
            <Link to="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link to="/headphones" className="hover:text-primary transition">
              Headphones
            </Link>
            <Link to="/speakers" className="hover:text-primary transition">
              Speakers
            </Link>
            <Link to="/earphones" className="hover:text-primary transition">
              Earphones
            </Link>
          </nav>

          <p className="text-greyprimary leading-relaxed">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we’re open 7 days a week.
          </p>

          <p className="text-greyprimary text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>

        <div className="flex gap-4 text-white text-xl lg:flex-col lg:justify-between lg:items-end">
          <a href="#" className="hover:text-primary transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-primary transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-primary transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
