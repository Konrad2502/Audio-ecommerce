import React from 'react'
import ProductButton from './ui/ProductButton'

export default function Advert () {
  return (
    <div className='px-[70px] my-[200px] flex flex-col gap-10 '>
        <div className=' h-[560px] bg-primary rounded-xl flex items-center justify-center relative'>
            <img className='absolute left-[-120px] z-10 ' src="/assets/home/desktop/pattern-circles.svg" alt="advert-logo"/>
            <div className='flex gap-28 relative z-20'>
                <img className='w-[250px] h-[300px]' src="assets/home/desktop/image-speaker-zx9.png" alt="speaker" />
                <div className='w-[250px] flex flex-col justify-between'>
                    <h2 className='heading-2 text-whiteprimary'> ZX9 speaker</h2>
                    <p className='text-whiteprimary'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <ProductButton/>
                </div>
            </div>
        </div>
        <div 
        className='h-[320px] rounded-xl flex items-center'
        style={{ backgroundImage: "url('/assets/home/desktop/image-speaker-zx7.jpg')" }}
        >
            <div className='mx-[150px]'>
                <h3 className='heading-3 mb-6'>ZX7 speaker</h3>
                <ProductButton/>
            </div>
        </div>
        <div className='h-[320px] flex gap-5'>
            <div 
            style={{ backgroundImage: "url('/assets/home/desktop/image-earphones-yx1.jpg')" }}
            className='basis-1/2 rounded-xl bg-cover'></div>
            <div className='basis-1/2 bg-lightgrey rounded-xl flex flex-col justify-center'>
                <div className='mx-[150px]'>
                      <h3 className='heading-3 mb-6'>YX1 earphones</h3>
                      <ProductButton/>
                </div>
            </div>
        </div>
    </div> 
  )
}
