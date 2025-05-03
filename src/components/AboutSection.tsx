import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-6">
              Rooted in Tradition, Growing with Innovation
            </h2>
            <p className="text-lg text-gray-700 mb-6">Công ty Trang Nông là doanh nghiệp chuyên sản xuất kinh doanh, xuất nhập khẩu hạt giống F1 và OP rau củ quả hoa, thuốc bảo vệ thực vật, phân bón lá, vật tư nông nghiệp. Nghiên cứu, chọn tạo thử nghiệm giống mới.</p>
            <p className="text-lg text-gray-700 mb-8">
              We believe that modern agriculture must balance productivity with responsibility. Our team of experts combines generations of farming wisdom with cutting-edge research and technology to develop solutions that work in harmony with nature.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-agri-green hover:bg-agri-green-dark text-white">
                Our Mission
              </Button>
              <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                Meet Our Team
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal-animation">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-agri-earth rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1592982537447-7440770faed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Farmers examining crops" className="w-full h-auto rounded-lg object-cover" style={{
              maxHeight: '500px'
            }} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation">
            <div className="text-agri-green-dark text-5xl font-bold">15+</div>
            <p className="text-gray-600 mt-2">Years of Experience</p>
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