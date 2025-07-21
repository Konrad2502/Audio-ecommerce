import React, { useContext } from 'react';
import Products from '../components/Products';
import { DataContext } from '../context/DataContext';
import EarphoneProduct from '../components/EarphoneProduct';

export default function Earphones() {

    const {products} = useContext(DataContext);
    console.log(products)
    const earphonesProduct = products.filter(earphone => (
        earphone.category === 'earphones'
    ))
    console.log(earphonesProduct)

  return (
    <div className='flex flex-col gap-[100px]'>
         <div className="h-[270px] bg-dark text-whiteprimary flex items-center justify-center">
           <h1 className="heading-2">HEADPHONES</h1>
         </div>
         {earphonesProduct.map((product, index) => (
           <EarphoneProduct key={product.id} product={product} index={index}/>
         
         ))}
         <Products/>
       </div>
  )
}
