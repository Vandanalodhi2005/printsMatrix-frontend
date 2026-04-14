import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import home from "../../public/home.jpg";

const Hero = () => {
    return (
        <div className="bg-[#0075be] text-white overflow-hidden relative min-h-[500px] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Content Left */}
                    <div className="space-y-8 max-w-xl text-left">
                        <div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-semibold italic text-white tracking-tight">
                                Find the Right Printer for Your
                            </h3>
                            <h1 className="text-5xl sm:text-7xl font-bold text-[#facc15] tracking-tight leading-none">
                                Home & Office
                            </h1>
                        </div>
                        
                        <p className="text-sm md:text-base text-white leading-relaxed font-medium max-w-lg">
                            Explore printers built for everyday home use and busy office work. From compact all-in-one models to fast laser printers, discover dependable performance with easy connectivity.
                        </p>

                        <div className="pt-4">
                            <Link 
                                to="/shop" 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all rounded-lg shadow-xl active:scale-95"
                            >
                                <ShoppingCart size={20} className="text-gray-900" />
                                SHOP PRINTERS
                            </Link>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative group w-full max-w-lg lg:max-w-xl">
                            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-white/20 aspect-[4/3]">
                                <img
                                    src={home}
                                    alt="Home and Office Printing Solutions"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
