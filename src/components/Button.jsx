import React from 'react';

const Button = ({ label }) => {
  return (
    <button className='bg-transparent text-gray-100 p-4 border-4 border-custom-orange rounded-full shadow-lg hover:bg-custom-orange sm:w-20 md:w-40'>
      {label}
    </button>
  );
};

export default Button;
