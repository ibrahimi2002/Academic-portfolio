import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../Component/Button"; // adjust path if needed

const navLinks = [
   { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
 
   
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onNavClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
          onClick={onNavClick}
        >
          RI<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
       {/* Desktop CTA (hide on mobile) */}
<a href="#contact" className="hidden md:inline-flex">
  <Button size="sm">Contact Me</Button>
</a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40  animate-fade-in">
          {/* backdrop */}
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          {/* panel */}
          <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 ">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onNavClick}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
              <a href="#contact">
  <Button size="default" className="w-full">
    Contact Me
  </Button>
</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
