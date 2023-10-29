import React from 'react';

const Button = ({ label, ...props }) => {
  return (
    <button {...props} className='bg-transparent text-gray-100 p-2 border-2 border-custom-orange rounded-full shadow-lg hover:bg-custom-orange '>
      {label}
    </button>
  );
};

export default Button;
