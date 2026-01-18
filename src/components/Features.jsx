import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Wide Product Range",
            description:
                "Explore a wide variety of products carefully selected for quality.",
            icon: "🛍️",
        },
        {
            title: "Secure Payment",
            description:
                "Your payments are safe and secure with trusted payment methods.",
            icon: "🔒",
        },
        {
            title: "Fast Delivery",
            description:
                "Quick and reliable delivery service right to your doorstep.",
            icon: "🚚",
        },
        {
            title: "Customer Support",
            description:
                "Friendly support team ready to help you anytime you need.",
            icon: "💬",
        },
    ];
    return (
        <section className="bg-white py-20 rounded-xl">
            <div className="">

                {/* Section Title */}
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our <span className="text-blue-600">Features</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Everything you need for a smooth and enjoyable shopping experience.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>

                            <h4 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;