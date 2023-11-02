import React from 'react';

const Special = () => {
  return (
    <div className='flex rounded-md w-3/5 ml-4'>
      <div>
        <Image
          src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698719236/HAMFOODS/tuzaafi_fw2rn2.png'
          alt='food'
          width={300}
          height={300}
          className='object-contain'
        />
      </div>
      <div className='bg-black text-slate-200'>
        <h5 className='font-semibold'>Our Special Sunday TZ</h5>
        <p>
          Our delicious, rich and nutritious Tuo zafi on Sundays will blow your mind with it’s indigenous blend of
          Ghanaian spices. It Comes with all variety of Protein assortments.
        </p>
      </div>
    </div>
  );
};

export default Special;
