import React from 'react';

const Disclaimer = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Disclaimer</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        The information provided on <span className="text-black font-extrabold">www.printsmatrix.com</span> (the “Website”) is intended for informational, commercial, and support purposes. By accessing or using this website, you agree to the terms outlined in this disclaimer.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. Independent Retailer Disclosure</h2>
                        <div className="space-y-4">
                            <p>Prints Matrix operates as an independent online retailer and support provider. We are not affiliated with, authorized by, endorsed by, or sponsored by any printer manufacturer or brand unless explicitly stated.</p>
                            <p>All product names, trademarks, logos, and brand references belong to their respective owners and are used solely for identification and informational purposes. Their use does not imply any partnership or endorsement.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">3. Technical Support & Guidance</h2>
                        <p className="mb-4">Prints Matrix provides professional guidance and technical assistance, including but not limited to:</p>
                        <ul className="space-y-2 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Printer setup and installation guidance
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Connectivity and configuration support
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Troubleshooting common printer issues
                            </li>
                        </ul>
                        <p className="mt-6 italic">All guidance is provided based on available information and standard practices. Outcomes may vary depending on device condition and software versions.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">5. Limitation of Liability</h2>
                        <p className="mb-4">To the fullest extent permitted by applicable law, Prints Matrix shall not be liable for any indirect, incidental, consequential, or special damages arising from:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Use of the Website</li>
                            <li>Application of technical guidance provided</li>
                            <li>Product usage or third-party services</li>
                        </ul>
                    </div>

                    {/* Section 10 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">10. Contact Information</h2>
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
                        <p className="italic">Prints Matrix operates as an independent retailer and support provider. All trademarks and brand names belong to their respective owners and are used for identification purposes only.</p>
                    </div>

                </div>
            </div>

            {/* Blue Legal Footer */}
            <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto uppercase tracking-widest">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
