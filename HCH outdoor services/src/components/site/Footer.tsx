import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                HCH Outdoor Services
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Family-owned lawn care and outdoor services serving Zumbrota and the
              surrounding Minnesota communities. Reliable work, fair pricing, and
              a yard you'll be proud of.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Visit</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>590 Sequoia Ln<br />Zumbrota, MN 55992</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+15076966001" className="hover:text-foreground">(507) 696-6001</a>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon–Fri · 8 AM – 4 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Get a quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HCH Outdoor Services. All rights reserved.</p>
          <p>Zumbrota · Pine Island · Wanamingo · Mazeppa · Goodhue</p>
        </div>
      </div>
    </footer>
  );
}