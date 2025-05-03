
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Sprout, LeafyGreen, Seed, Tools } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
};

const ServiceCard = ({
  title,
  description,
  icon,
  ctaText
}: ServiceCardProps) => {
  return <Card className="flex flex-col h-full bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-agri-green">
      <CardHeader>
        <div className="mb-4 text-agri-green">
          {icon}
        </div>
        <CardTitle className="text-xl text-agri-green-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-agri-earth p-0 hover:text-agri-green">
          {ctaText} →
        </Button>
      </CardFooter>
    </Card>;
};

const ServicesSection = () => {
  const services = [{
    title: "Hoa",
    description: "Các loại hạt giống hoa đẹp, chất lượng cao, phù hợp với điều kiện khí hậu Việt Nam và có tỷ lệ nảy mầm tốt.",
    icon: <Flower className="w-10 h-10" />,
    ctaText: "Xem thêm các loại hạt giống Hoa"
  }, {
    title: "Rau mầm",
    description: "Hạt giống rau mầm sạch, an toàn với đa dạng các loại như đậu Hà Lan, đậu xanh, cải mầm và nhiều loại khác.",
    icon: <Sprout className="w-10 h-10" />,
    ctaText: "Tìm hiểu về hạt giống Rau mầm"
  }, {
    title: "Rau ăn lá",
    description: "Đa dạng các loại hạt giống rau ăn lá chất lượng cao, dễ trồng, năng suất lớn và phù hợp với điều kiện canh tác Việt Nam.",
    icon: <LeafyGreen className="w-10 h-10" />,
    ctaText: "Khám phá hạt giống Rau ăn lá"
  }, {
    title: "Hạt giống khác",
    description: "Các loại hạt giống đặc biệt, đa dạng chủng loại từ rau củ, quả đến thảo mộc và cây thuốc nam với chất lượng đảm bảo.",
    icon: <Seed className="w-10 h-10" />,
    ctaText: "Khám phá các loại Hạt giống khác"
  }, {
    title: "Vật tư nông nghiệp",
    description: "Cung cấp đầy đủ các loại vật tư, dụng cụ và thiết bị cần thiết cho hoạt động trồng trọt từ nhỏ đến quy mô lớn.",
    icon: <Tools className="w-10 h-10" />,
    ctaText: "Tìm hiểu về Vật tư nông nghiệp"
  }];

  return <section id="services" className="section-padding bg-agri-cream-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-4 text-left">Các sản phẩm của Trang Nông</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive agricultural services designed to improve productivity while promoting sustainability and environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="reveal-animation">
              <ServiceCard {...service} />
            </div>)}
        </div>
      </div>
    </section>;
};

export default ServicesSection;
