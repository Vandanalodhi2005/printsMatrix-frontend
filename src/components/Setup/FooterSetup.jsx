import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Globe, CreditCard } from "lucide-react";

const FooterSetup = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const isGuide = pathname.toLowerCase().replace(/\/$/, '') === '/printer-setup-guide';

  const guideLinks = [
    { name: "Troubleshoot Hp Printer",        link: "#" },
    { name: "hp printer offline fix",      link: "#" },
    { name: "123.Hp.Com/Setup",    link: "#" },
    { name: "Hp Scanner not Working",   link: "#" },
    { name: "Hp Printer Wi-Fi Setup",  link: "#" },
    { name: "Hp Printer Not Connecting",  link: "#" },
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
    <footer className="bg-slate-900 border-t border-slate-800 font-sans">
      {/* Upper Footer: Links & Info */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link to="/" className="inline-block brightness-0 invert">
              <img 
                src="/logo/Prints-matrix-logo.png" 
                alt="Prints Matrix Logo" 
                width="140"
                height="37"
                loading="lazy"
                decoding="async"
                className="h-9 w-auto object-contain"
                style={{ aspectRatio: '140 / 37' }}
              />
            </Link>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Complete printer setup guide: Install essential drivers, connect to Wi-Fi, and resolve offline errors quickly. Follow our detailed, step-by-step instructions to configure your device, manage software, and ensure seamless wireless printing today.
            </p>
          </div>

          {/* Column 2: Quick Links — fixed height to prevent CLS during route transitions */}
          <div className="space-y-8 min-h-[320px]">
            <h2 className="text-lg font-black text-white tracking-tight h-7">
              {isGuide ? 'Quick Links' : 'Quick Links'}
            </h2>
            <ul className="space-y-4">
              {(isGuide ? guideLinks : navLinks).map((item) => (
                <li key={item.name} className="h-5">
                  <Link to={item.link} className="text-sm font-semibold text-slate-400 hover:text-white underline underline-offset-4 decoration-slate-700 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="space-y-8">
            <h2 className="text-lg font-black text-white tracking-tight">Important Links</h2>
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
                  <Link to={item.link} className="text-sm font-semibold text-slate-400 hover:text-white underline underline-offset-4 decoration-slate-700 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="space-y-8">
            <h2 className="text-lg font-black text-white tracking-tight">Quick Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-white mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-slate-500 block mb-1">Address</span>
                  <span className="text-sm font-bold text-slate-300 leading-tight">
                    95 Broadacre Dr, Kitchener, ON <br />
                    N2R 0S5
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-white mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-slate-500 block mb-1">Email</span>
                  <span className="text-sm font-bold text-slate-300">support@printsmatrix.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Globe size={18} className="text-white mt-1 shrink-0" />
                <div>
                  <span className="text-[12px] font-black uppercase text-slate-500 block mb-1">Website</span>
                  <span className="text-sm font-bold text-slate-300">www.printsmatrix.com</span>
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

            {/* Payment Icons - Inline SVGs for 100% reliability and zero network requests */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* PayPal */}
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <svg viewBox="0 0 100 24" className="h-4 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#003087" d="M8.2 3h10.4c2.5 0 4.4.5 5.8 1.4 1.2.8 1.9 2 1.9 3.6 0 1.2-.4 2.3-1.1 3.2-.7 1-1.8 1.6-3.1 2H15l-1 5.2h-5.2l2.3-12.4h2.2zm7.1 7c1.1 0 1.8-.1 2.4-.4.5-.3.8-.8.8-1.4 0-.6-.2-1-.5-1.2-.4-.2-.9-.3-1.7-.3h-1.6l-.6 3.3h1.2z" />
                  <path fill="#009cde" d="M36.2 3h10.4c2.5 0 4.4.5 5.8 1.4 1.2.8 1.9 2 1.9 3.6 0 1.2-.4 2.3-1.1 3.2-.7 1-1.8 1.6-3.1 2H43l-1 5.2h-5.2l2.3-12.4h2.2zm7.1 7c1.1 0 1.8-.1 2.4-.4.5-.3.8-.8.8-1.4 0-.6-.2-1-.5-1.2-.4-.2-.9-.3-1.7-.3h-1.6l-.6 3.3h1.2z" />
                  <path fill="#012169" d="M64.2 3h10.4c2.5 0 4.4.5 5.8 1.4 1.2.8 1.9 2 1.9 3.6 0 1.2-.4 2.3-1.1 3.2-.7 1-1.8 1.6-3.1 2H71l-1 5.2h-5.2l2.3-12.4h2.2zm7.1 7c1.1 0 1.8-.1 2.4-.4.5-.3.8-.8.8-1.4 0-.6-.2-1-.5-1.2-.4-.2-.9-.3-1.7-.3h-1.6l-.6 3.3h1.2z" />
                </svg>
              </div>
              {/* Visa */}
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14 border border-gray-100">
                <svg viewBox="0 0 100 32" className="h-3 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#1a1f71" d="M38.8 3.5l-3.3 19.3h5.2l3.3-19.3h-5.2zm23.6 0l-5.3 13-2.1-10.4c-.4-1.6-1.5-2.6-3.1-2.6h-8.8v.5c1.8.4 3.5 1.1 4.6 2.1 1.1 1 1.7 1.9 2.1 3.4l3.5 13.3h5.5l8.1-19.3h-5.5zm31 0h-4.3c-1.3 0-2.4.8-2.9 2l-8.2 17.3h5.5l1.1-3h6.7l.6 3h4.9l-4.4-19.3zm-3.1 12.3l2.1-5.6 1.2 5.6h-3.3zM15 3.5l-5 13.2L7.3 6.1C6.9 4.3 5.4 3.5 3.8 3.5H0v.5c2.4.5 4.6 1.6 5.9 3.5L13.1 22.8h5.5L25.3 3.5h-5.3z" />
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <svg viewBox="0 0 100 60" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="30" r="30" fill="#eb001b" opacity="0.8" />
                  <circle cx="65" cy="30" r="30" fill="#ff5f00" opacity="0.8" />
                  <circle cx="65" cy="30" r="30" fill="#f79e1b" opacity="0.6" />
                </svg>
              </div>
              {/* Discover */}
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14">
                <svg viewBox="0 0 100 16" className="h-3 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000" d="M11 1.5h4v13h-4v-13zm11 0h5c3.3 0 6 2.7 6 6s-2.7 6-6 6h-5v-13zm4 9c1.7 0 3-1.3 3-3s-1.3-3-3-3h-1v6h1zm12.5-9c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" />
                  <circle cx="85" cy="8" r="8" fill="#ff6600" />
                </svg>
              </div>
              {/* Amex */}
              <div className="bg-white px-3 py-1.5 rounded-sm flex items-center justify-center h-8 w-14 border border-gray-100">
                <svg viewBox="0 0 100 100" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#016fcf" />
                  <text x="50" y="65" fontFamily="Arial, Helvetica, sans-serif" fontSize="40" fontWeight="bold" fill="#fff" textAnchor="middle">AMEX</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSetup;
