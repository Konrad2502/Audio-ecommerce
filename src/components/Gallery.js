import React from 'react'

export default function Gallery({product}) {
  return (
     <div className="py-[100px] flex gap-6">
            <div className="flex flex-col gap-6 w-1/2">
              <img
                src={product.gallery.first.desktop}
                alt="gallery-1"
                className="rounded-lg object-cover w-full h-[280px] transform transition duration-300 hover:scale-105"
              />
              <img
                src={product.gallery.second.desktop}
                alt="gallery-2"
                className="rounded-lg object-cover w-full h-[280px] transform transition duration-300 hover:scale-105"
              />
            </div>

            <div className="w-1/2">
              <img
                src={product.gallery.third.desktop}
                alt="gallery-3"
                className="rounded-lg object-cover w-full h-full transform transition duration-300 hover:scale-105"
              />
            </div>
          </div>
  )
}
