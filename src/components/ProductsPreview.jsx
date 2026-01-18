"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductsPreview = () => {
    const [previewItems, setPreviewItems] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setPreviewItems(data.slice(0, 4));
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-gray-950 to-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Popular Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {previewItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-800 to-black">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Optional overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-bold text-blue-400">
                                        ${item.price}
                                    </p>

                                    <Link
                                        href={`/items/${item.id}`}
                                        className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-blue-500/50"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-600/50"
                    >
                        See All Products →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;