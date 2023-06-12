'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/home');
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-black mb-4">Welcome, welcome, welcome!</h1>
        <p className="text-lg text-black">Check out my sweet pool app!</p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-6 rounded"
          onClick={handleButtonClick}
        >
          Get started!
        </button>
      </div>
    </div>
  );
}
