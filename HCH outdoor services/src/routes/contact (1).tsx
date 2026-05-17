import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HCH Outdoor Services" },
      { name: "description", content: "Request a free lawn care quote in Zumbrota, MN. Call (507) 696-6001 or send us a message." },
      { property: "og:title", content: "Contact — HCH Outdoor Services" },
      { property: "og:description", content: "Get in touch with HCH Outdoor Services for a free quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-3 text-balance font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">Let's make your yard look great.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Tell us a little about your property and what you need. We'll follow up within one business day.</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Call us" line="(507) 696-6001" href="tel:+15076966001" />
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Visit" line="590 Sequoia Ln, Zumbrota, MN 55992" />
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Hours" line="Mon–Fri · 8 AM – 4 PM" />
            <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" line="hchoutdoors@yahoo.com" href="mailto:hchoutdoors@yahoo.com" />
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">Thanks — we've got your request.</h2>
                  <p className="mt-3 max-w-sm text-muted-foreground">We'll be in touch within one business day. For anything urgent, give us a call.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Property address" name="address" />
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="service">Service interested in</label>
                    <select id="service" name="service" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Lawn mowing</option>
                      <option>Landscaping & mulch</option>
                      <option>Fertilization & weed control</option>
                      <option>Spring / fall cleanup</option>
                      <option>Snow removal</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Tell us about your project</label>
                    <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Yard size, frequency, anything we should know..." />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5 sm:w-auto">
                    Send request <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, line, href }: { icon: React.ReactNode; title: string; line: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 font-medium text-foreground">{line}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground" htmlFor={name}>
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}