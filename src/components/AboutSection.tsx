import { Button } from "@/components/ui/button";
const AboutSection = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-6">Về công ty Trang N��ng</h2>
            <p className="text-lg text-gray-700 mb-6">Công ty Trang Nông chuyên sản xuất kinh doanh, xuất nhập khẩu hạt giống F1, OP rau củ quả, thuốc bảo vệ thực vật, phân bón và vật tư nông nghiệp. Từ năm 1996, công ty đã trở thành thành viên của Hiệp hội Giống Châu Á Thái Bình Dương (APSA) và hiện là thành viên của Hiệp hội Thương mại Giống cây trồng Việt Nam (VSTA). Sản phẩm giống cây trồng của công ty đã đạt nhiều giải thưởng quan trọng trong ngành nông nghiệp.</p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                Tìm hiểu thêm về công ty
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal-animation">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-agri-earth rounded-lg"></div>
              <img alt="Farmers examining crops" style={{
              maxHeight: '500px'
            }} src="/lovable-uploads/b67de097-1ba0-4380-817a-8df98eeb828f.jpg" className="w-full h-auto rounded-lg object-fill" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation">
            <div className="text-agri-green-dark text-5xl font-bold">87+</div>
            <p className="text-gray-600 mt-2">Năm kinh nghiệm kinh doanh hạt giống cây trồng</p>
          </div>
          <div className="bg-agri-cream p-6 rounded-lg text-center reveal-animation" style={{
          animationDelay: '0.2s'
        }}>
            <div className="text-agri-green-dark text-5xl font-bold">20+</div>
            <p className="text-gray-600 mt-2">Nước tin dùng hạt giống của chúng tôi</p>
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
