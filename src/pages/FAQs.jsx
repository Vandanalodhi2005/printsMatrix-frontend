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
            answer: "Prints Matrix is an independent online retailer offering printers, printing supplies, and related accessories for home and business use. We operate independently and are not affiliated with any printer manufacturer unless explicitly stated."
        },
        {
            question: "Are you an authorized dealer of printer brands?",
            answer: "Unless clearly mentioned on a product page, Prints Matrix is not an authorized dealer or official partner of any printer manufacturer. All brand names and trademarks are used strictly for identification purposes."
        },
        {
            question: "What products do you sell?",
            answer: `"We offer a selection of:"\n

            1. "Printers for home and office use",\n
            2. "Ink and toner cartridges",\n
            3. "Printing accessories",\n
            4. "Product availability may vary and is subject to change."`
        },
        {
            question: "Do your products include a manufacturer warranty?",
            answer: "Where applicable, products may include a manufacturer’s warranty provided directly by the brand. Warranty terms, coverage, and claims are handled by the respective manufacturer."
        },
        {
            question: "How do I place an order?",
            answer: "You can place an order directly through our website by selecting a product, adding it to your cart, and completing the secure checkout process."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept secure online payment methods available at checkout. All transactions are processed through encrypted and trusted payment gateways."
        },
        {
            question: "Do you ship internationally?",
            answer: "Shipping availability depends on your location. Shipping options, estimated delivery times, and applicable charges are displayed during checkout."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery times vary based on product availability, shipping method, and destination. Estimated delivery details are provided at checkout and in order confirmation emails."
        },
        {
            question: "Can I return or cancel my order?",
            answer: "Return, cancellation, and refund eligibility are subject to our Return & Refund Policy. Please review the policy page for detailed terms and conditions."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach us via email at support@printsmatrix.com or through the Contact Us page on our website. Our team aims to respond promptly during business hours."
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes. We take data protection seriously and use industry-standard security measures to safeguard personal and payment information. Please refer to our Privacy Policy for more details."
        },
        {
            question: "Do you offer technical support for printers?",
            answer: "We provide general product information and order-related assistance. Technical support, installation, and troubleshooting are typically handled by the manufacturer or service provider."
        },
        {
            question: "Why should I choose Prints Matrix?",
            answer: "We focus on transparency, reliable products, secure checkout, and clear communication—helping customers make informed purchasing decisions with confidence."
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
                                className={`border rounded-[1.5rem] transition-all duration-500 overflow-hidden ${openIndex === index
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
                                    className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
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
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto font-sans tracking-widest">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default FAQs;
