import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-1'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#bfc7d4' }} />
      </div>
      <span>(3)</span>
    </Link>
  );
};

export default CartIcon;
