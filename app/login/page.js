'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import bookshelfImg from '../../public/static/images/bookshelf.png';
import bookIc from '../../public/static/images/book-icon.png';
import homeIc from '../../public/static/images/home-icon.png';
import profileIc from '../../public/static/images/profile-icon.png';
import searchIc from '../../public/static/images/search-icon.png';
import SignupForm from '@/components/loginPage/SignupForm';
import LoginForm from '@/components/loginPage/LoginForm';

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
            <button
              className="px-4 py-2 border flex gap-2 border-primaryPurple rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              onClick={() => setStep(2)}
            >
              <span className="text-slate-700">Sign Up</span>
            </button>
            <button
              className="px-4 py-2 border flex gap-2 border-primaryPurple rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              onClick={() => setStep(3)}
            >
              <span className="text-slate-700">Log In</span>
            </button>
          </div>
        </Fragment>
      ) : step === 2 ? (
        <SignupForm setStep={setStep} />
      ) : (
        <LoginForm setStep={setStep} />
      )}
    </div>
  );
};

export default LoginPage;
