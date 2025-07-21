import React from 'react';
import PrimaryButton from './ui/PrimaryButton';

export default function EarphoneProduct({product,index}) {
  return (
     <section className={`h-[560px] px-[70px] flex items-center justify-between gap-[100px] ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
        <img
          className="h-full object-contain rounded-lg"
          src={product.categoryImage.desktop}
          alt={product.slug}
        />
        <div className="flex flex-col gap-6 w-[40%]">
            {index === 0 && <p className="subtitle-1 text-primary">NEW PRODUCT</p>}
          <h2 className="heading-2">{product.name}</h2>
          <p className="text-greyprimary max-w-md">
           {product.description}
          </p>
          <PrimaryButton>SEE PRODUCT</PrimaryButton>
        </div>
      </section>
  )
}
