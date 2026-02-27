import { ArrowRight } from "lucide-react";
import { posts } from "../constants";
import { PageHeader } from "./ServicesPage";
import { Link } from "react-router-dom";

const NewsPage = () => {
  // Multiply posts to fake a bigger grid like in the design
  const allPosts = [...posts, ...posts];

  return (
    <main>
      <PageHeader title="Latest Article" breadcrumb="Home / Latest Article" />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog & News</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-foreground">Our Latest Article</h2>
            <p className="mt-4 text-muted-foreground">Tristique nulla aliquet enim tortor at auctor urna massa enim nec dui nunc mattis enim ut tellus.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-4 right-4 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-center shadow-lg">
                    <span className="block text-xl">09</span>
                    <span className="block text-xs uppercase -mt-1">July</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h5 className="font-heading font-bold text-xl text-foreground mb-3">{p.title}</h5>
                  <p className="text-muted-foreground text-sm flex-grow mb-5">Rostrum exercitationem ullam corporis suscipit lorem laboriosam, nisi commodie conseuatur.</p>
                  <Link to="/news/single" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all mt-auto">Read More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
