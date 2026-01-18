import React from 'react';
import Image from "next/image";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Khan",
            role: "Happy Customer",
            message:
                "Fantastic products and excellent service! I am very satisfied with my purchase.",
            image: "/user1.jpg",
        },
        {
            name: "James Rahman",
            role: "Regular Buyer",
            message:
                "Quick delivery and great prices. Highly recommended for everyone!",
            image: "/user2.jpg",
        },
        {
            name: "Ayesha Noor",
            role: "Verified User",
            message:
                "Amazing quality products and friendly customer support. Loved it!",
            image: "/user3.jpg",
        },
        {
            name: "Rahim Uddin",
            role: "Satisfied Customer",
            message:
                "The products are exactly as described. Great quality and fast delivery!",
            image: "/user4.jpg",
        }
    ];
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        What Our <span className="text-blue-600">Customers Say</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Real reviews from people who trust and love our products.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <p className="text-gray-600 italic text-sm">
                                “{item.message}”
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">
                                        {item.name}
                                    </h4>
                                    <span className="text-xs text-gray-500">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;