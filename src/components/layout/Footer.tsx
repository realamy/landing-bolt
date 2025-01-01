import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerSections = {
  company: {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  customers: {
    title: "For Customers",
    links: ["How it works", "Safety", "Support", "Mobile app"],
  },
  professionals: {
    title: "For Professionals",
    links: ["Join as Pro", "Success stories", "Resources"],
  },
  legal: {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookie policy"],
  },
};

export function Footer() {
  return (
    <footer className="bg-card mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold">Subscribe to our newsletter</h4>
                <div className="mt-2 flex max-w-md gap-x-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button>Subscribe</Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2">Download our app</h4>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <img src="/app-store.svg" alt="App Store" className="h-8" />
                  </Button>
                  <Button variant="outline">
                    <img src="/play-store.svg" alt="Play Store" className="h-8" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-2">Follow us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Contact</h4>
                <address className="text-muted-foreground not-italic">
                  123 Business Street<br />
                  Algiers, 16000<br />
                  Algeria<br />
                  <a href="tel:+213-123-456789" className="hover:text-primary">
                    +213-123-456789
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Visible. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">English</Button>
            <Button variant="ghost" size="sm">Français</Button>
            <Button variant="ghost" size="sm">العربية</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}