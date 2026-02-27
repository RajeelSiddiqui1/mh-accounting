import { PageHeader } from "./ServicesPage";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { CTA } from "../components/CTA";

const AboutPage = () => {
  return (
    <main>
      <PageHeader title="About Us" breadcrumb="Home / About Us" />
      
      {/* About Section */}
      <About />

      {/* Brands/Logos Section */}
      <section className="bg-secondary/30 py-12 border-y border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">PROTECT.ME</div>
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">PEDULI</div>
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">potensial.</div>
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">Plentiful</div>
          </div>
        </div>
      </section>

      {/* Services Sub-section */}
      <section className="bg-background py-10">
        <Services />
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Team Section */}
      <Team />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />
    </main>
  );
};

export default AboutPage;
