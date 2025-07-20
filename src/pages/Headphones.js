import { useContext } from 'react';
import Products from '../components/Products';
import { DataContext } from '../context/DataContext';
import HeadphoneProduct from '../components/HeadphoneProduct';

export default function Headphones() { 

    const { products } = useContext(DataContext);
    const headphonesProduct = products.filter((headphone) => (
      headphone.category === "headphones"
    ));

  return (
    <div className='flex flex-col gap-[100px]'>
      <div className="h-[270px] bg-dark text-whiteprimary flex items-center justify-center">
        <h1 className="heading-2">HEADPHONES</h1>
      </div>
      {headphonesProduct.map((product, index) => (
        <HeadphoneProduct key={product.id} product={product} index={index}/>
      
      ))}
      <Products/>
    </div>
  );
}
