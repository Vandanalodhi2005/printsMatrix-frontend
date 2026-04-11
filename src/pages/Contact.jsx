import React, { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Globe, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        
        try {
            const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            await axios.post(`${apiURL}/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-black overflow-hidden">
            
            {/* ── Section 1: Hero Banner ────────────────────────────────── */}
            <section className="w-full bg-[#0075be] py-20 md:py-32 px-6 text-center text-white relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-7xl font-black mb-0 tracking-tighter leading-tight drop-shadow-sm">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* ── Section 2: Header Intro ───────────────────────────────── */}
            <section className="py-16 md:py-20 px-6 text-center bg-white">
                <div className="max-w-3xl mx-auto space-y-4">
                    <span className="text-[11px] font-black text-black uppercase tracking-[0.3em] block">
                        Have any queries?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter">
                        We're here to help.
                    </h2>
                    <div className="w-16 h-1 bg-gray-100 mx-auto mt-8"></div>
                </div>
            </section>

            {/* ── Section 3: Two Column Layout ───────────────────────────── */}
            <section className="pb-24 md:pb-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Left: Text & Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-[11px] font-black text-black uppercase tracking-[0.3em]">
                                    Don't be a stranger!
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-tight">
                                    You tell us. We listen.
                                </h3>
                                <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl">
                                    We’re here to help. If you have questions about our products or your order or need assistance choosing the right printing solution, feel free to reach out to us. We pledge to deliver prompt and dependable assistance.
                                </p>
                            </div>

                            <div className="space-y-8 pt-4">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#0075be] shadow-sm group-hover:bg-[#0075be] group-hover:text-white transition-all duration-500">
                                        <MapPin size={22} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Address</span>
                                        <p className="font-bold text-black text-lg">95 Broadacre Dr, Kitchener, ON N2R 0S5</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#0075be] shadow-sm group-hover:bg-[#0075be] group-hover:text-white transition-all duration-500">
                                        <Mail size={22} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</span>
                                        <p className="font-bold text-black text-lg">support@printsmatrix.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#0075be] shadow-sm group-hover:bg-[#0075be] group-hover:text-white transition-all duration-500">
                                        <Globe size={22} />
                                    </div>
                                    <div className="space-y-1 pt-1">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Website</span>
                                        <p className="font-bold text-black text-lg">www.printsmatrix.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form Card */}
                        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-50 relative overflow-hidden group">
                            {/* Form Status Notifications */}
                            {status === 'success' && (
                                <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-4 text-green-700 font-bold text-sm animate-in fade-in zoom-in">
                                    <CheckCircle2 size={20} className="shrink-0" />
                                    Message sent successfully!
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-4 text-red-700 font-bold text-sm animate-in fade-in zoom-in">
                                    <AlertCircle size={20} className="shrink-0" />
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Name *</label>
                                    <input 
                                        type="text" name="name" required placeholder="NAME"
                                        value={formData.name} onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#0075be] outline-none transition-all placeholder:text-gray-300 rounded-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Single Line Text</label>
                                    <input 
                                        type="text" name="subject" required placeholder="SUBJECT"
                                        value={formData.subject} onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#0075be] outline-none transition-all placeholder:text-gray-300 rounded-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Email *</label>
                                    <input 
                                        type="email" name="email" required placeholder="EMAIL"
                                        value={formData.email} onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#0075be] outline-none transition-all placeholder:text-gray-300 rounded-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Comment or Message *</label>
                                    <textarea 
                                        name="message" required rows="6" placeholder="MESSAGE"
                                        value={formData.message} onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 font-bold text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#0075be] outline-none transition-all placeholder:text-gray-300 rounded-sm resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit" disabled={status === 'loading'}
                                    className="px-10 py-5 bg-[#0075be] hover:bg-black text-white font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-blue-900/20 disabled:opacity-50 flex items-center gap-3 rounded-sm group-hover:-translate-y-1"
                                >
                                    {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 4: Legal Disclaimer Banner ──────────────────────── */}
            <section className="bg-[#0075be] py-12 px-6 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-[12px] md:text-[14px] font-bold leading-relaxed opacity-90 max-w-4xl mx-auto font-sans tracking-widest">
                        Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Contact;
