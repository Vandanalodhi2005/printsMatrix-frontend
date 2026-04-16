import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const PrinterTypes = () => {
    const types = [
        {
            title: "Home Printers",
            description: "Best for documents, photos & schoolwork",
            img: "/type/p-type1.jpg",
            link: "/shop?filter=home-printers"
        },
        {
            title: "Office Printers",
            description: "Best for teams, invoices & daily workloads",
            img: "/type/p-type2.jpg",
            link: "/shop?filter=office-printers"
        },
        {
            title: "Laser Printers",
            description: "Best for speed, efficiency & bulk printing",
            img: "/type/p-type3.jpg",
            link: "/shop?filter=laser-printers"
        },
        {
            title: "Inkjet Printers",
            description: "Best for photos, color prints & versatility",
            img: "/type/p-type4.jpg",
            link: "/shop?filter=inkjet-printers"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                        Explore Printers <br className="hidden sm:block" />
                        <span className="text-[#0075be] font-black">That Fit Your Needs</span>
                    </h2>
                    <div className="w-24 h-2 bg-[#facc15] mx-auto rounded-full"></div>
                    <p className="mt-8 text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                        Explore printers suitable for home and office environments, offering dependable performance, modern functionality, and practical features to support daily printing tasks.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {types.map((type, idx) => (
                        <Link 
                            key={idx} 
                            to={type.link}
                            className="group relative flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(2,74,216,0.15)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Card Image Wrapper */}
                            <div className="relative h-64 overflow-hidden bg-[#fafafa]">
                                <img
                                    src={type.img}
                                    alt={type.title}
                                    width="300"
                                    height="256"
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-[#0075be]/40 transition-colors duration-500"></div>
                            </div>

                            {/* Card Content Wrapper */}
                            <div className="p-8 flex flex-col flex-grow text-left">
                                <h3 className="text-xl font-black text-[#0075be] uppercase tracking-tight mb-2 group-hover:text-black transition-colors duration-300">
                                    {type.title}
                                </h3>
                                <p className="text-sm font-semibold text-gray-500 leading-tight mb-6 flex-grow italic">
                                    {type.description}
                                </p>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 group-hover:text-[#0075be] transition-colors">
                                        Explore Now
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#facc15] flex items-center justify-center text-gray-900 shadow-sm group-hover:bg-[#0075be] group-hover:text-white transition-all transform group-hover:rotate-45">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500">
                                <ShoppingCart size={16} className="text-white" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrinterTypes;
