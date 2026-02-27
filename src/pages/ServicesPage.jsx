import { ArrowRight } from "lucide-react";
import { services, stats, plans } from "../constants";
import { CTA } from "../components/CTA";
import { Pricing } from "../components/Pricing";

export const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="relative py-24 md:py-32 flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2000&auto=format&fit=crop" 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-hero/70" />
      </div>
      <div className="relative z-10" data-aos="zoom-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground">{title}</h1>
        <p className="mt-4 text-primary font-medium">{breadcrumb}</p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;

  return (
    <main>
      <PageHeader title="Services" breadcrumb="Home • Services" />

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Support Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">The Best Option For Your Finances</h2>
            <p className="mt-4 text-muted-foreground">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading font-semibold text-xl text-foreground mb-3">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href={`/services/${s.title.toLowerCase().replace(" ", "-")}`} className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></a>
              </div>
            ))}
            {/* Adding extra dummy services to match the 3-column 2-row design in the reference image if needed */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                 <Icon0 className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-foreground mb-3">Payroll processing</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">Our payroll processing services take the hassle out of managing your payroll, allowing you to focus on running your business.</p>
              <a href="/services/payroll-processing" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all group border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                 <Icon1 className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-foreground mb-3">Financial Statement</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">Our payroll processing services take the hassle out of managing your payroll, allowing you to focus on running your business.</p>
              <a href="/services/financial-statement" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary">{s.value}</span>
                <span className="block mt-4 text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <CTA />
    </main>
  );
};

export default ServicesPage;
