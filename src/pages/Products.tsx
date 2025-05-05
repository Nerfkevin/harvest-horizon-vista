
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample categories and products
const categories = [
  {
    title: "Hạt giống rau",
    titleEn: "Vegetable Seeds",
    image: "public/lovable-uploads/e43e05af-3bda-4c89-bc36-d409e05d00c3.png",
    products: [
      { id: 1, name: "Đậu đũa cây TN 364", nameEn: "Green Beans TN 364", image: "public/lovable-uploads/e43e05af-3bda-4c89-bc36-d409e05d00c3.png", code: "TN 364" },
      { id: 2, name: "Đậu côve Nhật TN 322", nameEn: "Japanese Cowpea TN 322", image: "public/lovable-uploads/69149498-9fb8-4484-abdb-3a451aa002a0.png", code: "TN 322" },
      { id: 3, name: "Rau mầm đỏ TN 6", nameEn: "Red Sprouts TN 6", image: "public/lovable-uploads/e9c55f1e-64e5-4f87-82ed-b65e938b4cd5.png", code: "TN 6" },
    ]
  },
  {
    title: "Hạt giống hoa",
    titleEn: "Flower Seeds",
    image: "public/lovable-uploads/2315fd13-a365-44a3-b1f7-459dbc588157.png",
    products: [
      { id: 4, name: "Hoa cúc Tím Nhật F1", nameEn: "Japanese Purple Chrysanthemum F1", image: "public/lovable-uploads/2315fd13-a365-44a3-b1f7-459dbc588157.png", code: "TN 576" },
      { id: 5, name: "Hoa vạn thọ Pháp", nameEn: "French Marigold", image: "public/lovable-uploads/4776a3a6-a829-4310-bc47-d0ac91a94fbc.png", code: "TN 586" },
    ]
  },
  {
    title: "Hạt giống dưa",
    titleEn: "Melon Seeds",
    image: "public/lovable-uploads/8aaf09f6-788a-4f1b-93d1-70841f9240da.png",
    products: [
      { id: 6, name: "Dưa lê Queen F1", nameEn: "Queen Melon F1", image: "public/lovable-uploads/8aaf09f6-788a-4f1b-93d1-70841f9240da.png", code: "TN 480" },
      { id: 7, name: "Dưa lê Kim Ngân F1", nameEn: "Kim Ngan Melon F1", image: "public/lovable-uploads/17fa5bca-2aad-4159-896c-47ed59475bf7.png", code: "TN 463" },
      { id: 8, name: "Dưa lê Kim Hoàng F1", nameEn: "Kim Hoang Melon F1", image: "public/lovable-uploads/e9c55f1e-64e5-4f87-82ed-b65e938b4cd5.png", code: "TN 465" },
    ]
  },
  {
    title: "Hạt giống khác",
    titleEn: "Other Seeds",
    image: "public/lovable-uploads/3f3cc3c0-2b29-4c47-9de0-e368fb251533.png",
    products: [
      { id: 9, name: "Cải thìa trường Mại F1", nameEn: "Pak Choi Mai F1", image: "public/lovable-uploads/e9c55f1e-64e5-4f87-82ed-b65e938b4cd5.png", code: "TN 289" },
      { id: 10, name: "Cải bẹ công TN", nameEn: "Mustard Greens TN", image: "public/lovable-uploads/e9c55f1e-64e5-4f87-82ed-b65e938b4cd5.png", code: "TN 269" },
      { id: 11, name: "Dưa lê Kim Huệ F1", nameEn: "Kim Hue Melon F1", image: "public/lovable-uploads/e9c55f1e-64e5-4f87-82ed-b65e938b4cd5.png", code: "TN 463" },
    ]
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && (event.detail.language === 'vi' || event.detail.language === 'en')) {
        setLanguage(event.detail.language);
      }
    };
    
    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  // Filter products based on search query and active category
  const filteredProducts = categories.flatMap(category => {
    if (activeCategory && (language === 'vi' ? category.title : category.titleEn) !== activeCategory) {
      return [];
    }

    return category.products.filter(product => {
      const productName = language === 'vi' ? product.name : product.nameEn;
      return productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  // Text translations based on language
  const translations = {
    pageTitle: language === 'vi' ? 'Sản phẩm của Trang Nông' : 'Trang Nông Products',
    pageDescription: language === 'vi' 
      ? 'Khám phá danh mục sản phẩm đa dạng của chúng tôi với các loại hạt giống cây trồng chất lượng cao, đảm bảo năng suất và phù hợp với điều kiện canh tác Việt Nam.'
      : 'Explore our diverse product catalog featuring high-quality plant seeds that ensure productivity and are suitable for Vietnamese farming conditions.',
    allCategories: language === 'vi' ? 'Tất cả danh mục' : 'All Categories',
    allCategoriesDesc: language === 'vi' ? 'Xem tất cả sản phẩm của Trang Nông' : 'View all Trang Nông products',
    searchPlaceholder: language === 'vi' ? 'Tìm kiếm sản phẩm...' : 'Search products...',
    clearFilters: language === 'vi' ? 'Xóa bộ lọc' : 'Clear filters',
    noProducts: language === 'vi' ? 'Không tìm thấy sản phẩm nào' : 'No products found',
    productCount: (count: number) => language === 'vi' ? `${count} sản phẩm` : `${count} products`,
    categoriesTitle: language === 'vi' ? 'Danh mục sản phẩm' : 'Product Categories',
    viewProducts: language === 'vi' ? 'Xem toàn bộ sản phẩm' : 'View all products',
    productDetails: language === 'vi' ? 'Xem chi tiết sản phẩm' : 'View product details',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Adding more margin-top */}
        <section className="bg-green-50 py-12 md:py-16 mt-16 md:mt-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{translations.pageTitle}</h1>
            <p className="text-lg text-green-700 max-w-3xl">
              {translations.pageDescription}
            </p>
          </div>
        </section>

        {/* Product Filters and Search */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Category Navigation */}
              <div className="w-full md:w-auto">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-white hover:bg-gray-50">
                        {activeCategory || translations.allCategories}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li className="row-span-1">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-white p-6 no-underline outline-none focus:shadow-md"
                                onClick={() => setActiveCategory(null)}
                              >
                                <div className="mb-2 mt-4 text-lg font-medium text-green-800">
                                  {translations.allCategories}
                                </div>
                                <p className="text-sm text-green-600">
                                  {translations.allCategoriesDesc}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {categories.map((category) => (
                            <ListItem
                              key={language === 'vi' ? category.title : category.titleEn}
                              title={language === 'vi' ? category.title : category.titleEn}
                              onClick={() => setActiveCategory(language === 'vi' ? category.title : category.titleEn)}
                            >
                              {translations.productCount(category.products.length)}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto flex-grow md:max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={translations.searchPlaceholder}
                    className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  className={viewMode === 'grid' ? 'bg-green-600' : ''}
                  onClick={() => setViewMode('grid')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid-2x2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  className={viewMode === 'list' ? 'bg-green-600' : ''}
                  onClick={() => setViewMode('list')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Category Tabs (visible on smaller screens) */}
        <section className="md:hidden py-4 overflow-x-auto">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex w-full overflow-x-auto pb-2">
                <TabsTrigger 
                  value="all"
                  onClick={() => setActiveCategory(null)}
                  className="whitespace-nowrap"
                >
                  {language === 'vi' ? 'Tất cả' : 'All'}
                </TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger 
                    key={language === 'vi' ? category.title : category.titleEn}
                    value={language === 'vi' ? category.title : category.titleEn}
                    onClick={() => setActiveCategory(language === 'vi' ? category.title : category.titleEn)}
                    className="whitespace-nowrap"
                  >
                    {language === 'vi' ? category.title : category.titleEn}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredProducts.length > 0 ? (
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
                  : "flex flex-col space-y-4"
              )}>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode}
                    language={language}
                    detailsText={translations.productDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-xl text-gray-600 mb-4">{translations.noProducts}</p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory(null);
                  }}
                  className="bg-green-600"
                >
                  {translations.clearFilters}
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Category Showcases */}
        {!searchQuery && !activeCategory && (
          <section className="py-12 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-green-800 mb-8">{translations.categoriesTitle}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <div 
                    key={language === 'vi' ? category.title : category.titleEn}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-w-1 aspect-h-9">
                      <img 
                        src={category.image} 
                        alt={language === 'vi' ? category.title : category.titleEn} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-green-800">{language === 'vi' ? category.title : category.titleEn}</h3>
                      <p className="text-sm text-gray-600 mt-1">{translations.productCount(category.products.length)}</p>
                      <Button 
                        className="w-full mt-4 bg-green-600" 
                        onClick={() => setActiveCategory(language === 'vi' ? category.title : category.titleEn)}
                      >
                        {translations.viewProducts}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Custom Components
const ProductCard = ({ 
  product, 
  viewMode, 
  language, 
  detailsText 
}: { 
  product: any, 
  viewMode: 'grid' | 'list', 
  language: 'vi' | 'en',
  detailsText: string
}) => {
  if (viewMode === 'grid') {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-w-1 aspect-h-1">
          <img 
            src={product.image} 
            alt={language === 'vi' ? product.name : product.nameEn} 
            className="w-full h-52 object-contain p-4 bg-white"
          />
        </div>
        <CardContent className="p-4">
          <div className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
            {product.code}
          </div>
          <h3 className="font-medium text-lg mb-2 text-green-800">{language === 'vi' ? product.name : product.nameEn}</h3>
          <Button className="w-full mt-2 bg-green-600">
            {detailsText}
          </Button>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <img 
              src={product.image} 
              alt={language === 'vi' ? product.name : product.nameEn} 
              className="w-full h-48 object-contain p-4 bg-white"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                {product.code}
              </div>
              <h3 className="font-medium text-lg mb-2 text-green-800">{language === 'vi' ? product.name : product.nameEn}</h3>
            </div>
            <div className="flex justify-end">
              <Button className="bg-green-600">
                {detailsText}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Products;
