import { founder } from "@/lib/data/founder";
import { Reveal } from "@/components/ui/Reveal";

export function Founder() {
  return (
    <section id="founder" className="py-24 lg:py-28 bg-surface">
      <div className="container-prosun grid gap-14 lg:gap-16 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <Reveal>
            <span className="section-eyebrow">خبرة المؤسس</span>
            <h2 className="section-title">
              +{founder.yearsExperience} سنة من <span className="highlight">الخبرة المتخصصة</span>
            </h2>
            <p className="section-lead">{founder.bio}</p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
            {founder.expertise.map((e) => (
              <Reveal as="li" key={e}>
                <span className="flex gap-2.5 items-start text-sm leading-relaxed text-ink">
                  <i className="fa-solid fa-circle-check text-accent mt-1 flex-shrink-0" />
                  {e}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <div className="relative bg-gradient-to-br from-primary to-primary-dark text-white p-12 px-10 rounded-lg overflow-hidden">
            <span className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/15 rounded-full" />
            <i className="fa-solid fa-quote-right text-5xl text-accent mb-4 block" />
            <p className="relative text-base leading-loose mb-6">«{founder.quote}»</p>
            <div className="relative pt-4 border-t border-white/15">
              <strong className="block text-accent text-base mb-0.5">{founder.quoteTitle}</strong>
              <span className="text-[13px] opacity-80">{founder.quoteAuthor}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
