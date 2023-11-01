'use client';
import Price from '@/components/Price';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

const SingleProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const { id } = params;

  const getData = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      if (!res.ok) {
        throw new Error('Failed!');
      }
      const result = await res.json();
      setProduct(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      <div className='px-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-200 md:flex-row md:gap-8 md:items-center'>
        {/* IMAGE CONTAINER */}
        {product?.img && (
          <div className='relative w-full h-1/2 md:h-[70%]'>
            <Image src={product?.img} alt='food' className='object-contain' fill />
          </div>
        )}
        {/* TEXT CONTAINER */}
        <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
          <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{product?.title}</h1>
          <p>{product?.desc}</p>
          <Price price={product?.price} id={product?._id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
