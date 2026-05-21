import Link from "next/link";
import { posts } from "@/lib/data/posts";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "المدونة | PROSUN",
  description: "مقالات ورؤى حول الاستثمار والتشغيل في قطاع الطفولة المبكرة.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="المدونة"
        title="رؤى ومقالات"
        description="آخر المقالات والرؤى حول الاستثمار والتشغيل في قطاع الطفولة المبكرة في المملكة."
      />
      <section className="py-20 lg:py-24 bg-surface">
        <div className="container-prosun grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block bg-white border border-line rounded-lg overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-accent h-full"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-5xl">
                  <i className={p.cover} />
                </div>
                <div className="p-6">
                  <span className="inline-block text-accent text-xs font-bold tracking-widest mb-2">{p.tag}</span>
                  <h3 className="text-primary text-lg font-bold mb-2.5 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-ink-muted">
                    <span>{p.author}</span>
                    <time>{new Date(p.date).toLocaleDateString("ar-SA")}</time>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
