import { useState } from "react";
import { Check, X, Phone, Mail, Sparkles } from "lucide-react";
import { plans } from "../constants";

const QuoteModal = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card rounded-2xl shadow-2xl w-full max-w-lg border border-border overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
      >
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider opacity-80">Selected Plan</span>
          </div>
          <h3 className="text-2xl font-heading font-bold">{plan.name} Plan</h3>
          <div className="flex items-end gap-1 mt-2">
            <span className="text-4xl font-heading font-bold">{plan.price}</span>
            <span className="text-sm opacity-70 mb-1">/Month</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Features included */}
          <div className="mb-6">
            <h4 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">What's Included</h4>
            <ul className="grid grid-cols-1 gap-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider">Get Started — Fill Your Details</h4>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Any additional notes or questions?"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm resize-none"
            />
            <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
              Submit Request for {plan.name} Plan
            </button>
          </div>

          {/* Contact info */}
          <div className="mt-5 pt-5 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (604) 555-0198</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@mheaccounting.ca</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <section id="pricing" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing Plan</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">The Best Price For You</h2>
            <p className="mt-4 text-muted-foreground">Choose a plan that fits your business needs. All plans include expert Canadian accounting services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`rounded-2xl p-8 border transition-all duration-300 group relative overflow-hidden ${
                  plan.popular
                    ? "bg-section-dark text-section-dark-foreground border-primary shadow-2xl scale-105"
                    : "bg-card text-foreground border-border hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50"
                }`}
              >
                {/* Hover gradient overlay for non-popular plans */}
                {!plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                {plan.popular && (
                  <div className="mb-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                <span className={`text-sm font-medium relative z-10 ${plan.popular ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors duration-300"}`}>{plan.name}</span>
                <div className="mt-4 flex items-end gap-1 relative z-10">
                  <span className="text-4xl font-heading font-bold group-hover:scale-110 transition-transform duration-300">{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.popular ? "text-section-dark-foreground/60" : "text-muted-foreground"}`}>/Month</span>
                </div>
                <p className={`text-sm mt-3 leading-relaxed relative z-10 ${plan.popular ? "text-section-dark-foreground/70" : "text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"}`}>
                  Everything you need to manage your finances confidently with a dedicated expert team.
                </p>
                <ul className="mt-8 space-y-4 relative z-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm group/feature">
                      <Check className="w-4 h-4 flex-shrink-0 text-primary group-hover/feature:scale-125 transition-transform duration-300" />
                      <span className="group-hover/feature:translate-x-1 transition-transform duration-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="mt-8 w-full block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                </button>
                {/* Arrow indicator on hover */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-primary-foreground">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Extra info strip */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            {[
              { icon: "🔒", title: "No Hidden Fees", desc: "Transparent pricing with no surprise charges. What you see is what you pay." },
              { icon: "🔄", title: "Cancel Anytime", desc: "No long-term contracts. Upgrade, downgrade, or cancel your plan at any time." },
              { icon: "🇨🇦", title: "Canadian Experts", desc: "Our team is fully versed in CRA regulations and Canadian tax law." },
            ].map((item, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h5 className="font-heading font-semibold text-foreground">{item.title}</h5>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {selectedPlan && <QuoteModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
    </>
  );
};
