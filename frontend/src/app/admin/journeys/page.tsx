import { journeys } from "@/lib/data/journeys";
import { DataTable } from "@/components/admin/DataTable";
import type { Journey } from "@/lib/types";

export default function AdminJourneysPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display font-extrabold text-2xl text-primary mb-1">الرحلات</h2>
        <p className="text-ink-muted">إدارة رحلات التطوير الأربع.</p>
      </div>
      <DataTable<Journey>
        title="جميع الرحلات"
        rows={journeys}
        columns={[
          { header: "الرقم", accessor: (j) => j.number, className: "w-20" },
          { header: "الاسم العربي", accessor: (j) => <span className="font-semibold text-primary">{j.arabicName}</span> },
          { header: "Name (EN)", accessor: (j) => <span dir="ltr">{j.englishName}</span> },
          { header: "الوصف المختصر", accessor: (j) => <span className="text-ink-muted">{j.shortDesc}</span> },
        ]}
      />
    </div>
  );
}
