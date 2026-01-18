import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPinterest, FaFacebook, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1c1c1c] text-white pt-12 pb-6 mt-10">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">

                {/* Logo & About */}
                <div>
                    <div className="text-lg font-semibold text-blue-500">
                        <span className='text-sky-500'>Vibe</span>Shop</div>
                    <p className="text-gray-300 leading-relaxed">
                        Welcome to VibeShop – your go-to destination for premium laptops,
                        smartphones, headphones, smartwatches, and more. We bring you the best deals with
                        secure shopping, fast delivery, and 24/7 support. Explore amazing products today!
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/" className="hover:text-sky-500 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/features" className="hover:text-sky-500 transition">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-sky-500 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-sky-500 transition">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center gap-4 mb-2">
                        <span>
                            <FaInstagram className="bg-gradient-to-r from-[#f64c4c] via-[#e60000] to-[#ff4d4d] text-white h-[50px] w-[50px] p-3 rounded-full shadow-lg" />
                        </span>
                        <span>
                            <FaFacebook className="text-[#1877F2] h-[50px] w-[50px] p-3 rounded-full bg-white shadow-lg" />
                        </span>
                        <span>
                            <FaPinterest className="text-[#E60023] h-[50px] w-[50px] p-3 rounded-full bg-white shadow-lg" />
                        </span>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>

            {/* Copyright */}
            <p className="text-center text-gray-400 text-sm">
                © 2025 VibeShop — All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;