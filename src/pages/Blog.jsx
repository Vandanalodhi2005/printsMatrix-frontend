import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Rocket } from 'lucide-react';

const Blog = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-50/30 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-[#0075be]/5 text-[#0075be] mb-12 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                    <Rocket size={48} className="animate-pulse" />
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-black text-black leading-none mb-6">
                    Coming <span className="text-[#0075be]">Soon</span>
                </h1>
                
                <div className="w-20 h-2 bg-[#facc15] mx-auto rounded-full mb-8"></div>
                
                <p className="text-gray-500 text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-lg mx-auto">
                    We're currently redesigning our blog to bring you deeper insights into the future of printing technology. Stay tuned!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0075be] text-white font-bold uppercase tracking-widest text-sm hover:bg-black transition-all duration-300 rounded-2xl shadow-xl shadow-blue-100 active:scale-95"
                    >
                        <Home size={20} className="transition-transform group-hover:scale-110" />
                        Return Home
                        <ArrowLeft size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 rotate-180" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
