import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/* Header / Navigation — GenSpark-style sticky navbar */

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#whatwedo' },
  { label: 'Courses', href: '#courses' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass shadow-2xl py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black font-heading text-primary group-hover:scale-110 transition-transform">&lt;</span>
              <span className="text-2xl font-bold font-heading tracking-tight text-white group-hover:text-primary transition-colors">
                RAMPeX
              </span>
              <span className="text-2xl font-black font-heading text-primary group-hover:scale-110 transition-transform">&gt;</span>
            </div>
            <span className="hidden sm:inline text-[9px] font-bold text-white/40 tracking-[0.3em] uppercase mt-0.5 group-hover:text-white/60 transition-colors">
              Future of Learning
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold tracking-wide uppercase text-white/70 hover:text-white transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-white hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/10 shadow-2xl absolute top-full left-0 right-0 overflow-hidden">
          <nav className="flex flex-col px-6 py-8 gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white py-2 text-base font-semibold tracking-wide border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 text-center px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest bg-primary text-white shadow-xl"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
