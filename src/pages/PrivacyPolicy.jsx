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
                        Welcome to <span className="text-black font-bold">Prints Matrix</span> (“we,” “our,” or “us”). Your privacy matters to us, and we are committed to protecting the personal information you share when you visit or make a purchase through our website <span className="text-black font-bold">www.printsmatrix.com</span> (“the Site”).
                    </p>

                    <p>
                        This Privacy Policy describes how we collect, use, disclose, and protect your information in compliance with applicable privacy laws in the United States (including the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA)) and Canada (under the Personal Information Protection and Electronic Documents Act (PIPEDA)).
                    </p>

                    <p>
                        By using our website, you acknowledge and agree to this Privacy Policy.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">1. Information We Collect</h2>
                        <p className="mb-6">We collect personal and non-personal information to process orders, enhance user experience, and improve our services.</p>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-black text-black mb-4 underline decoration-2 underline-offset-4">1.1 Personal Information</h3>
                                <p className="mb-4">When you engage with our website, we may collect:</p>
                                <ul className="space-y-2 pl-2">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Full name
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
                                        Payment details (processed securely through third-party payment gateways)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Order history, preferences, and communication records
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-black text-black mb-4 underline decoration-2 underline-offset-4">1.2 Non-Personal Information</h3>
                                <p className="mb-4">Automatically collected data may include:</p>
                                <ul className="space-y-2 pl-2">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        IP address
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Browser type and operating system
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Device information (desktop, tablet, or mobile)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Website usage statistics and browsing patterns
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                        Cookies, pixels, and similar tracking technologies
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">2. How We Use Your Information</h2>
                        <p className="mb-4">We use collected information to:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Process and fulfill orders efficiently
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Provide shipping updates and order confirmations
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Communicate with you regarding support or inquiries
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Improve website performance and personalize your experience
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Send promotional offers, newsletters, or updates (only with your consent)
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Prevent fraudulent activity and ensure platform security
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                                Comply with legal, tax, and regulatory obligations
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">3. Sharing of Information</h2>
                        <p className="mb-6">We do not sell or rent your personal data. However, we may share limited information with trusted third parties who assist in delivering our services:</p>
                        <ul className="space-y-4 pl-2">
                            <li><span className="text-black font-bold font-sans">Payment Processors:</span> To authorize and complete secure transactions.</li>
                            <li><span className="text-black font-bold font-sans">Shipping Carriers:</span> To deliver your orders accurately and on time.</li>
                            <li><span className="text-black font-bold font-sans">Service Providers:</span> For hosting, analytics, marketing, and customer support.</li>
                            <li><span className="text-black font-bold font-sans">Legal Authorities:</span> When required to comply with applicable laws or prevent fraud.</li>
                        </ul>
                        <p className="mt-6 italic">All partners are contractually obligated to protect your data and use it only for authorized purposes.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">4. Cookies and Tracking Technologies</h2>
                        <p className="mb-6">We use cookies and tracking tools to enhance your browsing experience and deliver relevant promotions.</p>
                        <h3 className="text-lg font-black text-black mb-4">Types of Cookies Used:</h3>
                        <ul className="space-y-4 pl-2">
                            <li><span className="text-black font-bold font-sans">Essential Cookies:</span> Required for website functionality (e.g., checkout process).</li>
                            <li><span className="text-black font-bold font-sans">Performance Cookies:</span> Used to analyze site traffic and improve usability.</li>
                            <li><span className="text-black font-bold font-sans">Marketing Cookies:</span> Enable personalized ads and remarketing campaigns.</li>
                        </ul>
                        <p className="mt-6">You can manage or disable cookies at any time via your browser settings.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">5. Data Security</h2>
                        <p className="mb-6">We use robust technical and organizational safeguards to protect your personal data, including:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> SSL encryption for secure data transmission</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Encrypted payment gateways for financial transactions</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Firewalls and threat monitoring systems</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Restricted employee access to sensitive data</li>
                        </ul>
                        <p className="mt-6">Despite these efforts, no system is 100% secure. You share information with us at your own discretion.</p>
                    </div>

                    {/* Section 6 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">6. Your Privacy Rights (U.S. & Canada)</h2>
                        <p className="mb-6">Depending on your location, you may have the right to:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Access the personal data we hold about you</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Request corrections to inaccurate or outdated information</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Request deletion of your personal data (subject to legal requirements)</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Opt out of marketing communications or targeted advertising</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Limit data sharing under CCPA/CPRA provisions</li>
                        </ul>
                        <p className="mt-6">To exercise your rights, contact us at <span className="text-black font-bold text-sans">support@printsmatrix.com</span> or call <span className="text-black font-bold text-sans">+1-651-815-4630</span>.</p>
                        <p>We may verify your identity before processing your request.</p>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">7. Data Retention</h2>
                        <p className="mb-4">We retain your data only for as long as necessary to:</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Fulfill your orders and provide support</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Maintain accurate business, tax, and compliance records</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Meet legal and regulatory obligations</li>
                        </ul>
                        <p className="mt-6">When no longer required, data is securely deleted or anonymized.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">8. Third-Party Links</h2>
                        <p>Our website may include links to third-party platforms or external websites. We are not responsible for their privacy practices or content. Please review their privacy policies before providing any personal information.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">9. Children’s Privacy</h2>
                        <p>Our services are intended for users aged 18 years and older. We do not knowingly collect personal data from minors. If we learn that we have unintentionally gathered data from a child, it will be promptly deleted.</p>
                    </div>

                    {/* Section 10 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">10. International Data Transfers</h2>
                        <p>Your data may be stored or processed outside your country of residence, including in the United States. We ensure that any cross-border transfer complies with applicable privacy laws and provides adequate protection standards.</p>
                    </div>

                    {/* Section 11 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">11. Updates to This Policy</h2>
                        <p>We may revise this Privacy Policy from time to time to reflect changes in technology, laws, or business operations. The revised version will be posted on this page with an updated “Last Updated” date. Continued use of the website constitutes acceptance of the revised policy.</p>
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
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto uppercase tracking-widest">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;