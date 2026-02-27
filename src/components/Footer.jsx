import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { label: "Homepage", path: "/" },
    { label: "About Us", path: "/#about" }, // This will work with the home page scroll if handled, or just use / for now
    { label: "Services", path: "/services" },
    { label: "FAQs", path: "/faqs" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Tax Planning", path: "/services/tax-planning" },
    { label: "Audit Services", path: "/services/audit-services" },
    { label: "Bookkeeping", path: "/services/bookkeeping" },
    { label: "Payroll", path: "/services/payroll-processing" },
    { label: "Financial Consulting", path: "/services/financial-consulting" },
  ];

  return (
    <footer className="bg-footer pt-20 pb-8 px-4 md:px-8 lg:px-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src="/footer.png" alt="MHE Accounting Footer Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-footer-foreground text-sm leading-relaxed">MHE Accounting is a trusted Canadian accounting firm providing comprehensive financial services to individuals and businesses.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-footer-heading text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-footer-foreground text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-footer-heading text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-footer-foreground text-sm hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-footer-heading text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary mt-1" /><span className="text-footer-foreground text-sm">+1 (604) 555-0198</span></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary mt-1" /><span className="text-footer-foreground text-sm">info@mheaccounting.ca</span></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-1" /><span className="text-footer-foreground text-sm">123 Main Street, Vancouver, BC V6B 1A1</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-footer-foreground/20 pt-6 text-center">
          <p className="text-footer-foreground text-sm">© 2025 MHE Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
