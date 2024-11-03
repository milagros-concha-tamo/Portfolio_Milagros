"use client";
import { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Navbar from '../components/Navbar'; // Import the Navbar component

export function Sidebar() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <aside className="w-full lg:w-1/3 space-y-4">
      <div className="p-4 border rounded-md shadow-sm dark:border-gray-700">
        <h3 className="font-bold text-lg dark:text-white">Stay up to date</h3>
        <p className="text-white-500 dark:text-gray-400">
          Get notified when I publish something new, and unsubscribe at any time.
        </p>
        <form onSubmit={handleSubmit} className="mt-2">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
            disabled={loading}
          />
          {error && <p className="text-red-700 mt-1 dark:text-red-400">{error}</p>}
          {success && <p className="text-green-700 mt-1 dark:text-green-400">{success}</p>}
          <button
            type="submit"
            className={`mt-2 w-full py-2 rounded-md ${loading ? "bg-gray-500 dark:bg-gray-700" : "bg-purple-900 text-white dark:bg-purple-700"}`}
            disabled={loading}
          >
            {loading ? "Joining..." : "Join"}
          </button>
        </form>
      </div>
    </aside>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-2">
      <Navbar /> {/* Add the Navbar here */}

      <div className="absolute top-2 left-4 z-10">
        <ThemeSwitcher darkClassName="dark" />
      </div>

      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold dark:text-white">Milagros Concha Tamo</h1>
        <p className="mt-2 text-white-400 dark:text-gray-300">
          Computer Science/ Software Development/ Environmental Engineering
        </p>
      </header>

      <main className="flex flex-col lg:flex-row gap-8">
        <section className="flex-1">
          <div className="space-y-4">
            <article className="p-4 border rounded-md shadow-sm dark:border-gray-700">
              <h2 className="text-xl font-semibold dark:text-white">This is Milagros!</h2>
              <p className="text-sm text-white-500 dark:text-gray-400">October 28, 2024</p>
              <p className="mt-2 text-white-500 dark:text-gray-300">
                In this article, you will find detailed information about my academic and professional background.
              </p>
              <a href="#" className="text-purple-700 hover:underline dark:text-purple-400">
                Read article
              </a>
            </article>
          </div>
        </section>

        <Sidebar />

        <aside className="w-full lg:w-1/3 space-y-4">
          <div className="p-4 border rounded-md shadow-sm dark:border-gray-700">
            <h3 className="font-bold text-lg dark:text-white">Work</h3>
            <p className="text-white-500 dark:text-gray-400">Studying Computer Science</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center dark:text-white">
                <span className="font-semibold">BYU Pathway</span> - 2024 to Present
              </li>
              <li className="flex items-center dark:text-white">
                <span className="font-semibold">Consortium S&P</span> - 2022 to 2023
              </li>
              <li className="flex items-center dark:text-white">
                <span className="font-semibold">Proyecta</span> - 2021 to 2022
              </li>
            </ul>
          </div>

          <div className="p-4 border rounded-md shadow-sm dark:border-gray-700">
            <h3 className="font-bold text-lg dark:text-white">Skills</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-medium mr-2 dark:text-white">JavaScript</span>
                <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-gray-700">
                  <div className="bg-purple-900 h-2 rounded-full dark:bg-purple-600" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1 dark:text-white">SQL Server</span>
                <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-gray-700">
                  <div className="bg-purple-900 h-2 rounded-full dark:bg-purple-600" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1 dark:text-white">ArcGIS</span>
                <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-gray-700">
                  <div className="bg-purple-900 h-2 rounded-full dark:bg-purple-600" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1 dark:text-white">Microsoft Office 365</span>
                <div className="w-full bg-gray-200 h-2 rounded-full dark:bg-gray-700">
                  <div className="bg-purple-900 h-2 rounded-full dark:bg-purple-600" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}