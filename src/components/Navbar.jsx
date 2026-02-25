import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceLinks = [
    { name: 'Online Bookkeeping', href: '/services/online-bookkeeping' },
    { name: 'Accounting & Tax', href: '/services/accounting-and-tax' },
    { name: 'Technology System Design', href: '/services/technology-system-design' },
    { name: 'Controllership', href: '/services/controllership' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-2xl">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center space-x-1 group">
          <span>MHE<span className="font-light text-slate-500">.</span>Accounting</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 group-hover:bg-emerald-400 transition-colors"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Home</Link>
          
          <div className="relative group cursor-pointer" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <Link to="/services" className={`font-medium flex items-center transition-colors ${location.pathname.startsWith('/services') ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
              Services <ChevronDown className="ml-1" size={16} />
            </Link>
            <AnimatePresence>
              {servicesDropdown && (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass-card rounded-2xl shadow-xl overflow-hidden py-2"
                >
                  {serviceLinks.map(link => (
                    <Link key={link.name} to={link.href} className="block px-6 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50 transition-colors">
                      {link.name}
                    </Link>
                  ))}
                  <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                     <Link to="/services" className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
                       View All Services <span className="ml-2">→</span>
                     </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>About</Link>
          <Link to="/team" className={`font-medium transition-colors ${location.pathname === '/team' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Team</Link>
          <Link to="/blog" className={`font-medium transition-colors ${location.pathname === '/blog' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Blog</Link>
        </div>

        {/* CTA & Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-sm hover:shadow"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book an Intro
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button onClick={toggleTheme} className="p-2 text-slate-700 dark:text-slate-200">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 dark:text-slate-200 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200">Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200">Services</Link>
              <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3 my-2">
                 {serviceLinks.map(link => (
                    <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="block text-slate-600 dark:text-slate-400">{link.name}</Link>
                 ))}
              </div>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200">About</Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200">Team</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200">Blog</Link>
              
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 text-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium dark:bg-slate-100 dark:text-slate-900"
              >
                Book an Intro
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
