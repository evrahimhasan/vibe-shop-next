import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Discover Amazing <br />
                        <span className="text-blue-200">Products</span>
                    </h1>

                    <p className="mt-6 text-lg text-blue-100 max-w-md">
                        Find the best deals on top quality items.
                        Simple, fast and reliable shopping experience.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition">
                            View Products
                        </button>

                        <button className="border border-white/70 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center">
                    {/* background shape */}
                    <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>

                    <Image
                        src="/hero-products.png"
                        alt="Products"
                        width={500}
                        height={400}
                        className="relative w-full max-w-sm md:max-w-md rounded-xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;