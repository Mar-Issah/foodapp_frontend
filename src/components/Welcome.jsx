import { featuredProducts } from '@/data';
import React from 'react';
import styles from '@/styles/home.module.css';
import Navbar from '@/components/Navbar';
import Button from './Button';

const Welcome = () => {
  return (
    <div className={`${styles.backgroundImage} w-screen`}>
      <div className='relative z-10 h-screen'>
        {' '}
        <Navbar />
        <Button />
      </div>
    </div>
  );
};

export default Welcome;
