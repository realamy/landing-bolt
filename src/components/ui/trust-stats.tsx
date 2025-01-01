import { Users, Star, MapPin, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15K+",
    label: "Active freelancers",
  },
  {
    icon: Star,
    value: "25K+",
    label: "Completed projects",
  },
  {
    icon: Shield,
    value: "4.8/5",
    label: "Average rating",
  },
  {
    icon: MapPin,
    value: "58",
    label: "Wilayas covered",
  },
];

export function TrustStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="mb-2">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground text-center">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}