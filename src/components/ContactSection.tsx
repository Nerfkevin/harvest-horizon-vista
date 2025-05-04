import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Mail, Phone } from "lucide-react";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    department: "BAN GIÁM ĐỐC",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your backend/API
    console.log("Form submitted:", formData);
    toast({
      title: "Đã gửi tin nhắn!",
      description: "Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.",
      duration: 5000
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      department: "BAN GIÁM ĐỐC",
      message: ""
    });
  };
  return <section id="contact" className="section-padding bg-agri-green-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950">Liên hệ với chúng tôi</h2>
          <p className="text-lg text-agri-cream-light max-w-3xl mx-auto text-slate-950">
            Quý khách quan tâm đến sản phẩm hoặc có câu hỏi về nông nghiệp bền vững? 
            Liên hệ với chúng tôi và đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal-animation">
            <div className="bg-white rounded-lg p-8 h-full text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-agri-green-dark">Công ty TNHH TM Trang Nông</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-agri-green mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-agri-green-dark">Địa chỉ</h4>
                    <p>2E – 2F Lê Quang Sung, P.2, Q.6, TP. HCM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-agri-green mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-agri-green-dark">Điện thoại</h4>
                    <p>(84.28) 3969.0931 - (84.28) 3969.0932</p>
                    <p className="mt-1">Fax: (84.28) 3969.1563 - (84.28) 3960.4070</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-agri-green mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-agri-green-dark">Email</h4>
                    <p>trangnong@trangnong.com.vn</p>
                    <p className="mt-1">Website: http://www.trangnong.com.vn</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4 text-agri-green-dark">Chi nhánh Nha Trang</h4>
                <p><strong>Địa chỉ:</strong> 725 Đường 23 tháng 10, T.p Nha Trang, Khánh Hòa</p>
                <p><strong>Điện thoại:</strong> (84.258)3890.075 – 3890.478</p>
                <p><strong>Fax:</strong> (84.258) 3890.424</p>
                <p><strong>Email:</strong> trangnong_nt@vnn.vn</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-animation" style={{
          animationDelay: '0.2s'
        }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-agri-green-dark mb-6">Gửi tin nhắn cho chúng tôi</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Tên bạn <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" placeholder="Nhập tên của bạn" />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Địa chỉ
                  </label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} className="w-full" placeholder="Nhập địa chỉ của bạn" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Điện thoại
                  </label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" placeholder="Nhập số điện thoại" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" placeholder="email@example.com" />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Liên hệ bộ phận
                  </label>
                  <select id="department" name="department" value={formData.department} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-agri-green">
                    <option value="BAN GIÁM ĐỐC">BAN GIÁM ĐỐC</option>
                    <option value="PHÒNG KINH DOANH">PHÒNG KINH DOANH</option>
                    <option value="PHÒNG KỸ THUẬT">PHÒNG KỸ THUẬT</option>
                    <option value="PHÒNG KẾ TOÁN">PHÒNG KẾ TOÁN</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full" placeholder="Nhập nội dung tin nhắn của bạn" />
                </div>
              </div>
              
              <div className="mt-6 flex gap-4 justify-end">
                <Button type="reset" className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                  Soạn lại
                </Button>
                <Button type="submit" className="bg-agri-green hover:bg-agri-green-dark text-white">
                  Gửi
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;