import { stats } from "@/lib/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
      <span className="absolute -top-24 left-[10%] w-[300px] h-[300px] rounded-full blur-3xl opacity-15 bg-accent" />
      <span className="absolute -bottom-20 right-[10%] w-[250px] h-[250px] rounded-full blur-3xl opacity-40 bg-primary-light" />
      <div className="container-prosun relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="p-5">
                <div className="w-[70px] h-[70px] mx-auto mb-4 bg-white/10 text-accent rounded-full flex items-center justify-center text-3xl border border-white/15">
                  <i className={s.icon} />
                </div>
                <div className="inline-flex items-baseline gap-1">
                  <strong className="font-display font-black text-5xl text-white leading-none">
                    <AnimatedCounter target={s.count} />
                  </strong>
                  {s.plus && <span className="text-accent text-3xl font-extrabold">+</span>}
                </div>
                <p className="text-white/85 mt-2.5">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
