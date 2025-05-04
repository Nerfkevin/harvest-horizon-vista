
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Đậu đũa cây TN 364",
    image: "public/lovable-uploads/e43e05af-3bda-4c89-bc36-d409e05d00c3.png",
  },
  {
    name: "Đậu côve Nhật TN 322",
    image: "public/lovable-uploads/69149498-9fb8-4484-abdb-3a451aa002a0.png",
  },
  {
    name: "Dưa lê Queen F1 TN 480",
    image: "public/lovable-uploads/8aaf09f6-788a-4f1b-93d1-70841f9240da.png",
  },
  {
    name: "Dưa lê Kim Ngân F1 TN 463",
    image: "public/lovable-uploads/17fa5bca-2aad-4159-896c-47ed59475bf7.png",
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-4 text-left">Sản phẩm mới</h2>
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
