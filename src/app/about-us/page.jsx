import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className='text-sky-500'>Vibe</span><span className='text-blue-500'>Shop</span>
        </h2>

        {/* Short Intro (তোমার দেওয়া text) */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Welcome to <span className="text-blue-400 font-semibold">VibeShop</span> – your go-to destination for premium laptops, smartphones, headphones, smartwatches, and more. 
          We bring you the best deals with secure shopping, fast delivery, and 24/7 support. Explore amazing products today!
        </p>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:shadow-blue-900/30 transition-shadow">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To make premium technology accessible to everyone by offering unbeatable prices without compromising quality.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:shadow-blue-900/30 transition-shadow">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Why Choose Us?</h3>
            <p className="text-gray-300">
              Secure payments, lightning-fast delivery across Bangladesh, and dedicated 24/7 customer support — your satisfaction is our top priority.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:shadow-blue-900/30 transition-shadow">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Promise</h3>
            <p className="text-gray-300">
              Every product is handpicked for quality, performance, and value — because you deserve the best vibe in tech.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <p className="text-gray-400 text-lg mb-6">
            Ready to upgrade your tech game?
          </p>
          <Link
            href="/products"
            className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now →
          </Link>
        </div>
      </div>
    </section>
    );
};

export default AboutUs;