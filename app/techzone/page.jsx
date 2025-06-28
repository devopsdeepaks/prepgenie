'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TechZonePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Easy Study LMS after a short delay
    const timer = setTimeout(() => {
      window.location.href = 'https://lms-swart-nine.vercel.app/';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to Easy Study LMS...</h1>
        <p className="text-gray-600 mb-4">You will be redirected to the learning platform in a few seconds.</p>
        <a
          href="https://lms-swart-nine.vercel.app/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Click here if not redirected automatically
        </a>
      </div>
    </div>
  );
} 