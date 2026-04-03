import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { ChevronRight, ChevronLeft, Search, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { getImageUrl } from '../utils/imageUtils';

// ── Product Card Component ──────────────────────────────────────────────────
const ProductCard = ({ product, onDetails }) => {
    const imageUrl = getImageUrl(product.images, 400);
    const originalPrice = product.price * 1.15;
    const { addToCart } = useShop();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!isAuthenticated) {
            alert('Please sign in to add items to cart.');
            navigate('/login');
            return;
        }
        addToCart(product, 1);
    };

    return (
        <div 
            className="group bg-white p-4 flex flex-col h-full cursor-pointer transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-lg rounded-sm overflow-hidden"
            onClick={() => onDetails(product)}
        >
            <div className="relative aspect-square flex items-center justify-center bg-transparent overflow-hidden mb-4">
                <img
                    src={imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=Printer'; }}
                />
                
                {/* Quick Add Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button 
                        onClick={handleAddToCart}
                        className="w-12 h-12 bg-white rounded-full shadow-xl shadow-black/10 flex items-center justify-center text-black hover:bg-[#0075be] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                        title="Add to Cart"
                    >
                        <ShoppingBag size={20} />
                    </button>
                </div>

                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full shadow-sm border border-gray-100">
                    <span className="text-[9px] font-black text-black uppercase tracking-tighter">Sale!</span>
                </div>
            </div>

            <div className="flex flex-col space-y-1">
                <h3 className="text-[14px] font-bold text-black leading-snug line-clamp-2 min-h-[40px]">
                    {product.title}
                </h3>
                <p className="text-[11px] font-medium text-gray-400">
                    {typeof product.category === 'object' ? product.category?.name : (product.category || 'Printers')}
                </p>
                <div className="flex items-center gap-2 pt-1 font-sans">
                    <span className="text-[12px] text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
                    <span className="text-[13px] font-black text-black">${Number(product.price).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

// ── Sidebar Best Sellers ───────────────────────────────────────────────────
const BestSellerItem = ({ product, onDetails }) => {
    const imageUrl = getImageUrl(product.images, 100);
    return (
        <div className="flex gap-3 items-center py-4 border-b border-gray-50 last:border-0 group cursor-pointer" onClick={() => onDetails(product)}>
            <div className="w-16 h-16 shrink-0 bg-white border border-gray-100 rounded-sm overflow-hidden p-1">
                <img src={imageUrl} alt={product.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-[10px] font-bold text-black line-clamp-2 leading-tight group-hover:text-[#0075be] transition-colors">{product.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] text-gray-400 line-through">${(product.price * 1.15).toFixed(2)}</span>
                    <span className="text-[10px] font-black text-black">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

const Printers = ({ isFeatured = false, hideDisclaimer = false }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    // Filters from URL
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const page = Number(searchParams.get('page')) || 1;
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const sort = searchParams.get('sort') || '';

    const productList = useSelector(s => s.productList || {});
    const { loading, error, products = [], pages = 1 } = productList;

    // Temporary UI state for price slider
    const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice || 1000);

    useEffect(() => {
        dispatch(listProducts(search, category, page, '', '', minPrice, maxPrice, sort));
    }, [dispatch, search, category, page, minPrice, maxPrice, sort]);

    const handleFilterButtonClick = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('maxPrice', tempMaxPrice);
        newParams.set('page', '1');
        setSearchParams(newParams);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        const newParams = new URLSearchParams(searchParams);
        if (value === 'Default sorting') {
            newParams.set('sort', '');
        } else if (value === 'Sort by price: low to high') {
            newParams.set('sort', 'lowToHigh');
        } else if (value === 'Sort by price: high to low') {
            newParams.set('sort', 'highToLow');
        }
        setSearchParams(newParams);
    };

    const handleCategoryClick = (catVal) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('category', catVal);
        newParams.set('page', '1');
        setSearchParams(newParams);
    };

    const handleDetails = (p) => navigate(`/product/${p.slug || p._id}`);

    return (
        <div className="bg-white min-h-screen font-sans text-black pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* ── SIDEBAR (Hidden in Featured mode) ──────────────────── */}
                    {!isFeatured && (
                        <aside className="w-full lg:w-72 shrink-0 space-y-12">
                            {/* Price Filter */}
                            <div className="space-y-6">
                                <div className="w-10 h-1 bg-[#0075be]"></div>
                                <h3 className="text-xl font-black text-black tracking-tight">Filter by Price</h3>
                                <div className="px-2">
                                    <input 
                                        type="range" min="0" max="2000" step="50"
                                        value={tempMaxPrice} 
                                        onChange={(e) => setTempMaxPrice(e.target.value)}
                                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                    />
                                    <div className="flex items-center justify-between mt-6">
                                        <button 
                                            onClick={handleFilterButtonClick}
                                            className="px-6 py-2 bg-[#0075be] text-white text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-black transition-all"
                                        >
                                            Filter
                                        </button>
                                        <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">
                                            Price: $0 — ${tempMaxPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Categories List */}
                            <div className="space-y-6">
                                <div className="w-10 h-1 bg-[#0075be]"></div>
                                <h3 className="text-xl font-black text-black tracking-tight">Categories</h3>
                                <div className="space-y-4">
                                    <button 
                                        onClick={() => handleCategoryClick('')}
                                        className={`flex items-center justify-between w-full group ${category === '' ? 'text-[#0075be]' : 'text-black'}`}
                                    >
                                        <span className="text-sm font-black group-hover:text-[#0075be] transition-colors">All Printers</span>
                                    </button>
                                    <div className="pl-4 space-y-3">
                                        {['Inkjet Printers', 'Laser Printers', 'All-In-One Printers'].map(name => (
                                            <button 
                                                key={name}
                                                onClick={() => handleCategoryClick(name.split(' ')[0])} 
                                                className={`flex items-center justify-between w-full group ${category.includes(name.split(' ')[0]) ? 'text-[#0075be]' : 'text-gray-600'}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <ChevronRight size={14} className={category.includes(name.split(' ')[0]) ? 'text-[#0075be]' : 'text-gray-300'} />
                                                    <span className="text-sm font-bold group-hover:text-[#0075be] transition-colors">{name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="w-10 h-1 bg-[#0075be]"></div>
                                <h3 className="text-xl font-black text-black tracking-tight">Our Best Sellers</h3>
                                <div className="divide-y divide-gray-50">
                                    {products.slice(0, 3).map(p => (
                                        <BestSellerItem key={p._id} product={p} onDetails={handleDetails} />
                                    ))}
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* ── MAIN CONTENT ───────────────────────────────────── */}
                    <main className="flex-1">
                        
                        {/* Header & Controls (Dynamic based on mode) */}
                        {isFeatured ? (
                            <div className="flex flex-col items-center mb-16 space-y-3">
                                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">Featured Products</h2>
                                <div className="w-24 h-1 bg-[#0075be]"></div>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-gray-100">
                                <div className="mb-4 md:mb-0 space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">
                                        <Link to="/" className="hover:text-black">Home</Link>
                                        <span>/</span>
                                        <span className="text-black">Store</span>
                                    </div>
                                    <p className="text-[13px] font-bold text-gray-500">
                                        {loading ? 'Searching models...' : `Showing ${products.length} results`}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <select 
                                        className="bg-transparent text-[11px] font-black text-gray-600 border-none focus:ring-0 cursor-pointer appearance-none uppercase tracking-widest text-right"
                                        value={sort === 'lowToHigh' ? 'Sort by price: low to high' : sort === 'highToLow' ? 'Sort by price: high to low' : 'Default sorting'}
                                        onChange={handleSortChange}
                                    >
                                        <option>Default sorting</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Grid */}
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="aspect-square bg-gray-50 animate-pulse rounded-sm" />
                                ))}
                            </div>
                        ) : error ? (
                            <div className="text-center py-20 bg-red-50 text-red-600 font-bold rounded-sm uppercase tracking-widest text-xs">
                                {error}
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-32 space-y-4">
                                <h3 className="text-2xl font-black text-black">No products found</h3>
                                <p className="text-gray-500 text-sm">Try adjusting your filters or search keywords.</p>
                                <button 
                                    onClick={() => setSearchParams({})}
                                    className="px-8 py-3 bg-black text-white font-black text-[10px] uppercase tracking-widest"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className={`grid grid-cols-1 md:grid-cols-2 ${isFeatured ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-8 gap-y-12`}>
                                {products.slice(0, isFeatured ? 8 : 100).map(p => (
                                    <ProductCard key={p._id} product={p} onDetails={handleDetails} />
                                ))}
                            </div>
                        )}

                        {/* Pagination (Hidden in Featured mode) */}
                        {pages > 1 && !isFeatured && (
                            <div className="flex items-center gap-2 mt-20">
                                {[...Array(pages)].map((_, i) => (
                                    <button 
                                        key={i + 1}
                                        onClick={() => {
                                            const newParams = new URLSearchParams(searchParams);
                                            newParams.set('page', (i + 1).toString());
                                            setSearchParams(newParams);
                                        }}
                                        className={`w-10 h-10 flex items-center justify-center text-[12px] font-black border transition-all ${page === i + 1 ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-100 hover:border-black'}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                {page < pages && (
                                    <button 
                                        onClick={() => {
                                            const newParams = new URLSearchParams(searchParams);
                                            newParams.set('page', (page + 1).toString());
                                            setSearchParams(newParams);
                                        }}
                                        className="w-10 h-10 flex items-center justify-center border border-gray-100 hover:border-black transition-all"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                )}
                            </div>
                        )}

                    </main>

                </div>
            </div>

            {/* Legal Disclaimer banner at bottom */}
            {!hideDisclaimer && (
                <div className="mt-20">
                    <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                        <div className="max-w-6xl mx-auto">
                            <p className="text-[11px] md:text-[13px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto uppercase tracking-widest">
                                Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                            </p>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Printers;
