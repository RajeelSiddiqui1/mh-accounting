import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { CTA } from "../components/CTA";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { Testimonials } from "../components/Testimonials";
import { Blog } from "../components/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <CTA />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Blog />
    </>
  );
};

export default Home;
