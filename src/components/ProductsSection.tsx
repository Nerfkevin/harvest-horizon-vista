
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Đậu đũa cây TN 364",
    image: "public/lovable-uploads/2ca361c0-e739-4d1c-9cc7-aaafc516e215.png",
    description: "Giống hạt đậu đũa chất lượng cao từ Trang Nông",
    buttonText: "Xem thêm về Đậu đũa cây TN 364"
  },
  {
    name: "Đậu côve Nhật TN 322",
    image: "public/lovable-uploads/02a39b90-a25f-49ab-acdc-5ee0d8235630.png",
    description: "Giống đậu côve Nhật Bản đột phá từ Trang Nông",
    buttonText: "Xem thêm về Đậu côve Nhật TN 322"
  },
  {
    name: "Dưa lê Queen F1 TN 480",
    image: "public/lovable-uploads/8a327cd6-d6d8-4786-84f7-3ee6e67c8eb0.png",
    description: "Giống dưa lê chất lượng cao từ Trang Nông",
    buttonText: "Xem thêm về Dưa lê Queen F1 TN 480"
  },
  {
    name: "Dưa lê Kim Ngân F1 TN 463",
    image: "public/lovable-uploads/3f3cc3c0-2b29-4c47-9de0-e368fb251533.png",
    description: "Giống dưa lê Kim Ngân được cải tiến từ Trang Nông",
    buttonText: "Xem thêm về Dưa lê Kim Ngân F1 TN 463"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center reveal-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular Image */}
              <div className="w-full max-w-[320px] mx-auto mb-6 overflow-hidden rounded-full border-4 border-agri-green/20 shadow-lg">
                <AspectRatio ratio={1/1} className="bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </AspectRatio>
              </div>
              
              {/* Product Title */}
              <h3 className="text-xl md:text-2xl font-bold text-agri-green-dark mb-3">{product.name}</h3>
              
              {/* Product Description */}
              <p className="text-agri-earth mb-5">Giống Trang Nông</p>
              
              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="group border-agri-green text-agri-green hover:bg-agri-green hover:text-white"
              >
                {product.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
