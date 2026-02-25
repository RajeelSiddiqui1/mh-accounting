import { motion } from 'framer-motion';
import { Target, Users, Leaf, MonitorSmartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-mint-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              The MHE Way
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Accounting Evolved. <br />
              <span className="text-emerald-600 dark:text-mint-400">Tech-Driven. Human-Led.</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We are one of the pioneers of what is now coined 'Cloud Accounting'. Having worked with over 1,000+ businesses across Canada and the USA, we understand how to bring financial clarity back into your hands.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-mint-400">
                  <MonitorSmartphone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Modern & Paperless</h4>
                  <p className="text-slate-600 dark:text-slate-400">We leverage the latest technology to ensure your accounting is seamless, automated, and secure.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-mint-400">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Human-Centered Advising</h4>
                  <p className="text-slate-600 dark:text-slate-400">Behind the technology is a team of expert CPAs who genuinely care about your business's growth trajectory.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-mint-400">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Results Driven</h4>
                  <p className="text-slate-600 dark:text-slate-400">We aim for financial clarity and more time for you to focus on running your business.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glassmorphism relative p-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-mint-300/10 mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity"></div>
              {/* Fallback pattern */}
              <div className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                 <Leaf className="w-32 h-32 text-emerald-300/50 dark:text-emerald-900/50 animate-pulse" />
              </div>
              
              {/* Floating stat card */}
              <motion.div 
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                 className="absolute -left-4 md:-left-8 bottom-12 glassmorphism p-6 rounded-2xl z-20 shadow-2xl"
              >
                 <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Trusted By</p>
                 <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">1000+</p>
                 <p className="text-emerald-600 dark:text-mint-400 text-sm font-medium mt-1">Growing Companies</p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
