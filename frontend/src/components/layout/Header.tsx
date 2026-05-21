"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#about", label: "من نحن" },
  { href: "/#why", label: "لماذا القطاع" },
  { href: "/#journeys", label: "رحلات التطوير" },
  { href: "/#methodology", label: "المنهجية" },
  { href: "/blog", label: "المدونة" },
  { href: "/founder", label: "المؤسس" },
  { href: "/partners", label: "الشركاء" },
  { href: "/#contact", label: "تواصل" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow" : "shadow-sm"
      }`}
    >
      <div className="container-prosun flex items-center justify-between gap-6 py-4">
        <Link href="/" className="inline-flex items-center gap-3 font-extrabold text-[22px] text-primary">
          <span className="relative w-[42px] h-[42px] inline-flex items-center justify-center rounded-xl text-white text-2xl font-black bg-gradient-to-br from-primary to-primary-light">
            P
            <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-accent" />
          </span>
          <span>
            PRO<strong className="text-accent">SUN</strong>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-3.5 py-2.5 text-[15px] font-medium rounded-lg hover:text-accent hover:bg-surface-soft transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#contact" className="btn btn-primary btn-sm hidden md:inline-flex">
            احجز استشارة
          </Link>
          <button className="bg-surface-soft text-primary border-0 px-3.5 py-2.5 rounded-lg font-bold text-[13px] hover:bg-primary hover:text-white transition-colors">
            EN
          </button>
          <button
            className="lg:hidden text-2xl text-primary"
            aria-label="القائمة"
            onClick={() => setOpen(true)}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-white shadow-lg z-50 pt-16 px-6 pb-8 overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 left-5 text-2xl text-primary"
          aria-label="إغلاق"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <ul className="flex flex-col gap-1.5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 px-4 text-base border-b border-line"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
