import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false); // This one is redundant now but I'll keep it for safety if used elsewhere

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm border-b border-border/50">
      <div className="container-custom flex items-center justify-between py-3 px-4 md:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MHE Accounting Logo" className="h-9 w-auto object-contain" />
        </Link>
        <ul className="hidden lg:flex items-center gap-5 z-50">
          {/* About Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setDropdownOpen('about')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none py-2">
              About Us <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-200 transform origin-top ${dropdownOpen === 'about' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
            >
              <Link to="/about" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                About Us
              </Link>
              <Link to="/team" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                Our Team
              </Link>
            </div>
          </li>
          
          {/* Services Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setDropdownOpen('services')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none py-2">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-200 transform origin-top ${dropdownOpen === 'services' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
            >
              <Link to="/services" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                Services
              </Link>
              <Link to="/services/tax-planning" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                Service Detail
              </Link>
            </div>
          </li>

          <li>
            <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Pricing</Link>
          </li>
          <li>
            <Link to="/faqs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQs</Link>
          </li>
                
          {/* News Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setDropdownOpen('news')}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none py-2">
              News <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'news' ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-200 transform origin-top ${dropdownOpen === 'news' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
            >
              <Link to="/news" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                Latest Article
              </Link>
              <Link to="/news/single" onClick={() => setDropdownOpen(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors font-medium border-b border-border/50 last:border-0">
                Single Blog
              </Link>
            </div>
          </li>
          <li>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact Us</Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-3 border-l border-border pl-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="block text-xs text-muted-foreground font-medium">Call any time</span>
            <span className="block text-sm font-bold text-foreground">+1 (604) 555-0198</span>
          </div>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2 focus:outline-none">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-4 max-h-[80vh] overflow-y-auto shadow-inner">
          <ul className="space-y-1">
            <li>
              <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Homepage</Link>
            </li>
            <li>
              <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border/30 mb-1">About Menu</div>
              <ul className="pl-4 border-l-2 border-primary/20 ml-6 space-y-1 my-2">
                <li>
                  <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/team" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Our Team</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border/30 mb-1">Services Menu</div>
              <ul className="pl-4 border-l-2 border-primary/20 ml-6 space-y-1 my-2">
                <li>
                  <Link to="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">All Services</Link>
                </li>
                <li>
                  <Link to="/services/tax-planning" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Service Detail</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border/30 mb-1">Pages Menu</div>
              <ul className="pl-4 border-l-2 border-primary/20 ml-6 space-y-1 my-2">
                <li>
                  <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Pricing Plan</Link>
                </li>
                <li>
                  <Link to="/faqs" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">FAQs</Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="px-4 py-3 text-sm font-medium text-muted-foreground border-b border-border/30 mb-1">News Menu</div>
              <ul className="pl-4 border-l-2 border-primary/20 ml-6 space-y-1 my-2">
                <li>
                  <Link to="/news" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Latest Article</Link>
                </li>
                <li>
                  <Link to="/news/single" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Single Blog</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
