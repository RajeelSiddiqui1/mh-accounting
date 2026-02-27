import { Check } from "lucide-react";
import { PageHeader } from "./ServicesPage";
import { plans, stats } from "../constants";
import { Testimonials } from "../components/Testimonials";
import { Services } from "../components/Services";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <main>
      <PageHeader title="Pricing Plan" breadcrumb="Home / Pricing Plan" />

      {/* Pricing Section */}
      <section className="section-padding bg-background pb-10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing Plan</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">The Best Price For You</h2>
            <p className="mt-4 text-muted-foreground text-sm">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className={`rounded-2xl p-10 border transition-all h-full flex flex-col ${plan.name === 'Enterprise' ? "bg-background border-primary shadow-xl relative -mt-4 mb-4 scale-105" : "bg-card text-foreground border-border hover:shadow-lg"}`}>
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-base font-semibold ${plan.name === 'Enterprise' ? "text-primary" : "text-primary/70"}`}>{plan.name}</span>
                  <div className="w-10 h-10 border border-primary/30 rounded flex justify-center items-center text-primary"><span className="text-sm font-bold">$</span></div>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-heading font-bold text-foreground">{plan.price}</span>
                  <span className={`text-sm mb-1.5 font-medium text-muted-foreground`}>/Month</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">Duis aute irure dolor in reprehenderit in volu tate cillum dolore pariatur.</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center mt-0.5"><Check className="w-3 h-3 text-primary" /></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center py-4 rounded-lg font-semibold transition-all bg-primary hover:bg-primary/90 text-primary-foreground w-full hover:shadow-lg hover:shadow-primary/30">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner like CTA */}
      <section className="relative py-24 my-10">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero/80" />
        </div>
        <div className="relative z-10 container-custom text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-foreground max-w-3xl mx-auto mb-6 leading-tight">Achieve Financial Freedom Book a Free Assessment Now!</h2>
          <p className="text-hero-muted mb-10 max-w-xl mx-auto text-sm">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">Contact Us</Link>
        </div>
      </section>

      {/* Services Sub View */}
      <Services />

      {/* Stats */}
      <section className="section-padding bg-background border-t border-border/20 pt-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="text-center">
                <span className="text-5xl md:text-7xl font-heading font-medium text-primary block mb-2">{s.value}</span>
                <span className="block mt-4 text-muted-foreground text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="mt-10">
        <Testimonials />
      </div>

    </main>
  );
};

export default PricingPage;
