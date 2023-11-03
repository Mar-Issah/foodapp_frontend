import React from 'react';
import Image from 'next/image';

const Special = () => {
  return (
    <div className='flex rounded-2xl w-4/5 my-14 h-15'>
      <div>
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698719236/HAMFOODS/tuzaafi_fw2rn2.png'
          alt='food'
          width={400}
          height={400}
          className='object-contain'
        />
      </div>
      <div className='bg-black text-slate-200 p-4'>
        <h5 className='font-semibold mb-2'>Our Special Sunday TZ</h5>
        <p>
          Our delicious, rich and nutritious Tuo zafi on Sundays will blow your mind with it’s indigenous blend of
          Ghanaian spices. It Comes with all variety of Protein assortments.
        </p>
      </div>
    </div>
  );
};

export default Special;
