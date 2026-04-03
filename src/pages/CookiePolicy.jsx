import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans text-black">
            <div className="max-w-4xl mx-auto py-20 px-6">
                
                {/* ── Header ──────────────────────────────────────────────── */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Cookie Policy</h1>
                </header>

                <div className="space-y-8 text-[14px] md:text-[15px] leading-relaxed text-gray-600">
                    
                    {/* Dates - Left Aligned */}
                    <div className="space-y-1 font-medium">
                        <p>Effective Date: December 19, 2025</p>
                        <p>Last Updated: December 19, 2025</p>
                    </div>

                    <p className="mt-8">
                        This Cookie Policy explains how <span className="text-black font-extrabold">Prints Matrix</span> (“we,” “our,” or “us”) uses cookies and similar technologies when you visit <span className="text-black font-bold">www.printsmatrix.com</span> (the “Website”). This policy should be read together with our Privacy Policy.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">1. What Are Cookies?</h2>
                        <p>Cookies are small text files stored on your device when you visit a website. They aid in the proper functioning of websites, enhance the user experience, and offer valuable insights into the site’s usage. Cookies do not typically contain information that directly identifies you.</p>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">2. Types of Cookies We Use</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-black text-black mb-3">a. Essential Cookies</h3>
                                <p className="text-sm mb-4">Required for core functionality like secure checkout and account access.</p>
                                <ul className="space-y-2 text-xs font-bold text-gray-400 uppercase tracking-widest pl-2 border-l-2 border-blue-500">
                                    <li>Secure Checkout</li>
                                    <li>Page Navigation</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-black text-black mb-3">b. Performance & Analytics</h3>
                                <p className="text-sm">Helps us understand user behavior to improve site speed and usability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">4. Your Cookie Choices</h2>
                        <p className="mb-4">You can manage or disable cookies through your browser settings at any time. Most browsers allow you to:</p>
                        <ul className="space-y-2 pl-4">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                View cookies stored on your device
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Delete existing cookies
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Block cookies from specific websites
                            </li>
                        </ul>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">5. Consent & Legal Compliance</h2>
                        <p>This Cookie Policy is designed to comply with applicable laws in the <span className="text-black font-bold">United States</span> and <span className="text-black font-bold">Canada</span>, including state-level privacy regulations and <span className="text-black font-bold">PIPEDA</span>.</p>
                    </div>

                    {/* Section 12 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">7. Contact Us</h2>
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

                    <div className="pt-10 text-xs italic">
                        <p>Prints Matrix operates as an independent online retailer. All trademarks and brand names belong to their respective owners and are used for identification purposes only.</p>
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

export default CookiePolicy;
