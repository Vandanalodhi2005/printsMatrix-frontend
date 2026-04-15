import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Globe, CreditCard } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const isGuide = pathname.toLowerCase().replace(/\/$/, '') === '/printer-setup-guide';

  const guideLinks = [
    { name: "Easy 123 Printer Setup",        link: "/printer-setup-guide?page=1" },
    { name: "Printer Setup & Install",      link: "/printer-setup-guide?page=2" },
    { name: "Fix Printer Offline Issue",    link: "/printer-setup-guide?page=3" },
    { name: "HP Printer Troubleshooting",   link: "/printer-setup-guide?page=4" },
    { name: "HP Printer Not Printing Fix",  link: "/printer-setup-guide?page=5" },
  ];

  const navLinks = [
    { name: "Home",       link: "/" },
    { name: "About Us",   link: "/about" },
    { name: "Shop",       link: "/shop" },
    { name: "Blog",       link: "/blog" },
    { name: "FAQs",       link: "/faq" },
    { name: "Contact Us", link: "/contact" },
  ];


  return (
    <footer className="bg-white border-t border-gray-100 font-sans">
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img 
                src="/logo/Prints-matrix-logo.png" 
                alt="Prints Matrix Logo" 
                width="180"
                height="48"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain"
                style={{ aspectRatio: '180 / 48' }}
              />
            </Link>
            <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-xs">
              Find printers designed to align with your everyday tasks and long-term printing needs. Whether you need a compact home printer or a powerful office solution, explore options built for reliability and efficiency.
            </p>
          </div>

          {/* Column 2: Quick Links — swaps based on current page */}
          <div className="space-y-8">
            <h2 className="text-lg font-black text-black tracking-tight">
              {isGuide ? 'Setup & Support' : 'Quick Links'}
            </h2>
            <ul className="space-y-4">
              {(isGuide ? guideLinks : navLinks).map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-sm font-semibold text-gray-600 hover:text-[#0075be] underline underline-offset-4 decoration-gray-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="space-y-8">
            <h2 className="text-lg font-black text-black tracking-tight">Important Links</h2>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms and Conditions", link: "/terms-conditions" },
                { name: "Return and Refund Policy", link: "/return-refund" },
                { name: "Shipping Policy", link: "/shipping-policy" },
                { name: "Cookie Policy", link: "/cookies-policy" },
                { name: "Disclaimer", link: "/disclaimer" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-sm font-semibold text-gray-600 hover:text-[#0075be] underline underline-offset-4 decoration-gray-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="space-y-8">
            <h2 className="text-lg font-black text-black tracking-tight">Quick Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#0075be] mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-gray-600 block mb-1">Address</span>
                  <span className="text-sm font-bold text-gray-700 leading-tight">
                    95 Broadacre Dr, Kitchener, ON <br />
                    N2R 0S5
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-[#0075be] mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-gray-600 block mb-1">Email</span>
                  <span className="text-sm font-bold text-gray-700">support@printsmatrix.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Globe size={18} className="text-[#0075be] mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-gray-600 block mb-1">Website</span>
                  <span className="text-sm font-bold text-gray-700">www.printsmatrix.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Dark Blue Copyright Bar */}
      <div className="bg-[#0b245a] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[13px] font-bold text-white/90">
              Copyright © {currentYear} Prints Matrix
            </p>

            {/* Payment Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <img src="https://raw.githubusercontent.com/creative-series/credit-card-logos/master/logos/paypal.svg" alt="PayPal" width="40" height="15" className="h-4 w-auto" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14 border border-gray-100">
                <img src="https://raw.githubusercontent.com/creative-series/credit-card-logos/master/logos/visa.svg" alt="VISA" width="36" height="12" className="h-3 w-auto" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <img src="https://raw.githubusercontent.com/creative-series/credit-card-logos/master/logos/mastercard.svg" alt="Mastercard" width="36" height="22" className="h-5 w-auto" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <img src="https://raw.githubusercontent.com/creative-series/credit-card-logos/master/logos/discover.svg" alt="Discover" width="40" height="10" className="h-3 w-auto" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14 border border-gray-100">
                <img src="https://raw.githubusercontent.com/creative-series/credit-card-logos/master/logos/amex.svg" alt="Amex" width="36" height="20" className="h-5 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
