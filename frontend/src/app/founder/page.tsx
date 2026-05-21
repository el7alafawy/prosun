import { founder } from "@/lib/data/founder";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "خبرة المؤسس | PROSUN",
  description: founder.bio,
};

export default function FounderPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="خبرة المؤسس"
        title={
          <>
            +{founder.yearsExperience} سنة من <span className="text-accent">الخبرة المتخصصة</span>
          </>
        }
        description={founder.bio}
      />

      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-prosun grid gap-14 lg:grid-cols-[1.4fr_1fr] items-start">
          <Reveal>
            <span className="section-eyebrow">مجالات الخبرة</span>
            <h2 className="section-title">
              تخصصات <span className="highlight">عميقة</span>
            </h2>
            <p className="section-lead mb-6">
              تشمل خبرتنا التراكمية في القطاع جميع جوانب دورة حياة الاستثمار من القرار إلى التوسع المؤسسي.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {founder.expertise.map((e) => (
                <li key={e} className="bg-surface-soft border border-line rounded-lg p-4 px-5 flex gap-3 items-start hover:bg-white hover:border-accent hover:shadow-sm transition-all">
                  <i className="fa-solid fa-circle-check text-accent text-lg mt-0.5" />
                  <span className="text-ink text-sm leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-10 px-9 rounded-lg overflow-hidden sticky top-28">
              <span className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/15 rounded-full" />
              <i className="fa-solid fa-quote-right text-5xl text-accent mb-4 block" />
              <p className="relative text-base leading-loose mb-6">«{founder.quote}»</p>
              <div className="relative pt-4 border-t border-white/15 mb-6">
                <strong className="block text-accent text-base mb-0.5">{founder.quoteTitle}</strong>
                <span className="text-[13px] opacity-80">{founder.quoteAuthor}</span>
              </div>
              <Button href="/#contact" variant="primary" block>
                تواصل معنا <i className="fa-solid fa-arrow-left" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
