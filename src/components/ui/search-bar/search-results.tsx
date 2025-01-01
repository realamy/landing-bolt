import { Command, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Briefcase, Code, Home, Paintbrush, Search, Star, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const popularSearches = [
  { text: "Web Developer", icon: Code },
  { text: "House Cleaning", icon: Home },
  { text: "Graphic Designer", icon: Paintbrush },
];

const topProfessionals = [
  {
    name: "Ahmed Kaci",
    role: "Full Stack Developer",
    rating: 4.9,
    reviews: 127,
    location: "Algiers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
  },
  {
    name: "Lina Mansouri",
    role: "UI/UX Designer",
    rating: 5.0,
    reviews: 89,
    location: "Oran",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
  },
];

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  return (
    <Command className="rounded-xl border shadow-lg bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Search Results</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="h-[400px] md:h-[500px]">
        {!query && (
          <CommandGroup heading="Popular Searches">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
              {popularSearches.map((search) => (
                <CommandItem
                  key={search.text}
                  className="flex items-center gap-2 p-3 cursor-pointer hover:bg-muted/50 rounded-lg"
                >
                  <search.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="flex-1">{search.text}</span>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CommandItem>
              ))}
            </div>
          </CommandGroup>
        )}

        <CommandGroup heading="Top Rated Professionals">
          <div className="grid gap-2 p-2">
            {topProfessionals.map((pro) => (
              <CommandItem
                key={pro.name}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-muted/50 rounded-lg"
              >
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{pro.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-primary text-primary inline mr-1" />
                      {pro.rating} ({pro.reviews})
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{pro.role}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {pro.location}
                  </div>
                </div>
              </CommandItem>
            ))}
          </div>
        </CommandGroup>
      </ScrollArea>
    </Command>
  );
}