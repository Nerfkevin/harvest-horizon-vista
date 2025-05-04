
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "Chàng tân kỹ sư phần mềm bước từ phòng lab ra thế giới",
    image: "public/lovable-uploads/4776a3a6-a829-4310-bc47-d0ac91a94fbc.png",
    description: "Hồ Lê Minh Thạch chưa bao giờ nghĩ rằng có ngày mình trở thành một kỹ sư phần mềm, song chính nền tảng kiến thức vững chắc có được từ RMIT Việt Nam và trải nghiệm với khoa học và khoa học máy tính của Harvard đã đẩy lên đam mê lập trình và tiếp thêm sức mạnh để anh theo đuổi sự nghiệp này."
  },
  {
    title: "Hành trình trưởng thành qua các cuộc thi của ba tân khoa RMIT",
    image: "public/lovable-uploads/74dd7eb0-18ef-427b-bd42-45dcd0a8fde8.png",
    description: "Bước ra khỏi vùng an toàn của lớp học để tranh tài ở các cuộc thi có thể là thử thách không nhỏ, nhưng giá trị mà sinh viên nhận được không dừng lại ở những chiếc cúp hay tấm huy chương."
  },
  {
    title: "Các chiêu trò lừa đảo trên Facebook đang gây tổn hại cho ngành du lịch Việt",
    image: "public/lovable-uploads/9eb93da7-cce2-48f0-9307-bc56cc042076.png",
    description: "Trong không khí đón kỳ nghỉ lễ 30/4-1/5 và mùa du lịch hè, Tiến sĩ Daisy Kanagasapapathy cảnh báo rằng các vụ lừa đảo trực tuyến nhằm vào khách du lịch có thể sẽ tăng cao."
  },
  {
    title: "Đại học RMIT Việt Nam nhận giải thưởng Rồng Vàng lần thứ 21",
    image: "public/lovable-uploads/4776a3a6-a829-4310-bc47-d0ac91a94fbc.png",
    description: "Đại học RMIT Việt Nam một lần nữa được vinh danh với giải thưởng Rồng Vàng danh giá, đánh dấu lần thứ 21 nhà trường nhận được vinh dự này."
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
