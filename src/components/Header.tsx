import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Product", 
    href: "/product",
    submenu: [
      { name: "Overview", href: "/product" },
      { name: "yKOS Lite", href: "/product/lite" },
      { name: "yKOS Full", href: "/product/full" }
    ]
  },
  { 
    name: "Proof", 
    href: "/proof",
    submenu: [
      { name: "Case Studies", href: "/proof/case-studies" },
      { name: "Unit Economics", href: "/proof/economics" },
      { name: "Testimonials", href: "/proof/testimonials" }
    ]
  },
  { name: "For Operators", href: "/operators" },
  { name: "For Brands", href: "/brands" },
  { name: "For Consumers", href: "/consumers" },
  { name: "Technology", href: "/technology" },
  { name: "Team", href: "/team" },
  { name: "Investors", href: "/investors" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">Y</span>
          </div>
          <span className="font-bold text-xl">Yuvya</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.slice(0, 6).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="minimal" size="sm">
            Contact
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="minimal" className="w-full">
                  Contact
                </Button>
                <Button variant="hero" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};