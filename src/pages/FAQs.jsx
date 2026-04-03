import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "Who is Prints Matrix?",
            answer: "Prints Matrix is an independent online retailer offering printers, printing supplies, and related accessories for home users, professionals, and businesses. Our goal is to provide reliable products, clear information, and a straightforward shopping experience to help customers make informed printing decisions."
        },
        {
            question: "Are you an authorized dealer of printer brands?",
            answer: "We operate independently and are not affiliated with, endorsed by, or sponsored by any printer manufacturer, unless explicitly stated. All brand names, trademarks, and product images displayed on our website are the property of their respective owners and are used strictly for identification and informational purposes."
        },
        {
            question: "What products do you sell?",
            answer: "At Prints Matrix, we focus on a carefully selected range of high-quality inkjet, laser, and all-in-one printers, along with essential supplies like ink, toner, and printing accessories designed to support daily tasks and professional workloads."
        },
        {
            question: "Do your products include a manufacturer warranty?",
            answer: "Yes, manufacturer warranties, where applicable, are provided directly by the respective brands. We ensure all products are sourced through trusted channels to maintain standard coverage for our customers."
        },
        {
            question: "How do I place an order?",
            answer: "Placing an order is straightforward. Simply browse our catalog, select the items you need, and proceed through our secure checkout system. You will receive a confirmation email once your order is placed."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards and secure online payment methods to ensure a safe and reliable transaction experience for all our customers."
        },
        {
            question: "Do you ship internationally?",
            answer: "Currently, we focus on reliable fulfillment and shipping within our primary service regions to ensure the highest standards of delivery speed and package safety."
        },
        {
            question: "How long does delivery take?",
            answer: "Most orders are processed within 1-2 business days. Delivery typically takes between 3 to 7 business days, depending on your location and the specific logistics partner handling your shipment."
        },
        {
            question: "Can I return or cancel my order?",
            answer: "We accommodate returns and cancellations according to our transparent store policies. Please visit our Return & Refund Policy page for specific terms and instructions."
        },
        {
            question: "How can I contact customer support?",
            answer: "Our support team is always happy to help. You can reach us directly via email at support@printsmatrix.com for any product inquiries or order assistance."
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, we maintain secure payment processing and rigorous data protection standards. Your personal information is handled with the highest level of transparency and technical security."
        },
        {
            question: "Do you offer technical support for printers?",
            answer: "We provide comprehensive guidance on product selection and usage. For deep hardware-specific technical issues or warranty repairs, we recommend consulting the official manufacturer support channels."
        },
        {
            question: "Why should I choose Prints Matrix?",
            answer: "Our mission is simple: to make printing easier, more reliable, and more accessible through clear guidance, dependable products, and responsible business practices. We focus on transparency and long-term value for every customer."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-black overflow-hidden">
            
            {/* ── Section 1: Hero Banner ────────────────────────────────── */}
            <section className="w-full bg-[#0075be] py-20 md:py-32 px-6 text-center text-white relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight drop-shadow-sm">
                        Frequently Asked <br />Questions
                    </h1>
                    <div className="w-20 h-1.5 bg-white mx-auto mb-10 rounded-full opacity-80"></div>
                    <p className="text-lg md:text-2xl font-medium leading-relaxed opacity-90 max-w-2xl mx-auto">
                        Find answers to common questions about Prints Matrix, our products, and our services.
                    </p>
                </div>
            </section>

            {/* ── Section 2: FAQ Accordion ──────────────────────────────── */}
            <section className="py-20 md:py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`border rounded-[1.5rem] transition-all duration-500 overflow-hidden ${
                                    openIndex === index 
                                    ? 'border-[#0075be] bg-gray-50 shadow-xl shadow-blue-900/5' 
                                    : 'border-gray-100 hover:border-gray-300'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                                >
                                    <span className={`text-base md:text-xl font-black tracking-tight pr-4 ${openIndex === index ? 'text-[#0075be]' : 'text-black'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full shrink-0 transition-all duration-500 ${openIndex === index ? 'bg-[#0075be] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                
                                <div 
                                    className={`transition-all duration-500 ease-in-out ${
                                        openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                    }`}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0">
                                        <div className="w-full h-px bg-gray-200 mb-6"></div>
                                        <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Section 3: Still Have Questions? ───────────────────────── */}
            <section className="py-20 md:py-32 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left space-y-4">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0075be] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <MessageCircle size={14} /> Need more help?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-500 font-bold text-lg max-w-md leading-relaxed">
                            If you didn’t find what you were looking for, feel free to contact us directly.
                        </p>
                    </div>

                    <div className="shrink-0 w-full md:w-auto">
                        <a 
                            href="mailto:support@printsmatrix.com"
                            className="group flex flex-col items-center md:items-start p-8 bg-white rounded-[2rem] shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-500"
                        >
                            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Direct Channel</span>
                            <span className="text-xl md:text-2xl font-black text-[#0075be] mb-6 border-b-2 border-transparent group-hover:border-[#0075be] transition-all pb-1">
                                support@printsmatrix.com
                            </span>
                            <div className="flex items-center gap-3 text-black font-black text-[11px] uppercase tracking-widest">
                                Contact Support <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Section 4: Legal Footer ───────────────────────────────── */}
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

export default FAQs;
