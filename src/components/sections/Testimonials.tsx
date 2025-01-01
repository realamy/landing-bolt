import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Amrani",
    role: "Homeowner",
    content: "Found an amazing electrician through Visible. The service was professional and the pricing was transparent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
  },
  {
    name: "Karim Benali",
    role: "Business Owner",
    content: "Visible has transformed how we handle office maintenance. Quick, reliable, and professional service every time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
  },
  {
    name: "Amina Khelifi",
    role: "Interior Designer",
    content: "As a designer, I regularly recommend Visible to my clients. The quality of work from their professionals is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from satisfied customers across Algeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}