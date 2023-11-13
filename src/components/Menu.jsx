'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'next-auth/react';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
];

// navlinks for the mobile page
const Menu = ({ status }) => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('hamfoodsToken');

  return (
    <div>
      <FontAwesomeIcon
        icon={open ? faXmark : faBars}
        style={{ color: open ? '#d51515' : '#e0e0e0' }}
        onClick={() => setOpen(!open)}
        className='cursor-pointer pr-4'
      />
      {open && (
        <div className='bg-custom-blueblack text-slate-100 absolute left-0 top-24 w-full h-4/5 flex flex-col gap-4 items-center justify-center text-2xl z-50'>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {status === 'unauthenticated' && !token ? (
            <Link href='/login' onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <>
              <Link href='/orders' onClick={() => setOpen(false)}>
                Orders
              </Link>
              <Cart onClick={() => setOpen(false)} />
              <Link
                href='/'
                onClick={() => {
                  setOpen(false);
                  localStorage.removeItem('hamfoodsToken');
                  localStorage.removeItem('hamfoodsUserId');
                  signOut();
                }}
              >
                Logout
              </Link>
            </>
          )}
          <div className='flex items-center gap-2 cursor-pointer bg-custom-orange px-1 rounded-md'>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#bfc7d4', height: '1rem' }} />
            <span>
              <a href='tel:+2335678900'>(+233) 567-8900</a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
