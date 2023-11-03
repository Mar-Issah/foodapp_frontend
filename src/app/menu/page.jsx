'use client';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/menu.module.css';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useQuery } from 'react-query';
import { APP_URL } from '@/lib/url';
import Special from '@/components/Special';

async function fetchData() {
  const response = await fetch(`${APP_URL}/api/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const MenuPage = () => {
  const { data: menu, error, isLoading } = useQuery('menu', fetchData);

  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      <div className={`${styles.backgroundImage} w-screen relative z-10 text-gray-200`}>
        <div className={`${styles.fontDancing} w-4/5 flex flex-col justify-end items-end`}>
          <h1 className='text-center sm:text-1xl md:text-2xl mt-10'>We serve</h1>
          <h1 className='relative z-10 text-gray-200 sm:text-1xl md:text-3xl'>TRADITIONAL & MODERN</h1>
        </div>
      </div>
      {/*  CONTAINER for IMAGE AND TEXT*/}
      {isLoading ? (
        <div className='flex justify-center items-center w-screen h-15 shadow-lg rounded-sm'>
          <button
            type='button'
            className='bg-custom-orange my-10 mx-auto p-2 flex justify-center items-center '
            disabled
          >
            Preparing Menu...
          </button>
        </div>
      ) : (
        <div className='lg:px-12 xl:px-35 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center items-center pb-15'>
          {menu?.map((item) => (
            <Link href={`/product/${item?._id}`} key={item?._id} as='style' className='w-full h-1/3 bg-cover md:h-1/2'>
              <div className='flex flex-col items-center w-auto mx-auto mb-8 text-gray-200 bg-transparent rounded-lg hover:border hover:border-gray-800'>
                <div className='rounded-full border-2 border-custom-orange overflow-hidden h-50 w-50'>
                  <Image
                    src={item?.img}
                    alt='food'
                    width={200}
                    height={200}
                    className='object-contain'
                    // style={{ width: 'auto' }}
                  />
                </div>
                <div className='mt-6 flex gap-5 mb-2'>
                  <h2 className='text-md font-semibold text-gray-200'>{item.title}</h2>
                  <p className='text-md text-gray-300'>GH₵{item.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Special />
      <Footer />
    </div>
  );
};
export default MenuPage;
