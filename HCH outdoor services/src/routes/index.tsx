import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Scissors, Sprout, Snowflake, Trees, ShieldCheck, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-lawn.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HCH Outdoor Services — Premium Lawn Care in Zumbrota, MN" },
      { name: "description", content: "Locally trusted lawn care, landscaping, and snow removal in Zumbrota, MN. Family-owned, fully insured, 5-star reviews." },
      { property: "og:title", content: "HCH Outdoor Services — Lawn Care in Zumbrota, MN" },
      { property: "og:description", content: "Locally trusted lawn care, landscaping, and snow removal serving Zumbrota and southeast Minnesota." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Weekly and bi-weekly mowing with clean edging, trimming, and blow-off." },
  { icon: Sprout, title: "Fertilization", desc: "Season-long programs that build thicker turf and deeper roots." },
  { icon: Trees, title: "Landscaping", desc: "Mulch, shrub trimming, edging, and curb appeal that lasts." },
  { icon: Snowflake, title: "Snow Removal", desc: "Driveway and walkway plowing — we keep your property safe all winter." },
];

const stats = [
  { value: "5.0", label: "Google rating" },
  { value: "10+", label: "Years serving" },
  { value: "100%", label: "Local & insured" },
];

const reviews = [
  { name: "Travis Chen", meta: "Local Guide · Google review", quote: "Responsive and professional from the first call. Yard looked sharp the same day they came out.", rating: 5 },
  { name: "Tenzin Bjorngaard", meta: "Google review", quote: "Punctual, professional, and excellent value. Quality work every time — highly recommend.", rating: 5 },
  { name: "Dan Torgrimson", meta: "Google review", quote: "This is the business — straightforward, reliable, and they take pride in what they do.", rating: 5 },
];

function Index() {
  return (
    <>
      <section className="relative -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Freshly manicured green lawn at golden hour" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-background/90 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5" /> Zumbrota, Minnesota
            </span>
            <h1 className="animate-fade-up animate-delay-1 mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-background sm:text-6xl lg:text-7xl">
              A yard worth coming home to.
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-background/85">
              Lawn care, landscaping, and seasonal outdoor services done right by a local team that treats your property like our own.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-elegant transition-smooth hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/5 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur-md transition-smooth hover:bg-background/15">
                Explore services
              </Link>
            </div>

            <div className="animate-fade-up animate-delay-3 mt-12 flex items-center gap-6 text-background/90">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm"><span className="font-semibold">5.0</span> · Rated by neighbors on Google</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border px-6 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center sm:py-10">
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Outdoor services, handled end-to-end.</h2>
            <p className="mt-5 text-lg text-muted-foreground">From a fresh weekly cut to full seasonal care, we make your property the best looking one on the block.</p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:gap-3">
              See full service list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why HCH</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Local crew. Real accountability.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We're your neighbors in Zumbrota. When you call, you reach the owner. When we mow, we sweep. When we're done, you'll notice.</p>

            <div className="mt-10 space-y-5">
              {[
                { icon: ShieldCheck, title: "Fully insured", desc: "Licensed, insured, and locally accountable." },
                { icon: Clock, title: "Always on time", desc: "We show up when we say we will — every visit." },
                { icon: Star, title: "5-star rated", desc: "Reviewed by your neighbors on Google." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-soft">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={portfolio1} alt="Mowing service" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-elegant" width={1280} height={960} />
              <div className="space-y-4">
                <img src={portfolio2} alt="Landscape design" loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-elegant" width={1280} height={960} />
                <img src={portfolio3} alt="Fresh mulch" loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-elegant" width={1280} height={960} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reviews</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Trusted by your neighbors.</h2>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">5.0</span> on Google</p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-elegant">
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display text-lg leading-relaxed text-card-foreground">"{r.quote}"</blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-hero px-8 py-20 text-center shadow-glow sm:px-16 sm:py-24">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-background sm:text-5xl">Ready for a yard you're proud of?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-background/85">Get a fast, no-pressure quote. We'll be in touch within 24 hours.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-elegant transition-smooth hover:-translate-y-0.5">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+15076966001" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-sm font-semibold text-background transition-smooth hover:bg-background/10">
              Call (507) 696-6001
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
