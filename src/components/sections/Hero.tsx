import { QuickServiceTags } from "@/components/ui/quick-service-tags";
import { SearchBar } from "@/components/ui/search-bar";
import { Badge } from "@/components/ui/badge";
import { Shield, Briefcase, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      <div className="container relative pt-12 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Badge variant="outline" className="py-1.5 px-4 text-sm font-medium">
                <Star className="w-3.5 h-3.5 mr-1.5 fill-primary text-primary" />
                №1 in Algeria
              </Badge>
              <Badge variant="secondary" className="py-1.5 px-4 text-sm font-medium">
                4.9/5 Rating
              </Badge>
            </div>
            
            {/* Main Content */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-bold tracking-tight mb-6">
                Find{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Expert Talent
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-[0.2em] text-primary/30" viewBox="0 0 200 8">
                    <path d="M0 4C40 4 60 4 200 4" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                for Any Project
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground">
                Connect with Algeria's largest network of verified professionals 
                for digital services and home improvement
              </p>
            </div>

            {/* Search Section */}
            <div className="space-y-6 max-w-3xl mx-auto lg:mx-0">
              <SearchBar />
              <QuickServiceTags />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 max-w-2xl mx-auto lg:mx-0">
              {[
                { value: "50K+", label: "Verified Experts" },
                { value: "100K+", label: "Projects Done" },
                { value: "4.9/5", label: "Client Rating" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/50 backdrop-blur-sm space-y-1 text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images & Cards */}
          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="absolute -top-10 right-0 bg-white rounded-xl shadow-lg p-6 max-w-sm animate-float z-10">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">100% Verified</h3>
                  <p className="text-sm text-muted-foreground">
                    Every professional is thoroughly vetted
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 right-20 bg-white rounded-xl shadow-lg p-6 max-w-sm animate-float-delayed z-10">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Instant Booking</h3>
                  <p className="text-sm text-muted-foreground">
                    Book services in just a few clicks
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Professional at work"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform"
              />
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80"
                  alt="Digital work"
                  className="w-full h-[140px] object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform"
                />
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80"
                  alt="Home services"
                  className="w-full h-[140px] object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}