import React from 'react';
import styles from '@/styles/home.module.css';
import Navbar from '@/components/Navbar';
import Notice from '@/components/Notice';
import Button from './Button';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className={`${styles.backgroundImage} overflow-hidden w-screen`}>
      <div className='relative z-10 h-screen'>
        <Notice />
        <Navbar />
        <div className='flex justify-end w-4/5'>
          <div className='text-white flex flex-col mt-20 w-80'>
            <p className='text-sm text-center mb-3'>Enjoy delicious and affordable dishes &</p>
            <h1 className='sm: text-2xl md:text-5xl mb-20 tracking-wider text-center'>Taste The Difference</h1>

            <Link href='/menu' className='self-center'>
              <Button label='View & Order' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
