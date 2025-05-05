
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
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
        <div className="absolute inset-0 bg-green-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Trang Nông
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Giải pháp nông nghiệp bền vững, hạt giống chất lượng cao
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8" 
              >
                Tìm hiểu các dòng sản phẩm
              </Button>
            </Link>
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
