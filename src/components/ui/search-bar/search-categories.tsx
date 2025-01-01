import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Briefcase } from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "All Categories", value: "all", icon: Briefcase },
  { label: "Digital Services", value: "digital" },
  { label: "Home Services", value: "home" },
  { label: "Professional Services", value: "professional" },
  { label: "Events & Entertainment", value: "events" },
  { label: "Health & Wellness", value: "health" },
];

export function SearchCategories() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full md:w-[200px] h-12 justify-between bg-muted/30 border-2 hover:bg-muted/50"
        >
          <span className="flex items-center gap-2">
            {categories.find((category) => category.value === value)?.label}
          </span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                }}
                className="flex items-center gap-2 py-3"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}