import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import NewsPage from "./pages/NewsPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import FaqPage from "./pages/FaqPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/single" element={<SingleBlogPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
