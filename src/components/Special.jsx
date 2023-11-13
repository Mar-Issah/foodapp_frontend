import React from 'react';
import Image from 'next/image';

//component for our special menu
const Special = () => {
  return (
    <div className='w-screen md:w-4/5 lg:w-4/5 flex rounded-2xl pb-16 mt-10 h-15'>
      <div>
        {/* left image */}
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698719236/HAMFOODS/tuzaafi_fw2rn2.png'
          alt='food'
          width={500}
          height={400}
          className='object-contain'
        />
      </div>
      <div className='bg-black text-slate-200 p-4'>
        <h5 className='text-sm md:text-lg lg:text-lg font-semibold mb-2'>Our Special Sunday TZ</h5>
        <p className='text-sm md:text-lg lg:text-lg'>
          Our delicious, rich and nutritious Tuo zafi on Sundays will blow your mind with it’s indigenous blend of
          Ghanaian spices. It Comes with all variety of Protein assortments.
        </p>
      </div>
    </div>
  );
};

export default Special;
