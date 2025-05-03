import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Wheat, Flower, TreeDeciduous, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const ServiceCard = ({
  title,
  description,
  icon
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
          Learn more →
        </Button>
      </CardFooter>
    </Card>;
};
const ServicesSection = () => {
  const services = [{
    title: "Crop Management",
    description: "Expert solutions for optimizing crop yield and quality through sustainable farming practices and innovative agricultural techniques.",
    icon: <Wheat className="w-10 h-10" />
  }, {
    title: "Soil Restoration",
    description: "Revitalize and enhance soil health with our specialized treatments and organic enrichment programs designed for long-term sustainability.",
    icon: <Sprout className="w-10 h-10" />
  }, {
    title: "Organic Farming",
    description: "Guidance and infrastructure for transitioning to and maintaining certified organic agricultural operations with minimal environmental impact.",
    icon: <Flower className="w-10 h-10" />
  }, {
    title: "Sustainable Forestry",
    description: "Responsible forest management services that balance timber harvesting with conservation and biodiversity preservation.",
    icon: <TreeDeciduous className="w-10 h-10" />
  }, {
    title: "Solar Integration",
    description: "Integrate renewable energy solutions with your agricultural operations to reduce costs and environmental footprint.",
    icon: <Sun className="w-10 h-10" />
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