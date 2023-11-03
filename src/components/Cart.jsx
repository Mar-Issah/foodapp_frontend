import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Link href='/cart' className='flex items-center gap-1 hover:border-b-2 border-custom-orange'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#bfc7d4' }} />
      </div>
      <span>({quantity})</span>
    </Link>
  );
};

export default CartIcon;
