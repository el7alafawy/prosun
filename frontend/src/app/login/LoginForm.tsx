"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const from = search.get("from") || "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("يرجى إدخال البريد وكلمة المرور");
      return;
    }
    document.cookie = `admin_session=stub; path=/; max-age=${60 * 60 * 8}`;
    router.push(from);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label className="font-semibold text-primary text-sm mb-2 block">البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@prosun.sa"
          className="w-full px-4 py-3.5 border-[1.5px] border-line rounded-[10px] text-base bg-surface-soft outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
        />
      </div>
      <div>
        <label className="font-semibold text-primary text-sm mb-2 block">كلمة المرور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3.5 border-[1.5px] border-line rounded-[10px] text-base bg-surface-soft outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button type="submit" className="btn btn-primary btn-block mt-2">
        دخول <i className="fa-solid fa-arrow-left" />
      </button>
    </form>
  );
}
