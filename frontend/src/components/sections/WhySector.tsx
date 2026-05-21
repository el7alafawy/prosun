import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const items = [
  {
    icon: "fa-solid fa-arrow-trend-up",
    title: "نمو متسارع",
    text: "سوق متنامٍ مدفوع بمستهدفات رؤية المملكة 2030 وارتفاع الطلب على خدمات الطفولة المبكرة.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "طلب متزايد",
    text: "ارتفاع مشاركة المرأة في سوق العمل يرفع الحاجة لخدمات الرعاية والتعليم المبكر الاحترافية.",
  },
  {
    icon: "fa-solid fa-medal",
    title: "فرص للتميّز",
    text: "فرصة لتطوير نماذج استثمار وتشغيل أكثر احترافية قادرة على تلبية الطلب ورفع جودة الخدمات.",
  },
  {
    icon: "fa-solid fa-puzzle-piece",
    title: "تحديات تشغيلية",
    text: "تحديات في التشغيل والجودة والحوكمة وإدارة التكاليف تتطلب منهجية مؤسسية واضحة.",
  },
];

export function WhySector() {
  return (
    <section id="why" className="py-24 lg:py-28 bg-surface-soft">
      <div className="container-prosun">
        <SectionHead
          eyebrow="لماذا قطاع الطفولة المبكرة"
          title={
            <>
              فرصة استثمارية واعدة <span className="highlight">في سوق متنامٍ</span>
            </>
          }
          lead="يشهد القطاع نموًا متسارعًا مدفوعًا بمستهدفات رؤية المملكة 2030، وارتفاع مشاركة المرأة في سوق العمل، وتزايد الطلب على خدمات الرعاية والتعليم المبكر."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <Reveal key={it.title}>
              <div className="group relative bg-white p-9 px-7 rounded text-center border border-line transition-all hover:-translate-y-2 hover:shadow-lg overflow-hidden h-full">
                <span className="absolute top-0 right-0 left-0 h-1 bg-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform" />
                <div className="w-20 h-20 mx-auto mb-5 bg-accent-light text-accent rounded-3xl flex items-center justify-center text-3xl transition-all group-hover:bg-accent group-hover:text-white group-hover:-rotate-6 group-hover:scale-105">
                  <i className={it.icon} />
                </div>
                <h4 className="text-primary text-lg font-bold mb-2.5">{it.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
