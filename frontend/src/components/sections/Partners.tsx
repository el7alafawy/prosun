import { partners } from "@/lib/data/partners";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Partners() {
  return (
    <section className="py-24 lg:py-28 bg-surface-soft">
      <div className="container-prosun">
        <SectionHead
          eyebrow="شركاؤنا"
          title={
            <>
              نعمل مع <span className="highlight">جهات رائدة</span>
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
  );
}
