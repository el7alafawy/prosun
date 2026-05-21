import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const vmCards = [
  {
    icon: "fa-solid fa-eye",
    title: "رؤيتنا",
    text: "قيادة التحول في قطاع الطفولة المبكرة عبر نماذج استثمار وتشغيل قادرة على الاستدامة والنمو.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "رسالتنا",
    text: "تمكين المستثمرين ورواد الأعمال والشركات من بناء مشاريع طفولة مبكرة أكثر احترافية، عبر منهجية مؤسسية متكاملة.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "فلسفتنا",
    text: "نجاح المشاريع لا يعتمد على الفكرة وحدها، بل على جودة المنهجية التي يُبنى ويُدار ويُطوَّر من خلالها المشروع.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-28 bg-surface">
      <div className="container-prosun grid gap-14 lg:gap-16 lg:grid-cols-[1fr_1.2fr] items-center">
        <Reveal>
          <div className="relative bg-gradient-to-br from-surface-soft to-surface-alt rounded-lg h-[520px] overflow-hidden flex items-center justify-center">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary-light" />
            <i className="fa-solid fa-people-roof relative text-white text-[140px] z-10" />
            <div className="absolute bottom-7 right-7 bg-white px-6 py-4 rounded shadow flex flex-col border-r-4 border-accent">
              <strong className="text-primary text-lg font-extrabold">PROSUN</strong>
              <span className="text-ink-muted text-[13px]">منظومة احترافية</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="section-eyebrow">من نحن</span>
            <h2 className="section-title">
              منظومة <span className="highlight">PROSUN</span> للاستثمار في قطاع الطفولة المبكرة
            </h2>
            <p className="section-lead">
              PROSUN منظومة متخصصة في هندسة الاستثمار والتشغيل بقطاع الطفولة المبكرة داخل المملكة العربية السعودية،
              تعتمد على إطار مؤسسي متكامل مدعوم بالأدوات، والنماذج التشغيلية، والحلول الرقمية.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {vmCards.map((c) => (
              <Reveal key={c.title}>
                <div className="bg-surface-soft p-6 rounded border border-line transition-all hover:-translate-y-1 hover:shadow hover:border-accent hover:bg-white h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark text-white rounded-xl flex items-center justify-center text-xl mb-3.5">
                    <i className={c.icon} />
                  </div>
                  <h4 className="text-primary text-lg font-bold mb-2">{c.title}</h4>
                  <p className="text-ink-muted text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Button href="/#journeys" variant="primary">
            اكتشف منهجيتنا <i className="fa-solid fa-arrow-left" />
          </Button>
        </div>
      </div>
    </section>
  );
}
