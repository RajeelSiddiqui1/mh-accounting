import { PageHeader } from "./ServicesPage";
import { Team } from "../components/Team";
import { Services } from "../components/Services";

const TeamPage = () => {
  return (
    <main>
      <PageHeader title="Our Team" breadcrumb="Home / Our Team" />
      
      {/* Team Grid Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
           <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Meet Our Accountants Experts</h2>
            <p className="mt-4 text-muted-foreground">We specialize in providing comprehensive financial services tailored to meet the unique needs of our clients.</p>
          </div>
          <Team />
        </div>
      </section>

      {/* Brands/Logos Section */}
      <section className="bg-secondary/30 py-12 border-y border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">PEDULI</div>
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">potensial.</div>
             <div className="text-xl font-bold text-foreground/50 italic tracking-tighter">Plentiful</div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-background py-10">
        <Services />
      </section>
    </main>
  );
};

export default TeamPage;
