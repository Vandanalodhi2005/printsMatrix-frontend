import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[320px] w-full overflow-hidden">
      {/* Guaranteed Background Layer */}
      <img 
        src="/hero_background_image.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        fetchPriority="high"
        decoding="async"
        loading="eager"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 px-4 pt-12 pb-8">
        <h2 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
          Smart Printer Setup & Troubleshooting
        </h2>
        <p className="text-gray-200 text-xl mb-6 font-medium">
          Set Up & Troubleshoot Your Printer in Minutes
        </p>
        <div className="flex gap-8 justify-center mt-2">
          <span className="flex items-center text-[#22c55e] font-bold text-lg bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
            <i className="fa-solid fa-bolt mr-2"></i> Quick Setup
          </span>
          <span className="flex items-center text-[#22c55e] font-bold text-lg bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
            <i className="fa-solid fa-screwdriver-wrench mr-2"></i> Easy Troubleshooting
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
