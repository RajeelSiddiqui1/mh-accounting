import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Calculator, FileText, BarChart, MonitorSmartphone, DollarSign, PieChart, Users, Receipt } from 'lucide-react';

const serviceData = {
  'online-bookkeeping': {
    title: 'Online Bookkeeping',
    icon: Calculator,
    heroDesc: 'Make smarter and quicker decisions with effortless bookkeeping. Clean books, always.',
    content: 'Our cloud-based bookkeeping service ensures your financial records are always accurate and up-to-date. We leverage automation to categorize transactions, reconcile accounts, and provide you with real-time visibility into your cash flow.',
    benefits: [
      'Automated bank feeds and categorization',
      'Monthly bank and credit card reconciliations',
      'Receipt and document management via cloud',
      'Real-time financial dashboards'
    ]
  },
  'accounting-and-tax': {
    title: 'Accounting & Tax',
    icon: FileText,
    heroDesc: 'Year-end support, compliance, and strategic tax planning tailored for scaling businesses.',
    content: 'Navigating corporate tax can be complex. We ensure you remain compliant while legally minimizing your tax burden. From year-end financial statements to complex restructuring, our CPAs handle it all.',
    benefits: [
      'Corporate Tax Return (T2) preparation',
      'Year-end Financial Statements (NTR)',
      'Tax minimization strategies & planning',
      'GST/HST filing and compliance'
    ]
  },
  'technology-system-design': {
    title: 'Technology System Design',
    icon: MonitorSmartphone,
    heroDesc: 'Let us design financial workflows that scale as you grow. Seamless app integrations.',
    content: 'Your financial tech stack is the foundation of your scalability. We assess your operations and implement customized ecosystems using tools like Xero, QuickBooks Online, and industry-specific apps to eliminate manual data entry.',
    benefits: [
      'Xero and QuickBooks Online migrations',
      'Custom app ecosystem implementation',
      'Workflow automation and optimization',
      'Team training and ongoing tech support'
    ]
  },
  'controllership': {
    title: 'Controllership Advisory',
    icon: BarChart,
    heroDesc: 'Virtual controllership for scaling businesses. Level up your financial statements.',
    content: 'As your business grows, you need more than just bookkeeping. Our virtual controllers provide advanced financial reporting, variance analysis, and internal controls to help you manage growth safely.',
    benefits: [
      'Advanced month-end closing procedures',
      'Custom management reporting packages',
      'Budget vs. actual variance analysis',
      'Implementation of financial controls'
    ]
  },
  'payroll': {
    title: 'Payroll Services',
    icon: Users,
    heroDesc: 'Get your team paid on time, every time seamlessly with automation.',
    content: 'Managing payroll goes beyond cutting checks. We handle everything from source deductions and remittances to T4 preparation, ensuring you comply with all federal and provincial regulations while keeping your team happy.',
    benefits: [
      'Automated direct deposit processing',
      'Source deduction calculation and remittance',
      'T4/T4A preparation and filing',
      'Integration with cloud HR systems'
    ]
  },
  'invoicing-and-receivables': {
    title: 'Invoicing & Receivables',
    icon: DollarSign,
    heroDesc: 'Reduce administrative work and improve cash flow with streamlined AR processes.',
    content: 'Late payments stunt growth. We implement automated invoicing and follow-up sequences to get you paid faster, improving your working capital and reducing the awkwardness of chasing clients.',
    benefits: [
      'Automated invoice generation and dispatch',
      'Payment gateway integrations (Stripe, etc.)',
      'Automated payment reminders',
      'Accounts Receivable aging analysis'
    ]
  },
  'ap-and-payments': {
    title: 'AP & Payments',
    icon: Receipt,
    heroDesc: 'Stay organized and pay vendors on time without the manual hassle.',
    content: 'Never miss a bill payment again. We digitize your accounts payable process, utilizing optical character recognition (OCR) to capture bills, queue them for your approval, and execute payments seamlessly.',
    benefits: [
      'Digital bill capture and OCR processing',
      'Multi-level payment approval workflows',
      'Electronic wire and EFT payments',
      'Vendor management and reconciliation'
    ]
  },
  'strategic-advisory': {
    title: 'Strategic Advisory & CFO',
    icon: PieChart,
    heroDesc: 'Data-driven forecasting and budgeting to navigate funding and expansion.',
    content: 'Need to raise capital or plan an exit? Our fractional CFOs provide the high-level financial strategy needed to map your future. We build financial models, pitch decks, and advise on major strategic decisions.',
    benefits: [
      '3-way financial modeling (Cash flow, IS, BS)',
      'Fundraising and M&A advisory',
      'Key Performance Indicator (KPI) dashboarding',
      'Board meeting preparation and reporting'
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/services" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Header & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
               <Icon size={40} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-emerald-700 dark:text-emerald-300 font-medium">
              {service.heroDesc}
            </p>

            <div className="prose prose-lg prose-slate dark:prose-invert">
              <p>{service.content}</p>
            </div>

            <div className="pt-6">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Capabilities</h3>
               <div className="grid gap-4">
                 {service.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                       <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                       <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                    </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* CTA Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
             <div className="sticky top-32 glass-card p-10 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700">
                   <Icon size={160} className="text-emerald-600" />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Streamline your {service.title.toLowerCase()} today.</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10">
                  Ready to evolve your financial operations? Book a free discovery call with our expert team to discuss how we can help.
                </p>

                <Link to="/contact" className="inline-flex w-full items-center justify-center px-8 py-5 rounded-xl bg-slate-900 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10">
                   Get Started
                   <ArrowRight className="ml-2" size={20} />
                </Link>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Need immediate assistance?</p>
                   <a href="tel:18005550199" className="text-emerald-600 dark:text-emerald-400 font-bold text-lg hover:underline mt-1 block">1 (800) 555-0199</a>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
