import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex max-w-2xl mx-auto">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="What service are you looking for?"
          className="h-14 pl-12 pr-4 rounded-l-full text-base border-r-0"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>
      <Button className="h-14 px-8 rounded-l-none rounded-r-full text-base">
        Search
      </Button>
    </div>
  );
}