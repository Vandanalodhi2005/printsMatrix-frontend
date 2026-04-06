import React from 'react';

const About = () => {
    return (
        <div className="bg-white font-sans overflow-hidden">
            
            {/* ── Section 1: Hero Banner ────────────────────────────────── */}
            <section className="w-full bg-[#0075be] py-20 md:py-32 px-6 text-center text-white relative">
                {/* Subtle background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                        About Us
                    </h1>
                    <div className="w-20 h-1.5 bg-white mx-auto mb-10 rounded-full opacity-80"></div>
                    <p className="text-lg md:text-2xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
                        At Prints Matrix, we help individuals, professionals, and businesses simplify printing and technology decisions. From reliable printers to smart digital solutions, we focus on quality, efficiency, and long-term value.
                    </p>
                </div>
            </section>

            {/* ── Section 2: Who We Are (Split Layout) ────────────────────── */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Text Content */}
                        <div className="space-y-8">
                            <div className="w-12 h-1 bg-[#0075be] mb-6"></div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight">
                                Who We Are?
                            </h2>
                            
                            <div className="space-y-6 text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                                <p>
                                    Prints Matrix is an independent online retailer offering printers, printing supplies, and related accessories for home users, professionals, and businesses. Our goal is to provide reliable products, clear information, and a straightforward shopping experience to help customers make informed printing decisions.
                                </p>
                                <p>
                                    We operate independently and are not affiliated with, endorsed by, or sponsored by any printer manufacturer, unless explicitly stated. All brand names, trademarks, and product images displayed on our website are the property of their respective owners and are used strictly for identification and informational purposes.
                                </p>
                                <p>
                                    At Prints Matrix, we focus on transparency and accuracy. Product descriptions, pricing, and availability are presented clearly to help customers compare options and select products that best meet their needs. Orders are processed through secure checkout systems, and fulfillment is handled through trusted logistics and distribution partners.
                                </p>
                            </div>
                        </div>

                        {/* Right: Visual Imagery */}
                        <div className="relative group">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                                <img 
                                    src="/about/about.jpg" 
                                    alt="Modern Office Connectivity" 
                                    className="w-full h-auto object-cover min-h-[400px] md:min-h-[500px]"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000'; }}
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gray-100 rounded-[2rem] -z-0 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Section 3: Commitment & Offering Cards ──────────────────── */}
            <section className="bg-gray-50 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        
                        {/* Card: Our Commitment */}
                        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-start text-left hover:-translate-y-1 transition-all duration-300">
                            <h3 className="bg-[#0075be] text-white px-6 py-2 text-xl md:text-2xl font-black mb-10 tracking-tight rounded-sm inline-block">
                                Our Commitment
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Provide accurate and honest product information",
                                    "Offer competitive pricing with transparent policies",
                                    "Support both home and business printing needs",
                                    "Maintain secure payment processing and data protection"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-bold text-sm md:text-base group">
                                        <div className="w-1.5 h-1.5 bg-[#0075be] rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card: What We Offer */}
                        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-start text-left hover:-translate-y-1 transition-all duration-300">
                            <h3 className="bg-[#0075be] text-white px-6 py-2 text-xl md:text-2xl font-black mb-10 tracking-tight rounded-sm inline-block">
                                What We Offer
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "A selection of printers suitable for home and office use",
                                    "Printing supplies such as ink and toner",
                                    "Accessories to support everyday printing requirements",
                                    "Customer support to assist with product selection and order inquiries"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-bold text-sm md:text-base group">
                                        <div className="w-1.5 h-1.5 bg-[#0075be] rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Section 4: Bold Mission Statement ───────────────────────── */}
            <section className="bg-white py-16 md:py-24 px-6 border-b border-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-lg md:text-2xl font-black text-black leading-relaxed tracking-tight">
                        Our mission is simple: to make printing easier, more reliable, and more accessible through clear guidance, dependable products, and responsible business practices.
                    </p>
                </div>
            </section>

            {/* ── Section 5: Legal Disclaimer Banner ──────────────────────── */}
            <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto tracking-wide">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default About;
//  #0075be
