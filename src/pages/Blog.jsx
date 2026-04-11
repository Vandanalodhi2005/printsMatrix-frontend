import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  User, 
  Tag, 
  Share2, 
  Bookmark,
  TrendingUp,
  Mail
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Printer Setup',
    'Maintenance',
    'Buying Guides',
    'Technology',
    'Office Efficiency'
  ];

  const posts = [
    {
      id: 1,
      title: 'How to Extend Your Printer Living Span: 10 Essential Tips',
      excerpt: 'Learn the professional secrets to keeping your hardware running smoothly for years, from proper cleaning techniques to ink management.',
      category: 'Maintenance',
      author: 'David Chen',
      date: 'April 10, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Breaking Down the 2026 Wireless Connectivity Standards',
      excerpt: 'The new Wi-Fi 7 features are changing how we print. Is your current setup ready for the next generation of speed?',
      category: 'Technology',
      author: 'Sarah Miller',
      date: 'April 8, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Office Layout and Printer Placement Optimization',
      excerpt: 'Moving your printer just 5 feet could increase office productivity by 15%. Here is the science behind spatial workflow.',
      category: 'Office Efficiency',
      author: 'Marcus Thorne',
      date: 'April 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Eco-Friendly Printing: Reducing Your Carbon Footprint',
      excerpt: 'Sustainable printing isn\'t just about recycled paper. Discover how modern printer settings can save resources.',
      category: 'Buying Guides',
      author: 'Elena Rodriguez',
      date: 'April 2, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: 'Troubleshooting Common Inkjet Calibration Issues',
      excerpt: 'Avoid blurry lines and faded colors with our comprehensive guide to self-calibration and head alignment.',
      category: 'Maintenance',
      author: 'Kevin Wu',
      date: 'March 28, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1563223552-30d01fda3ead?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: 'Top 5 Printers for Remote Professionals in 2026',
      excerpt: 'Compact, efficient, and reliable. We review the best hardware for your home office setup this year.',
      category: 'Buying Guides',
      author: 'Sarah Miller',
      date: 'March 25, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(p => p.featured);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden bg-[#0a2558]">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-[120px] animae-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-black uppercase tracking-[0.3em]">
              The Matrix Journal
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Insight into the <br /> <span className="text-blue-400 italic">Future of Printing</span>
            </h1>
            <p className="text-blue-100/70 text-lg sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Expert guides, technology deep-dives, and industry news to help you navigate the ever-evolving world of document hardware.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-12 relative"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search articles e.g. 'maintenance', 'connectivity'..."
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:bg-white/10 transition-all text-base font-medium placeholder:text-slate-500 backdrop-blur-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY NAVIGATION ───────────────────────────────────── */}
      <nav className="sticky top-0 z-[50] bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-4 overflow-x-auto scrollbar-hide gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat 
                  ? 'bg-[#0045ac] text-white shadow-lg shadow-blue-200 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* ── FEATURED POST ────────────────────────────────────────── */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Featured Article
                  </span>
                </div>
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold text-blue-500 uppercase tracking-widest">
                  <Tag size={14} />
                  {featuredPost.category}
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#0a2558] leading-tight hover:text-[#0045ac] transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-400 font-bold border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={16} />
                    </div>
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2 italic">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 uppercase tracking-tighter">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="pt-6">
                  <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-3 bg-[#0a2558] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0045ac] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-100">
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── ARTICLES GRID ────────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-[#0a2558] flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              {searchQuery ? `Search results for "${searchQuery}"` : selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
            </h3>
            <div className="hidden sm:flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <TrendingUp size={16} className="text-blue-500" />
              Sort: Recent
              <ChevronRight size={14} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(p => selectedCategory !== 'All' || !p.featured || searchQuery).map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#0a2558] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-blue-600 transition-colors shadow-sm">
                      <Bookmark size={14} />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-blue-600 transition-colors shadow-sm">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    {post.date}
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    {post.readTime}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h4 className="text-xl font-black text-[#0a2558] mb-4 leading-tight hover:text-[#0045ac] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={12} />
                      </div>
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-[#0045ac] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 px-4">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h4 className="text-xl font-black text-[#0a2558] mb-2">No matching articles found</h4>
              <p className="text-slate-500 font-medium">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-6 text-[#0045ac] font-black uppercase text-xs tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ── NEWSLETTER SECTION ───────────────────────────────────── */}
      <section className="bg-white border-y border-slate-100 py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60 -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
          <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl shadow-blue-200 rotate-6 mb-6">
            <Mail size={30} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a2558] tracking-tighter">
              Get the <span className="text-blue-600 italic">Edge</span> in Your Inbox
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              Join 15,000+ professionals who receive our weekly briefing on technology, office efficiency, and hardware optimization.
            </p>
          </div>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-grow px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-400 transition-all font-medium"
              required
            />
            <button className="bg-[#0045ac] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#0a2558] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Privacy First. No Spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
      
      {/* ── FOOTER CALL TO ACTION ────────────────────────────────── */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-xl font-black text-[#0a2558] uppercase tracking-[0.2em]">Have a Story?</h3>
          <p className="text-slate-600 font-medium">We're always looking for guest contributors and industry perspectives. Connect with our editorial team Today.</p>
          <button className="inline-flex items-center gap-2 text-[#0045ac] font-black text-xs uppercase tracking-widest hover:gap-4 transition-all group">
            Contact Editorial <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default Blog;
