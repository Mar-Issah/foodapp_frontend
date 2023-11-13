import React, { useState } from 'react';
import Spinner from './Spinner';

// a modal which contains the order form
const Modal = ({ isModalOpen, setIsModalOpen, total, createOrder, error, isLoading, setIsLoading }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    setIsLoading(true);
    createOrder({
      customer,
      address,
      total,
      phone,
      method: 0,
      userId: localStorage.getItem('hamfoodsUserId'),
    });
  };
  return (
    <div>
      {isModalOpen && (
        <div className='fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-screen md:w-96 modal-content bg-custom-blueblack p-4 rounded-lg shadow-lg'>
            {!error == '' && <p className='text-red-600'>{error}</p>}
            <h2 className='text-custom-orange text-lg font-semibold mb-4'>You will pay GH₵15 after delivery</h2>

            <div className='sm:col-span-4'>
              <label for='username' className='block text-sm font-medium leading-6 text-slate-300'>
                Full Name
              </label>
              <div className='mt-1'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    required
                    className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='John Doe'
                    onChange={(e) => setCustomer(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label for='username' className='block text-sm font-medium leading-6 text-slate-300 mt-2'>
                Phone Number
              </label>
              <div className='mt-1'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='+233 234 567 89'
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <label for='about' className='block text-sm font-medium leading-6 text-slate-300 mt-2'>
                Address
              </label>
              <div className='mt-2'>
                <textarea
                  id='address'
                  name='address'
                  rows='5'
                  className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Elton St. 505 Accra'
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            <div className='flex justify-between mt-4'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
              >
                Close
              </button>
              {(customer && phone && address) !== (undefined || '') && (
                <button
                  className='rounded-md px-4 py-2 bg-custom-orange hover:bg-transparent text-green-500'
                  onClick={handleClick}
                >
                  {isLoading ? <Spinner /> : 'Order'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
