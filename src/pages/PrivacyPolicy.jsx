import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Privacy Policy</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        Prints Matrix (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit <span className="text-black font-bold">www.printsmatrix.com</span> or interact with our services.
                    </p>

                    <p>
                        This policy is designed to comply with applicable privacy laws in the <span className="text-black font-bold">United States</span> and <span className="text-black font-bold">Canada</span>, including but not limited to:
                    </p>

                    <ul className="space-y-2 pl-2">
                        <li className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                            California Consumer Privacy Act (CCPA) & California Privacy Rights Act (CPRA)
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                            Other applicable U.S. state privacy laws
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                            Personal Information Protection and Electronic Documents Act (PIPEDA – Canada)
                        </li>
                    </ul>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">1. Information We Collect</h2>
                        <p className="mb-6">We may collect the following types of information:</p>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-black text-black mb-4">a. Personal Information</h3>
                                <p className="mb-4">Information that identifies or relates to an individual, such as:</p>
                                <ul className="space-y-2 pl-4">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Name
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Email address
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Billing and shipping address
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Phone number
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Payment-related details (processed securely by third-party payment providers)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-black text-black mb-4">b. Automatically Collected Information</h3>
                                <p className="mb-4">When you visit our website, we may automatically collect:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>IP address</li>
                                    <li>Browser type and device information</li>
                                    <li>Pages visited and time spent</li>
                                    <li>Referring URLs and interaction data</li>
                                </ul>
                                <p className="mt-4 text-xs italic">This data helps us improve website performance and user experience.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">2. How We Use Your Information</h2>
                        <p className="mb-4">We use collected information to:</p>
                        <ul className="list-disc pl-5 space-y-2 font-medium">
                            <li>Process orders and payments</li>
                            <li>Communicate order updates and support responses</li>
                            <li>Improve website functionality and services</li>
                            <li>Prevent fraud and ensure platform security</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>
                        <p className="mt-6 text-black font-bold">We do not use personal information in a misleading or deceptive manner.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">3. Cookies & Tracking Technologies</h2>
                        <p>We may use cookies and similar technologies to enable essential website functionality, analyze traffic, and improve marketing relevance. You can manage cookie preferences through your browser settings.</p>
                    </div>

                    {/* Section 12 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">12. Contact Us</h2>
                        <p className="mb-6 font-medium">If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
                        
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

export default PrivacyPolicy;
