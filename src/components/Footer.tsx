
import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/public/lovable-uploads/d74f11c2-430e-4a75-91f1-26de8238f16f.png" 
                alt="Trang Nông Logo" 
                className="h-12"
              />
            </div>
            <p className="text-black mb-6">
              Giải pháp nông nghiệp bền vững cho tương lai xanh.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-green-800">Chính sách, điều khoản</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-green-700 transition-colors">+ Điều khoản chung</a></li>
              <li><a href="#" className="text-black hover:text-green-700 transition-colors">+ Chính sách bán hàng</a></li>
              <li><a href="#" className="text-black hover:text-green-700 transition-colors">+ Chính sách đổi trả</a></li>
              <li><a href="#" className="text-black hover:text-green-700 transition-colors">+ Chính sách thanh toán</a></li>
              <li><a href="#" className="text-black hover:text-green-700 transition-colors">+ Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-black">
              &copy; {new Date().getFullYear()} Trang Nông. Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
