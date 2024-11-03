"use client";
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-12 p-2 bg-gray-800 dark:bg-gray-700 rounded-md shadow-md mb-10">
      <Link href="/" className="text-white hover:text-purple-300 dark:hover:text-purple-400">Home</Link>
      <Link href="/about" className="text-white hover:text-purple-300 dark:hover:text-purple-400">About</Link>
      <Link href="/projects" className="text-white hover:text-purple-300 dark:hover:text-purple-400">Projects</Link>
      <Link href="/uses" className="text-white hover:text-purple-300 dark:hover:text-purple-400">Uses</Link>
    </nav>
  );
};

export default Navbar;