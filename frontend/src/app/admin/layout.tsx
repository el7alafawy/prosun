import { Sidebar } from "@/components/admin/Sidebar";

export const metadata = {
  title: "لوحة تحكم PROSUN",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-soft">
      <Sidebar />
      <div className="mr-64 min-h-screen">
        <header className="bg-white border-b border-line px-8 py-4 sticky top-0 z-30">
          <h1 className="font-display font-bold text-primary text-lg">لوحة التحكم</h1>
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
