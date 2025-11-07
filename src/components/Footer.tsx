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
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@livora.com</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Design Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {new Date().getFullYear()} Livora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;