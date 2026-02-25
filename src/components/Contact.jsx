import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Connect your business to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-mint-400">Success.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Book a free 15-minute intro call to see how MHE Accounting can streamline your finances and fuel your growth.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800/50">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-2xl glassmorphism text-emerald-600 dark:text-mint-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Headquarters (Virtual)</h4>
                  <p className="text-slate-600 dark:text-slate-400">Toronto, Ontario<br/>Canada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl glassmorphism text-emerald-600 dark:text-mint-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email Us</h4>
                  <a href="mailto:admin@mheaccounting.ca" className="text-emerald-600 dark:text-mint-400 hover:underline">admin@mheaccounting.ca</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl glassmorphism text-emerald-600 dark:text-mint-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">+1 (800) 555-0199</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glassmorphism p-8 md:p-10 rounded-3xl space-y-6 glow-border">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Book an Intro Call</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                   <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all" placeholder="John" />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                   <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all" placeholder="Doe" />
                 </div>
              </div>

              <div className="space-y-2">
                 <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
                 <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                 <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
                 <input type="text" id="company" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all" placeholder="Acme Inc." />
              </div>

              <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">How can we help?</label>
                 <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all resize-none" placeholder="Tell us about your business..."></textarea>
              </div>

              <button type="button" className="w-full px-8 py-4 rounded-xl bg-emerald-900 text-white dark:bg-mint-300 dark:text-emerald-950 font-semibold hover:bg-emerald-800 dark:hover:bg-mint-200 transition-colors shadow-lg shadow-emerald-900/20 group flex items-center justify-center">
                 Submit Request
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
