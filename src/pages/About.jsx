import { motion } from 'framer-motion';
import { Target, Users, Leaf, MonitorSmartphone, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-md mb-6"
          >
            The MHE Way
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6"
          >
            Accounting Evolved. <br />
            <span className="text-emerald-600 dark:text-emerald-400">Tech-Driven. Human-Led.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            We are one of the pioneers of what is now coined 'Cloud Accounting'. We intimtately understand how to bring financial clarity back into your hands.
          </motion.p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {[
             { title: "Modern & Paperless", desc: "We leverage the latest technology to ensure your accounting is seamless, automated, and secure.", icon: MonitorSmartphone },
             { title: "Human-Centered", desc: "Behind the technology is a team of expert CPAs who genuinely care about your business growth.", icon: Users },
             { title: "Results Driven", desc: "We aim for financial clarity and more time for you to focus on running your business.", icon: Target }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="glass-card p-8 rounded-3xl group relative overflow-hidden"
             >
               <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
               <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 transition-transform group-hover:scale-110">
                 <item.icon size={28} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Feature Highlights image and bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden glassmorphism flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-teal-400/10 mix-blend-overlay z-10"></div>
              <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <Leaf className="w-32 h-32 text-emerald-500/50 dark:text-emerald-500/30 animate-pulse-slow relative z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
               <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Built for scale, designed for simplicity</h3>
               {[
                 "Industry experts and designated CPAs handling your books",
                 "Cloud-based tech stack eliminating paperwork",
                 "Ongoing strategic advisory rather than just year-end reviews",
                 "Transparent flat-rate pricing with no hidden fees"
               ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                     <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={24} />
                     <p className="text-lg text-slate-700 dark:text-slate-300">{bullet}</p>
                  </div>
               ))}
               <div className="pt-8">
                 <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-xl">
                   Join 1000+ Growing Companies
                 </button>
               </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
