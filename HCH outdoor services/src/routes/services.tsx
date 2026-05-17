import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scissors, Sprout, Trees, Snowflake, Leaf, Wind, Droplets, Hammer } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HCH Outdoor Services" },
      { name: "description", content: "Lawn mowing, fertilization, landscaping, mulch, snow removal, and seasonal cleanup in Zumbrota, MN." },
      { property: "og:title", content: "Services — HCH Outdoor Services" },
      { property: "og:description", content: "Full-service lawn care and outdoor work in Zumbrota, Minnesota." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Weekly or bi-weekly cuts with sharp blades, clean edges, and a careful blow-off — every visit." },
  { icon: Sprout, title: "Fertilization & Weed Control", desc: "Multi-step turf programs that build thick, deep-rooted grass season after season." },
  { icon: Trees, title: "Landscape Maintenance", desc: "Shrub trimming, bed edging, weeding, and pruning to keep your property polished." },
  { icon: Leaf, title: "Mulch Installation", desc: "Premium hardwood mulch refreshed every spring for healthy plants and crisp curb appeal." },
  { icon: Wind, title: "Spring & Fall Cleanup", desc: "Leaf removal, dethatching, and a full reset of your yard between seasons." },
  { icon: Droplets, title: "Aeration & Overseeding", desc: "Open up compacted soil and thicken thin spots for a denser, healthier lawn." },
  { icon: Snowflake, title: "Snow Removal", desc: "Driveway and walkway plowing throughout the winter — reliable, on time, every storm." },
  { icon: Hammer, title: "Custom Projects", desc: "Stone edging, small landscape installs, and one-off jobs we'll quote on request." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
          <h1 className="mt-3 text-balance font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">Everything outside, handled.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">From the first cut in May to the last plow in March, we keep your property looking sharp year-round.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-2 lg:px-8 xl:grid-cols-4">
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

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-hero px-8 py-16 text-center shadow-glow sm:px-16">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-background sm:text-4xl">Not sure which service you need?</h2>
            <p className="mx-auto mt-4 max-w-xl text-background/85">Tell us about your property — we'll put together a plan and a fair quote.</p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-elegant transition-smooth hover:-translate-y-0.5">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}