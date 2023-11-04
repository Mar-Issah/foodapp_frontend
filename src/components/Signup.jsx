'use client';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  console.log(formData);
  const handleClick = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div as='form' className='flex flex-col items-center justify-center p-4 '>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 mt-2'>
            Full Name
          </label>
          <div>
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
          <div>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md text-gray-500'>
              <input
                type='email'
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
          <div>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='tel'
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
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500'>
            Password
          </label>
          <div>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='password'
                name='password'
                id='password'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='..............'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500 '>
            Re-enter Password
          </label>
          <div>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='password'
                name='password2'
                id='password2'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='.............'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='w-full mt-2'>
          <button className='bg-blue-900 text-slate-200 rounded p-2' type='submit'>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
