import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import home from "../../public/home.jpg";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative bg-[#0075be] text-white overflow-hidden min-h-[550px] lg:min-h-[650px] flex items-center">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[100px] rotate-12" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[70%] bg-black/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left"
                >
                    {/* Content Left */}
                    <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                        <div className="space-y-4">
                            <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-semibold italic text-white/90 tracking-tight">
                                Find the Right Printer for Your
                            </motion.h3>
                            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-black text-[#facc15] tracking-tighter leading-none drop-shadow-xl">
                                Home & Office
                            </motion.h1>
                        </div>
                        
                        <motion.p variants={itemVariants} className="text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                            Explore printers built for everyday home use and busy office work. From compact all-in-one models to fast laser printers, discover dependable performance with easy connectivity.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-4 flex justify-center lg:justify-start">
                            <Link 
                                to="/shop" 
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-[#facc15] transition-all duration-300 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95"
                            >
                                <ShoppingCart size={20} className="transition-transform group-hover:scale-110" />
                                SHOP PRINTERS
                                <ArrowRight size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Right */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-lg lg:max-w-xl">
                            <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 aspect-[4/3]">
                                <img
                                    src={home}
                                    alt="Home and Office Printing Solutions"
                                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
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
