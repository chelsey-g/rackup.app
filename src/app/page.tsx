'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import AuthForm from './auth-form';

export default function HomePage() {
  const [loginModal, setloginModal] = useState(false);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    }
  }

  function login() {
    setloginModal(!loginModal);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 bg-white">
      <nav className="flex items-center justify-between w-full p-4 bg-white">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-3xl rounded-full h-16 w-48 flex items-center justify-center shadow-xl">
            <span className="transform rotate-12">rackup.app</span>
          </div>
          <div>
            <Link href="/home" className="text-pink-800 hover:text-gray-600 hover:text-pink-400 font-bold">
              home
            </Link>
            <Link href="/brackets" className="text-pink-800 hover:text-gray-600 hover:text-pink-400 font-bold ml-4">
              brackets
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link href="/contact" className="text-pink-800 hover:text-gray-600 hover:text-pink-400 font-bold ml-4">
            contact
          </Link>
          
        </div>
        <AuthForm />
      </nav>
    </div>
  );
}
