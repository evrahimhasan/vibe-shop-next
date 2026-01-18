import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
            <Link href={'/'} className="text-lg font-semibold text-blue-500">
                <span className='text-sky-500'>Vibe</span>Shop</Link>

            <nav className='space-x-5'>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </nav>

        </div>
    );
};

export default Navbar;