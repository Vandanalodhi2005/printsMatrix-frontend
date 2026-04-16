import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, Search, ShoppingCart, LogOut, Truck, Printer, Users, ArrowRight, Zap, Droplets } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../redux/constants/userConstants';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ showLogo = true }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { cartCount, cartTotal } = useShop();
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
            if (isMenuOpen) setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setIsUserDropdownOpen(false);
    };

    const handleLogout = () => {
        logout();
        dispatch({ type: USER_LOGOUT });
        setIsUserDropdownOpen(false);
        navigate('/');
    };

    // Helper to determine active class
    const getLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "text-[12px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:text-[#0075be] relative py-1";
        const activeClasses = "text-[#0075be] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0075be]";
        const inactiveClasses = "text-gray-700";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    // Helper for mobile active classes
    const getMobileLinkClasses = (path) => {
        const currentPath = window.location.pathname;
        const baseClasses = "block px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-widest transition-all";
        const activeClasses = "text-white bg-[#0075be]";
        const inactiveClasses = "text-gray-700 hover:bg-gray-50";

        return currentPath === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
    };

    return (
        <nav className="bg-white text-gray-800 shadow-[0_2px_15px_rgba(0,0,0,0.08)] border-b border-gray-100 sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo Section — hidden when admin disables showLogo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-3">
                            {showLogo && (
                                <img 
                                    src="/logo/Prints-matrix-logo.png" 
                                    alt="Prints Matrix" 
                                    width="180"
                                    height="48"
                                    fetchpriority="high"
                                    decoding="async"
                                    loading="eager"
                                    className="h-10 sm:h-12 w-auto object-contain"
                                    style={{ aspectRatio: '180 / 48' }}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-10 items-center">
                        <Link to="/" className={getLinkClasses('/')}>Home</Link>
                        <Link to="/about" className={getLinkClasses('/about')}>About Us</Link>
                        <Link to="/shop" className={getLinkClasses('/shop')}>Store</Link>
                        <Link to="/blog" className={getLinkClasses('/blog')}>Blog</Link>
                        <Link to="/faqs" className={getLinkClasses('/faqs')}>Faqs</Link>
                        <Link to="/contact" className={getLinkClasses('/contact')}>Contact Us</Link>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Search */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyUp={handleSearch}
                                className="bg-gray-100/80 text-xs rounded-full pl-10 pr-4 py-2.5 border border-transparent focus:bg-white focus:border-[#0075be]/20 focus:outline-none focus:ring-4 focus:ring-[#0075be]/5 text-gray-800 w-36 focus:w-60 transition-all duration-500 placeholder-gray-500"
                            />
                            <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                        </div>

                        {/* Price Display */}
                        <div className="text-sm font-black text-gray-900 tracking-tight">
                            ${cartTotal?.toFixed(2) || '0.00'}
                        </div>

                        {/* Cart */}
                        <Link to="/cart" className="relative group p-2">
                            <ShoppingCart size={22} className="text-gray-800 group-hover:text-[#0075be] transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#0075be] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg border border-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* User */}
                        <div className="relative group/user">
                            {isAuthenticated ? (
                                <button className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-full transition-all">
                                    <div className="w-8 h-8 bg-[#0075be] rounded-full flex items-center justify-center text-[10px] font-black text-white">
                                        {user.name.charAt(0)}
                                    </div>
                                    <ChevronDown size={14} className="text-gray-400 group-hover/user:rotate-180 transition-all cursor-pointer" />
                                </button>
                            ) : (
                                <Link to="/login" className="p-2 flex items-center justify-center hover:bg-gray-50 rounded-full transition-all active:scale-95">
                                    <User size={22} className="text-gray-800 hover:text-[#0075be] transition-colors" />
                                </Link>
                            )}

                            {/* User Dropdown */}
                            {isAuthenticated && (
                                <div className="absolute right-0 pt-4 w-60 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all duration-300 translate-y-2 group-hover/user:translate-y-0 z-50">
                                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                        <div className="p-5 bg-gray-50 flex flex-col items-center">
                                            <div className="w-16 h-16 bg-[#0075be] text-white rounded-full flex items-center justify-center text-2xl font-black mb-3 shadow-lg">
                                                {user.name.charAt(0)}
                                            </div>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight mb-1">{user.name}</p>
                                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">LOYAL CUSTOMER</p>
                                        </div>
                                        <div className="p-2 grid grid-cols-1 gap-1">
                                            {user?.isAdmin && (
                                                <Link to="/admin/dashboard" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-yellow-50 text-yellow-700 transition-colors">
                                                    <Zap size={16} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Admin Dashboard</span>
                                                </Link>
                                            )}
                                            <Link to="/profile" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                <User size={16} className="text-gray-400" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">My Profile</span>
                                            </Link>
                                            <Link to="/track-order" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                <Truck size={16} className="text-gray-400" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Track Order</span>
                                            </Link>
                                            <div className="h-px bg-gray-100 my-1 mx-4"></div>
                                            <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                                                <LogOut size={16} />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Logout Account</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center gap-3">
                        <Link to="/cart" className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                            <ShoppingCart size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#0075be] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button onClick={toggleMenu} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 focus:outline-none">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-6 space-y-3">
                    {/* Mobile Search */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleSearch}
                            className="w-full bg-gray-50 text-gray-800 placeholder-gray-400 rounded-xl pl-12 pr-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0075be]/10 focus:bg-white"
                        />
                        <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                    </div>

                    <Link to="/" onClick={toggleMenu} className={getMobileLinkClasses('/')}>Home</Link>
                    <Link to="/about" onClick={toggleMenu} className={getMobileLinkClasses('/about')}>About Us</Link>
                    <Link to="/shop" onClick={toggleMenu} className={getMobileLinkClasses('/shop')}>Store</Link>
                    <Link to="/blog" onClick={toggleMenu} className={getMobileLinkClasses('/blog')}>Blog</Link>
                    <Link to="/faqs" onClick={toggleMenu} className={getMobileLinkClasses('/faqs')}>Faqs</Link>
                    <Link to="/contact" onClick={toggleMenu} className={getMobileLinkClasses('/contact')}>Contact Us</Link>

                    <div className="pt-6 mt-6 border-t border-gray-100">
                        {isAuthenticated ? (
                            <div className="space-y-3">
                                <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 rounded-full bg-[#0075be] flex items-center justify-center text-white font-black text-xl">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-black text-gray-900 uppercase tracking-widest">{user.name}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">View Profile</p>
                                    </div>
                                </Link>
                                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 p-4 text-red-600 font-bold uppercase tracking-widest text-xs border border-red-50 rounded-xl bg-red-50/30">
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" onClick={toggleMenu} className="flex items-center gap-4 p-4 bg-[#0075be] rounded-xl text-white">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                                    <User size={22} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-black uppercase tracking-widest">Sign In</p>
                                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Access elite features</p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
