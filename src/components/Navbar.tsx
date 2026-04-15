import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/yoga logo.png" 
            alt="Advaita Yogashaala and Academy" 
            className="h-10 md:h-14 w-auto object-contain" 
          />
          <span className="font-heading text-sm md:text-xl font-semibold text-white tracking-tight leading-tight block">
            Advaita <span className="text-primary">Yogashala</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-white/70 hover:text-white hover:scale-105 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn-primary text-xs">Book a Session</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white hover:text-primary transition-colors">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a192f] border-t border-white/10 px-6 pb-6 pt-4 space-y-4 animate-fade-in-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn-primary text-xs block text-center">
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
