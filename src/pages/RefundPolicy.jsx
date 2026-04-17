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
                        Thank you for shopping with <span className="text-black font-bold">Prints Matrix</span>. We value your satisfaction and want to ensure your shopping experience is smooth and worry-free.
                        This Return & Refund Policy explains when and how you can request a return, replacement, or refund for your purchase made on <span className="text-black font-bold">www.printsmatrix.com</span> (“the Site”).
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. Eligibility for Returns</h2>
                        <p className="mb-4">You may request a return if:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The product you received is damaged, defective, or incorrect, or</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The item you received does not match the description shown on our website.</li>
                        </ul>
                        <p className="mt-6 font-bold text-black border-l-4 border-black pl-4 uppercase tracking-widest text-[11px]">To qualify for a return:</p>
                        <ul className="space-y-4 pt-4 pl-2">
                            <li><span className="text-black font-bold font-sans">•</span> The request must be made within 7 days of receiving your order.</li>
                            <li><span className="text-black font-bold font-sans">•</span> The item must be unused, in original packaging, and include all original accessories, manuals, and documentation.</li>
                            <li><span className="text-black font-bold font-sans">•</span> Proof of purchase (invoice or order confirmation) must be provided.</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Non-Returnable Items</h2>
                        <p className="mb-4 text-black font-medium">Certain products cannot be returned for safety, hygiene, or quality control reasons, including:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Opened or partially used ink cartridges, toner, or other consumables.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Products damaged due to improper handling, installation, or misuse.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Digital downloads, gift cards, or electronic codes.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Items marked “Final Sale” or “Non-Returnable” at the time of purchase.</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">3. Return Process</h2>
                        <p className="mb-4">To initiate a return, please follow these steps:</p>
                        <ol className="space-y-4 pl-2">
                            <li><span className="text-black font-black mr-2">1.</span> Contact our support team at <span className="text-black font-bold">support@printsmatrix.com</span> within 7 days of delivery.</li>
                            <li><span className="text-black font-black mr-2">2.</span> Provide your order number, a brief reason for return, and supporting photos (if applicable).</li>
                            <li><span className="text-black font-black mr-2">3.</span> Our team will review your request and provide a Return Authorization (RA) number along with shipping instructions.</li>
                        </ol>
                        <p className="mt-6 italic text-gray-400">Please do not send items back without prior authorization, as they may not be accepted or refunded.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">4. Return Shipping</h2>
                        <p>If the return is due to our error (wrong, damaged, or defective item), we will provide a prepaid return shipping label.</p>
                        <p className="mt-4">If the return is for any other reason (e.g., change of mind, ordered by mistake), the customer is responsible for return shipping costs. We recommend using a trackable shipping method and retaining the tracking receipt until the return is processed.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">5. Refunds</h2>
                        <p className="mb-4">Once your return is received and inspected:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> We will notify you by email regarding the approval or rejection of your refund.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Approved refunds will be processed to your original payment method within 5–10 business days.</li>
                        </ul>
                        <p className="mt-6 font-bold text-black underline decoration-2 underline-offset-4 mb-4">Partial Refunds May Apply If:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>The returned item shows signs of use or missing components.</li>
                            <li>The packaging is not intact or missing labels/manuals.</li>
                        </ul>
                    </div>

                    {/* Section 6 */}
                    <div className="pt-4 text-gray-600 bg-white p-6 border border-gray-100 rounded-sm">
                        <h2 className="text-2xl font-black text-black mb-4 tracking-tighter uppercase">6. Replacements & Exchanges</h2>
                        <ul className="space-y-3">
                            <li>A replacement will be shipped once the original product is received and verified.</li>
                            <li>If the replacement item is out of stock, a full refund will be issued instead.</li>
                        </ul>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">7. Damaged or Defective Items</h2>
                        <p>If your product arrives damaged or defective, contact us immediately at <span className="text-black font-bold">support@printsmatrix.com</span> with your order details and clear photos of the issue. We will investigate and provide a replacement or refund at no additional cost.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">8. Order Cancellations</h2>
                        <p>Orders can be canceled before shipment. Once an order has been dispatched, it cannot be canceled and will instead fall under our return policy guidelines. To cancel, please email <span className="text-black font-bold">support@printsmatrix.com</span> as soon as possible.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">9. Late or Missing Refunds</h2>
                        <p className="mb-4">If you haven’t received a refund after the stated processing period:</p>
                        <ul className="space-y-2 pl-4">
                            <li>Check your bank or card statement.</li>
                            <li>Contact your payment provider for updates.</li>
                        </ul>
                        <p className="mt-4">If unresolved, please reach out to us at <span className="text-black font-bold">support@printsmatrix.com</span>, and we’ll help track the issue.</p>
                    </div>

                    {/* Section 10 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">10. Policy Updates</h2>
                        <p>Prints Matrix reserves the right to modify this Return & Refund Policy at any time without prior notice. Updates will be reflected on this page with the new “Last Updated” date.</p>
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
                                    <span className="text-green-500">📞</span> Phone: +1-651-815-4630
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

export default RefundPolicy;
