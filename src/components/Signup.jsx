'use client';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleClick = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className='flex flex-col items-center justify-center p-4 '>
        {/* {!error == '' && <p className='text-red-600'>{error}</p>} */}

        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Full Name
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='text'
                name='username'
                id='username'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='John Doe'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Email
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md text-gray-500'>
              <input
                type='text'
                name='email'
                id='email'
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='example@gmail.com'
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Phone Number
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='text'
                name='phone'
                id='phone'
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='+233 234 567 89'
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Password
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='text'
                name='username'
                id='username'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='..............'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Re-enter Password
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='text'
                name='password'
                id='username'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='.............'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
