
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import ProductCard from './ProductCard';


export default function Products() {

 const {categories} = useContext(DataContext);
 console.log(categories)
 
  return (
    <div className="px-[70px] mt-[300px] mb-[200px]">
      <div className="flex gap-8 items-end">
       {categories.map(category => (
        <ProductCard key={category.id} name={category.name} imgSrc={category.thumbnail}/>
       ))}
      </div>
    </div>
  );
}
