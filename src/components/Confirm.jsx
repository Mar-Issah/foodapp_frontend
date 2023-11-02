import React, { useState } from 'react';
import Image from 'next/image';

const Confirm = ({ isConfirmModal, setIsConfirmModal }) => {
  return (
    <div>
      {isConfirmModal && (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='modal-content bg-custom-blueblack p-4 rounded-lg shadow-lg'>
            <h2 className='text-custom-orange text-xlg font-semibold mb-4'>Thank You.</h2>
            <p>Your Order is being prepared</p>
            <Image
              src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698905410/HAMFOODS/thanks_cgsskz.png'
              alt='food'
              width={200}
              height={200}
              className='object-contain'
            />
            <button
              onClick={() => setIsConfirmModal(false)}
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirm;
