
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "GreenHarvest completely transformed our farm's productivity while helping us reduce our environmental impact. Their sustainable farming methods have increased our yield by 40% over the past year.",
    author: "Sarah Johnson",
    position: "Owner",
    company: "Willow Creek Farm",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    content: "The soil restoration program recommended by GreenHarvest has breathed new life into our century-old family farm. Their knowledgeable team provided personalized solutions that respected our heritage while embracing sustainable innovations.",
    author: "Michael Thompson",
    position: "Director",
    company: "Heritage Valley Farms",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80"
  },
  {
    content: "As a first-generation farmer, I was overwhelmed by the challenges of starting a sustainable operation. GreenHarvest guided me every step of the way, from soil preparation to crop selection. Their support has been invaluable.",
    author: "Emily Nguyen",
    position: "Founder",
    company: "New Roots Cooperative",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding bg-agri-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the farms and agricultural businesses we've worked with across the country.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal-animation">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-agri-green">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <blockquote className="italic text-lg text-gray-700 mb-6">
                    "{currentTestimonial.content}"
                  </blockquote>
                  <div className="font-bold text-agri-green-dark">{currentTestimonial.author}</div>
                  <div className="text-gray-600">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          {testimonials.map((_, index) => (
            <Button 
              key={index} 
              variant="outline"
              size="icon"
              className={`rounded-full border-agri-green ${
                index === activeIndex 
                ? "bg-agri-green text-white" 
                : "text-agri-green hover:bg-agri-green hover:text-white"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
