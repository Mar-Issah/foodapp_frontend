import { featuredProducts } from '@/data';
import React from 'react';
import styles from '@/styles/home.module.css';
import Navbar from '@/components/Navbar';
import Button from './Button';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className={`${styles.backgroundImage} w-screen`}>
      <div className='relative z-10 h-screen'>
        {' '}
        <Navbar />
        <div className='text-gray-100 flex flex-col mt-20 mx-auto justify-center w-80'>
          <p className='text-sm text-center mb-3'>Enjoy delicious and affordable dishes &</p>
          <h1 className='sm: text-2xl md:text-5xl mb-20 tracking-wider text-center'>Taste The Difference</h1>

          <Link href='/menu' className='self-center'>
            <Button label='View Menu' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
