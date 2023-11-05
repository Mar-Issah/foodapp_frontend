'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useQuery } from 'react-query';
import { APP_URL } from '@/lib/url';

async function fetchData() {
  const response = await fetch(`${APP_URL}/api/orders`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
const OrdersPage = () => {
  const { data: orders, error, isLoading } = useQuery('orders', fetchData, { staleTime: 300000 });

  //format the mongodb date
  const formatDate = (date) => {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='bg-custom-blueblack w-screen min-h-screen overflow-hidden'>
      <Navbar />
      <div className='px-4 lg:px-10 xl:px-40 pb-80 w-screen h-60'>
        {orders?.length === 0 && (
          <h1 className='text:md uppercase bold md:text-md lg:text-xl text-slate-200 mt-20'>
            You have not made any order
          </h1>
        )}
        {isLoading ? (
          <div className='flex justify-center items-center w-screen h-64 pb-2'>
            <button
              type='button'
              className='bg-custom-orange my-10 mx-auto p-4 flex justify-center items-center animate-bounce shadow-lg rounded-sm'
              disabled
            >
              Please wait
            </button>
          </div>
        ) : (
          <table className='text-sm w-full border-separate border-spacing-3 mb-40 md:text-md lg:text-lg'>
            <thead>
              <tr className='text-left text-custom-orange'>
                <th className='hidden md:block'>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className='text-gray-100'>
              {orders?.map((order) => (
                <tr key={order?._id} className='text-sm md:text-base'>
                  <td className='hidden md:block py-3 px-1'>{order?._id}</td>
                  <td className='py-3 px-1'>{formatDate(order?.createdAt)}</td>
                  <td className='py-3 px-1'>GH₵{order?.total.toFixed(2)}</td>
                  <td className='py-3 px-1 text-green-500'>Preparing Order...</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
