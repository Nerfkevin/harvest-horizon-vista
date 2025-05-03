import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const products = [{
  name: "Premium Organic Seeds",
  image: "https://images.unsplash.com/photo-1615477550927-6ec8cda228d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
  description: "Non-GMO, organic seeds with exceptional germination rates and pest resistance.",
  price: "$12.99/pkg",
  badge: "Best Seller"
}, {
  name: "Enriched Compost",
  image: "https://images.unsplash.com/photo-1597938430467-c7a5f65c24f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  description: "Nutrient-rich organic compost ideal for vegetable gardens and crop fields.",
  price: "$24.99/bag",
  badge: "Organic"
}, {
  name: "Soil Testing Kit",
  image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
  description: "Professional-grade soil analysis kit for pH, nutrients, and contaminant testing.",
  price: "$89.99",
  badge: "New"
}, {
  name: "Natural Pest Control",
  image: "https://images.unsplash.com/photo-1620300499707-2184b554e8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  description: "Chemical-free pest management solutions safe for organic farming.",
  price: "$34.99",
  badge: null
}];
const ProductsSection = () => {
  return <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-4">Sản phẩm mới</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-quality agricultural products designed to enhance your farming operations with sustainability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => <Card key={index} className="overflow-hidden border border-gray-200 h-full reveal-animation" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                {product.badge && <Badge className="absolute top-2 right-2 bg-agri-earth text-white">
                    {product.badge}
                  </Badge>}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-agri-green-dark">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold text-agri-earth mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-agri-green-dark hover:bg-agri-green text-white px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>;
};
export default ProductsSection;