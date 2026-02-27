import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2000&auto=format&fit=crop" 
          alt="404 Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-hero/80" />
      </div>
      <div className="relative z-10 container-custom px-4 py-20">
        <h2 className="text-3xl md:text-4xl text-hero-foreground font-heading font-medium mb-4">Oops! Page Not Found</h2>
        <h1 className="text-[120px] md:text-[200px] font-heading font-bold text-primary leading-none mb-6 drop-shadow-lg">404</h1>
        <p className="text-hero-muted max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          We're sorry, but it seems like you've ventured into uncharted financial territory. It appears the page you're looking for has slipped through the cracks of our investments.
        </p>
        <Link to="/" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
