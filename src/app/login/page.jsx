import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/fonts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GoogleButton from '@/components/GoogleButton';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession()
  // console.log(session)
  if (session){
    redirect("/")
  }
  return (
    <>
      <div className='flex flex-1 items-center justify-center h-screen w-screen'>
        <div className='w-screen h-screen flex flex-col md:flex-row '>
          <div className='relative h-1/3 w-full md:h-full'>
            <Image src='/loginBG.jpg' alt='' fill className='object-cover' />
          </div>
          <div className='bg-orange-100 p-10 flex flex-col gap-8 md:w-1/2'>
            <h1 className='font-bold text-xl xl:text-3xl uppercase'>
              Welcome to h.a.m <span className={styles.fontPacifico}>foods</span>
            </h1>
            <p>Log into your account or create a new one using social buttons</p>
            <GoogleButton />
            <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
              <Image src='/facebook.png' alt='' width={20} height={20} className='object-contain' />
              <span>Sign in with Facebook</span>
            </button>
            <p className='text-sm'>
              Have a problem?
              <Link className='underline' href='/'>
                {' '}
                Contact us
              </Link>
            </p>
            <Link className='underline flex gap-1 justify-center' href='/'>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: '#3d3f43', height: '1rem' }}
                className='animate-bounce'
                />
              <p>Go to Homepage</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

