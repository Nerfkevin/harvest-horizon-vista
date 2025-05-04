
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "Thông tin mới về rau mầm",
    image: "public/lovable-uploads/4776a3a6-a829-4310-bc47-d0ac91a94fbc.png",
    description: "Sau một thời gian dài giới thiệu và hướng dẫn sản xuất rau mầm, Công ty thấy nhu cầu sử dụng rau mầm của người dân rất lớn, nhất là ở thành phố đông dân này. Điều đó chứng tỏ người tiêu dùng ngày càng quan tâm đến những thực phẩm sạch, bổ dưỡng, đa dạng và tự mình có thể sản xuất được."
  },
  {
    title: "Rau mầm – nguồn thực phẩm sạch cho gia đình",
    image: "public/lovable-uploads/74dd7eb0-18ef-427b-bd42-45dcd0a8fde8.png",
    description: "Rau mầm được cho là một trong những loại thức ăn hoàn hảo, bổ dưỡng và lành mạnh nhất. Gần đây, rau mầm đã trở thành một xu hướng thực phẩm sạch cho cuộc sống hiện đại và đã xuất hiện trong thực đơn nhiều món ăn phương Đông và phương Tây."
  },
  {
    title: "Hoa ngày tết",
    image: "public/lovable-uploads/9eb93da7-cce2-48f0-9307-bc56cc042076.png",
    description: "Từ lâu đời, hoa là một phần hầu như không thể thiếu được trong ngày tết, vì thế từ xa xưa đã hình thành các làng hoa, để mỗi độ cuối năm lại hẹn nhau phiên chợ hoa xuân. Nhằm phục vụ nhu cầu làm đẹp cho khuôn viên nhà mình trong những ngày tết sắp tới. Công ty Trang Nông đặc biệt có cung cấp nhiều chủng loại hạt giống hoa đẹp, lạ mắt, dễ trồng, tốn ít diện tích, phù hợp trồng trong chậu, ngoài hàng hiên, được Công ty nhập về từ Thái Lan."
  },
  {
    title: "Rau quả mang lại điều kỳ diệu gì cho bạn?",
    image: "public/lovable-uploads/4776a3a6-a829-4310-bc47-d0ac91a94fbc.png",
    description: "Thư giãn - Sự kỳ diệu của các loại rau quả là đem đến cho các bạn gái sức khoẻ và tuổi trẻ bằng các loại vitamin tự nhiên. Chúng khiến cho quá trình lão hoá của bạn chậm lại và khiến cơ làn da luôn mịn màng, nếp nhăn biến mất và vóc dáng cân đối, nhanh nhẹn. Có ít nhất 10 loại rau quả đem đến điều kỳ diệu ấy."
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-agri-cream-light">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-8 text-left">Tin mới nhất</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col reveal-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* News Image */}
              <div className="w-full h-48">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* News Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-agri-green-dark mb-3 hover:text-agri-green cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="bg-white border-agri-green text-agri-green hover:bg-agri-green hover:text-white">
            Xem tất cả tin tức
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
