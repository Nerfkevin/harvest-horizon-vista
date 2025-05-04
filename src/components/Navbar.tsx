
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

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

  const toggleLanguage = (lang: 'vi' | 'en') => {
    setLanguage(lang);
  };

  const navItems = language === 'vi' ? [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Tư vấn', href: '#services' },
    { name: 'Tin tức', href: '#testimonials' },
  ] : [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Consulting', href: '#services' },
    { name: 'News', href: '#testimonials' },
  ];

  const contactText = language === 'vi' ? 'Liên hệ' : 'Contact';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/public/lovable-uploads/d74f11c2-430e-4a75-91f1-26de8238f16f.png" 
            alt="Trang Nông Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks 
            navItems={navItems} 
            isScrolled={isScrolled} 
          />
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {contactText}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded text-sm">
              <Globe size={18} className={isScrolled ? "text-green-600" : "text-white"} />
              <span className={`font-medium ${isScrolled ? "text-green-600" : "text-white"}`}>
                {language === 'vi' ? 'Tiếng Việt' : 'English'}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => toggleLanguage('vi')}>
                Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded text-sm">
              <Globe size={18} className={isScrolled ? "text-green-600" : "text-white"} />
              <span className={`font-medium ${isScrolled ? "text-green-600" : "text-white"}`}>
                {language === 'vi' ? 'Tiếng Việt' : 'English'}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => toggleLanguage('vi')}>
                Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 ${isScrolled ? 'bg-green-600' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 ${isScrolled ? 'bg-green-600' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-green-600' : 'bg-white'} transition-all ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks 
              navItems={navItems} 
              isScrolled={true}
              mobile={true} 
            />
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white w-full"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {contactText}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  navItems: { name: string; href: string }[];
  mobile?: boolean;
  isScrolled?: boolean;
}

const NavLinks = ({ navItems, mobile = false, isScrolled = true }: NavLinkProps) => {
  return (
    <>
      {navItems.map(item => (
        <a 
          key={item.name}
          href={item.href}
          className={`
            font-medium transition-colors hover:text-green-700
            ${mobile ? 'block py-2 text-green-600' : ''}
            ${!isScrolled && !mobile ? 'text-white' : 'text-green-600'}
          `}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(item.href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
