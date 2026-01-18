import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Get in Touch
                </h2>

                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
                        ></textarea>

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