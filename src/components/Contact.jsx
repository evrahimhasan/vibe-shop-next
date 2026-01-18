import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-gray-50 rounded-xl">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Get in Touch
                </h2>

                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition">
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;