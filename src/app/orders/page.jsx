'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const OrdersPage = () => {
  return (
    <div className='bg-custom-blueblack  w-screen overflow-hidden'>
      <Navbar />
      <div className='p-4 lg:px-10 xl:px-40 w-screen'>
        {/* {
          <div className='flex justify-center items-center w-screen h-15'>
            <button
              type='button'
              className='bg-custom-orange my-10 mx-auto p-4 flex justify-center items-center animate-bounce shadow-lg rounded-sm'
              disabled
            >
              Sorry, You have not made any Orders
            </button>
          </div>
        } */}
        <table className='w-full h-4/5 border-separate border-spacing-3 mb-10'>
          <thead>
            <tr className='text-left text-custom-orange'>
              <th className='hidden md:block'>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-100'>
            <tr className='text-sm md:text-base'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>GH₵89.90</td>
              <td className='py-3 px-1 text-green-500'>On the way (approx. 10min)...</td>
            </tr>
            <tr className='text-sm md:text-base'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>89.90</td>

              <td className='py-3 px-1'>On the way (approx. 10min)...</td>
            </tr>
            <tr className='text-sm md:text-base text-gray-100'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>89.90</td>

              <td className='py-3 px-1'>On the way (approx. 10min)...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
