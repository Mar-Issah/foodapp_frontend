'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Menu from './Menu';
import Link from 'next/link';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/fonts.module.css';

//Navbar components with links
const Navbar = () => {
  const { status } = useSession();
  // const user = true;
  console.log(status);
  return (
    <div className='h-12 text-gray-100 p-4 flex items-center justify-between uppercase md:h-20 lg:px-17 xl:px-35'>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 tracking-widest pl-6'>
        <Link href='/'>
          h.a.m <span className={styles.fontPacifico}>foods</span>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu status={status} />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex items-center gap-2 cursor-pointer bg-custom-orange px-1 rounded-md w-44'>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#bfc7d4', height: '1rem' }} />
          <span>
            <a href='tel:+2335678900'>(+233) 567-8900</a>
          </span>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        {status === 'authenticated' ? (
          <>
            <Link href='/orders'>Orders</Link>
            <Cart />
            <Link className='pr-2' href='/' onClick={() => signOut()}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link href='/login'>Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
