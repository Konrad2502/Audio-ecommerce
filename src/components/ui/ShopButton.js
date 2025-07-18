import { HiChevronRight } from "react-icons/hi";

export default function ShopButton({ label = "Shop" }) {
  return (
    <button className="flex items-center gap-1 group transition-all duration-300 hover:gap-3">
      <span className="text-dark font-bold group-hover:text-primary transition duration-300">
        {label}
      </span>
      <HiChevronRight className="w-6 h-6 text-primary transition duration-300 group-hover:text-primary" />
    </button>
  );
}










