import React from 'react';

const TermsConditions = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Terms & Conditions</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        Welcome to <span className="text-black font-bold">Prints Matrix</span> (“we,” “our,” or “us”). By accessing or using our website <span className="text-black font-bold">www.printsmatrix.com</span> (“the Site”), you agree to comply with and be bound by the following Terms and Conditions.
                        Please read these terms carefully before using our site.
                    </p>

                    <p className="font-bold text-black uppercase text-[12px] tracking-widest">
                        If you do not agree with these Terms, please do not use our website.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">1. General Overview</h2>
                        <div className="space-y-4">
                            <p>Prints Matrix is an independent online retailer offering printers, inks, toners, and related accessories. We operate as a third-party eCommerce company and are not affiliated, authorized, or endorsed by any specific printer brand or manufacturer unless explicitly stated.</p>
                            <p>All product names, images, and trademarks displayed are the property of their respective owners and are used solely for identification and informational purposes.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">2. Use of Website</h2>
                        <p className="mb-4">By using this website, you represent that you are at least 18 years old or have parental consent. You agree to use the website only for lawful purposes and not to:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Interfere with website functionality or security.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Attempt unauthorized access to our servers or data.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Misuse any product information, trademarks, or intellectual property.
                            </li>
                        </ul>
                        <p className="mt-6">We reserve the right to restrict or terminate your access to the Site if misuse or violation of these Terms occurs.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">3. Product Information & Availability</h2>
                        <p className="mb-4">We make every effort to ensure that all product descriptions, specifications, and prices are accurate and up to date. However, errors may occur. We reserve the right to:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Correct inaccuracies or omissions without prior notice.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Change or discontinue products at any time.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Refuse or cancel any order containing incorrect pricing or product information.</li>
                        </ul>
                        <p className="mt-6">Product availability may vary, and certain items may sell out or be discontinued.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">4. Pricing & Payments</h2>
                        <p className="mb-4">All prices are listed in USD unless otherwise stated. We accept major credit/debit cards and secure online payments processed through trusted third-party payment gateways.</p>
                        <p className="mb-4 font-bold text-black">By submitting payment information, you confirm that:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> You are authorized to use the payment method provided.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> All information entered is true and accurate.</li>
                        </ul>
                        <p className="mt-6 italic">Prints Matrix does not store full credit card details on our servers.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">5. Shipping & Delivery</h2>
                        <p>We process and ship orders promptly, usually within 1–2 business days after confirmation. Delivery timelines may vary based on the destination, carrier, and product availability.</p>
                        <p className="mt-4">Shipping and handling charges are displayed during checkout. We are not liable for delays caused by carriers, weather, customs, or unforeseen events beyond our control.</p>
                    </div>

                    {/* Section 6 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">6. Returns & Refunds</h2>
                        <p className="mb-4">Our Return and Refund Policy allows customers to request a return or replacement in cases of damaged, defective, or incorrect items.</p>
                        <p className="mb-4 font-bold text-black">To be eligible for a return:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The product must be unused and in its original packaging.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The request must be made within 7 days of delivery.</li>
                        </ul>
                        <p className="mt-6">Refunds are processed through the original payment method once the returned item is inspected and approved. Certain consumable products (e.g., opened ink or toner) may not be eligible for return unless defective.</p>
                        <p className="mt-4 italic">For details, please refer to our full Return & Refund Policy.</p>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">7. Intellectual Property Rights</h2>
                        <p>All content on this website — including text, images, logos, icons, graphics, and layout — is owned or licensed by Prints Matrix and protected by applicable intellectual property laws.</p>
                        <p className="mt-4">You may not copy, reproduce, modify, distribute, or republish any part of the site without written consent.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">8. Third-Party Content & Links</h2>
                        <p>Our website may include links to third-party sites for additional information or convenience. Prints Matrix is not responsible for the content, accuracy, or practices of any external websites linked from our platform. Accessing third-party links is done at your own discretion and risk.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">9. Disclaimer of Warranties</h2>
                        <p className="mb-4">All products and information provided on our website are available on an “as-is” and “as-available” basis. We make no warranties or representations — express or implied — regarding:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The completeness, reliability, or accuracy of product information.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> The uninterrupted or error-free operation of the website.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Product performance or compatibility for a specific purpose.</li>
                        </ul>
                        <p className="mt-6">Prints Matrix disclaims all implied warranties to the fullest extent permitted by law.</p>
                    </div>

                    {/* Section 10 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">10. Limitation of Liability</h2>
                        <p className="mb-4">To the maximum extent permitted by law, Prints Matrix shall not be liable for any direct, indirect, incidental, or consequential damages arising from:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Use or inability to use the website or products.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Errors or omissions in product descriptions or pricing.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Delays, defects, or failures of third-party services (e.g., shipping or payment).</li>
                        </ul>
                        <p className="mt-6 font-bold text-black border-l-4 border-black pl-4">Our total liability shall not exceed the total purchase amount paid by the customer.</p>
                    </div>

                    {/* Section 11 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">11. Privacy & Data Protection</h2>
                        <p>Your privacy is governed by our Privacy Policy, which explains how we collect, use, and protect your personal data. By using our website, you consent to the data practices described in our Privacy Policy.</p>
                    </div>

                    {/* Section 12 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">12. Advertising & Compliance</h2>
                        <p>Prints Matrix promotes its products through Google Ads, Microsoft Advertising, and other online platforms. We adhere to all advertising guidelines, ensuring truthful representation and transparency in our marketing practices.</p>
                        <p className="mt-4 italic font-medium">We do not mislead users, impersonate brands, or make unauthorized claims in any of our promotional content.</p>
                    </div>

                    {/* Section 13 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">13. Governing Law</h2>
                        <p>These Terms are governed by the applicable laws of the <span className="text-black font-bold">United States</span> and <span className="text-black font-bold">Canada</span>, depending on the customer’s location. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of competent courts within these regions.</p>
                    </div>

                    {/* Section 14 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">14. Changes to Terms</h2>
                        <p>Prints Matrix reserves the right to update or modify these Terms & Conditions at any time without prior notice. All changes will be posted on this page with a new “Last Updated” date. Continued use of our website constitutes acceptance of the updated Terms.</p>
                    </div>

                    {/* Section 15 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">15. Contact Information</h2>
                        <p className="mb-6 font-medium">For questions, concerns, or requests related to these Terms & Conditions, please contact us:</p>
                        
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

export default TermsConditions;
