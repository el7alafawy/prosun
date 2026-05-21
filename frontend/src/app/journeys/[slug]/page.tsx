import { notFound } from "next/navigation";
import { journeys } from "@/lib/data/journeys";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export async function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = journeys.find((j) => j.slug === slug);
  if (!journey) return {};
  return {
    title: `${journey.arabicName} | PROSUN`,
    description: journey.shortDesc,
  };
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = journeys.find((j) => j.slug === slug);
  if (!journey) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={journey.englishName}
        title={journey.arabicName}
        description={journey.longDesc}
      />

      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-prosun grid gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">ما يشمله</span>
            <h2 className="section-title">
              مكونات <span className="highlight">الرحلة</span>
            </h2>
            <ul className="mt-6 flex flex-col gap-3.5">
              {journey.whatsIncluded.map((w) => (
                <li key={w} className="flex gap-3 items-start text-ink">
                  <span className="w-7 h-7 bg-accent-light text-accent rounded-lg flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span className="leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <span className="section-eyebrow">المخرجات</span>
            <h2 className="section-title">
              ماذا <span className="highlight">ستحصل عليه</span>
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {journey.deliverables.map((d) => (
                <li key={d} className="bg-white border border-line rounded-lg p-4 px-5 flex gap-3 items-start hover:border-accent hover:shadow transition-all">
                  <i className="fa-solid fa-file-circle-check text-accent text-xl mt-0.5" />
                  <span className="text-ink">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-br from-accent to-accent-dark text-white text-center overflow-hidden">
        <div className="container-prosun relative">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3">
            جاهز للبدء في {journey.arabicName}؟
          </h2>
          <p className="opacity-95 mb-6">احجز استشارتك الأولى مع فريق PROSUN لمناقشة فرصتك الاستثمارية.</p>
          <Button href="/#contact" variant="light" size="lg">
            <i className="fa-solid fa-paper-plane" /> ابدأ الآن
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
