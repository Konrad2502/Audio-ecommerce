
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import ProductCard from './ProductCard';


export default function Products() {

 const {categories} = useContext(DataContext);
 
  return (
    <div className="mt-[300px] mb-[200px]">
      <div className="flex gap-8 items-end">
       {categories.map(category => (
        <ProductCard key={category.id} name={category.name} imgSrc={category.thumbnail} link={category.id}/>
       ))}
      </div>
    </div>
  );
}
