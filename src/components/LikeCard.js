import React from 'react'
import PrimaryButton from './ui/PrimaryButton'
import { Link } from 'react-router-dom'

export default function LikeCard({name, image, id}) {
  return (
     <div className="w-1/3 flex flex-col items-center gap-6">
          <div className="bg-[#F1F1F1] w-full aspect-square rounded-lg flex items-center justify-center">
            <img
              src={image.desktop}
              alt={name}
              className="w-[250px] h-[250px] object-contain"
            />
          </div>
          <h3 className="heading-5">{name}</h3>
          <Link to={`/products/${id}`}>
               <PrimaryButton>SEE PRODUCT</PrimaryButton>
          </Link>
       
        </div>
  )
}
