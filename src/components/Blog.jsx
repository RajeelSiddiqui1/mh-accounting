import { ArrowRight, Calendar, User } from "lucide-react";
import { posts } from "../constants";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog & News</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Our Latest Articles</h2>
          <p className="mt-4 text-muted-foreground text-sm">Stay informed with expert insights on accounting, tax planning, and Canadian financial regulations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />{p.date}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <User className="w-3 h-3" /> <span>MHE Editorial Team</span>
                </div>
                <h5 className="font-heading font-semibold text-foreground line-clamp-2 text-lg leading-snug">{p.title}</h5>
                <p className="mt-2 text-muted-foreground text-sm line-clamp-2">{p.desc}</p>
                <div className="mt-5 pt-5 border-t border-border/50 flex items-center justify-between">
                  <Link to="/news/single" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/news" className="text-xs text-muted-foreground hover:text-primary transition-colors">All Articles →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12" data-aos="fade-up">
          <Link to="/news" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
