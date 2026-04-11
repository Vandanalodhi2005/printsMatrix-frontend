import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Shipping Policy</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        At <span className="text-black font-extrabold">Prints Matrix</span>, we are committed to delivering your orders safely and efficiently. This Shipping Policy outlines how orders are processed, shipped, and delivered. Please review the information below before placing an order.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. Order Processing</h2>
                        <ul className="space-y-3 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Orders are typically processed within 1–3 business days after payment confirmation
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Orders placed on weekends or public holidays are processed on the next business day
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Processing times may vary due to product availability, verification requirements, or high order volume
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Shipping Destinations</h2>
                        <div className="space-y-4">
                            <p>We ship to select locations within <span className="text-black font-bold">Canada</span> and the <span className="text-black font-bold">United States</span>.</p>
                            <p>Shipping availability may vary based on product type, size, or carrier restrictions. If shipping to your location is unavailable, this will be indicated during checkout.</p>
                        </div>
                    </div>

                    {/* Section 3 & 4 (Combined for layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                        <div>
                            <h2 className="text-2xl font-black text-black mb-6 tracking-tighter">3. Methods & Carriers</h2>
                            <p>Orders are shipped using trusted third-party logistics partners. Available shipping methods, carriers, and estimated delivery timelines are displayed at checkout based on your location and selected service.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-black mb-6 tracking-tighter">4. Estimated Delivery Time</h2>
                            <p>Estimated delivery times are calculated from the date of shipment and may vary based on shipping method selected, destination address, and carrier operations.</p>
                        </div>
                    </div>

                    {/* Section 5 & 6 */}
                    <div className="pt-4 space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">5. Shipping Costs</h2>
                            <p>Shipping fees are calculated at checkout and displayed before order confirmation. Costs depend on product weight, size, destination, and shipping method. Promotional or discounted shipping offers may apply from time to time.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">6. Tracking Information</h2>
                            <p>Once your order has shipped, tracking details will be sent to the email address provided at checkout. <span className="italic">Please allow time for tracking information to become active.</span></p>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">7. Address Accuracy</h2>
                        <p>Customers are responsible for providing accurate and complete shipping information. Prints Matrix is not responsible for delays, losses, or additional charges caused by incorrect or incomplete addresses.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">9. Lost or Damaged Shipments</h2>
                        <ul className="space-y-2 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Contact us at <span className="text-[#0075be] font-bold">support@printsmatrix.com</span> within 48 hours
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Provide order details and supporting information (photos)
                            </li>
                        </ul>
                    </div>

                    {/* Final Sections */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">12. Contact Us</h2>
                        <div className="space-y-4 pt-4">
                            <p className="text-black font-extrabold text-lg">Prints Matrix</p>
                            <div className="space-y-3 font-bold text-gray-800 text-sm">
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
                        <p className="italic">Prints Matrix operates as an independent online retailer. All trademarks belong to their respective owners and are used for identification purposes only.</p>
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

export default ShippingPolicy;
