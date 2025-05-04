import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation">
            <div className="text-agri-green-dark text-5xl font-bold">87+</div>
            <p className="text-gray-600 mt-2">Năm kinh nghiệm</p>
          </div>
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation" style={{
          animationDelay: '0.2s'
        }}>
            <div className="text-agri-green-dark text-5xl font-bold">500+</div>
            <p className="text-gray-600 mt-2">Farms Supported</p>
          </div>
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation" style={{
          animationDelay: '0.4s'
        }}>
            <div className="text-agri-green-dark text-5xl font-bold">30K+</div>
            <p className="text-gray-600 mt-2">Acres Under Management</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;