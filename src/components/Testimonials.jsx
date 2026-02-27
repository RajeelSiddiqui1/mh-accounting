import { Quote } from "lucide-react";
import { testimonials } from "../constants";

export const Testimonials = () => {
  return (
    <section className="section-padding bg-section-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-section-dark-foreground">Client Testimonials Highlighting MHE's Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-2xl p-8">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-section-dark-foreground/80 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-heading font-semibold text-section-dark-foreground">{t.name}</h5>
                  <span className="text-sm text-section-dark-foreground/60">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
