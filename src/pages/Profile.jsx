import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../redux/actions/userActions';
import { listMyOrders } from '../redux/actions/orderActions';
import { User, Package, LogOut, MapPin, CreditCard, ChevronDown, ChevronUp, Plus, X, Save, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: user } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    // State for Features
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [address, setAddress] = useState({
        street: user?.address || '123 Innovation Drive',
        city: 'Tech City',
        zip: '90210',
        country: 'United States'
    });

    // Edit Address Form State
    const [editAddressForm, setEditAddressForm] = useState(address);

    const [showAllOrders, setShowAllOrders] = useState(false);

    const [isAddingCard, setIsAddingCard] = useState(false);
    const [cards, setCards] = useState([
        { id: 1, last4: '4242', expiry: '12/28' }
    ]);
    const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '' });

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(listMyOrders());
        }
    }, [user, navigate, dispatch]);

    if (!user) return null;

    const handleLogout = () => {
        logout(); // AuthContext logout
        dispatch(logoutAction()); // Redux logout
        navigate('/');
    };

    // Address Handlers
    const handleEditAddress = () => {
        setEditAddressForm(address);
        setIsEditingAddress(true);
    };

    const handleSaveAddress = () => {
        setAddress(editAddressForm);
        setIsEditingAddress(false);
    };

    const handleCancelAddress = () => {
        setIsEditingAddress(false);
    };

    // Card Handlers
    const handleAddCard = () => {
        if (newCard.number && newCard.expiry) {
            setCards([...cards, {
                id: Date.now(),
                last4: newCard.number.slice(-4) || '0000',
                expiry: newCard.expiry
            }]);
            setNewCard({ number: '', expiry: '', cvv: '' });
            setIsAddingCard(false);
        }
    };

    const displayedOrders = showAllOrders ? orders : orders?.slice(0, 2);

    return (
        <div className="min-h-screen bg-[#F8F9FA] pt-24 sm:pt-32 pb-24 font-sans text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* ── Page Header ────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#0075be] tracking-[0.3em] uppercase">
                            <Link to="/" className="hover:text-black transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span>Account</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none uppercase">
                            User Profile
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* ── LEFT: Management Hub ─────────────────────────────── */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* User Identity Card */}
                        <div className="bg-white p-10 rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-t-8 border-[#0075be] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-28 h-28 bg-[#F8F9FA] rounded-sm border-2 border-gray-100 flex items-center justify-center text-[#0075be] text-4xl font-black mb-6 shadow-sm overflow-hidden ring-8 ring-gray-50/50">
                                    {user.name?.charAt(0) || <User size={48} />}
                                </div>
                                <h2 className="text-2xl font-black text-black mb-1 uppercase tracking-tight">{user.name}</h2>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">{user.email}</p>

                                <div className="w-full mb-8">
                                    <div className="bg-gray-50 p-4 rounded-sm">
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                        <p className="text-xs font-black text-[#0075be] uppercase">Verified</p>
                                    </div>
                                    {/* <div className="bg-gray-50 p-4 rounded-sm">
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Tier</p>
                                        <p className="text-xs font-black text-black uppercase">Elite</p>
                                    </div> */}
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-sm font-black text-[10px] uppercase tracking-[0.3em] hover:bg-red-600 transition-all duration-300 shadow-lg shadow-black/10 active:scale-95"
                                >
                                    <LogOut size={16} /> Sign Out Securely
                                </button>
                            </div>
                        </div>

                        {/* Shipping Intelligence */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 group">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-50 rounded-sm flex items-center justify-center text-[#0075be]">
                                        <MapPin size={20} />
                                    </div>
                                    <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-gray-900">Delivery Node</h3>
                                </div>
                                {!isEditingAddress && (
                                    <button 
                                        onClick={handleEditAddress} 
                                        className="text-[10px] font-black uppercase text-[#0075be] hover:tracking-widest transition-all"
                                    >
                                        Update
                                    </button>
                                )}
                            </div>

                            {isEditingAddress ? (
                                <div className="space-y-4">
                                    {['street', 'city'].map((field) => (
                                        <div key={field} className="relative">
                                            <input
                                                type="text"
                                                value={editAddressForm[field]}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, [field]: e.target.value })}
                                                className="w-full bg-gray-50 border border-gray-100 rounded-sm p-4 text-xs font-bold focus:bg-white focus:border-[#0075be] outline-none transition-all placeholder:text-gray-300"
                                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            />
                                        </div>
                                    ))}
                                    <div className="flex gap-4">
                                        {['zip', 'country'].map((field) => (
                                            <input
                                                key={field}
                                                type="text"
                                                value={editAddressForm[field]}
                                                onChange={e => setEditAddressForm({ ...editAddressForm, [field]: e.target.value })}
                                                className="w-1/2 bg-gray-50 border border-gray-100 rounded-sm p-4 text-xs font-bold focus:bg-white focus:border-[#0075be] outline-none transition-all placeholder:text-gray-300"
                                                placeholder={field.toUpperCase()}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <button onClick={handleSaveAddress} className="flex-1 bg-[#0075be] text-white py-4 rounded-sm text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg shadow-blue-500/10"><Save size={14} /> Commit Changes</button>
                                        <button onClick={handleCancelAddress} className="px-6 bg-gray-100 text-gray-500 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-6 rounded-sm space-y-2 border border-gray-100">
                                    <p className="text-xs font-bold text-gray-900 leading-relaxed uppercase tracking-tight">{address.street}</p>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">{address.city}, {address.zip}</p>
                                    <p className="text-[10px] font-black text-[#0075be] uppercase tracking-[0.2em] pt-2">{address.country}</p>
                                </div>
                            )}
                        </div>

                        {/* Security Protocol */}
                        <div className="bg-black text-white p-8 rounded-sm shadow-xl border-l-8 border-[#0075be] group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center text-[#0075be]">
                                    <Shield size={20} />
                                </div>
                                <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-white">Security Protocol</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Integrity Level</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-black text-white uppercase">Critical Secret</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/5">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Two-Factor</span>
                                    <span className="text-[#0075be] text-[10px] font-black uppercase tracking-widest">Enabled</span>
                                </div>
                                <p className="text-xs text-gray-500 font-medium leading-relaxed pt-2">
                                    Your account is protected by advanced cryptographic standards and biometric-ready authentication, ensuring your data remains secure and private.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Activity & Log ───────────────────────────── */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Transaction History */}
                        <div className="bg-white rounded-sm shadow-2xl shadow-black/5 border border-gray-50 overflow-hidden">
                            <div className="px-10 py-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gray-50/30">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-sm flex items-center justify-center text-[#0075be] shadow-sm">
                                        <Package size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl text-black tracking-tight uppercase">Procurement Log</h3>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recent Orders & Shipments</p>
                                    </div>
                                </div>
                                {orders && orders.length > 2 && (
                                    <button
                                        onClick={() => setShowAllOrders(!showAllOrders)}
                                        className="bg-black text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-[#0075be] transition-all flex items-center gap-3 group"
                                    >
                                        {showAllOrders ? 'Minimize History' : 'Expand Full Log'}
                                        {showAllOrders ? <ChevronUp size={14} /> : <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />}
                                    </button>
                                )}
                            </div>

                            <div className="divide-y divide-gray-100">
                                {loadingOrders ? (
                                    <div className="p-20 flex flex-col items-center gap-6">
                                        <div className="w-12 h-12 border-4 border-gray-50 border-t-[#0075be] rounded-full animate-spin"></div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Decrypting Ledger...</p>
                                    </div>
                                ) : errorOrders ? (
                                    <div className="p-12 text-center text-red-500 font-black uppercase tracking-widest text-xs bg-red-50/50">{errorOrders}</div>
                                ) : orders && orders.length === 0 ? (
                                    <div className="p-20 text-center space-y-8">
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                                            <Package size={40} />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-xl font-black text-black uppercase tracking-tight">No Active Procurement</p>
                                            <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-xs mx-auto">
                                                Explore printers suitable for home and office environments, offering dependable performance, modern functionality, and practical features to support daily printing tasks.
                                            </p>
                                        </div>
                                        <Link to="/shop" className="inline-block bg-[#0075be] text-white px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl shadow-blue-500/20">Access Warehouse</Link>
                                    </div>
                                ) : (
                                    displayedOrders.map(order => (
                                        <div key={order._id} className="group p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 hover:bg-gray-50/80 transition-all border-l-0 hover:border-l-8 hover:border-[#0075be]">
                                            <div className="flex items-center gap-8">
                                                <div className="hidden sm:block">
                                                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-sm flex items-center justify-center text-gray-300 font-serif italic text-xl shadow-sm group-hover:text-[#0075be] transition-colors">
                                                        #
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <p className="font-black text-lg text-black uppercase tracking-tight line-clamp-1">Reference: {order._id.slice(-8).toUpperCase()}</p>
                                                    <div className="flex items-center gap-4">
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{new Date(order.createdAt).toLocaleDateString()}</p>
                                                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{order.orderItems.length} Product(s)</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 flex-wrap">
                                                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-[9px] font-black uppercase tracking-widest border transition-colors ${order.isDelivered ? 'bg-green-50 text-green-700 border-green-100' :
                                                    order.isPaid ? 'bg-blue-50 text-[#0075be] border-blue-100' :
                                                        'bg-gray-50 text-gray-500 border-gray-100'
                                                    }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${order.isDelivered ? 'bg-green-500' : order.isPaid ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                                    {order.isDelivered ? 'Fulfilled' : order.isPaid ? 'Operational' : 'Queueing'}
                                                </span>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right">
                                                        <p className="font-serif italic font-bold text-2xl text-black line-height-none">${order.totalPrice.toFixed(2)}</p>
                                                    </div>
                                                    <Link to={`/order/${order._id}`} className="w-12 h-12 bg-white border border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all rounded-sm shadow-sm">
                                                        <ArrowRight size={18} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Financial Hub */}
                        <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group">
                            <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/20">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center text-[#0075be] shadow-lg">
                                        <CreditCard size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl text-black tracking-tight uppercase">Payment Vault</h3>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secure Financial Instrument Management</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    {cards.map(card => (
                                        <div key={card.id} className="relative group/card bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-[#0075be]/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                                            <div className="flex items-start justify-between mb-10">
                                                <div className="w-14 h-10 bg-black rounded-sm p-2 flex flex-col justify-between">
                                                    <div className="w-4 h-3 bg-[#0075be]/40 rounded-sm"></div>
                                                    <div className="flex gap-1">
                                                        <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                                                        <div className="w-2 h-1 bg-white/10 rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Active</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">Instrument Ending</p>
                                                    <p className="text-xl font-black text-black line-none tracking-[0.1em]">•••• •••• •••• {card.last4}</p>
                                                </div>
                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">Validity</p>
                                                        <p className="text-xs font-black text-black tracking-widest uppercase">{card.expiry}</p>
                                                    </div>
                                                    <CreditCard className="h-6 w-6 text-[#0075be] opacity-50 group-hover/card:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {isAddingCard ? (
                                    <div className="bg-[#f0f2f5] p-10 rounded-sm border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex justify-between items-center mb-10">
                                            <h4 className="text-xl font-black text-black uppercase tracking-tight">Register New Instrument</h4>
                                            <button onClick={() => setIsAddingCard(false)} className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm text-gray-400 hover:text-red-500 transition-colors"><X size={20} /></button>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="CARD NUMBER (16 DIGITS)"
                                                    className="w-full bg-white border border-gray-100 rounded-sm p-5 text-[11px] font-black uppercase tracking-widest focus:border-[#0075be] outline-none transition-all shadow-sm"
                                                    value={newCard.number}
                                                    onChange={e => setNewCard({ ...newCard, number: e.target.value })}
                                                    maxLength="16"
                                                />
                                                <CreditCard className="absolute right-5 top-5 text-gray-100" size={20} />
                                            </div>
                                            <div className="flex gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-1/2 bg-white border border-gray-100 rounded-sm p-5 text-[11px] font-black uppercase tracking-widest focus:border-[#0075be] outline-none transition-all shadow-sm"
                                                    value={newCard.expiry}
                                                    onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                                                    maxLength="5"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="CVV"
                                                    className="w-1/2 bg-white border border-gray-100 rounded-sm p-5 text-[11px] font-black uppercase tracking-widest focus:border-[#0075be] outline-none transition-all shadow-sm"
                                                    value={newCard.cvv}
                                                    onChange={e => setNewCard({ ...newCard, cvv: e.target.value })}
                                                    maxLength="3"
                                                />
                                            </div>
                                            <button onClick={handleAddCard} className="w-full bg-[#0075be] text-white py-6 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] mt-6 hover:bg-black transition-all shadow-2xl shadow-blue-500/20 active:scale-[0.98]">
                                                Securely Encrypt & Save
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setIsAddingCard(true)}
                                        className="w-full py-6 bg-white border-2 border-dashed border-gray-200 rounded-sm text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:border-[#0075be] hover:text-[#0075be] hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-4"
                                    >
                                        <Plus size={18} /> Initialize New Payment Vector
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
