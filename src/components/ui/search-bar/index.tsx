import { Input } from "@/components/ui/input";
import { SearchCategories } from "./search-categories";
import { SearchResults } from "./search-results";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [location, setLocation] = useState("Algiers");

  return (
    <div className="relative w-full">
      {/* Main Search Container */}
      <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 space-y-3">
        {/* Search Fields */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Service Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="What service are you looking for?"
              className="pl-10 h-12 text-base bg-muted/30 border-2 focus:border-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowResults(true)}
            />
          </div>

          {/* Location Search */}
          <div className="relative md:w-[200px]">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Location"
              className="pl-10 h-12 text-base bg-muted/30 border-2 focus:border-primary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Category Selection - Hidden on Mobile */}
          <div className="hidden md:block">
            <SearchCategories />
          </div>

          {/* Search Button */}
          <Button size="lg" className="w-full md:w-auto h-12">
            Search
          </Button>
        </div>

        {/* Category Selection - Visible on Mobile */}
        <div className="md:hidden">
          <SearchCategories />
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <SearchResults 
            query={query} 
            onClose={() => setShowResults(false)}
          />
        </div>
      )}
    </div>
  );
}