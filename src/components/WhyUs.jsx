import React from 'react';
import Image from "next/image";

const WhyUs = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Why Choose <span className="text-blue-600">Us</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-md">
                        We provide the best quality products with affordable pricing
                        and reliable customer support you can trust.
                    </p>

                    <div className="mt-8 space-y-5">
                        {/* Item 1 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Best Deals
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Affordable pricing with exciting offers.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Top Quality
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Premium products with guaranteed quality.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    24/7 Support
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Friendly support whenever you need help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <Image
                        src="/why-us.png"
                        alt="Products"
                        width={500}
                        height={400}
                       className="w-full max-w-md rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhyUs;