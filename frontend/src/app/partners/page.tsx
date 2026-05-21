import { partners } from "@/lib/data/partners";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata = {
  title: "الشركاء والعروض | PROSUN",
  description: "شركاء PROSUN في قطاع الطفولة المبكرة والعروض الترويجية المتاحة.",
};

export default function PartnersPage() {
  const promos = partners.filter((p) => p.promo);

  return (
    <PageShell>
      <PageHero
        eyebrow="الشركاء"
        title={
          <>
            شراكات تصنع <span className="text-accent">الأثر</span>
          </>
        }
        description="نعمل مع جهات رائدة في قطاع الطفولة المبكرة والاستثمار التعليمي لتقديم نماذج تشغيل احترافية ومستدامة."
      />

      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-prosun">
          <SectionHead
            eyebrow="شركاؤنا"
            title={
              <>
                جميع <span className="highlight">الشركاء</span>
              </>
            }
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <Reveal key={p.name}>
                <div className="group bg-white border border-line rounded p-7 px-4 flex flex-col items-center justify-center gap-3 text-center transition-all hover:-translate-y-1 hover:shadow hover:border-accent h-full">
                  <i className={`${p.icon} text-4xl text-primary opacity-50 transition-all group-hover:text-accent group-hover:opacity-100`} />
                  <span className="text-ink-muted text-[13px] font-semibold group-hover:text-primary">{p.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {promos.length > 0 && (
        <section className="py-20 lg:py-24 bg-surface-soft">
          <div className="container-prosun">
            <SectionHead
              eyebrow="عروض وبرامج"
              title={
                <>
                  عروض <span className="highlight">الشركاء</span>
                </>
              }
              lead="عروض حصرية ومبادرات مشتركة مع شركاء PROSUN."
              center
            />
            <div className="grid sm:grid-cols-2 gap-7">
              {promos.map((p) => (
                <Reveal key={p.name}>
                  <div className="relative bg-white border border-line rounded-lg p-8 px-7 hover:shadow-lg hover:border-accent transition-all overflow-hidden">
                    <span className="absolute top-0 right-0 bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-bl-lg">
                      عرض
                    </span>
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-accent-light text-accent rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                        <i className={p.icon} />
                      </div>
                      <div>
                        <span className="block text-ink-muted text-[13px] mb-1">{p.name}</span>
                        <h3 className="text-primary text-lg font-bold mb-2">{p.promo!.title}</h3>
                        <p className="text-ink-muted text-sm leading-relaxed">{p.promo!.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
