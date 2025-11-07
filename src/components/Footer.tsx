import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-md">
                <img src="/logot.png" alt="Livora Logo" className="h-14 w-auto" />
              </div>
              <span className="text-2xl font-bold font-playfair"></span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transform your home with our premium interior design services. Quality guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Modular Kitchen</li>
              <li>Wardrobe Design</li>
              <li>Interior Design</li>
              <li>False Ceiling</li>
              <li>Wallpaper & Paint</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  2-3-723, Flat no 303, SS Homes, 6 NO X roads, Amberpet, Hyderabad - 500013
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:Contact@livora.design" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Contact@livora.design
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:+917799188869" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Mobile and WhatsApp: 77991 88869
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Livora Interiors. All rights reserved. | 
            Designed and Developed by{' '}
            <a 
              href="https://www.vikrin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Vikrin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;