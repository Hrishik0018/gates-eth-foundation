import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import logo from "@/assets/logo/logo.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/jugnu", label: "Jugnu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/podcast", label: "Podcast" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elevated" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
  <img
    src={logo}
    alt="Gates ETH Foundation"
    className="h-12 w-12 object-contain"
  />
</div>
            <div className="leading-tight">
              <div className={`font-display text-base font-semibold ${scrolled ? "text-[var(--navy-deep)]" : "text-white"}`}>
                Gates ETH Foundation
              </div>
              <div className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-[var(--teal)]" : "text-white/70"}`}>
                Born in India · Since 2011
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-2.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled ? "text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]/40" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                activeProps={{
                  className: scrolled
                    ? "relative px-2.5 py-2 text-sm font-semibold rounded-lg text-[var(--teal)] bg-[var(--teal-soft)]/50"
                    : "relative px-2.5 py-2 text-sm font-semibold rounded-lg text-white bg-white/15",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/volunteer"
              className={`hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                scrolled ? "bg-[var(--teal-soft)]/50 text-[var(--navy-deep)] hover:bg-[var(--teal-soft)]" : "bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--saffron)] px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)] shadow-elevated hover:scale-[1.03] transition-transform"
            >
              <Heart className="h-4 w-4" /> Donate
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`xl:hidden grid place-items-center h-10 w-10 rounded-xl ${scrolled ? "bg-[var(--secondary)] text-[var(--navy-deep)]" : "bg-white/10 text-white"}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden mt-2 glass rounded-2xl p-3 animate-fade-in">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[var(--navy-deep)] rounded-lg hover:bg-[var(--teal-soft)]/40"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/volunteer" onClick={() => setOpen(false)} className="mt-1 px-4 py-3 text-sm font-medium text-[var(--navy-deep)] rounded-lg hover:bg-[var(--teal-soft)]/40">Volunteer</Link>
              <Link to="/donate" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--saffron)] px-4 py-3 text-sm font-semibold text-[var(--navy-deep)]">
                <Heart className="h-4 w-4" /> Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
