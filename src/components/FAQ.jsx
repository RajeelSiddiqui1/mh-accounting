import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../constants";

export const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground mb-8">Find answers to common questions about our accounting services.</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors">
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${faqOpen === i ? "rotate-180" : ""}`} />
                  </button>
                  {faqOpen === i && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" alt="FAQ" className="rounded-2xl w-full max-w-md object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
