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
                        The information contained on <span className="text-black font-bold">www.printsmatrix.com</span> (“the Site”) is provided by <span className="text-black font-bold">Prints Matrix</span> (“we,” “our,” or “us”) for general informational and transactional purposes only. By using this website, you agree to the terms of this Disclaimer Policy.
                    </p>

                    {/* Section 1 */}
                    <div className="pt-6">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">1. Independent Third-Party Entity</h2>
                        <div className="space-y-4">
                            <p>Prints Matrix is an independent online retailer specializing in printers, inks, toners, and related accessories. We are not affiliated with, sponsored by, or authorized by any printer manufacturer or brand, unless explicitly stated.</p>
                            <p>All brand names, product names, logos, and trademarks appearing on this website are the property of their respective owners and are used solely for identification, compatibility, and reference purposes.</p>
                            <p className="italic font-medium text-black">Use of these names or trademarks does not imply endorsement, partnership, or representation by the brand owner.</p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">2. Product Representation</h2>
                        <p className="mb-4">We make every effort to ensure that all product descriptions, images, and specifications are accurate and up to date. However, we cannot guarantee that all details are free from errors or reflect real-time manufacturer updates.</p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Product packaging and labeling may vary based on manufacturer revisions.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Product colors may appear differently depending on your display settings.</li>
                            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-black rounded-full shrink-0"></span> Any typographical or pricing errors are subject to correction without prior notice.</li>
                        </ul>
                        <p className="mt-6">Prints Matrix reserves the right to modify, update, or discontinue products at any time.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">3. No Professional or Technical Advice</h2>
                        <p className="mb-4">All information provided on this website — including setup guides, troubleshooting tips, and recommendations — is for general informational purposes only.</p>
                        <p>We do not claim to provide official manufacturer service or technical support. Customers are encouraged to consult the printer brand’s official documentation or customer service for brand-specific technical guidance.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">4. Third-Party Links & References</h2>
                        <p>Our website may contain links to third-party websites for additional information or convenience. These external sites are not operated or controlled by Prints Matrix. We are not responsible for the accuracy, reliability, or privacy practices of any linked websites and disclaim all liability for damages or losses arising from their use.</p>
                    </div>

                    {/* Section 5 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">5. Warranty Disclaimer</h2>
                        <p className="mb-4">All products sold on Prints Matrix are covered only by the warranties (if any) provided by their respective manufacturers.</p>
                        <p className="mb-4">Prints Matrix does not provide any additional warranties — express or implied — including, but not limited to, warranties of merchantability, performance, or fitness for a particular purpose.</p>
                        <p className="mt-6 italic font-medium">Customers are encouraged to review the warranty terms provided by the product manufacturer prior to purchase.</p>
                    </div>

                    {/* Section 6 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">6. Limitation of Liability</h2>
                        <p className="mb-4 text-black font-bold">To the fullest extent permitted by law, Prints Matrix shall not be liable for any direct, indirect, incidental, or consequential damages arising from:</p>
                        <ul className="space-y-4 pt-2 pl-2">
                            <li><span className="text-black font-bold mr-2">•</span> The use or inability to use our website or products.</li>
                            <li><span className="text-black font-bold mr-2">•</span> Errors, omissions, or inaccuracies in website content.</li>
                            <li><span className="text-black font-bold mr-2">•</span> Product defects or performance issues caused by third-party manufacturers.</li>
                            <li><span className="text-black font-bold mr-2">•</span> Unauthorized use or reliance on information provided on this site.</li>
                        </ul>
                        <p className="mt-8 font-black text-black uppercase border-y border-gray-100 py-4 text-center tracking-widest text-[12px]">
                            Our total liability, in any case, shall not exceed the total amount paid by the customer for the purchased product.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div className="pt-4 bg-white p-8 border border-gray-100 rounded-sm">
                        <h2 className="text-2xl font-black text-black mb-6 tracking-tighter">7. Advertising & Endorsements</h2>
                        <p className="mb-6">Prints Matrix promotes its products through digital advertising platforms such as Google Ads, Microsoft Advertising, Facebook Ads, and others. We ensure compliance with all advertising and disclosure policies, including:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Accurate product representation</li>
                            <li>No misleading or deceptive claims</li>
                            <li>Clear identification of our independent business status</li>
                        </ul>
                        <p className="italic font-medium">Any promotional statements or offers featured in ads are specific to Prints Matrix and not associated with any printer brand or manufacturer.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="pt-4">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">8. Changes to This Disclaimer</h2>
                        <p>Prints Matrix reserves the right to modify or update this Disclaimer Policy at any time without prior notice. All revisions will be reflected on this page with a new “Last Updated” date. Continued use of our website constitutes acceptance of these terms.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="pt-12 border-t border-gray-200">
                        <h2 className="text-3xl font-black text-black mb-8 tracking-tighter">9. Contact Us</h2>
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

export default Disclaimer;
