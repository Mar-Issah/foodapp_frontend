import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const OrdersPage = () => {
  return (
    <div className='bg-custom-blueblack w-screen overflow-hidden'>
      <Navbar />
      <div className='p-4 lg:px-10 xl:px-40 w-screen'>
        <table className='w-full border-separate border-spacing-3'>
          <thead>
            <tr className='text-left text-custom-orange'>
              <th className='hidden md:block'>Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className='hidden md:block'>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-100'>
            <tr className='text-sm md:text-base'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>89.90</td>
              <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
              <td className='py-3 px-1'>On the way (approx. 10min)...</td>
            </tr>
            <tr className='text-sm md:text-base'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>89.90</td>
              <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
              <td className='py-3 px-1'>On the way (approx. 10min)...</td>
            </tr>
            <tr className='text-sm md:text-base text-gray-100'>
              <td className='hidden md:block py-3 px-1'>1237861238721</td>
              <td className='py-3 px-1'>19.07.2023</td>
              <td className='py-3 px-1'>89.90</td>
              <td className='hidden md:block py-3 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
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
