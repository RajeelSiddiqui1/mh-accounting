import { teamMembers } from "../constants";

export const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Meet Our Accounting Experts</h2>
          <p className="mt-4 text-muted-foreground">Our team of certified professionals is dedicated to helping you achieve financial success.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group text-center">
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img src={m.img} alt={m.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/30 transition-colors" />
              </div>
              <h5 className="font-heading font-semibold text-lg text-foreground">{m.name}</h5>
              <span className="text-muted-foreground text-sm">{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
