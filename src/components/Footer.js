import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-[70px]">
      <div className="flex justify-between items-start">
        <div className="max-w-[600px] flex flex-col gap-6">
          <img
            src="./assets/shared/desktop/logo.svg"
            alt="logo"
            className="w-[150px]"
          />

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
        <div className="flex flex-col justify-between h-full items-end gap-12">
          <nav className="flex gap-8 uppercase text-sm tracking-[0.1em] text-white">
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
            <a href="#" className="hover:text-primary transition">
              Headphones
            </a>
            <a href="#" className="hover:text-primary transition">
              Speakers
            </a>
            <a href="#" className="hover:text-primary transition">
              Earphones
            </a>
          </nav>

          <div className="flex gap-4 text-white text-xl">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
