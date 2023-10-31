'use client';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/menu.module.css';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const MenuPage = ({ productList }) => {
  const [menu, setMenu] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/products');
      if (!res.ok) {
        throw new Error('Failed!');
      }
      const result = await res.json();
      setMenu(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(menu);

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
      <div className='lg:px-20 xl:px-40 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center items-center pb-15'>
        {menu === null || undefined ? (
          <div className='w-screen'>
            <button type='button' className='bg-custom-orange my-0 mx-auto' disabled>
              <svg className='animate-spin h-5 w-5 mr-3 ...' viewBox='0 0 24 24'></svg>
              Preparing menu...
            </button>
          </div>
        ) : (
          menu?.map((item) => (
            <Link href={`/product/${item?._id}`} key={item?._id} className='w-full h-1/3 bg-cover md:h-1/2'>
              <div className='flex flex-col items-center w-auto mx-auto mb-8 text-gray-200 bg-transparent rounded-lg hover:border hover:border-gray-800'>
                <div className='rounded-full border-2 border-custom-orange overflow-hidden h-50 w-50'>
                  <Image src={item?.img} alt='food' width={200} height={200} className='object-contain' />
                </div>
                <div className='mt-6 flex gap-5 mb-2'>
                  <h2 className='text-md font-semibold text-gray-200'>{item.title}</h2>
                  <p className='text-md text-gray-300'>GH₵{item.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};
export default MenuPage;
