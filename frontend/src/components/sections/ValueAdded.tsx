import { valueProps } from "@/lib/data/valueProps";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function ValueAdded() {
  return (
    <section className="py-24 lg:py-28 bg-surface-soft">
      <div className="container-prosun">
        <SectionHead
          eyebrow="القيمة المضافة"
          title={
            <>
              ما الذي تقدمه <span className="highlight">PROSUN</span> لمشروعك
            </>
          }
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {valueProps.map((v) => (
            <Reveal key={v.text}>
              <div className="group bg-white p-5 rounded border border-line flex items-center gap-3.5 transition-all hover:-translate-x-1.5 hover:shadow hover:border-accent h-full">
                <span className="w-9 h-9 bg-accent-light text-accent rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all group-hover:bg-accent group-hover:text-white">
                  <i className="fa-solid fa-check-double" />
                </span>
                <span className="text-ink text-sm font-medium leading-relaxed">{v.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
