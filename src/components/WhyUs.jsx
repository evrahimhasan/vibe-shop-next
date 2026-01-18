import React from 'react';
import Image from "next/image";

const WhyUs = () => {
    const features = [
        {
            title: "Best Deals",
            description: "Affordable pricing with exciting offers.",
            icon: "✓",
        },
        {
            title: "Top Quality",
            description: "Premium products with guaranteed quality.",
            icon: "✓",
        },
        {
            title: "24/7 Support",
            description: "Friendly support whenever you need help.",
            icon: "✓",
        },
        {
            title: "Fast Delivery",
            description: "Quick and safe delivery to your doorstep.",
            icon: "✓",
        },
    ];
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Why Choose <span className="text-blue-600">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Reasons why customers love and trust our platform.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold mb-4">
                                {item.icon}
                            </div>

                            <h4 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Optional Image */}
                <div className="mt-16 flex justify-center">
                    <Image
                        src="/why-us.png"
                        alt="Why Choose Us"
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhyUs;