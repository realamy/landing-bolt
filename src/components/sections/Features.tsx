import { FeatureCard } from "@/components/ui/feature-card";
import { StatsSection } from "@/components/ui/stats-section";
import { BadgeCheck, CreditCard, HeartHandshake, MessageSquare, Shield, Star } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description: "Every professional undergoes a thorough verification process to ensure quality and reliability",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your payments are protected with bank-level security and released only when you're satisfied",
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Make informed decisions with genuine ratings and detailed reviews from real customers",
  },
  {
    icon: Shield,
    title: "Service Guarantee",
    description: "Get peace of mind with our 100% satisfaction guarantee on all services",
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you, any time of day or night",
  },
  {
    icon: HeartHandshake,
    title: "Instant Booking",
    description: "Book services instantly with available professionals in your area",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Why Choose Visible</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the best service platform with features designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <StatsSection />
      </div>
    </section>
  );
}