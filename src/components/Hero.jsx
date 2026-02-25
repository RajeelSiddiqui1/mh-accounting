import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elegant details */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint-200/40 dark:bg-emerald-900/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-300/30 dark:bg-slate-800/40 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 dark:bg-emerald-900/30 backdrop-blur-md border border-emerald-100 dark:border-emerald-800">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-emerald-800 dark:text-mint-300 uppercase tracking-wider">
              Canada-Registered Virtual Firm
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Cloud Accounting <br />
            <span className="text-gradient">
              Engineered
            </span> <br />
            for Canadian Growth.
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            Seamlessly integrating tech and expertise to help businesses scale. We are a passionate team of accounting experts who act as your financial extension.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center group">
              Book a Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Floating 3D Dashboard Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden md:block"
        >
          {/* Main Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm glassmorphism p-6 rounded-3xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-800 dark:text-white">Financial Health Dashboard</h3>
              <BarChart3 className="text-emerald-600 dark:text-mint-400" />
            </div>
            <div className="space-y-4">
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800/50 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5, delay: 1 }} className="h-full bg-emerald-500 rounded-full" />
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800/50 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ duration: 1.5, delay: 1.2 }} className="h-full bg-mint-400 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                   <p className="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
                   <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$452.8k</p>
                 </div>
                 <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/30">
                   <p className="text-sm text-emerald-700 dark:text-mint-400">Net Profit</p>
                   <p className="text-2xl font-bold text-emerald-900 dark:text-mint-100 mt-1">+24.5%</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[10%] left-[5%] glassmorphism p-4 rounded-2xl flex items-center shadow-2xl"
          >
            <div className="p-3 rounded-full bg-mint-100 dark:bg-emerald-800/50 text-emerald-700 dark:text-mint-300 mr-4">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Growth Rate</p>
              <p className="text-lg font-bold text-emerald-600 dark:text-mint-400">+12.4%</p>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[10%] right-[0%] glassmorphism p-4 rounded-2xl flex items-center shadow-2xl"
          >
            <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mr-4">
              <PieChart size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Cash Flow</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">Optimized</p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
