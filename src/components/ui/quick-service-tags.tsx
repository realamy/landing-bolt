import { Button } from "./button";
import { ScrollArea, ScrollBar } from "./scroll-area";

const popularTags = [
  { name: "Web Development", count: "245" },
  { name: "Graphic Design", count: "189" },
  { name: "Plumbing", count: "167" },
  { name: "Electrician", count: "154" },
  { name: "Translation", count: "143" },
  { name: "Photography", count: "132" },
  { name: "Home Repair", count: "128" },
];

export function QuickServiceTags() {
  return (
    <div className="relative">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 p-1">
          {popularTags.map((tag) => (
            <Button
              key={tag.name}
              variant="outline"
              className="flex items-center gap-2"
            >
              <span>{tag.name}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
                {tag.count}
              </span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}