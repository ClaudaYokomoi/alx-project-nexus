import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-[#D94B1D]">Welcome to Your Account</h1>
      <p className="mt-4 text-lg text-gray-700">Manage your profile, orders, and settings.</p>
      <div className="mt-6 space-x-4">
        <Link to="/login" className="px-6 py-3 bg-[#FFB82E] text-white rounded-lg shadow-lg hover:bg-[#FE71BA] transition">
          Log In
        </Link>
        <Link to="/signup" className="px-6 py-3 bg-[#D94B1D] text-white rounded-lg shadow-lg hover:bg-[#FF6137] transition">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Account;
