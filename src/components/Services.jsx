import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'Online Bookkeeping',
    description: 'Make smarter and quicker decisions with effortless bookkeeping services. Effortless and accurate.',
    icon: Calculator,
    delay: 0.1
  },
  {
    title: 'Corporate Tax & Compliance',
    description: 'Year-end support, compliance and strategic tax planning tailored for Canadian businesses.',
    icon: FileText,
    delay: 0.2
  },
  {
    title: 'CFO Advisory',
    description: 'Virtual controllership for scaling businesses. Level up your financial statements and month-end closings.',
    icon: BarChart,
    delay: 0.3
  },
  {
    title: 'Tech Stack Design',
    description: 'Let us design financial workflows that scale as you grow. Implementing Xero/QBO and automated workflows.',
    icon: MonitorSmartphone,
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-emerald-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Capabilities that scale with your ambitions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            We intimately understand the challenges and needs of growing businesses to streamline their financial operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glassmorphism p-8 rounded-3xl glow-border group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-mint-100 dark:bg-emerald-800/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-mint-400 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
