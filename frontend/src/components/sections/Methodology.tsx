import { pillars } from "@/lib/data/pillars";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Methodology() {
  return (
    <section
      id="methodology"
      className="relative py-24 lg:py-28 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden"
    >
      <span className="absolute -top-24 -right-24 w-[400px] h-[400px] pointer-events-none bg-accent/20 blur-3xl rounded-full" />

      <div className="container-prosun relative">
        <SectionHead
          eyebrow="منهجية العمل"
          title={
            <>
              أربع ركائز <span className="highlight">تشغيلية واستثمارية</span>
            </>
          }
          lead="تهدف إلى دعم بناء نماذج أكثر جاهزية واستدامة وقابلية للنمو داخل قطاع الطفولة المبكرة."
          center
          light
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {pillars.map((p, i) => (
            <Reveal key={p.number}>
              <div className="text-center px-3 group h-full relative">
                <div className="w-24 h-24 mx-auto mb-5 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center font-display text-3xl font-extrabold text-accent relative transition-all group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                  <span>{p.number}</span>
                  <span className="absolute -inset-2 border border-dashed border-white/20 rounded-full animate-spinSlow" />
                </div>
                <h4 className="text-white text-xl font-bold mb-2.5">{p.title}</h4>
                <p className="text-white/80 text-sm leading-loose">{p.description}</p>
                {i < pillars.length - 1 && (
                  <span className="hidden lg:block absolute top-12 left-0 -translate-x-1/2 w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
