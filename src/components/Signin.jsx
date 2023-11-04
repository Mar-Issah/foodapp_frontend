'use client';
'use client';
import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
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
      <div as='form' className='flex items-center justify-center p-4 flex-col'>
        {/* {!error == '' && <p className='text-red-600'>{error}</p>} */}

        <div className='sm:col-span-4 w-full'>
          <label for='username' className='block text-sm font-medium leading-6 text-gray-500'>
            Email
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='example@gmail.com'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='sm:col-span-4 w-full'>
          <label for='username' class='block text-sm font-medium leading-6 text-gray-500 mt-4'>
            Password
          </label>
          <div className='mt-1'>
            <div className='flex ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                type='password'
                name='password'
                id='password'
                className='block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='.................'
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='w-full mt-2'>
          {formData.email && formData.password && (
            <button className='bg-blue-900 text-slate-200 rounded p-2' type='submit'>
              Signin
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
