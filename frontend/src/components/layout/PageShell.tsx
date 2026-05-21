import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-20 md:py-24 overflow-hidden">
      <span className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 bg-accent" />
      <span className="absolute -bottom-12 left-[10%] w-[300px] h-[300px] rounded-full blur-3xl opacity-20 bg-[#4a7bc8]" />
      <div className="container-prosun relative">
        <span className="inline-block text-accent font-bold text-sm tracking-widest mb-3.5">{eyebrow}</span>
        <h1 className="font-display font-extrabold leading-tight text-4xl md:text-5xl lg:text-[52px] mb-4">
          {title}
        </h1>
        {description && <p className="text-lg leading-loose opacity-95 max-w-3xl">{description}</p>}
      </div>
    </section>
  );
}
