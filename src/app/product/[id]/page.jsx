'use client';
import Price from '@/components/Price';
import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useQuery } from 'react-query';
import { APP_URL } from '@/lib/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function fetchData(id) {
  const response = await fetch(`${APP_URL}/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const SingleProductPage = ({ params }) => {
  const { id } = params;
  const { data: product, error, isLoading } = useQuery(['product', id], () => fetchData(id));

  const showToast = () => {
    toast.success('Added to cart!');
  };

  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      {isLoading ? (
        <div className='flex justify-center items-center w-screen h-screen'>
          <button
            type='button'
            className='flex justify-center items-center bg-custom-orange my-0 mx-auto p-4 animate-bounce shadow-lg rounded-lg'
            disabled
          >
            Preparing your order...
          </button>
        </div>
      ) : (
        <div className='px-3 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-200 md:flex-row md:gap-8 md:items-center'>
          {/* IMAGE CONTAINER */}
          {product?.img && (
            <div className='relative w-full h-1/2 md:h-[80%] my-4'>
              <Image src={product?.img} alt='food' className='object-contain' fill sizes='25vw' />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className='h-screen flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
            <h1 className='text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold uppercase'>{product?.title}</h1>
            <p>{product?.desc}</p>
            <Price
              price={product?.price}
              id={product?._id}
              title={product?.title}
              img={product?.img}
              showToast={showToast}
            />
          </div>
        </div>
      )}
      <ToastContainer position='bottom-right' autoClose={3000} />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
