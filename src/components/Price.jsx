'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/redux/cartSlice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Price = ({ price, id, img, title, showToast }) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { status } = useSession();
  const router = useRouter();

  const { products } = useSelector((state) => state.cart);
  console.log(products);

  const token = localStorage.getItem('hamfoodsToken');
  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  const handleClick = () => {
    showToast();
    dispatch(addProduct({ id, title, img, price, quantity }));
    router.push('/menu');
  };

  return (
    <div className='flex flex-col gap-4 z-10'>
      <h2 className='text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold'>${total?.toFixed(2)}</h2>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      {(token || status === 'authenticated') && (
        <div className='flex justify-between items-center'>
          {/* QUANTITY */}
          <div className='flex justify-between w-full p-3 ring-1 ring-custom-orange'>
            <span>Quantity</span>
            <div className='flex gap-4 items-center'>
              <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
            </div>
          </div>
          <button
            className='text-sm md:text-lg lg:text-lg xl:text-lg uppercase w-56 bg-custom-orange text-gray-200 p-2.5 ring-1 ring-custom-orange'
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Price;
