import { Button } from "@/components/ui/Button";

export function CTABand() {
  return (
    <section className="relative py-14 bg-gradient-to-br from-accent to-accent-dark text-white overflow-hidden">
      <span className="absolute -top-32 -right-24 w-[280px] h-[280px] rounded-full border-[60px] border-white/5" />
      <span className="absolute -bottom-28 -left-20 w-56 h-56 rounded-full border-[60px] border-white/5" />
      <div className="container-prosun relative flex flex-wrap items-center justify-between gap-7">
        <div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-1.5">
            هل أنت مستعد لبناء نموذج استثمار وتشغيل احترافي؟
          </h2>
          <p className="opacity-95">
            انضم إلى عملائنا المؤسسين واحصل على عناية استشارية أقرب ومخرجات قابلة للاستخدام.
          </p>
        </div>
        <Button href="/#contact" variant="light" size="lg">
          <i className="fa-solid fa-paper-plane" /> ابدأ الآن
        </Button>
      </div>
    </section>
  );
}
