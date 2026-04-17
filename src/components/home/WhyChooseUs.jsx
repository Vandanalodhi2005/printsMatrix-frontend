import React from 'react';
import { Truck, ShieldCheck, Tag, Lock, Check } from 'lucide-react';


const WhyChooseUs = () => {
    return (
        <section className="bg-white overflow-hidden">
            {/* Top Section: Content & Image */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content Left */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tighter mb-2">
                                Why Choose Prints Matrix?
                            </h2>
                            <p className="text-xl font-semibold italic text-[#0075be] tracking-tight">
                                Reliable Solutions. Honest Guidance.
                            </p>
                        </div>

                        <p className="text-gray-600 font-medium leading-relaxed max-w-lg">
                            We operate as an independent provider focused on helping customers make informed choices.
                        </p>

                        <ul className="space-y-5">
                            {[
                                "Carefully selected products",
                                "Transparent pricing and policies",
                                "Support for home and business users",
                                "Secure checkout and trusted fulfillment"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className="text-black mt-1 flex-shrink-0" size={18} />
                                    <span className="text-gray-700 font-semibold text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-900 font-bold text-sm pt-4 italic">
                            Our goal is simple: help you print smarter and work more efficiently.
                        </p>
                    </div>

                    {/* Image Right */}
                    <div className="relative group">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-[1.02]">
                            <img 
                                src="/about/about.webp"
                                alt="Modern Office Environment" 
                                width="800"
                                height="600"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: '800 / 600' }}
                            />
                        </div>
                        {/* Background shape */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-50 -z-10 rounded-3xl"></div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Benefits Grid */}
            <div className="bg-[#fcfcfd] py-20 border-y border-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            {
                                icon: <Truck size={32} className="text-[#333] mb-6 inline-block" />,
                                title: "Reliable Shipping",
                                description: "We work with trusted delivery partners to ensure secure and timely shipping, helping your order reach you safely and efficiently."
                            },
                            {
                                icon: <ShieldCheck size={32} className="text-[#333] mb-6 inline-block" />,
                                title: "Assured Quality",
                                description: "Our products are carefully selected to meet consistent quality and performance standards, giving you confidence in every purchase."
                            },
                            {
                                icon: <Tag size={32} className="text-[#333] mb-6 inline-block" />,
                                title: "Best Offers",
                                description: "We offer transparent pricing and value-driven offers, helping you get dependable products at fair and competitive rates."
                            },
                            {
                                icon: <Lock size={32} className="text-[#333] mb-6 inline-block" />,
                                title: "Secure Payments",
                                description: "Your payments are protected through industry-standard security measures, ensuring a safe and secure checkout experience."
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 mb-6 group-hover:bg-[#0075be] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-4">{benefit.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mx-auto italic sm:not-italic">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Disclaimer Banner */}
            <div className="bg-[#0075be] py-12">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-white text-[12px] sm:text-[13px] font-bold leading-relaxed tracking-wide font-sans">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
