import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-gray-100 p-4 flex items-center justify-between uppercase md:h-20 lg:px-20 xl:px-40'>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 tracking-widest'>
        <Link href='/'>
          h.a.m <span className={styles.fontPacifico}>foods</span>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex items-center gap-2 cursor-pointer bg-custom-orange px-1 rounded-md'>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#bfc7d4', height: '1rem' }} />
          <span>
            <a href='tel:+1234567890'>(+233) 567-890</a>
          </span>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        {!user ? (
          <Link href='/login'>Login</Link>
        ) : (
          <>
            <Link href='/orders'>Orders</Link>
            <Cart />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
