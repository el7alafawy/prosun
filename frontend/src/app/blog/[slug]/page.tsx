import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/data/posts";
import { PageShell } from "@/components/layout/PageShell";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | PROSUN`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="py-20 lg:py-28 bg-surface">
        <div className="container-prosun max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-bold text-sm mb-6 hover:gap-3 transition-all">
            <i className="fa-solid fa-arrow-right" /> العودة إلى المدونة
          </Link>
          <span className="inline-block text-accent text-sm font-bold tracking-widest mb-3">{post.tag}</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-ink-muted text-sm mb-8 pb-6 border-b border-line">
            <span>
              <i className="fa-regular fa-user ml-1.5 text-accent" /> {post.author}
            </span>
            <span>
              <i className="fa-regular fa-calendar ml-1.5 text-accent" />{" "}
              {new Date(post.date).toLocaleDateString("ar-SA")}
            </span>
          </div>
          <div className="h-56 md:h-72 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-7xl rounded-lg mb-10">
            <i className={post.cover} />
          </div>
          <p className="text-ink leading-loose text-lg whitespace-pre-line">{post.body}</p>
        </div>
      </article>
    </PageShell>
  );
}
