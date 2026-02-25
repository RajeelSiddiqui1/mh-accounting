import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Sarah Mitchell, CPA', role: 'Managing Partner', bio: '15+ years of experience in corporate tax and strategic structuring.', img: 'bg-emerald-800' },
  { name: 'David Chen, CPA', role: 'Virtual CFO', bio: 'Former VP Finance at high-growth startups.', img: 'bg-slate-700' },
  { name: 'Elena Rodriguez', role: 'Tech Stack Design', bio: 'Expert in QBO/Xero integrations and API automation.', img: 'bg-teal-800' },
  { name: 'Michael Obrien', role: 'Senior Bookkeeper', bio: 'Ensuring your books are closed accurately every month.', img: 'bg-slate-800' },
  { name: 'Priya Sharma', role: 'Payroll Specialist', bio: 'Dedicated to streamlined employee compensation and compliance.', img: 'bg-emerald-900' },
  { name: 'Alex Wong', role: 'Tax Associate', bio: 'Navigating complex Canadian tax structures for fast-growing companies', img: 'bg-teal-900' },
];

const Team = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Meet Your <span className="text-emerald-600 dark:text-emerald-400">Financial</span> Navigators
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Passionate accounting experts, CPAs, and technology enthusiasts working to reshape your financial operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card rounded-[2rem] overflow-hidden group relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 glow-border"
            >
              <div className="h-72 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 ${member.img} opacity-30 group-hover:scale-110 transition-transform duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 opacity-80"></div>
                
                <div className="absolute bottom-6 left-8 z-20">
                   <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{member.name}</h3>
                   <p className="text-slate-300 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Hover to Reveal Bio */}
              <div className="p-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:block hidden md:block md:p-6 transition-all duration-500 overflow-hidden bg-white/5 dark:bg-slate-900/50">
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                   {member.bio}
                 </p>
                 <div className="flex items-center space-x-4">
                   <a href="#" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-slate-700 dark:hover:text-white transition">
                     <Linkedin size={18} />
                   </a>
                   <a href="#" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-slate-700 dark:hover:text-white transition">
                     <Mail size={18} />
                   </a>
                 </div>
              </div>

               {/* Mobile always visible bio */}
              <div className="p-6 md:hidden">
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">
                   {member.bio}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
