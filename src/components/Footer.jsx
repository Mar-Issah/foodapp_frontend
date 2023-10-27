import React from 'react';
import styles from '@/styles/menu.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    //jsx that retrun the footer section
    <div className='border-t-2 border-text-gray-200 bg-custom-blueblack text-gray-200 mt-20 h-52'>
      <div className='w-3/5 items-center flex flex-col justify-center mt-10 mx-auto'>
        <h1 className={`${styles.fontDancing} text-gray-200 sm:text-1xl md:text-3xl`}>GET 30% OF ALL DISHES</h1>
        <p>
          You get 30% discount of all dishes if you are a first timer . This applys to all dishes ranging from
          Traditional and Modern Ghanaian dishes. We give to a treat!.
        </p>
      </div>
      <div className='text-xl md:font-bold flex justify-between tracking-widest px-4 mt-8'>
        <Link href='/'>
          h.a.m <span className={styles.fontPacifico}>foods</span>
        </Link>
        <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
