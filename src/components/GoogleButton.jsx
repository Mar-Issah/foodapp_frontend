'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const GoogleButton = () => {
  return (
    <button
      className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-blue-200'
      onClick={() => signIn('google')}
    >
      <Image src='/google.png' alt='' width={20} height={20} className='object-contain' />
      <span>Or Sign in with Google</span>
    </button>
  );
};

export default GoogleButton;
