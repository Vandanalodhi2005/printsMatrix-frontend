import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Return & Refund Policy</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        At Prints Matrix, we aim to provide a transparent and fair return and refund process. This policy outlines the conditions under which returns, refunds, and cancellations may be accepted. Please review this policy carefully before making a purchase.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. Eligibility for Returns</h2>
                        <p className="mb-4">You may be eligible to return a product if:</p>
                        <ul className="space-y-2 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                The return request is submitted within 7 days of delivery
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                The product is unused, uninstalled, and in its original packaging
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                All original accessories, manuals, and packaging materials are included
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Proof of purchase is provided
                            </li>
                        </ul>
                        <p className="mt-6 italic">Certain items may be non-returnable due to hygiene, safety, or manufacturer restrictions unless required by law.</p>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Non-Returnable Items</h2>
                        <p className="mb-4">The following items are generally not eligible for return:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Opened or used ink and toner cartridges</li>
                            <li>Products damaged due to misuse, improper handling, or installation</li>
                            <li>Clearance or final-sale items (where clearly marked)</li>
                            <li>Digital products or downloadable items</li>
                        </ul>
                    </div>

                    {/* Section 3 & 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                        <div>
                            <h2 className="text-2xl font-black text-black mb-6 tracking-tighter">3. Return Process</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Contact support at <span className="text-black font-bold">support@printsmatrix.com</span></li>
                                <li>Provide your order number and reason</li>
                                <li>Wait for authorization before shipping</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-black mb-6 tracking-tighter">4. Return Shipping</h2>
                            <p>Customers are responsible for return shipping costs unless the return is due to our error. We recommend using a trackable shipping method.</p>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">5. Refunds</h2>
                        <p className="mb-4">Once the returned item is received and inspected:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Approved refunds will be processed within 5–7 business days</li>
                            <li>Refunds are issued to the original payment method</li>
                            <li>Shipping and handling fees are non-refundable</li>
                        </ul>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">7. Damaged or Incorrect Items</h2>
                        <p className="mb-4">If you receive a damaged, defective, or incorrect item:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Contact us within 48 hours of delivery</li>
                            <li>Provide photos and order details for verification</li>
                            <li>Resolution via replacement, refund, or store credit</li>
                        </ul>
                    </div>

                    {/* Section 11 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">11. Contact Us</h2>
                        <div className="space-y-4 pt-4">
                            <p className="text-black font-extrabold text-lg">Prints Matrix</p>
                            <div className="space-y-3 font-bold text-gray-800">
                                <p className="flex items-center gap-3">
                                    <span className="text-red-500">📍</span> Address: 95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-blue-500">📧</span> Email: support@printsmatrix.com
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-blue-400">🌐</span> Website: www.printsmatrix.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10">
                        <h3 className="text-xl font-black text-black mb-4">Compliance Statement</h3>
                        <p className="italic">Prints Matrix operates as an independent online retailer. All product names and trademarks belong to their respective owners and are used for identification purposes only.</p>
                    </div>

                </div>
            </div>

            {/* Blue Legal Footer */}
            <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto font-sans tracking-widest">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;
