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
                        Welcome to Prints Matrix (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use of <span className="text-black font-bold">www.printsmatrix.com</span> (the “Website”), including any products, services, content, and technical guidance provided through the Website.
                    </p>

                    <p className="font-bold text-black uppercase text-[12px] tracking-widest">
                        By accessing, browsing, or using our website, you agree to be bound by these terms. If you do not agree, please discontinue use of the website.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. About Prints Matrix</h2>
                        <div className="space-y-4">
                            <p>Prints Matrix is an independent online retailer and support provider offering printers, printing supplies, accessories, and professional guidance related to printer setup, configuration, and troubleshooting.</p>
                            <p>We are not affiliated with, authorized by, endorsed by, or sponsored by any printer manufacturer or brand, unless explicitly stated in writing.</p>
                            <p>All trademarks, logos, and brand names displayed on the website belong to their respective owners and are used solely for identification and informational purposes.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Eligibility & Acceptable Use</h2>
                        <p className="mb-4">By using this website, you confirm that:</p>
                        <ul className="space-y-2 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                You are at least 18 years of age or have legal authority to enter into a binding agreement
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                You will use the Website only for lawful purposes
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                You will not misuse the Website, interfere with its operation, or attempt unauthorized access
                            </li>
                        </ul>
                        <p className="mt-6 italic">We reserve the right to restrict or terminate access for violations of these terms.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">3. Products & Services</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-black text-black mb-3">a. Product Sales</h3>
                                <p>We offer printers, printing supplies, and related accessories for purchase. Product availability, specifications, and pricing may change without notice.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-black mb-3">b. Technical Guidance & Support</h3>
                                <p className="mb-4">Prints Matrix provides professional guidance and technical assistance, which may include:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Printer setup and installation guidance</li>
                                    <li>Connectivity and configuration support</li>
                                    <li>Troubleshooting common printer issues</li>
                                    <li>General usage and maintenance recommendations</li>
                                </ul>
                                <p className="mt-4">We provide this guidance in good faith. Our guidance does not replace manufacturer-authorized service or warranty repairs unless explicitly stated.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">4. Orders & Payments</h2>
                        <ul className="list-disc pl-5 space-y-3 font-medium">
                            <li>All orders are subject to acceptance and availability</li>
                            <li>Prices are displayed before checkout and may change without notice</li>
                            <li>Payments are processed securely through third-party payment providers</li>
                            <li>Prints Matrix does not store full payment card details</li>
                        </ul>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">8. Limitation of Liability</h2>
                        <p className="mb-4">To the maximum extent permitted by applicable law:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Prints Matrix shall not be liable for indirect, incidental, consequential, or special damages</li>
                            <li>This includes damages arising from product use, reliance on technical guidance, or third-party services</li>
                            <li>Our total liability for any claim shall not exceed the amount paid for the product or service giving rise to the claim</li>
                        </ul>
                    </div>

                    {/* Section 13 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">13. Governing Law & Jurisdiction</h2>
                        <p>These Terms shall be governed by and construed in accordance with the applicable laws of the <span className="text-black font-bold">United States</span>, and the laws of the <span className="text-black font-bold">Province of Ontario, Canada</span>, without regard to conflict-of-law principles.</p>
                    </div>

                    {/* Section 15 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">15. Contact Information</h2>
                        <p className="mb-6 font-medium">For any questions or more information regarding these Terms, please contact us:</p>
                        
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
                        <p className="italic">Prints Matrix operates as an independent retailer and support provider. All brand names and trademarks belong to their respective owners and are used for identification purposes only.</p>
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

export default TermsConditions;
