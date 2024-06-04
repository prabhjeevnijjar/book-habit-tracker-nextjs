'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function sendOtp(formData) {
  console.log('i am here ::: ', formData);
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOtp({
      email: formData.get('email'),
      options: {
        data: {
          first_name: formData.get('name'),
          user_name: formData.get('username'),
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

export async function signup(formData) {
  console.log('clicked::: ', formData);
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOtp({
      email: formData.get('email'),
      options: {
        data: {
          first_name: formData.get('name'),
          user_name: formData.get('username'),
        },
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
      },
    });
    console.log({ data });
    if (error) throw error;

    revalidatePath('/', 'layout');
    redirect('/');
  } catch (e) {
    console.log({ e });
    return {
      error: 'Something went wrong!',
    };
  }
}

export async function verifyOtp(formData) {
  console.log('not herer');
  const supabase = createClient();

  const { data, error } = await supabase.auth.verifyOtp({
    email: formData.get('email'),

    token: formData.get('otp'),
    type: 'email',
  });

  console.log({ data });

  if (error) redirect('/error');
  // To update cache to update the layout and app features based on logged in user
  revalidatePath('/', 'layout');
  redirect('/');
}
