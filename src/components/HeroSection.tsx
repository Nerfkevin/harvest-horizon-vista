
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')",
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Cultivating Tomorrow's Harvest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Sustainable agricultural solutions that nurture both the land and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-agri-green hover:bg-agri-green-dark text-white text-lg py-6 px-8" 
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-dark text-lg py-6 px-8">
              Learn About Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-10 h-10" />
      </div>
    </section>
  );
};

export default HeroSection;
