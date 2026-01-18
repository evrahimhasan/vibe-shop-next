import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 px-4">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <h1 className="text-8xl font-extrabold text-sky-500 mb-4">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8">
                    The page you’re looking for doesn’t exist or may have been moved.
                    Don’t worry — let’s get you back to shopping on{" "}
                    <span className="font-semibold text-sky-500">Vibe</span>
                    <span className="font-semibold text-blue-500">Shop</span>.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
                    >
                        Go to Home
                    </Link>

                    <Link
                        href="/products"
                        className="border border-sky-500 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
                    >
                        Browse Products
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;