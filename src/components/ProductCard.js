import ShopButton from "./ui/ShopButton";
import { Link } from "react-router-dom";

export default function ProductCard({ name, imgSrc, link }) {
  return (
    <div className="bg-lightgrey w-full md:flex-1 flex flex-col items-center justify-end gap-4 h-[200px] pb-4">
      <img className="w-[200px] h-[200px]" src={imgSrc} alt={name} />
      <h4 className="heading-6">{name}</h4>
      <Link to={`/${link}`}>
        <ShopButton />
      </Link>
    </div>
  );
}
