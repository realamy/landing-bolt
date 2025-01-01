import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;

  return (
    <Card className="group border-0 shadow-none bg-transparent hover:bg-white/50 transition-colors">
      <CardHeader>
        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}