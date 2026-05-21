import { journeys } from "@/lib/data/journeys";
import { posts } from "@/lib/data/posts";
import { partners } from "@/lib/data/partners";

const cards = [
  { label: "الرحلات", icon: "fa-solid fa-route", value: () => journeys.length, color: "from-blue-500 to-blue-600" },
  { label: "المقالات", icon: "fa-solid fa-newspaper", value: () => posts.length, color: "from-emerald-500 to-emerald-600" },
  { label: "الشركاء", icon: "fa-solid fa-handshake", value: () => partners.length, color: "from-amber-500 to-amber-600" },
  { label: "الزوار (تجريبي)", icon: "fa-solid fa-eye", value: () => 1284, color: "from-purple-500 to-purple-600" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display font-extrabold text-2xl text-primary mb-1">مرحبًا بعودتك 👋</h2>
        <p className="text-ink-muted">نظرة عامة على محتوى ومؤشرات منصة PROSUN.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {cards.map((c) => (
          <div key={c.label} className="bg-white border border-line rounded-lg p-6 hover:shadow transition-all">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center text-xl mb-4`}>
              <i className={c.icon} />
            </div>
            <div className="text-3xl font-display font-extrabold text-primary mb-1">{c.value()}</div>
            <div className="text-ink-muted text-sm">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-line rounded-lg p-7">
        <h3 className="font-display font-bold text-lg text-primary mb-4">آخر النشاطات</h3>
        <ul className="divide-y divide-line">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug} className="flex items-center justify-between py-3.5">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 bg-accent-light text-accent rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-newspaper" />
                </span>
                <div>
                  <div className="font-semibold text-primary text-sm">{p.title}</div>
                  <div className="text-ink-muted text-xs">منشور بواسطة {p.author}</div>
                </div>
              </div>
              <time className="text-ink-muted text-xs">{new Date(p.date).toLocaleDateString("ar-SA")}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
