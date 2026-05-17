import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — HCH Outdoor Services" },
      { name: "description", content: "A look at recent lawn care, landscaping, and snow removal projects in Zumbrota, MN." },
      { property: "og:title", content: "Portfolio — HCH Outdoor Services" },
      { property: "og:description", content: "Recent work from HCH Outdoor Services in Zumbrota, Minnesota." },
      { property: "og:image", content: p1 },
    ],
  }),
  component: PortfolioPage,
});

const work = [
  { src: p1, alt: "Professional mowing service", title: "Weekly Mowing", tag: "Residential" },
  { src: p2, alt: "Landscaped front yard", title: "Front Yard Refresh", tag: "Landscape" },
  { src: p3, alt: "Fresh mulch installation", title: "Spring Mulching", tag: "Beds & Mulch" },
  { src: p5, alt: "Mowing stripes from above", title: "Striped Cut", tag: "Mowing" },
  { src: p6, alt: "Healthy green grass close-up", title: "Healthy Turf", tag: "Fertilization" },
  { src: p4, alt: "Snow plowing a driveway", title: "Driveway Plowing", tag: "Snow Removal" },
];

function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</p>
          <h1 className="mt-3 text-balance font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">Recent work, real results.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">A snapshot of yards and properties we've cared for around Zumbrota and southeast Minnesota.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w, idx) => (
              <figure
                key={w.title}
                className={`group relative overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-elegant ${
                  idx === 0 || idx === 4 ? "sm:row-span-2 sm:aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img src={w.src} alt={w.alt} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-background/80">{w.tag}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-background">{w.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}