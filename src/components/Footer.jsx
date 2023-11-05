import React from 'react';
import styles from '@/styles/menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    //jsx that return the footer section
    <div className='border-t-2 border-text-gray-200 bg-custom-blueblack text-gray-200 h-70 pb-2'>
      <div className='w-4/5 md:w-3/5 lg:w-3/5 xl:w-3/5 items-center flex flex-col justify-center mt-10 mx-auto mb-2'>
        <h1 className={`${styles.fontDancing} text-gray-200 sm:text-1xl md:text-3xl mb-2`}>GET 30% OF ALL DISHES</h1>
        <p>
          You get 30% discount of all dishes if you are a first timer . This applys to all dishes ranging from
          Traditional and Modern Ghanaian dishes. We give to a treat!.
        </p>
      </div>
      <div className='flex gap-4 w-screen items-center py-2 justify-center'>
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698600035/HAMFOODS/facebook_hlkift.png'
          alt='facebook'
          width={20}
          height={20}
          className='object-contain'
        />
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698790884/HAMFOODS/x-logo_wqjdhr.png'
          alt='twitter'
          width={20}
          height={20}
          className='object-contain'
        />
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698790884/HAMFOODS/Instagram_logo_ppoozr.png'
          alt='instagram'
          width={20}
          height={20}
          className='object-contain'
        />
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698790884/HAMFOODS/tiktok_fxehrd.webp'
          alt='tiktok'
          width={20}
          height={20}
          className='object-contain'
        />
      </div>
      <div className='text-sm md:text-lg lg:text-xl md:font-bold flex justify-between tracking-widest px-4 mt-8 uppercase'>
        <Link href='/'>
          h.a.m <span className={styles.fontPacifico}>foods</span>
        </Link>
        <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
