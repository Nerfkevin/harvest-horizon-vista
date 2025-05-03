
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Trang Nông - Giải pháp nông nghiệp bền vững";
    
    // Apply animation to elements with reveal-animation class
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-animation:not(.active)');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('active');
        }
      });
    };

    // Initial check and add scroll listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ProductsSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <TestimonialsSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ContactSection />
        </RevealOnScroll>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
