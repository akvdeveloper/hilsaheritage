import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold">Hilsa Heritage</h3>
              <p className="text-xs tracking-[0.3em] text-accent uppercase mt-1">
                Hotel & Banquet Hall
              </p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Elegance & Excellence For Your Dream Wedding. Experience luxury and create unforgettable moments at our premier venue.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/facilities', label: 'Facilities' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Ring Ceremony</li>
              <li>Wedding</li>
              <li>Birthday Celebrations</li>
              <li>Corporate Meetings</li>
              <li>Other Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  Main Road Hilsa, Near Mai High School,<br />
                  Hilsa - 801302 (Bihar)
                </span>
              </li>
              <li>
                <a
                  href="tel:+919204909192"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  +91 92049 09192
                </a>
              </li>
              <li>
                <a
                  href="tel:+919473252092"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  +91 94732 52092
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Hilsa Heritage Hotel & Banquet Hall. All rights reserved.</p>
          <p>Owner: Dr. Ravi Ranjan | Run By: Chandan Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
