"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  { icon: "fa-solid fa-location-dot", title: "العنوان", value: "الرياض، المملكة العربية السعودية" },
  { icon: "fa-solid fa-phone", title: "الهاتف", value: "‎+966 50 000 0000" },
  { icon: "fa-regular fa-envelope", title: "البريد الإلكتروني", value: "info@prosun.sa" },
  { icon: "fa-regular fa-clock", title: "ساعات العمل", value: "الأحد - الخميس | 9:00 صباحًا - 5:00 مساءً" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST to /api/contact when backend is wired up
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-28 bg-surface">
      <div className="container-prosun grid gap-14 lg:gap-16 lg:grid-cols-[1fr_1.3fr] items-start">
        <Reveal>
          <span className="section-eyebrow">تواصل معنا</span>
          <h2 className="section-title">
            دعنا نبدأ <span className="highlight">رحلتك</span>
          </h2>
          <p className="section-lead">احجز استشارتك الأولى مع فريق PROSUN لمناقشة فرصتك الاستثمارية وبناء نموذج تشغيلي احترافي.</p>
          <ul className="mt-7 flex flex-col gap-4">
            {items.map((i) => (
              <li key={i.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent-light text-accent rounded-2xl flex items-center justify-center text-lg flex-shrink-0">
                  <i className={i.icon} />
                </div>
                <div>
                  <strong className="block text-primary text-base font-bold mb-0.5">{i.title}</strong>
                  <span className="text-ink-muted text-sm">{i.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <form onSubmit={onSubmit} className="bg-white p-10 rounded-lg shadow border border-line">
            <h3 className="text-primary font-display text-2xl font-extrabold mb-6">أرسل لنا رسالة</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="الاسم الكامل">
                <input type="text" required placeholder="اسمك الكريم" className={inputCls} />
              </Field>
              <Field label="رقم الجوال">
                <input type="tel" required placeholder="‎+966" className={inputCls} />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="البريد الإلكتروني">
                <input type="email" required placeholder="email@example.com" className={inputCls} />
              </Field>
              <Field label="نوع المشروع">
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>اختر نوع المشروع</option>
                  <option>حضانة / روضة أطفال</option>
                  <option>مركز ضيافة أطفال</option>
                  <option>مشروع استثماري جديد</option>
                  <option>تطوير مشروع قائم</option>
                  <option>أخرى</option>
                </select>
              </Field>
            </div>
            <Field label="رسالتك">
              <textarea rows={5} placeholder="أخبرنا عن مشروعك وما تحتاجه..." className={`${inputCls} resize-y min-h-[120px]`} />
            </Field>
            <div className="mt-5">
              <Button variant="primary" block>
                إرسال الرسالة <i className="fa-solid fa-paper-plane" />
              </Button>
            </div>
            {submitted && (
              <div className="mt-4 p-3.5 px-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 text-sm font-semibold">
                <i className="fa-solid fa-circle-check ml-1.5" /> شكرًا لتواصلك! سيتواصل معك فريقنا قريبًا.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full px-4 py-3.5 border-[1.5px] border-line rounded-[10px] font-sans text-base text-ink bg-surface-soft outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col mb-4 last:mb-0">
      <label className="font-semibold text-primary text-sm mb-2">{label}</label>
      {children}
    </div>
  );
}
