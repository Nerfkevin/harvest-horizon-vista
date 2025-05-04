
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Đậu đũa cây TN 364",
    image: "public/lovable-uploads/f1cdbbac-6428-4332-baa0-acc9c6dcca9e.png",
    buttonText: "Xem thêm về Đậu đũa cây TN 364"
  },
  {
    name: "Đậu côve Nhật TN 322",
    image: "public/lovable-uploads/2315fd13-a365-44a3-b1f7-459dbc588157.png",
    buttonText: "Xem thêm về Đậu côve Nhật TN 322"
  },
  {
    name: "Dưa lê Queen F1 TN 480",
    image: "public/lovable-uploads/0a92ca13-6a4a-44c0-b774-b91297c75c05.png",
    buttonText: "Xem thêm về Dưa lê Queen F1 TN 480"
  },
  {
    name: "Dưa lê Kim Ngân F1 TN 463",
    image: "public/lovable-uploads/d478425b-a7e7-432a-9661-9846d8f6c6b8.png",
    buttonText: "Xem thêm về Dưa lê Kim Ngân F1 TN 463"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-8">Sản phẩm mới</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center reveal-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rectangular Image */}
              <div className="w-full mb-4 overflow-hidden rounded-md shadow-md">
                <div className="aspect-w-4 aspect-h-3 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
              </div>
              
              {/* Product Name */}
              <h3 className="text-lg font-medium text-agri-green-dark text-center mb-3 hover:text-agri-green cursor-pointer transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
