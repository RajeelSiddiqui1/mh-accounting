import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Mitchell, CPA',
    role: 'Managing Partner',
    bio: '15+ years of experience in corporate tax and strategic structuring for technology scaling.',
    delay: 0.1,
  },
  {
    name: 'David Chen, CPA',
    role: 'Virtual CFO',
    bio: 'Former VP Finance at high-growth startups. Specializes in financial workflows and fundraising.',
    delay: 0.2,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Tech Stack Design',
    bio: 'Expert in QBO/Xero integrations, automating tedious financial processes to build efficient pipelines.',
    delay: 0.3,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white dark:bg-emerald-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-mint-400">Financial Navigators</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Passionate accounting experts, CPAs, and technology enthusiasts working to reshape your financial operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: member.delay, duration: 0.5 }}
              className="glassmorphism rounded-3xl overflow-hidden group relative transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 glow-border"
            >
              <div className="h-64 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-70"></div>
                {/* Fallback avatar placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-mint-200 to-emerald-700 dark:from-emerald-800 dark:to-slate-900 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="absolute bottom-4 left-6 z-20">
                   <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                   <p className="text-mint-300 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Hover to Reveal Bio */}
              <div className="p-6 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden bg-white/5 dark:bg-slate-900/50">
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                   {member.bio}
                 </p>
                 <div className="flex items-center space-x-3">
                   <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-mint-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition">
                     <Linkedin size={20} />
                   </a>
                   <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-mint-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition">
                     <Mail size={20} />
                   </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
