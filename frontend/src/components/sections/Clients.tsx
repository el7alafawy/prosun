import { clientTypes } from "@/lib/data/clients";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Clients() {
  return (
    <section id="clients" className="py-24 lg:py-28 bg-surface">
      <div className="container-prosun">
        <SectionHead
          eyebrow="من نخدم"
          title={
            <>
              كيف <span className="highlight">تدعمكم</span> PROSUN
            </>
          }
          lead="نعمل مع المستثمرين والجهات التي تؤمن بأهمية المنهجيات المؤسسية والعلمية في تطوير وإدارة الاستثمار بقطاع الطفولة المبكرة."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((c) => (
            <Reveal key={c.title}>
              <div
                className={`group p-8 px-7 rounded-lg border transition-all hover:-translate-y-1.5 hover:shadow-lg h-full ${
                  c.cta
                    ? "bg-gradient-to-br from-accent to-accent-dark text-white border-accent hover:shadow-accentLg"
                    : "bg-white border-line hover:border-primary"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all ${
                    c.cta
                      ? "bg-white/20 text-white"
                      : "bg-surface-soft text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <i className={c.icon} />
                </div>
                <h4 className={`text-lg font-bold mb-2.5 ${c.cta ? "text-white" : "text-primary"}`}>
                  {c.title}
                </h4>
                <p className={`text-sm leading-loose mb-4 ${c.cta ? "text-white/95" : "text-ink-muted"}`}>
                  {c.description}
                </p>
                {c.cta && (
                  <Button href="/#contact" variant="light" size="sm">
                    انضم الآن
                  </Button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
