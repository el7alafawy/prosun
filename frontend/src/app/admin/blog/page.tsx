import { posts } from "@/lib/data/posts";
import { DataTable } from "@/components/admin/DataTable";
import type { Post } from "@/lib/types";

export default function AdminBlogPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display font-extrabold text-2xl text-primary mb-1">المدونة</h2>
        <p className="text-ink-muted">إدارة المقالات والرؤى.</p>
      </div>
      <DataTable<Post>
        title="جميع المقالات"
        rows={posts}
        columns={[
          { header: "العنوان", accessor: (p) => <span className="font-semibold text-primary">{p.title}</span> },
          { header: "التصنيف", accessor: (p) => <span className="inline-block bg-accent-light text-accent text-xs font-bold px-2.5 py-1 rounded">{p.tag}</span> },
          { header: "الكاتب", accessor: (p) => p.author },
          { header: "التاريخ", accessor: (p) => new Date(p.date).toLocaleDateString("ar-SA") },
        ]}
      />
    </div>
  );
}
