import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary to-primary-light text-white pt-20 pb-32 lg:pt-24 lg:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-[60px] opacity-40 bg-accent" />
        <span className="absolute -bottom-12 left-[10%] w-[300px] h-[300px] rounded-full blur-[60px] opacity-30 bg-[#4a7bc8]" />
        <span className="absolute top-2/5 -left-12 w-[200px] h-[200px] rounded-full blur-[60px] opacity-20 bg-accent" />
      </div>

      <div className="container-prosun relative grid gap-14 lg:gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-[13px] font-semibold backdrop-blur border border-white/20">
            <i className="fa-solid fa-star text-accent" /> منظومة استثمار وتشغيل احترافية
          </span>
          <h1 className="font-display font-extrabold leading-[1.25] mt-6 mb-5 text-4xl md:text-5xl lg:text-[56px]">
            هندسة الاستثمار في قطاع{" "}
            <span className="text-accent relative inline-block">
              الطفولة المبكرة
              <span className="absolute right-0 left-0 bottom-1 h-2 bg-accent/25 -z-10" />
            </span>
          </h1>
          <p className="text-lg leading-loose opacity-95 max-w-xl">
            من قرار الدخول إلى التشغيل والنمو والتوسع المؤسسي — إطار مؤسسي متكامل مدعوم بالأدوات، والنماذج التشغيلية، والحلول الرقمية.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-9">
            <Button href="/#contact" variant="primary">
              <i className="fa-solid fa-paper-plane" /> ابدأ رحلتك معنا
            </Button>
            <Button href="/#about" variant="outline">
              تعرّف على PROSUN
            </Button>
          </div>
          <div className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-white/15">
            <HeroStat value="+15" label="سنة خبرة متخصصة" />
            <HeroStat value="04" label="رحلات تطوير" />
            <HeroStat value="04" label="ركائز منهجية" />
          </div>
        </div>

        <div className="relative h-[480px] hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white/15 backdrop-blur border border-white/20 rounded-lg p-9 text-center animate-floatMain">
            <div className="w-20 h-20 mx-auto mb-5 bg-accent rounded-3xl flex items-center justify-center text-4xl">
              <i className="fa-solid fa-seedling" />
            </div>
            <h4 className="text-2xl mb-1.5 font-bold">منظومة متكاملة</h4>
            <p className="opacity-90 text-sm">تربط القرار بالتشغيل بالنمو</p>
          </div>

          <FloatCard className="top-[8%] right-0" delay="0s" icon="fa-solid fa-chart-line" label="قابلية للنمو" />
          <FloatCard className="bottom-[12%] right-[5%]" delay="1.5s" icon="fa-solid fa-shield-halved" label="الحوكمة والجودة" />
          <FloatCard className="top-[30%] left-0" delay="3s" icon="fa-solid fa-gears" label="تشغيل احترافي" />
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[100px]">
          <path d="M0,40 C320,100 720,0 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block font-display font-extrabold text-4xl text-accent">{value}</strong>
      <span className="text-[13px] opacity-85">{label}</span>
    </div>
  );
}

function FloatCard({ className, delay, icon, label }: { className: string; delay: string; icon: string; label: string }) {
  return (
    <div
      className={`absolute bg-white/10 backdrop-blur border border-white/20 rounded-lg px-5 py-3.5 flex items-center gap-3 font-semibold text-sm animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center text-base">
        <i className={icon} />
      </span>
      <span>{label}</span>
    </div>
  );
}
