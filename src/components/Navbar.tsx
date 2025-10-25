import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/Logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover:text-secondary transition-all duration-300 hover:scale-105">
            <img src={logoImage} alt="Livora Logo" className="h-8 w-auto md:h-10" />
            <span className="font-playfair hidden sm:block">Livora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-secondary after:transition-all after:duration-300 ${
                  isActive(link.path) ? "text-secondary after:w-full" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="hidden lg:flex items-center gap-4">
              <Phone className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">+1 (555) 123-4567</span>
            </div>
            <Button variant="premium" size="sm" className="hover:scale-105 transition-transform" asChild>
              <Link to="/contact">Get Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    isActive(link.path) ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">+1 (555) 123-4567</span>
              </div>
              <Button variant="premium" size="sm" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;