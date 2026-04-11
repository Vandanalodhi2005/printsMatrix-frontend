import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  ArrowLeft, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
  Bookmark,
  Printer,
  ChevronLeft
} from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock data for the demonstration - in a real app, this would be fetched from an API
  const post = {
    id: parseInt(id),
    title: 'How to Extend Your Printer Living Span: 10 Essential Tips',
    subtitle: 'A Masterclass in Hardware Maintenance and Longevity',
    excerpt: 'Learn the professional secrets to keeping your hardware running smoothly for years, from proper cleaning techniques to ink management.',
    content: `
      <p>In the modern digital workplace, the printer remains a cornerstone of productivity. However, many professionals neglect the regular maintenance required to keep these complex machines running at peak efficiency. Extending the lifespan of your printer isn't just about saving money; it's about ensuring reliability when you need it most.</p>
      
      <h3>1. The Golden Rule of Cleaning</h3>
      <p>Dust is the silent killer of precision hardware. Over time, microscopic particles accumulate on the rollers and print heads, leading to paper jams and streaky output. We recommend a monthly cleaning cycle using specialized lint-free cloths and, where appropriate, isopropyl alcohol for the rubber rollers.</p>

      <h3>2. Quality Over Cost: The Ink Dilemma</h3>
      <p>While third-party ink cartridges can be tempting for the budget-conscious, they often contain particulates and chemical compositions that can clog delicate nozzles. Using manufacturer-recommended supplies ensures that the viscosity and drying time match the engineering specifications of your specific model.</p>

      <blockquote>
        "Maintenance is not an expense; it is an investment in the continuity of your professional workflow."
      </blockquote>

      <h3>3. Firmware: The Digital Tune-up</h3>
      <p>Many users ignore firmware update notifications, but these updates often contain critical optimizations for mechanical movements and power management. Keeping your software current can significantly reduce physical wear on moving parts.</p>

      <h3>4. Environment Matters</h3>
      <p>Printers are sensitive to humidity and temperature fluctuations. Placing your hardware in a climate-controlled environment, away from direct sunlight and heat vents, prevents plastic components from becoming brittle and ensures consistent ink flow.</p>

      <h3>Conclusion</h3>
      <p>By implementing these simple yet effective strategies, you can easily double the functional life of your office hardware. Consistency is key—small checks today prevent major failures tomorrow.</p>
    `,
    category: 'Maintenance',
    author: 'David Chen',
    authorRole: 'Senior Hardware Specialist',
    date: 'April 10, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200',
    tags: ['Maintenance', 'Longevity', 'Hardware Tips', 'Optimization']
  };

  const relatedPosts = [
    {
      id: 2,
      title: '2026 Wireless Standards',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Office Layout Science',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── PROGRESS BAR ────────────────────────────────────────── */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left"
        initial={{ scaleX: 0 }}
        style={{ scaleX: 0 }} // This would normally hook into scroll progress
      />

      {/* ── ARTICLE HERO ────────────────────────────────────────── */}
      <header className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors mb-12 group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Matrix Journal
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-[#0045ac] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-100">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} className="text-blue-500" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0a2558] leading-tight tracking-tighter">
              {post.title}
            </h1>

            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl italic">
              "{post.subtitle}"
            </p>

            <div className="flex items-center gap-6 py-8 border-t border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-slate-200 overflow-hidden shadow-inner">
                <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-black text-xl">
                  {post.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-[#0a2558] uppercase tracking-widest">{post.author}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter mt-1">{post.authorRole}</p>
              </div>
              <div className="ml-auto flex items-center gap-2 text-slate-300">
                <Calendar size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">{post.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── MAIN CONTENT ────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">
        
        {/* Article Body */}
        <article className="space-y-12">
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 relative group"
          >
            <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <div 
            className="prose prose-slate lg:prose-xl max-w-none 
              prose-headings:text-[#0a2558] prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:font-black prose-blockquote:text-blue-900 prose-blockquote:text-2xl
              prose-strong:text-blue-700 prose-strong:font-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="pt-12 border-t border-slate-100 space-y-6">
            <h4 className="text-xs font-black text-[#0a2558] uppercase tracking-[0.3em]">Filed Under</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between py-12 border-y border-slate-100">
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-[#0a2558] font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors">
                 <Share2 size={16} /> Share Insight
               </button>
               <button className="flex items-center gap-2 text-[#0a2558] font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors">
                 <Printer size={16} /> Print Technical View
               </button>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-100 transition-all">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-200 transition-all">
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-16">
          {/* Action Card */}
          <div className="bg-[#0a2558] p-8 rounded-[2rem] text-white space-y-6 relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
            <h4 className="text-lg font-black leading-tight tracking-tight">Need expert help with your setup?</h4>
            <p className="text-blue-100/60 text-sm font-medium leading-relaxed">Our elite technicians are available 24/7 for remote diagnostics and hardware optimization.</p>
            <Link to="/contact">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all mt-4">
                Chat with Specialist
              </button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="space-y-8">
            <h4 className="text-sm font-black text-[#0a2558] uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-600 rounded-full" /> Related Insights
            </h4>
            <div className="space-y-6">
              {relatedPosts.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.id}`} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <img src={rel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={rel.title} />
                  </div>
                  <div className="space-y-1 py-1">
                    <h5 className="text-sm font-black text-[#0a2558] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{rel.title}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Read Article <ArrowLeft size={8} className="rotate-180 inline ml-1" /></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Categories */}
          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-6">
            <h4 className="text-sm font-black text-[#0a2558] uppercase tracking-widest">Top Categories</h4>
            <div className="space-y-3">
              {['Technology', 'Setup Guides', 'Efficiency', 'Sustainability'].map(cat => (
                <div key={cat} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">{cat}</span>
                  <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </main>

      {/* ── FOOTER CALL TO ACTION ────────────────────────────────── */}
      <section className="bg-slate-50 py-24 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0a2558] tracking-tighter">
            Stay plugged into the <br /> <span className="text-blue-600 italic">Matrix Journal</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl mx-auto">
            Get early access to our deep-dives and technical briefings before they hit the public feed.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
            />
            <button className="bg-[#0045ac] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-100">
              Join Matrix
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
