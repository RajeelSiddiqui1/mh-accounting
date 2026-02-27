import { stats } from "../constants";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="MHE Accounting office" className="rounded-2xl w-full object-cover shadow-lg" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg hidden md:block">
              <span className="text-3xl font-heading font-bold">15+</span>
              <span className="block text-sm mt-1">Years of Excellence</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">We Serve Your Financial Needs</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">At MHE Accounting, we specialize in providing comprehensive financial services tailored to meet the unique needs of our clients across Canada. With a commitment to integrity and innovation, we help businesses and individuals achieve their financial goals.</p>
            <a href="#services" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Learn More</a>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="text-center">
                  <span className="text-3xl font-heading font-bold text-primary">{s.value}</span>
                  <span className="block text-sm text-muted-foreground mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
