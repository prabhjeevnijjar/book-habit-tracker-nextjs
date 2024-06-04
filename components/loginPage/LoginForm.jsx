'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import bookshelfBg from '../../public/static/images/bg-bookshelf.png';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { verifyOtp } from '@/app/login/actions';

const LoginForm = ({ setStep }) => {
  const [otpStep, setOtpStep] = useState(1);

  return (
    <Fragment>
      <div className="relative">
        <Image src={bookshelfBg.src} width={640} height={429} className="mx-auto block top-0" />
        <div className=" absolute top-[50%] w-[100%]">
          <h1 className="text-white text-center font-semibold text-4xl">Log In</h1>
          <h4 className="text-white text-center">Track, Share, Engage</h4>
        </div>

        <div className="z-1 rounded-[1.5rem] top-[75%] h-[500px] absolute px-4 bg-white w-[100%] flex flex-col">
          <div className="flex align-center text-left py-4 items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setStep(1)} className="cursor-pointer">
              <path
                d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            {otpStep === 2 ? (
              <form action={verifyOtp}>
                <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-4">
                  <Label htmlFor="otp2">OTP</Label>
                  <InputOTP maxLength={6} name="otp2">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <Button className="mt-4 px-4 bg-primaryPurple w-[100px]" onClick={() => setOtpStep(1)}>
                  Login
                </Button>
              </form>
            ) : (
              <form>
                <div className="grid w-full max-w-sm items-center gap-1.5 z-2 mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <Button className="mt-4 px-4 bg-primaryPurple w-[100px]" onClick={() => setOtpStep(2)}>
                  Send OTP
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
