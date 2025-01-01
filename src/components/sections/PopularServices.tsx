import { ServiceCard } from "@/components/ui/service-card";
import { Code2, Paintbrush, Wrench, Building, Camera, Megaphone, BookOpen, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    name: "Web Development",
    description: "Custom websites and web applications",
    professionals: "24K+ professionals",
    avgPrice: "Starting at 15,000 DZD",
    rating: 4.9,
  },
  {
    icon: Paintbrush,
    name: "UI/UX Design",
    description: "User interface and experience design",
    professionals: "18K+ professionals",
    avgPrice: "Starting at 12,000 DZD",
    rating: 4.8,
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Professional photo and video services",
    professionals: "15K+ professionals",
    avgPrice: "Starting at 8,000 DZD",
    rating: 4.9,
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    description: "SEO, social media, and advertising",
    professionals: "12K+ professionals",
    avgPrice: "Starting at 20,000 DZD",
    rating: 4.7,
  },
  {
    icon: Wrench,
    name: "Home Repair",
    description: "General repairs and maintenance",
    professionals: "20K+ professionals",
    avgPrice: "Starting at 5,000 DZD",
    rating: 4.8,
  },
  {
    icon: Building,
    name: "Construction",
    description: "Building and renovation services",
    professionals: "15K+ professionals",
    avgPrice: "Starting at 50,000 DZD",
    rating: 4.9,
  },
  {
    icon: BookOpen,
    name: "Translation",
    description: "Professional translation services",
    professionals: "8K+ professionals",
    avgPrice: "Starting at 3,000 DZD",
    rating: 4.8,
  },
  {
    icon: Laptop,
    name: "IT Support",
    description: "Technical support and consulting",
    professionals: "10K+ professionals",
    avgPrice: "Starting at 6,000 DZD",
    rating: 4.7,
  },
];

export function PopularServices() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Popular Services</h2>
            <p className="text-muted-foreground max-w-xl">
              Browse our most requested services and find the perfect match for your needs, 
              with transparent pricing and verified reviews
            </p>
          </div>
          <Button size="lg" className="mt-6 md:mt-0">
            View All Categories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}