"use client";

import React, { use, useEffect, useState } from 'react';

const ProductDetails = ({ params }) => {
    const productParams = use(params);
    const { id } = productParams;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    const product = products.find((product) => product.id == id);
    if (!product) {
        return <h2>Sorry, Product Not Found</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side: Image */}
                <div className="md:w-1/2 w-full h-80 md:h-auto overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Right Side: Details */}
                <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">{product.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6">
                        <span className="text-3xl font-bold text-green-600 mb-4 sm:mb-0">
                            ${product.price}
                        </span>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-300 transition-colors">
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
