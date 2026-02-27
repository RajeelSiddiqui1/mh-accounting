import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "./ServicesPage";
import { faqs } from "../constants";

const FaqPage = () => {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  // Faking a longer list of FAQs by extending the array.
  const extendedFaqs = [...faqs, ...faqs];
  const mid = Math.ceil(extendedFaqs.length / 2);
  const leftFaqs = extendedFaqs.slice(0, mid);
  const rightFaqs = extendedFaqs.slice(mid);

  return (
    <main>
      <PageHeader title="FAQs" breadcrumb="Home / FAQs" />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-4">
              {leftFaqs.map((faq, i) => (
                <div key={i} data-aos="fade-right" data-aos-delay={i * 100} className={`border rounded-xl transition-all overflow-hidden ${openLeft === i ? 'border-primary bg-background shadow-md' : 'border-border/60 bg-background'}`}>
                  <button 
                    onClick={() => setOpenLeft(openLeft === i ? null : i)} 
                    className="w-full flex items-center justify-between p-5 text-left transition-colors bg-transparent"
                  >
                    <span className={`font-semibold pr-4 text-sm ${openLeft === i ? 'text-primary' : 'text-primary/70'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openLeft === i ? "rotate-180 text-primary" : "text-primary/50"}`} />
                  </button>
                  {openLeft === i && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4 mt-2 mx-5">
                      {faq.a} Fusce mattis dui aliquam dui consectetur, et eleifend eros elit. Donec at accumsan ligula. Cras vulputate nunc vitae quam lorem ipsum dolor sit amet.
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightFaqs.map((faq, i) => (
                <div key={i} data-aos="fade-left" data-aos-delay={i * 100} className={`border rounded-xl transition-all overflow-hidden ${openRight === i ? 'border-primary bg-background shadow-md' : 'border-border/60 bg-background'}`}>
                  <button 
                    onClick={() => setOpenRight(openRight === i ? null : i)} 
                    className="w-full flex items-center justify-between p-5 text-left transition-colors bg-transparent"
                  >
                    <span className={`font-semibold pr-4 text-sm ${openRight === i ? 'text-primary' : 'text-primary/70'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openRight === i ? "rotate-180 text-primary" : "text-primary/50"}`} />
                  </button>
                  {openRight === i && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4 mt-2 mx-5">
                      {faq.a} Fusce mattis dui aliquam dui consectetur, et eleifend eros elit. Donec at accumsan ligula. Cras vulputate nunc vitae quam lorem ipsum dolor sit amet.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
