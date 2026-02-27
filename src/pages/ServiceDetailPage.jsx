import { ChevronRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "./ServicesPage";
import { Link } from "react-router-dom";

const serviceCategories = [
  "Tax planning",
  "Audit services",
  "Bookkeeping",
  "Payroll processing",
  "Financial Statement"
];

const ServiceDetailPage = () => {
  return (
    <main>
      <PageHeader title="Service Detail" breadcrumb="Home / Service Detail" />

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" 
              alt="Tax planning" 
              className="w-full rounded-2xl mb-8 object-cover h-[400px]"
            />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Tax planning</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eleifend mi in nulla posuere sollicitudin at quam. Sagittis orci a scelerisque purus semper eget duis at tellus. Interdum varius sit amet mattis vulputate enim nulla. Dignissim sodales ut eu sem integer vitae justo eget magna. Quis hendrerit dolor magna eget est lorem. Nunc sed blandit libero volutpat sed cras. Vivamus arcu felis bibendum ut tristique et egestas. Fringilla phasellus faucibus scelerisque eleifend donec. Volutpat odio facilisis mauris sit amet massa vitae tortor. Massa id neque aliquam vestibulum morbi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" 
                alt="Accountants calculating" 
                className="w-full h-48 rounded-xl object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=600&auto=format&fit=crop" 
                alt="Business meeting" 
                className="w-full h-48 rounded-xl object-cover"
              />
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.",
                "Netus et malesuada fames ac turpis egestas sed tempus.",
                "Amet facilisis magna ctiam tempor orci montes nascetur ridiculus mus mattis vitae ultricies leo integer.",
                "Aliquam faucibus purus in massa."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nulla facilisi morbi tempus iaculis urna. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
            </p>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            {/* Service Nav */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <ul className="space-y-4">
                {serviceCategories.map((cat, i) => (
                  <li key={i} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                    <Link to="#" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
                alt="CTA background" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-hero/80 flex flex-col items-center justify-center p-8 text-center">
                <h4 className="text-2xl font-heading font-bold text-hero-foreground mb-4">Achieve Financial Freedom Book a Free Assessment Now!</h4>
                <p className="text-hero-muted text-sm mb-6">We specialize in providing comprehensive financial services.</p>
                <Link to="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Social box */}
            <div>
              <h5 className="font-heading font-semibold text-foreground mb-4">Follow Us On:</h5>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all text-xs font-bold uppercase">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
