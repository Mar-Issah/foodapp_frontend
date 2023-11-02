'use client';
import Price from '@/components/Price';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useQuery } from 'react-query';

async function fetchData(id) {
  const response = await fetch(`${process.env.APP_URL}/api/orders/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const SingleProductPage = ({ params }) => {
  const { id } = params;
  const { data: product, error, isLoading } = useQuery(['menuData', id], () => fetchData(id));

  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      {isLoading ? (
        <div className='w-screen h-screen'>
          <button type='button' className='bg-custom-orange my-0 mx-auto' disabled>
            <svg className='animate-spin h-5 w-5 mr-3 ...' viewBox='0 0 24 24'></svg>
            Preparing your order...
          </button>
        </div>
      ) : (
        <div className='px-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-200 md:flex-row md:gap-8 md:items-center'>
          {/* IMAGE CONTAINER */}
          {product?.img && (
            <div className='relative w-full h-1/2 md:h-[80%]'>
              <Image src={product?.img} alt='food' className='object-contain' fill />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
            <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{product?.title}</h1>
            <p>{product?.desc}</p>
            <Price price={product?.price} id={product?._id} title={product?.title} img={product?.img} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SingleProductPage;
