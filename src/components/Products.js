import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ProductCard from "./ProductCard";

export default function Products({ className = "" }) {
  const { categories } = useContext(DataContext);

  return (
    <div className={`mt-[100px] mb-[100px] ${className} `}>
      <div className="flex flex-col gap-28 items-center md:flex-row md:gap-8 md:items-end">
        {categories.map((category) => (
          <ProductCard
            key={category.id}
            name={category.name}
            imgSrc={category.thumbnail}
            link={category.id}
          />
        ))}
      </div>
    </div>
  );
}
