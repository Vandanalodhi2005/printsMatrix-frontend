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
                        Thank you for shopping with <span className="text-black font-bold">Prints Matrix</span>. This Shipping Policy outlines how we process, ship, and deliver your orders placed on <span className="text-black font-bold">www.printsmatrix.com</span> (“the Site”). Our goal is to ensure your products reach you safely and on time.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. Order Processing Time</h2>
                        <ul className="space-y-4 pl-2">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                                Orders are typically processed within 1–2 business days after payment confirmation.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                                Orders placed on weekends or public holidays are processed on the next business day.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                                In rare cases (e.g., high order volumes, backorders, or inventory delays), processing may take longer.
                            </li>
                        </ul>
                        <p className="mt-6 italic border-l-4 border-gray-200 pl-4">Once your order is processed, you will receive a confirmation email with tracking details.</p>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Shipping Locations</h2>
                        <p>We currently offer shipping within the <span className="text-black font-bold">United States</span> and <span className="text-black font-bold">Canada</span>.</p>
                        <p className="mt-4">Certain remote or rural areas may experience longer delivery times or limited carrier options. We do not currently ship internationally outside these regions.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">3. Shipping Methods & Delivery Time</h2>
                        <p className="mb-6">We partner with trusted national and regional carriers to ensure reliable delivery.</p>
                        
                        <div className="space-y-4 font-bold text-black uppercase tracking-widest text-[11px]">
                            <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span>Standard Shipping:</span>
                                <span>3–7 business days</span>
                            </p>
                            <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span>Expedited Shipping:</span>
                                <span>2–4 business days</span>
                            </p>
                            <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span>Priority Shipping:</span>
                                <span>1–2 business days</span>
                            </p>
                        </div>
                        <p className="mt-6 text-gray-400 italic">Please note that delivery times may vary depending on your location, order size, weather conditions, or carrier delays beyond our control.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">4. Shipping Charges</h2>
                        <p className="mb-4">Shipping costs are calculated at checkout based on:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Delivery location</li>
                            <li>Package weight and size</li>
                            <li>Chosen shipping method</li>
                        </ul>
                        <p className="mt-6 font-medium">Occasionally, free or discounted shipping promotions may apply, as advertised on our website or via email.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">5. Order Tracking</h2>
                        <p className="mb-4 text-black font-bold">Once your order ships, you will receive a shipment confirmation email containing:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3 font-medium"><span className="w-1 h-1 bg-black rounded-full"></span> Tracking number</li>
                            <li className="flex items-center gap-3 font-medium"><span className="w-1 h-1 bg-black rounded-full"></span> Carrier name</li>
                            <li className="flex items-center gap-3 font-medium"><span className="w-1 h-1 bg-black rounded-full"></span> Estimated delivery date</li>
                        </ul>
                        <p className="mt-6">You can track your shipment directly through the carrier’s website using the provided tracking number.</p>
                    </div>

                    {/* Section 6 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">6. Incorrect Address or Delivery Issues</h2>
                        <p>Please verify your shipping address carefully before submitting your order.</p>
                        <div className="mt-6 space-y-4">
                            <p className="text-red-600 font-bold">• Prints Matrix is not responsible for lost or misdelivered packages due to incorrect addresses.</p>
                            <p>• If the package is returned to us, we may re-ship it once the correct address is confirmed (additional shipping charges may apply).</p>
                            <p>• If a package is lost in transit or marked as delivered but not received, please contact us immediately at <span className="text-black font-bold">support@printsmatrix.com</span>.</p>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">7. Damaged or Missing Items</h2>
                        <p className="mb-4">If your order arrives damaged or with missing items:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Notify us within 48 hours of delivery.</li>
                            <li>Provide clear photos of the damaged packaging or products.</li>
                        </ul>
                        <p className="mt-4">Our support team will review and arrange a replacement or refund based on eligibility.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">8. Customs, Duties & Taxes (for Canadian Orders)</h2>
                        <p>For orders shipped to Canada, applicable customs duties, taxes, and import fees may apply depending on your province and local regulations. These charges are the <span className="text-black font-bold">responsibility of the customer</span> and are not included in the product or shipping cost.</p>
                        <p className="mt-4 italic">We recommend checking with your local customs office for details before placing your order.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">9. Delays & Exceptions</h2>
                        <p className="mb-4">Prints Matrix is not responsible for delays caused by:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Weather conditions or natural disasters</li>
                            <li>Carrier strikes or service disruptions</li>
                            <li>Customs clearance delays</li>
                        </ul>
                        <p className="mt-6 font-medium">We always strive to communicate proactively and keep you informed in case of any unexpected delay.</p>
                    </div>

                    {/* Section 10 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">10. Order Cancellations After Shipment</h2>
                        <p>Once an order has been shipped, it cannot be canceled. You may still return the product following our Return & Refund Policy after receiving the shipment.</p>
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

                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-blue-400">🌐</span> Website: www.printsmatrix.com
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Blue Legal Footer */}
            <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto font-sans tracking-widest uppercase">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ShippingPolicy;
