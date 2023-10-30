import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartPage = () => {
  return (
    <div className='bg-custom-blueblack w-screen overflow-x-hidden'>
      <Navbar />
      <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-gray-200 lg:flex-row w-screen mt-15 px-5'>
        {/* PRODUCTS CONTAINER */}
        <div className='h-1/2 p-4 flex flex-col justify-center overflow-x-hidden overflow-y-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
          {/* SINGLE ITEM */}
          <div className='flex items-center justify-between mb-4'>
            <Image src='/loginBG.jpg' alt='' width={100} height={100} />
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <h2 className='font-bold'>$79.90</h2>
            <span className='cursor-pointer text-red'>
              <FontAwesomeIcon icon={faXmark} style={{ color: '#d51515' }} />
            </span>
          </div>
          {/* SINGLE ITEM */}
          <div className='flex items-center justify-between mb-4'>
            <Image src='/loginBG.jpg' alt='' width={100} height={100} />
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <h2 className='font-bold'>$79.90</h2>
            <span className='cursor-pointer text-red'>X</span>
          </div>
          {/* SINGLE ITEM */}
          <div className='flex items-center justify-between mb-4'>
            <Image src='/loginBG.jpg' alt='' width={100} height={100} />
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <h2 className='font-bold'>$79.90</h2>
            <span className='cursor-pointer text-red'>X</span>
          </div>
        </div>
        <hr className='my-2 border-custom-orange' />
        {/* PAYMENT */}
        <div className='bg-custom-blueblack overflow-hidden h-1/2 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
          <div className='flex justify-between'>
            <span className=''>Subtotal (3 items)</span>
            <span className=''>$81.70</span>
          </div>
          <div className='flex justify-between'>
            <span className=''>Service Cost</span>
            <span className=''>$0.00</span>
          </div>
          <div className='flex justify-between'>
            <span className=''>Delivery Cost</span>
            <span className='text-green-500'>FREE! 🎉</span>
          </div>
          <hr className='my-2 border-custom-orange' />
          <div className='flex justify-between text-custom-orange'>
            <span className=''>TOTAL(INCL. VAT)</span>
            <span className='font-bold'>$81.70</span>
          </div>
          {/* <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button> */}
          <Button label='CHECKOUT' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
