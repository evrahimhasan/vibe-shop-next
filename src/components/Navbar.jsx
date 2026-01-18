"use client";

import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // check login status from cookie
    useEffect(() => {
        const auth = Cookies.get("auth");
        setIsLoggedIn(!!auth);
    }, [pathname]);

    const handleLogout = () => {
        Cookies.remove("auth");
        setIsLoggedIn(false);
        router.push("/");
    };
    return (
        <header className="border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <Link href="/" className="text-xl font-bold">
                    <span className="text-sky-500">Vibe</span>
                    <span className="text-blue-500">Shop</span>
                </Link>

                <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-blue-600">
                        Products
                    </Link>
                    <Link href="/about-us" className="hover:text-blue-600">
                        About Us
                    </Link>
                </nav>

                <div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;