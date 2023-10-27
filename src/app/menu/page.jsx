import { menu } from '@/data';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/menu.module.css';

const MenuPage = () => {
  return (
    <div className='bg-custom-blueblack'>
      <Navbar />
      <div className={`${styles.backgroundImage} w-screen relative z-10 text-gray-200`}>
        <div className={`${styles.fontDancing} flex flex-col justify-end items-end pr-5`}>
          <h1 className='sm:text-1xl md:text-2xl'>We serve</h1>
          <h1 className='relative z-10 text-gray-200 sm:text-1xl md:text-3xl'>TRADITIONAL & MODERN</h1>
        </div>
      </div>
      <div className='lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className='w-full h-1/3 bg-cover p-8 md:h-1/2'
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
              <p className='text-sm my-8'>{category.desc}</p>
              <button
                className={`hidden 2xl:block bg-${category.color} text-${
                  category.color === 'black' ? 'white' : 'red-500'
                } py-2 px-4 rounded-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
