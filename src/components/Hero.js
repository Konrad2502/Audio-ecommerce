import React from 'react'

export default function Hero() {
  return (
    <div 
        className="h-[650px] bg-cover bg-center px-[70px] flex items-center "
        style={{ backgroundImage: "url('/assets/home/desktop/image-hero.jpg')" }}
    >
        <div className='flex flex-col w-full max-w-[600px] gap-6' >
            <h5 className='subtitle-1 text-gray-500 font-bold'>New product</h5>
            <h1 className='heading-1 text-whiteprimary'>XX99 MARK II HEADPHONES</h1>
            <p className='text-whiteprimary text-base'>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <button className='w-[150px] h-50px bg-primary text-whiteprimary py-3 px-4'>See product</button>
        </div>
    </div>
  )
}
