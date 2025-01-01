import { LucideIcon } from "lucide-react";
import { Badge } from "./badge";
import { Card } from "./card";
import { Star } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    name: string;
    description: string;
    professionals: string;
    avgPrice: string;
    rating: number;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative p-6">
        <div className="mb-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{service.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{service.rating}</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
        </div>

        <div className="space-y-2">
          <Badge variant="secondary" className="w-full justify-center">
            {service.avgPrice}
          </Badge>
          <p className="text-xs text-center text-muted-foreground">
            {service.professionals}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-primary p-4 text-primary-foreground transition-transform group-hover:translate-y-0">
          <span className="text-sm font-medium">View Details →</span>
        </div>
      </div>
    </Card>
  );
}