'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/fonts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GoogleButton from '@/components/GoogleButton';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Signup from '@/components/Signup';
import Signin from '@/components/Signin';
import axios from 'axios';
import { APP_URL } from '@/lib/url';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [isRegister, setRegister] = useState(false);
  const router = useRouter();
  // const session = getServerSession();
  // console.log(session);

  // if (session) {
  //   redirect('/');
  // }

  return (
    <>
      <div className='flex flex-1 items-center justify-center h-screen w-screen'>
        <div className='w-screen h-screen flex flex-col md:flex-row '>
          <div className='relative h-1/3 w-4/5 md:h-full'>
            <Image
              src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698600044/HAMFOODS/loginBG_dsh1jc.jpg'
              alt='login'
              fill
              className='object-cover'
            />
          </div>
          <div className='bg-orange-100 w-full p-10 flex justify-between flex-col md:full'>
            <div>
              <h1 className='font-bold text-xl xl:text-3xl uppercase mb-2'>
                Welcome to h.a.m <span className={styles.fontPacifico}>foods</span>
              </h1>
              <p>Log into your account or create a new one </p>
            </div>
            <div>
              {isRegister ? <Signup setRegister={setRegister} /> : <Signin />}
              {isRegister ? (
                <p className='text-sm pl-4'>
                  Already have account?
                  <span className='underline cursor-pointer hover:bg-blue-200' onClick={() => setRegister(false)}>
                    {' '}
                    Signin
                  </span>
                </p>
              ) : (
                <p className='text-sm pl-4'>
                  Don&apos;t have account?
                  <span className='underline cursor-pointer hover:bg-blue-200' onClick={() => setRegister(true)}>
                    {' '}
                    Register
                  </span>
                </p>
              )}
            </div>
            <GoogleButton />
            <div>
              <div className='flex justify-between pl-4 mt-4'>
                <p className='text-sm'>
                  Have a problem?
                  <Link className='underline hover:bg-blue-200' href='/'>
                    {' '}
                    Contact us
                  </Link>
                </p>
                <Link className='underline flex gap-1 justify-center hover:bg-blue-200' href='/'>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: '#3d3f43', height: '1rem' }}
                    className='animate-bounce'
                  />
                  <p className='text-sm'>Go to Homepage</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
