'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import bookshelfImg from '../../public/static/images/bookshelf.png';
import bookIc from '../../public/static/images/book-icon.png';
import homeIc from '../../public/static/images/home-icon.png';
import profileIc from '../../public/static/images/profile-icon.png';
import searchIc from '../../public/static/images/search-icon.png';
import bookshelfBg from '../../public/static/images/bg-bookshelf.png';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={`mx-auto content-center flex flex-col ${step === 1 ? 'my-12' : ''}`}>
      {step === 1 ? (
        <Fragment>
          <Image src={bookshelfImg.src} width={335} height={252} className="mx-auto block" />
          <h1 className="text-3xl font-bold text-center mt-12"> Welcome to Reading Habit Tracker & Start tracking your reading journey</h1>
          <h2 className="text-center text-sm my-6"> Track your daily reading progress daily, never lose a page.</h2>
          <div className="flex flex-row mx-auto my-6">
            <img src={bookIc.src} className="h-[0.8rem]" />
            <img src={homeIc.src} className="h-[0.8rem]" />
            <img src={profileIc.src} className="h-[0.8rem]" />
            <img src={searchIc.src} className="h-[0.8rem]" />
          </div>
          <div className="flex flex-row place-content-around my-6 top-0">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              <span className="text-slate-700">Login with Google</span>
            </button>
            <button
              className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
              onClick={() => setStep(2)}
            >
              <span className="text-slate-700">Sign Up</span>
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="relative">
            <Image src={bookshelfBg.src} width={640} height={429} className="mx-auto block top-0" />
            <div className=" absolute top-[50%] w-[100%]">
              <h1 className="text-white text-center font-semibold text-4xl">Sign Up</h1>
              <h4 className="text-white text-center">Track, Share, Engage</h4>
            </div>
            <div className="z-1 rounded-[1.5rem] top-[75%] h-[200px] absolute px-4 bg-white w-[100%]">
              <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-12">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-4">
                <Label htmlFor="Username">Username</Label>
                <Input type="text" id="Username" placeholder="Username" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-4">
                <Label htmlFor="Password">Password</Label>
                <Input type="text" id="Password" placeholder="Username" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-4">
                <Label htmlFor="otp">OTP</Label>
                <Input type="text" id="otp" placeholder="OTP" />
              </div>
              <Button className="mt-4 px-4">Join</Button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default LoginPage;
