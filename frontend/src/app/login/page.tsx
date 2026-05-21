import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export const metadata = { title: "تسجيل الدخول | PROSUN" };

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-9">
        <Link href="/" className="inline-flex items-center gap-3 font-extrabold text-[22px] text-primary mb-7">
          <span className="relative w-[42px] h-[42px] inline-flex items-center justify-center rounded-xl text-white text-2xl font-black bg-gradient-to-br from-primary to-primary-light">
            P
            <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-accent" />
          </span>
          <span>
            PRO<strong className="text-accent">SUN</strong>
          </span>
        </Link>
        <h1 className="font-display font-extrabold text-2xl text-primary mb-2">تسجيل الدخول</h1>
        <p className="text-ink-muted text-sm mb-6">لوحة تحكم PROSUN</p>
        <Suspense fallback={<p className="text-ink-muted text-sm">جاري التحميل...</p>}>
          <LoginForm />
        </Suspense>
        <p className="text-center text-ink-muted text-xs mt-6">
          للتجربة: أدخل أي بريد وكلمة مرور — سيتم استبدال هذا بالمصادقة الحقيقية لاحقًا.
        </p>
      </div>
    </div>
  );
}
