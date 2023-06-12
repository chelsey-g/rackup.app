import React from 'react';
import Link from 'next/link';

export default function HomePage() {
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
        <Link href="/contact" className="text-pink-800 hover:text-gray-600 hover:text-pink-400 font-bold ml-4">
              contact
            </Link>
      </nav>
      <div className="flex flex-col items-center justify-center mt-8 bg-white">
        <h1 className="text-4xl font-bold text-purple-500">this is my app home page</h1>
        <p className="mt-4 text-md text-pink-600">
          more feautures to come
        </p>
      </div>
    </div>
  );
}
