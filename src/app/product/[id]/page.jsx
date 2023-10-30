'use client';
import Price from '@/components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SingleProductPage = () => {
  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      <div className='px-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-200  md:flex-row md:gap-8 md:items-center'>
        {/* IMAGE CONTAINER */}
        {singleProduct.img && (
          <div className='relative w-full h-1/2 md:h-[70%]'>
            <Image src='/loginBG.jpg' alt='' className='object-contain' fill />
          </div>
        )}
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
          <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
          <Price price={singleProduct.price} id={singleProduct.id} />
          <button
            onClick={() => console.log('cart')}
            className='uppercase w-56 bg-custom-orange text-gray-200  p-3 ring-1 ring-custom-orange'
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
