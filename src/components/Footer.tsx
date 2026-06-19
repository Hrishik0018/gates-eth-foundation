import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Newsletter } from "./Newsletter";
import logo from "@/assets/logo/logo.png";
export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--navy-deep)] text-white">
      <div className="absolute inset-0 opacity-30 gradient-hero" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
  src={logo}
  alt="Gates ETH Foundation"
  className="h-14 w-14 object-contain"
/>
              <div>
                <div className="font-display text-xl font-semibold">Gates ETH Foundation</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Empowering Communities, Fostering Growth</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              Born in India. Serving communities with purpose. Gates ETH Foundation is a community-driven non-profit organization committed to inclusion, women empowerment, youth development, mental wellness and sustainable community growth. Born in India and serving communities with purpose since 2011.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-[var(--saffron)] hover:text-[var(--navy-deep)] transition-colors" aria-label="social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-white/90">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["/about", "About"],
                ["/programs", "Programs"],
                ["/gallery", "Gallery"],
                ["/volunteer", "Volunteer"],
                ["/podcast", "Podcast"],
                ["/donate", "Donate"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-[var(--saffron)] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-white/90">Reach Us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--teal)]" /> Sector 78, Noida, Uttar Pradesh, India</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--teal)]" /> hello@gatesethfoundation.org</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--teal)]" /> +91 99102 72853</li>
            </ul>
            <div className="mt-5 text-xs text-white/50 leading-relaxed">
              Community-Driven Foundation
Established 2011
Born in India<br/> 
            </div>
          </div>

          <div>
            <Newsletter />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Gates ETH Foundation. Born in India. Serving communities with purpose.</div>
         <div className="flex gap-5">
  <Link to="/about" className="hover:text-white">About</Link>
  <Link to="/contact" className="hover:text-white">Contact</Link>
  <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
  <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
</div>
        </div>
      </div>
    </footer>
  );
}
