import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Users, Heart, MapPin } from "lucide-react";
import owner from "@/assets/about-owner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HCH Outdoor Services" },
      { name: "description", content: "Family-owned lawn care and outdoor services in Zumbrota, MN — built on craftsmanship, consistency, and care." },
      { property: "og:title", content: "About — HCH Outdoor Services" },
      { property: "og:description", content: "The story and values behind HCH Outdoor Services." },
      { property: "og:image", content: owner },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "We sweat the small stuff — sharp edges, clean lines, careful blow-off." },
  { icon: Users, title: "Local-first", desc: "Born and based in Zumbrota. Our reputation is the whole business." },
  { icon: Heart, title: "Care", desc: "We treat your property the way we'd treat our own home." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About HCH</p>
            <h1 className="mt-3 text-balance font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">A local business, built on showing up.</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">HCH Outdoor Services is a family-owned lawn care company rooted in Zumbrota, Minnesota. We started with a single mower and a simple promise: do the work right, show up on time, and treat every yard like it matters — because it does.</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Today we care for properties across Goodhue, Wabasha, and Olmsted counties — but we still pick up the phone ourselves, and we still walk every job before we quote it.</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> 590 Sequoia Ln, Zumbrota, MN 55992
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-2xl" />
            <img src={owner} alt="HCH Outdoor Services owner" loading="lazy" width={1280} height={1280} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant" />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our values</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">What you can count on.</h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-card-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}