import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center mb-6">
               MHE<span className="font-light text-slate-600">.</span>Accounting
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
              Tech-driven, human-led. We are redesigning the financial workflows for scaling Canadian businesses through cloud accounting.
            </p>
            <div className="flex space-x-4">
               {/* Placeholders for social icons */}
               <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition">Li</a>
               <a href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition">Tw</a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Our Approach</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Leadership Team</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Blog & Insights</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/online-bookkeeping" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Online Bookkeeping</Link></li>
              <li><Link to="/services/accounting-and-tax" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Accounting & Tax</Link></li>
              <li><Link to="/services/controllership" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Controllership</Link></li>
              <li><Link to="/services/technology-system-design" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Tech Stack Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">All Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Join 1000+ founders who get our insights straight to their inbox.</p>
            <form className="flex">
               <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-l-xl w-full focus:outline-none focus:border-slate-600 text-sm" />
               <button type="button" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-r-xl text-sm font-medium transition">Join</button>
            </form>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} MHE Accounting. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
             <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
