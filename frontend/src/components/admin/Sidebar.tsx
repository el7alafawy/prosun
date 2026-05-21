"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const items = [
  { href: "/admin", label: "لوحة التحكم", icon: "fa-solid fa-chart-pie" },
  { href: "/admin/journeys", label: "الرحلات", icon: "fa-solid fa-route" },
  { href: "/admin/blog", label: "المدونة", icon: "fa-solid fa-newspaper" },
  { href: "/admin/partners", label: "الشركاء", icon: "fa-solid fa-handshake" },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    document.cookie = "admin_session=; path=/; max-age=0";
    router.push("/login");
    router.refresh();
  };

  return (
    <aside className="w-64 bg-primary-dark text-white flex flex-col fixed top-0 right-0 h-screen z-40">
      <Link href="/admin" className="flex items-center gap-3 px-6 py-5 border-b border-white/10 font-extrabold text-xl">
        <span className="relative w-9 h-9 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark">
          P
          <span className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-white" />
        </span>
        <span>
          PRO<strong className="text-accent">SUN</strong>
        </span>
      </Link>
      <nav className="flex-1 p-4 flex flex-col gap-1">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                active ? "bg-accent text-white" : "text-white/75 hover:bg-white/5 hover:text-white"
              }`}
            >
              <i className={`${it.icon} w-5 text-center`} />
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white/75 hover:bg-white/5 hover:text-white transition-all"
        >
          <i className="fa-solid fa-arrow-up-right-from-square w-5 text-center" />
          الموقع العام
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-white/75 hover:bg-red-500/20 hover:text-red-300 transition-all"
        >
          <i className="fa-solid fa-right-from-bracket w-5 text-center" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
