import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { title: 'The Future of Cloud Accounting for Canadian Startups', category: 'Technology', date: 'Oct 12, 2026', img: 'bg-emerald-800' },
    { title: 'Navigating SR&ED Tax Credits: What You Need to Know', category: 'Tax Strategy', date: 'Sep 28, 2026', img: 'bg-slate-700' },
    { title: 'Why Growing Businesses Should Outsource Their CFO', category: 'Advisory', date: 'Sep 15, 2026', img: 'bg-teal-800' },
    { title: 'Top 5 QBO Integrations to Automate Your Receivables', category: 'Automation', date: 'Sep 02, 2026', img: 'bg-emerald-900' },
    { title: 'Preparing Your Books for Series A Fundraising', category: 'Growth', date: 'Aug 21, 2026', img: 'bg-slate-800' },
    { title: 'Year-End Tax Planning Strategies for 2026', category: 'Tax Strategy', date: 'Aug 05, 2026', img: 'bg-teal-900' },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Insights & <span className="text-emerald-600 dark:text-emerald-400">Strategies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Thoughts, tips, and announcements on accounting, tax, and growth from the MHE team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
             <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-300"
             >
                <div className={`h-64 ${post.img} opacity-90 relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    {/* Abstract pattern placeholder */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.4) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                </div>
                
                <div className="p-8">
                   <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                         {post.category}
                      </span>
                      <span className="text-slate-500 text-sm font-medium">{post.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {post.title}
                   </h3>
                   <Link to="#" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
                      Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Load More Articles
           </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
