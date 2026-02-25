import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart, MonitorSmartphone, DollarSign, PieChart, Users, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'online-bookkeeping', title: 'Online Bookkeeping', desc: 'Smarter and quicker decisions with effortless bookkeeping. Clean books, always.', icon: Calculator },
  { id: 'accounting-and-tax', title: 'Accounting & Tax', desc: 'Year-end support, compliance and strategic tax planning tailored for growth.', icon: FileText },
  { id: 'technology-system-design', title: 'Technology System Design', desc: 'Design financial workflows that scale. Implementation of Xero, QBO and more.', icon: MonitorSmartphone },
  { id: 'controllership', title: 'Controllership', desc: 'Virtual controllership for scaling businesses. Level up your financial closings.', icon: BarChart },
  { id: 'payroll', title: 'Payroll Services', desc: 'Get your team paid on time, every time seamlessly with automation.', icon: Users },
  { id: 'invoicing', title: 'Invoicing & Receivables', desc: 'Reduce admin work and improve cash flow with streamlined AR processes.', icon: DollarSign },
  { id: 'ap', title: 'AP & Payments', desc: 'Stay organized and pay vendors on time without the hassle of checks.', icon: Receipt },
  { id: 'advisory', title: 'Strategic Advisory', desc: 'Data-driven forecasting and budgeting to navigate funding and expansion.', icon: PieChart },
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Capabilities that scale with your <span className="text-emerald-600 dark:text-emerald-400">ambitions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            We intimate understand the challenges and needs of growing businesses. Explore how our cloud-first approach streamlines your financial operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div
               key={svc.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="h-full"
            >
               <Link 
                 to={`/services/${svc.id}`}
                 className="block h-full p-8 glass-card rounded-[2rem] group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:scale-150 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-700">
                    <svc.icon size={120} className="text-emerald-600" />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                       <svc.icon size={28} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{svc.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6">{svc.desc}</p>
                    <div className="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-2 transition-transform">
                       Learn more <span className="ml-1">→</span>
                    </div>
                 </div>
               </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
