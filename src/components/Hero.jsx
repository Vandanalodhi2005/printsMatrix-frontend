import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImage from "/home.webp";

const Hero = () => {
    return (
        <section className="relative bg-[#0075be] text-white overflow-hidden min-h-[550px] lg:min-h-[650px] flex items-center">
            <Helmet>
                <link rel="preload" as="image" href="/home.webp" fetchPriority="high" />
            </Helmet>
            {/* Inline CSS for Animations to keep it self-contained and fast */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes heroFadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes heroScaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .hero-animate {
                    animation: heroFadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .hero-animate-scale {
                    animation: heroScaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
                }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.35s; }
                .delay-3 { animation-delay: 0.5s; }
                .delay-4 { animation-delay: 0.65s; }
            `}} />

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[100px] rotate-12" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[70%] bg-black/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left">
                    {/* Content Left */}
                    <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                        <div className="space-y-4">
                            <h3 className="hero-animate text-xl sm:text-2xl font-semibold italic text-white/90 tracking-tight delay-1">
                                Find the Right Printer for Your
                            </h3>
                            <h1 className="hero-animate text-5xl sm:text-7xl font-black text-[#facc15] tracking-tighter leading-none drop-shadow-xl delay-2">
                                Home & Office
                            </h1>
                        </div>

                        <p className="hero-animate text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0 delay-3">
                            Explore printers built for everyday home use and busy office work. From compact all-in-one models to fast laser printers, discover dependable performance with easy connectivity.
                        </p>

                        <div className="hero-animate pt-4 flex justify-center lg:justify-start delay-4">
                            <Link
                                to="/shop"
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-[#facc15] transition-all duration-300 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95"
                            >
                                <ShoppingCart size={20} className="transition-transform group-hover:scale-110" />
                                SHOP PRINTERS
                                <ArrowRight size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="hero-animate-scale relative flex justify-center lg:justify-end">
                        <div className="relative group w-full max-w-lg lg:max-w-xl">
                            <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 aspect-[4/3]">
                                <img
                                    src={heroImage}
                                    srcSet="/home.webp 1170w"
                                    sizes="(max-width: 768px) 100vw, 651px"
                                    alt="Home and Office Printing Solutions"
                                    width="651"
                                    height="556"
                                    fetchpriority="high"
                                    decoding="async"
                                    loading="eager"
                                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle bottom divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,112.55,200.54,64.21,321.39,56.44Z" className="fill-gray-50"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
