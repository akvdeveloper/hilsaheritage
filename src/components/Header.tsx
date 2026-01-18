import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant'
          : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Hilsa Heritage
              </span>
              <span className={`text-xs tracking-[0.3em] uppercase ${isScrolled ? 'text-accent' : 'text-accent'}`}>
                Hotel & Banquet Hall
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-base font-medium tracking-wide transition-all duration-300 relative py-2 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white hover:text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+919204909192" 
              className={`flex items-center gap-2 transition-colors ${
                isScrolled 
                  ? 'text-primary hover:text-accent' 
                  : 'text-white hover:text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="font-display text-sm font-medium">+91 92049 09192</span>
            </a>
            <Link to="/contact">
              <Button variant="gold" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-elegant animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 font-display text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-accent bg-secondary'
                      : 'text-foreground hover:text-accent hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 py-4 border-t border-border mt-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="gold" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
