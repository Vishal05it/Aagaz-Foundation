import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", isRouterLink: true, path: "/" },
    { name: "About", href: "/about", isRouterLink: true, path: "/about" },
    {
      name: "What We Do",
      href: "/services",
      isRouterLink: true,
      path: "/services",
      hasDropdown: true,
    },
    { name: "Gallery", href: "/gallery", isRouterLink: true, path: "/gallery" },
    {
      name: "Stories",
      href: "/portfolio",
      isRouterLink: true,
      path: "/portfolio",
    },
    { name: "News", href: "/blog", isRouterLink: true, path: "/blog" },
    { name: "FAQ", href: "/faq", isRouterLink: true, path: "/faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-primary/10 py-3 shadow-sm"
          : "bg-white/85 backdrop-blur-sm py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Wordmark Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md">
              <Heart size={18} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl md:text-2xl font-bold text-accent tracking-tight">
                Aaghaz<span className="text-primary">.</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-text-muted uppercase mt-0.5">
                Foundation · Since 2004
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-700">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsProgramsOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsProgramsOpen(false)}
            >
              <Link
                to={link.path!}
                className={clsx(
                  "hover:text-primary transition-colors duration-300 relative group flex items-center gap-1",
                  location.pathname === link.path && "text-primary",
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-primary/10 overflow-hidden py-2">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block px-6 py-3 text-[10px] text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-bold uppercase tracking-widest"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors"
          >
            Volunteer
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-full shadow-md hover:shadow-lg"
          >
            <Heart size={14} fill="currentColor" />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-primary/10 overflow-y-auto shadow-lg"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <div className="flex flex-col space-y-4 p-6 text-sm font-medium uppercase tracking-widest text-gray-800 pb-20">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  <Link
                    to={link.path!}
                    className="hover:text-primary transition-colors flex justify-between items-center py-2"
                    onClick={() =>
                      !link.hasDropdown && setIsMobileMenuOpen(false)
                    }
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.name}
                    </motion.span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "transition-transform",
                          isProgramsOpen && "rotate-180",
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsProgramsOpen(!isProgramsOpen);
                        }}
                      />
                    )}
                  </Link>

                  {/* Mobile Submenu */}
                  {link.hasDropdown && isProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-primary/5 rounded-lg overflow-hidden ml-4 mt-2"
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-3 text-xs text-gray-700 border-b border-primary/10 last:border-none"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-secondary text-white px-6 py-3 text-center text-xs font-bold uppercase tracking-widest mt-4 block rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-6 py-3 text-center text-xs font-bold uppercase tracking-widest block rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
