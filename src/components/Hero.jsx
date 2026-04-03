import React from 'react';
import { ArrowRight, Printer, Briefcase, Zap, Palette, Droplet, Activity, Check, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import home from "../../public/home.jpg";
const Hero = () => {
    return (
        <div className="bg-[#0075be] text-white overflow-hidden relative min-h-[500px] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Content Left */}
                    <div className="space-y-10 max-w-xl text-left">
                        <div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-medium italic text-white/90 tracking-tight">
                                Find the Right Printer for Your
                            </h3>
                            <h1 className="text-5xl sm:text-7xl font-black text-[#facc15] tracking-tighter leading-none">
                                Home & Office
                            </h1>
                        </div>
                        
                        <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-lg">
                            Explore printers built for everyday home use and busy office work. From compact all-in-one models to fast laser printers, discover dependable performance with easy connectivity.
                        </p>

                        <div className="pt-2">
                            <Link 
                                to="/shop" 
                                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-gray-900 font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)] active:scale-95"
                            >
                                <ShoppingCart size={22} className="text-gray-900" />
                                SHOP PRINTERS
                            </Link>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative group w-full max-w-lg lg:max-w-xl">
                            <div className="overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border-2 border-white/10 aspect-[4/3]">
                                <img
                                    src={home}
                                    alt="Home and Office Printing Solutions"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
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
