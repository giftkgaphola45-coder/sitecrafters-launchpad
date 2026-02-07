import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Sitecrafters
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === l.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/27602051383"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          WhatsApp Us
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                      pathname === l.to ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="https://wa.me/27602051383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
