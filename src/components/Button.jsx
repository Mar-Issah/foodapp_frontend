import React from 'react';

//button components take a label prop
const Button = ({ label }) => {
  return (
    <button className='bg-transparent text-gray-100 p-3 border-2 border-custom-orange rounded-full shadow-lg hover:bg-custom-orange'>
      {label}
    </button>
  );
};

export default Button;
