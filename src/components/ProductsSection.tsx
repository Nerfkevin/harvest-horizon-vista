
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Đậu đũa cây TN 364",
    image: "public/lovable-uploads/2ca361c0-e739-4d1c-9cc7-aaafc516e215.png",
    price: "Giống Trang Nông",
    badge: "Best Seller",
    buttonText: "Xem thêm về Đậu đũa cây TN 364"
  },
  {
    name: "Đậu côve Nhật TN 322",
    image: "public/lovable-uploads/02a39b90-a25f-49ab-acdc-5ee0d8235630.png",
    price: "Giống Trang Nông",
    badge: "Organic",
    buttonText: "Xem thêm về Đậu côve Nhật TN 322"
  },
  {
    name: "Dưa lê Queen F1 TN 480",
    image: "public/lovable-uploads/8a327cd6-d6d8-4786-84f7-3ee6e67c8eb0.png",
    price: "Giống Trang Nông",
    badge: "New",
    buttonText: "Xem thêm về Dưa lê Queen F1 TN 480"
  },
  {
    name: "Dưa lê Kim Ngân F1 TN 463",
    image: "public/lovable-uploads/3f3cc3c0-2b29-4c47-9de0-e368fb251533.png",
    price: "Giống Trang Nông",
    badge: null,
    buttonText: "Xem thêm về Dưa lê Kim Ngân F1 TN 463"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-gray-200 h-full reveal-animation" 
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                {product.badge && (
                  <Badge className="absolute top-2 right-2 bg-agri-earth text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-agri-green-dark">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="font-bold text-agri-earth mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                  {product.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
