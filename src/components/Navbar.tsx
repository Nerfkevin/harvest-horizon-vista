
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Wheat } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-agri-green-dark">
          <Wheat size={32} className={`${isScrolled ? 'text-agri-green-dark' : 'text-white'}`} />
          <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-agri-green-dark' : 'text-white'}`}>
            GreenHarvest
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks isScrolled={isScrolled} />
          <Button className="bg-agri-green hover:bg-agri-green-dark text-white">Contact Us</Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 ${isScrolled ? 'bg-agri-green-dark' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 ${isScrolled ? 'bg-agri-green-dark' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 ${isScrolled ? 'bg-agri-green-dark' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile={true} isScrolled={true} />
            <Button className="bg-agri-green hover:bg-agri-green-dark text-white w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, isScrolled = true }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <>
      {navItems.map(item => (
        <a 
          key={item.name}
          href={item.href}
          className={`
            font-medium transition-colors hover:text-agri-earth
            ${mobile ? 'block py-2 text-agri-green-dark' : ''}
            ${!isScrolled && !mobile ? 'text-white' : 'text-agri-green-dark'}
          `}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
