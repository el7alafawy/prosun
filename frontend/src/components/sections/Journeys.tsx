import Link from "next/link";
import { journeys } from "@/lib/data/journeys";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Journeys() {
  return (
    <section id="journeys" className="py-24 lg:py-28 bg-surface">
      <div className="container-prosun">
        <SectionHead
          eyebrow="كيف نعمل"
          title={
            <>
              أربع رحلات <span className="highlight">تطوير مترابطة</span>
            </>
          }
          lead="صُممت لدعم بناء نماذج استثمار وتشغيل أكثر احترافية واستدامة وقابلية للنمو، تغطي دورة حياة الاستثمار من القرار إلى التوسع."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((j) => (
            <Reveal key={j.slug}>
              <article
                className={`group relative rounded-lg p-9 px-7 border overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg h-full ${
                  j.highlighted
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white border-primary"
                    : "bg-white border-line hover:border-accent"
                }`}
              >
                <span
                  className={`absolute -bottom-16 -left-16 w-44 h-44 rounded-full transition-all group-hover:scale-[1.4] ${
                    j.highlighted
                      ? "bg-white/5 group-hover:bg-accent/15"
                      : "bg-surface-soft group-hover:bg-accent-light"
                  }`}
                />
                <div
                  className={`absolute top-5 left-5 font-display font-black text-5xl leading-none ${
                    j.highlighted ? "text-white/10" : "text-surface-alt"
                  }`}
                >
                  {j.number}
                </div>
                <div className="relative z-10">
                  <div
                    className={`w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-3xl text-white mb-5 transition-all group-hover:-rotate-6 ${
                      j.highlighted
                        ? "bg-gradient-to-br from-accent to-accent-dark"
                        : "bg-gradient-to-br from-primary to-primary-light group-hover:from-accent group-hover:to-accent-dark"
                    }`}
                  >
                    <i className={j.icon} />
                  </div>
                  <h3 className="text-accent text-sm font-bold tracking-widest mb-1">{j.englishName}</h3>
                  <h4 className={`text-xl font-extrabold mb-3.5 ${j.highlighted ? "text-white" : "text-primary"}`}>
                    {j.arabicName}
                  </h4>
                  <p
                    className={`text-sm leading-loose mb-5 ${
                      j.highlighted ? "text-white/85" : "text-ink-muted"
                    }`}
                  >
                    {j.shortDesc}
                  </p>
                  <Link
                    href={`/journeys/${j.slug}`}
                    className={`inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3.5 ${
                      j.highlighted ? "text-accent" : "text-primary hover:text-accent"
                    }`}
                  >
                    اعرف أكثر <i className="fa-solid fa-arrow-left" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
