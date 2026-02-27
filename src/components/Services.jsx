import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { services } from "../constants";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Support Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">The Best Option For Your Finances</h2>
          <p className="mt-4 text-muted-foreground">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-border hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground">{s.title}</h4>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              {/* Quick Benefits */}
              <ul className="mt-4 space-y-1.5">
                {s.benefits && s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                <Link to={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> 24h Support
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
