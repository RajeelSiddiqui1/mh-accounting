import { CheckCircle2, ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { PageHeader } from "./ServicesPage";
import { posts } from "../constants";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <main>
      <PageHeader title="Blog Detail" breadcrumb="Home / News / Blog Detail" />

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content (Left) */}
          <div className="lg:col-span-2">
            {/* Back link */}
            <Link to="/news" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:gap-3 transition-all" data-aos="fade-right">
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground" data-aos="fade-up">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> July 09, 2025</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" /> MHE Editorial Team</span>
              <span className="flex items-center gap-1.5"><Tag className="w-4 h-4 text-primary" /> Finance, AI, Technology</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6" data-aos="fade-up">
              How AI is Revolutionizing Financial Reporting and Analysis
            </h1>

            <img
              src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1200&auto=format&fit=crop"
              alt="AI in Accounting"
              className="w-full rounded-2xl mb-8 object-cover h-[400px]"
              data-aos="zoom-in"
            />

            <p className="text-muted-foreground leading-relaxed mb-6" data-aos="fade-up">
              Artificial intelligence is no longer a distant concept — it is rapidly transforming the field of accounting and financial reporting. From automated bookkeeping to predictive analytics, AI tools are enabling accountants and financial advisors to do more in less time, with greater accuracy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6" data-aos="fade-up">
              At MHE Accounting, we stay ahead of these trends to ensure our clients receive the most accurate, efficient, and insightful financial services possible. Here's a breakdown of how AI is reshaping our industry.
            </p>

            {/* Highlighted box */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-8" data-aos="fade-right">
              <p className="text-foreground font-medium leading-relaxed italic">
                "The accountants of the future will not just be number-crunchers — they will be strategic advisors enhanced by AI-driven insights and real-time data."
              </p>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground mb-4" data-aos="fade-up">Key Ways AI is Impacting Accounting</h3>
            <ul className="space-y-4 mb-8" data-aos="fade-up">
              {[
                "Automated data entry and transaction categorization using machine learning algorithms.",
                "Real-time financial dashboards powered by AI for instant business insights.",
                "Predictive cash flow analysis to help businesses plan ahead confidently.",
                "Fraud detection through pattern recognition and anomaly alerts.",
                "Intelligent tax planning recommendations based on financial data trends.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Financial Analysis"
              className="w-full rounded-2xl mb-8 object-cover h-[300px]"
              data-aos="zoom-in"
            />

            <h3 className="text-xl font-heading font-bold text-foreground mb-4" data-aos="fade-up">What This Means for Your Business</h3>
            <p className="text-muted-foreground leading-relaxed mb-6" data-aos="fade-up">
              For small and medium-sized businesses across Canada, this means you can now access enterprise-level financial intelligence at a fraction of the traditional cost. MHE Accounting integrates these tools directly into our service offerings, ensuring you benefit from faster reporting cycles, fewer errors, and more actionable insights.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10" data-aos="fade-up">
              Our advisors combine their deep domain expertise with the power of AI to give you a competitive edge — whether you're preparing for tax season, planning an expansion, or simply trying to understand your cash flow better.
            </p>

            {/* Share Bar */}
            <div className="flex items-center gap-4 border-t border-border pt-6" data-aos="fade-up">
              <span className="font-heading font-semibold text-foreground">Share On:</span>
              <div className="flex gap-2">
                {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all text-xs font-bold uppercase">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription Banner */}
            <div className="mt-14 relative rounded-2xl overflow-hidden" data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
                alt="Subscribe"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-section-dark/90 z-10" />
              <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-section-dark-foreground mb-4">Subscribe Newsletter</h3>
                  <p className="text-section-dark-foreground/80 text-sm leading-relaxed">Get weekly insights on Canadian tax updates, accounting tips, and financial news delivered straight to your inbox.</p>
                </div>
                <div className="w-full md:w-auto">
                  <form className="flex w-full md:w-[350px]">
                    <input type="email" placeholder="Email" className="bg-transparent border border-section-dark-foreground/20 text-section-dark-foreground px-4 py-3 rounded-l-lg focus:outline-none focus:border-primary w-full" />
                    <button type="button" className="bg-primary text-primary-foreground px-6 py-3 rounded-r-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            {/* Search */}
            <div data-aos="fade-left">
              <h5 className="font-heading font-semibold text-foreground mb-4">Search Articles</h5>
              <div className="flex">
                <input type="text" placeholder="Search..." className="bg-background border border-border rounded-l-xl px-4 py-3 focus:outline-none focus:border-primary text-foreground text-sm w-full" />
                <button className="bg-primary text-primary-foreground px-4 rounded-r-xl font-semibold text-sm hover:opacity-90 transition-opacity">Go</button>
              </div>
            </div>

            {/* Latest Articles Nav */}
            <div data-aos="fade-left">
              <h5 className="font-heading font-semibold text-foreground mb-6">Latest Articles</h5>
              <div className="space-y-4">
                {[...posts, posts[0]].map((p, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-0 right-0 bg-primary px-1.5 py-0.5 rounded-tl-lg text-primary-foreground font-bold text-[10px] leading-tight text-center">
                        <span className="block">09</span>
                        <span className="block scale-75">July</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h6 className="font-semibold text-sm text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">{p.title}</h6>
                      <Link to="/news/single" className="text-primary text-xs font-medium mt-2 flex items-center gap-1 hover:gap-2 transition-all">Read More &gt;</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div data-aos="fade-left">
              <h5 className="font-heading font-semibold text-foreground mb-4">Categories</h5>
              <ul className="space-y-2">
                {[["Tax Planning", 12], ["Bookkeeping", 8], ["Audit Services", 5], ["Payroll", 7], ["Financial Tips", 15]].map(([cat, count]) => (
                  <li key={cat}>
                    <Link to="/news" className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/40">
                      <span>{cat}</span>
                      <span className="bg-secondary text-muted-foreground px-2 py-0.5 rounded text-xs">{count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="relative rounded-2xl overflow-hidden group" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                alt="CTA background"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-hero/80 flex flex-col items-center justify-center p-8 text-center">
                <h4 className="text-xl font-heading font-bold text-hero-foreground mb-3">Get a Free Financial Assessment</h4>
                <p className="text-hero-muted text-sm mb-6">Speak with a certified Canadian accountant today.</p>
                <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleBlogPage;
