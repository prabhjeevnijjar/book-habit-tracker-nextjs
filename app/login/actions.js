'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function sendOtp(state) {
  console.log('sendOTP ::: ', state);
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOtp({
      email: state.email,
      options: {
        data: {
          first_name: state.name,
          user_name: state.username,
        },
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    });
    console.log({ data });
    if (error) {
      console.log(error);
      throw error;
    }
  } catch (e) {
    console.log({ e });
    return {
      error: 'Something went wrong!',
    };
  }
}

export async function signup(state) {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOtp({
      email: state.email,
      options: {
        data: {
          first_name: state.name,
          user_name: state.username,
        },
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
      },
    });
    console.log({ data });

    if (error) {
      const msg = { code: error?.status || 400, msg: error?.message || 'Something went wrong!' };
      throw msg;
    }
  } catch (e) {
    return { code: e?.code || 400, msg: e?.message || 'Something went wrong!' };
  }
}

export async function verifyOtp(state) {
  console.log('verify OTP');
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.verifyOtp({
      email: state.email,

      token: state.otp,
      type: 'email',
    });

    console.log({ data }, { error });

    if (error) {
      const msg = { code: error?.status || 400, msg: error?.message };
      throw msg;
    } else {
      // To update cache to update the layout and app features based on logged in user
      revalidatePath('/', 'layout');
      redirect('/');
    }
  } catch (e) {
    return { code: e?.code || 400, msg: e?.msg };
  }
}
