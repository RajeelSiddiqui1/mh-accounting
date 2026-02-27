import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "./ServicesPage";

const ContactPage = () => {
  return (
    <main>
      <PageHeader title="Contact Us" breadcrumb="Home / Contact Us" />

      <section className="section-padding bg-background pb-10">
        <div className="container-custom">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-32 relative z-20">
            <div data-aos="fade-up" data-aos-delay="0" className="bg-card p-10 py-12 rounded-2xl shadow-xl flex flex-col items-start border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl text-primary mb-4">Give us a call</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet et consectetur ultrices elitsedo adipiscing sem.</p>
              <p className="font-semibold text-foreground">+1 (604) 555-0198</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="bg-card p-10 py-12 rounded-2xl shadow-xl flex flex-col items-start border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl text-primary mb-4">Send us an email</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet et consectetur ultrices elitsedo adipiscing sem.</p>
              <p className="font-semibold text-foreground">info@mheaccounting.ca</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="bg-card p-10 py-12 rounded-2xl shadow-xl flex flex-col items-start border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-xl text-primary mb-4">Visit Our Office</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet et consectetur ultrices elitsedo adipiscing sem.</p>
              <p className="font-semibold text-foreground">123 Main Street, Vancouver, BC V6B 1A1</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left */}
            <div className="lg:col-span-1 border-r border-border/30 pr-8" data-aos="fade-right">
              <span className="text-primary font-medium text-sm lg:text-xs xl:text-sm uppercase tracking-wider">Contact Us</span>
              <h2 className="mt-3 text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Ipsum est urna tellus varius risus a vitae tempor rhoncus vitae neque massa eu mi velit elementum enim ad minim veniam quis nostrud exerci tation.
              </p>
              <h5 className="font-heading font-semibold text-foreground mb-4">Follow Us On:</h5>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary/70 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all text-xs font-bold uppercase">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 bg-card shadow-lg p-8 md:p-10 rounded-2xl border border-border/50" data-aos="fade-left">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <input type="text" placeholder="Name" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm" />
                  <input type="tel" placeholder="Phone" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm" />
                </div>
                <div>
                  <textarea rows="6" placeholder="Message" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground text-sm resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <div className="h-[400px] w-full bg-secondary flex items-center justify-center relative border-t border-border">
         <div className="absolute inset-0 bg-hero/10" />
         <span className="text-muted-foreground font-semibold uppercase tracking-wider relative z-10">Map Integration Goes Here</span>
      </div>
    </main>
  );
};

export default ContactPage;
