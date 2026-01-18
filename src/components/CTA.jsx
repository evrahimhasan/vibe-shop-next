import React from 'react';

const CTA = () => {
    return (
        <section className="bg-sky-500 py-14 px-4 text-center text-white rounded-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Need Help Choosing the Right Product?
            </h2>

            <p className="max-w-2xl mx-auto text-lg mb-8 text-sky-100">
                Our team is ready to guide you with expert recommendations
                and quick support.
            </p>

            <a
                href="#contact"
                className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-100 transition"
            >
                Contact Us
            </a>
        </section>
    );
};

export default CTA;