import { partners } from "@/lib/data/partners";
import { DataTable } from "@/components/admin/DataTable";
import type { Partner } from "@/lib/types";

export default function AdminPartnersPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display font-extrabold text-2xl text-primary mb-1">الشركاء والعروض</h2>
        <p className="text-ink-muted">إدارة الشركاء والعروض الترويجية.</p>
      </div>
      <DataTable<Partner>
        title="جميع الشركاء"
        rows={partners}
        columns={[
          {
            header: "الشريك",
            accessor: (p) => (
              <span className="inline-flex items-center gap-2.5">
                <i className={`${p.icon} text-primary text-lg`} />
                <span className="font-semibold text-primary">{p.name}</span>
              </span>
            ),
          },
          {
            header: "العرض",
            accessor: (p) =>
              p.promo ? (
                <span className="inline-flex items-center gap-2 text-emerald-700 text-xs font-bold">
                  <i className="fa-solid fa-circle-check" /> {p.promo.title}
                </span>
              ) : (
                <span className="text-ink-muted text-xs">—</span>
              ),
          },
          {
            header: "الوصف",
            accessor: (p) => <span className="text-ink-muted">{p.promo?.description ?? "—"}</span>,
          },
        ]}
      />
    </div>
  );
}
