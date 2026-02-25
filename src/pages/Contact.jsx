import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-8"
           >
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-slate-900 backdrop-blur-md border border-emerald-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-6">
                  Get In Touch
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                  Connect your business to <span className="text-emerald-600 dark:text-emerald-400">Success.</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                  Book a free 15-minute intro call to see how MHE Accounting can streamline your finances and map your growth journey.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800/50">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl glass-card flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Headquarters (Virtual)</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Toronto, Ontario<br/>Canada</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl glass-card flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h4>
                    <a href="mailto:admin@mheaccounting.ca" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition text-lg">admin@mheaccounting.ca</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl glass-card flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">+1 (800) 555-0199</p>
                  </div>
                </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
           >
             <form className="glass-card shadow-2xl p-8 md:p-12 rounded-[2.5rem] space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Book an Intro Call</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">First Name</label>
                     <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 dark:text-white transition-all shadow-sm" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Last Name</label>
                     <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 dark:text-white transition-all shadow-sm" placeholder="Doe" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Work Email</label>
                   <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 dark:text-white transition-all shadow-sm" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Company Name</label>
                   <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 dark:text-white transition-all shadow-sm" placeholder="Acme Inc." />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">How can we help?</label>
                   <textarea rows="4" className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 dark:text-white transition-all resize-none shadow-sm" placeholder="Tell us about your business goals..."></textarea>
                </div>

                <button type="button" className="w-full px-8 py-5 rounded-xl bg-slate-900 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex items-center justify-center mt-4">
                   Submit Request
                   <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </button>
             </form>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
