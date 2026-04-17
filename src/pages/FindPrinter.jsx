import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Printer, Smartphone } from 'lucide-react';

const FindPrinter = () => {
  const [option, setOption] = useState('setup');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      {/* ── Top Hero Section ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We're here to help you set up your printer
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Let's connect your printer to a Wi-Fi or wired network or to a computer using a USB cable. First, tell us your printer model.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <img 
              src="/type/p-type2.webp" 
              alt="Setup Support" 
              className="w-full max-w-md object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Main Search Section ─────────────────────────────────────────────── */}
      <section className="bg-gray-50/50 border-t border-b border-gray-100 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Content: Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-lg"
            >
              <div className="space-y-6 mb-10">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="setup-option" 
                      className="peer sr-only"
                      checked={option === 'setup'}
                      onChange={() => setOption('setup')}
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#0045acff] transition-all" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#0045acff] scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-[#0045acff] transition-colors">Unpack, Setup New Printer</span>
                </label>

                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="setup-option" 
                      className="peer sr-only"
                      checked={option === 'troubleshoot'}
                      onChange={() => setOption('troubleshoot')}
                    />
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-[#0045acff] transition-all" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#0045acff] scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-[#0045acff] transition-colors">Troubleshoot Printer Issues</span>
                </label>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-3">
                  Enter your serial number, product number or product name
                </p>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0045acff]/20 focus:border-[#0045acff] transition-all text-gray-800 placeholder-gray-400 shadow-sm"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#003a8c' }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0045acff] text-white px-10 py-3.5 rounded-lg font-bold shadow-lg shadow-blue-100 transition-colors"
                onClick={() => alert(`Searching for: ${searchValue}`)}
              >
                Submit
              </motion.button>
            </motion.div>

            {/* Right Content: Printer Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <img 
                src="/type/p-type1.webp" 
                alt="Printer Model" 
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom Information Section ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-16 text-left">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed max-w-4xl"
        >
          We've made it easy to download printer software. Enter your product name and we'll get you the right drivers and setup tools for Windows, MacOS, iOS, and Android.
        </motion.p>
      </section>

      {/* ── Legal Disclaimer Bar (Consistent with Site) ────────────────────────── */}
      <section className="bg-[#0045acff] text-white py-8 px-4 shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium leading-relaxed text-center opacity-90 mx-auto max-w-4xl">
            Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FindPrinter;
