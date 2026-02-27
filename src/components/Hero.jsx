import { Play } from "lucide-react";
import { heroFeatures } from "../constants";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2000&auto=format&fit=crop" alt="MHE Accounting professionals" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero/80" />
      </div>
      <div className="relative z-10 container-custom w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-2xl" data-aos="fade-right">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Trusted Accountants</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">Reliable Solutions for Your Financial Needs</h1>
          <p className="mt-6 text-hero-muted text-lg max-w-xl">MHE Accounting provides clear and organized financial services, enabling individuals and businesses across Canada to understand their financial position.</p>
          {/* <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">Learn More</a>
            <button className="flex items-center gap-3 text-hero-foreground group">
              <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-primary-foreground fill-current" />
              </span>
              <span className="font-medium">Watch Video</span>
            </button>
          </div> */}
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroFeatures.map((f, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-background/10 backdrop-blur-sm border border-hero-foreground/10 rounded-xl p-6 hover:bg-background/20 transition-colors">
              <f.icon className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-heading font-semibold text-hero-foreground text-lg">{f.title}</h4>
              <p className="mt-2 text-hero-muted text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-10">
        {["facebook", "twitter", "instagram", "youtube"].map((s) => (
          <a key={s} href="#" className="w-10 h-10 rounded-full bg-hero-foreground/10 border border-hero-foreground/20 flex items-center justify-center text-hero-foreground hover:bg-primary hover:border-primary transition-all text-xs font-bold uppercase">{s[0].toUpperCase()}</a>
        ))}
      </div>
    </section>
  );
};
