import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    return (
        <section className="relative bg-[#0075be] text-white overflow-hidden min-h-[550px] lg:min-h-[650px] flex items-center">
            {/* Inline CSS for Animations to keep it self-contained and fast */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes heroFadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroFadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .hero-animate-up { animation: heroFadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .hero-animate-right { animation: heroFadeInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Content Column */}
                    <div className="space-y-8 lg:space-y-10 hero-animate-up">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Independent U.S. Retailer</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                Home and Office <span className="text-white/70">Printing</span> Solutions
                            </h1>
                            <p className="text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed font-medium">
                                Find printers designed to align with your everyday tasks and long-term printing needs—optimized for reliability and cost-efficiency.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link 
                                to="/shop" 
                                className="group relative px-8 py-4 bg-white text-[#0075be] rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] active:scale-95"
                            >
                                Shop Products
                                <ShoppingCart size={20} className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link 
                                to="/printer-setup-guide" 
                                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-95"
                            >
                                Setup Guide
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-10 flex items-center gap-8 border-t border-white/10">
                            <div>
                                <p className="text-3xl font-black">2.5k+</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Printers Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <p className="text-3xl font-black">4.9/5</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/50">Expert Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative hero-animate-right">
                        <div className="relative group">
                            {/* Decorative Blobs */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] animate-pulse" />
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[100px] animate-pulse" />
                            
                            {/* Glass Card Container */}
                            <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 aspect-[4/3]">
                                <img
                                    src="/home.webp"
                                    srcSet="/home.webp 1170w"
                                    sizes="(max-width: 768px) 100vw, 651px"
                                    alt="Home and Office Printing Solutions"
                                    width="651"
                                    height="556"
                                    fetchPriority="high"
                                    decoding="async"
                                    loading="eager"
                                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
                                />
                                
                                {/* Info Badge */}
                                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-1">Top Rated Product</p>
                                            <p className="text-lg font-bold">Wireless Business Printer</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0075be] shadow-lg">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
