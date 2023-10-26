import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';
import styles from '@/styles/home.module.css';
import Navbar from '@/components/Navbar';

const Welcome = () => {
  return (
    <div
      className={`${styles.backgroundImage} w-screen h-screen
		text-red-500`}
    >
      <div className='relative z-10'>
        {' '}
        <Navbar />
        <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Welcome;
