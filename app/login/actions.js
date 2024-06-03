'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function sendOtp(formData) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email'),
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
    },
  });
  console.log({ data });
  if (error) redirect('/error');
  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData) {
  console.log('clicked::: ', formData);
  //   const supabase = createClient();

  //   const { data, error } = await supabase.auth.signInWithOtp({
  //     email: formData.get('email'),
  //     options: {
  //       data: {
  //         first_name: formData.get('name'),
  //         user_name: formData.get('username'),
  //       },
  //       // set this to false if you do not want the user to be automatically signed up
  //       shouldCreateUser: false,
  //     },
  //   });
  //   console.log({ data });
  //   if (error) {
  //     console.log({ error });
  //     toast({
  //       title: 'Something went wrong!',
  //     });
  //   }

  //   revalidatePath('/', 'layout');
  //   redirect('/');
}

export async function verifyOtp(formData) {
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
