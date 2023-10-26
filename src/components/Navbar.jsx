import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Cart from './Cart';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

const Navbar = () => {
  const user = true;
  return (
    <div className='h-12 text-gray-100  p-4 flex items-center justify-between uppercase md:h-20 lg:px-20 xl:px-40'>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 tracking-widest'>
        <Link href='/'>
          h.a.m <span className={`${pacifico.className} lowercase tracking-normal`}>foods</span>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src='/phone.png' alt='' width={20} height={20} />
          <span>+233 123 456 789</span>
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
