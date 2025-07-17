import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  return (
    <div className='flex py-6 justify-between items-center text-white bg-dark px-[70px]'>
        <h3 className='font-extrabold text-2xl'>audiophile</h3>
        <ul className="flex gap-8 uppercase text-sm">
            <li className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300">Home</li>
            <li className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300">Headphones</li>
            <li className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300">Speakers</li>
            <li className="cursor-pointer hover:scale-110 hover:text-primary transition-all duration-300">Earphones</li>
        </ul>
        <button>
            <ShoppingCartIcon className='w-8 h-8 hover:scale-110 hover:text-primary transition-all duration-300'/>
        </button>
    </div>
  )
}
