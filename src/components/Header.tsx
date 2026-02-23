import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const programLinks = [
  { label: "ASPIRE – Foundation", path: "/programs/aspire" },
  { label: "ACCELERATE – Advanced", path: "/programs/accelerate" },
  { label: "ASCEND – Specialization", path: "/programs/ascend" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Jobseekers", path: "/jobseekers" },
  { label: "Employers", path: "/employers" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isProgramActive = location.pathname.startsWith("/programs");
  const isHome = location.pathname === "/";
  const showTransparent = isHome && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!showTransparent
        ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/logo-rampex.svg"
              alt="RAMPeX Logo"
              className={`h-8 md:h-10 w-auto object-contain transition-all ${showTransparent ? "brightness-0 invert" : ""
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide uppercase transition-all relative group ${isActive(link.path)
                    ? "text-primary"
                    : !showTransparent ? "text-muted-foreground" : "text-white/90"
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive(link.path) ? "w-full" : ""}`} />
                </Link>
              </motion.div>
            ))}

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                onMouseEnter={() => setProgramsOpen(true)}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${isProgramActive
                  ? "text-primary"
                  : !showTransparent ? "text-muted-foreground" : "text-white/90"
                  }`}
              >
                Our Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <div
                  onMouseLeave={() => setProgramsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2"
                >
                  {programLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/employers"
                className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-bold tracking-wide rounded-md hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-all"
              >
                Partner With Us
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${!showTransparent ? "text-primary" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-medium tracking-wide uppercase ${isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`flex items-center gap-1 py-3 text-sm font-medium tracking-wide uppercase w-full ${isProgramActive ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                Our Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <div className="pl-4 space-y-1">
                  {programLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/employers"
              className="block mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-md text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
