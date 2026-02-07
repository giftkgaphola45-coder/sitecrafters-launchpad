import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <p className="font-display text-lg font-bold">Sitecrafters</p>
        <p className="mt-1 text-sm opacity-70">Professional websites for small businesses</p>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-end">
        <a
          href="https://wa.me/27602051383"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm opacity-70 transition-opacity hover:opacity-100"
        >
          WhatsApp: 060 205 1383
        </a>
        <p className="text-xs opacity-50">© {new Date().getFullYear()} Sitecrafters. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
