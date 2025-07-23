import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import LikeCard from "./LikeCard";

export default function LikeProducts({ product }) {
  const { products } = useContext(DataContext);

  if (!product?.others) return null;

  const likeProducts = product.others.map((item) =>
    products.find((p) => p.slug === item.slug)
  );
  
  return (
    <div className="py-[100px] flex flex-col items-center gap-[60px]">
      <h2 className="heading-3 text-center">YOU MAY ALSO LIKE</h2>

      <div className="flex justify-between w-full gap-6">
        {likeProducts.map((prod) => (
          <LikeCard
            key={prod.id}
            name={prod.name}
            image={prod.image}
            id={prod.id}
          />
        ))}
      </div>
    </div>
  );
}
