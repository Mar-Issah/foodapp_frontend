import React from 'react';

const Button = ({ label, ...props }) => {
  return (
    <button className='bg-transparent text-gray-100 p-3 border-2 border-custom-orange rounded-full shadow-lg hover:bg-custom-orange'>
      {label}
    </button>
  );
};

export default Button;
