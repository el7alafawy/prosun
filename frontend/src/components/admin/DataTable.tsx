type Column<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
};

type Props<T> = {
  title: string;
  columns: Column<T>[];
  rows: T[];
  onAdd?: () => void;
  emptyText?: string;
};

export function DataTable<T>({ title, columns, rows, onAdd, emptyText = "لا توجد بيانات." }: Props<T>) {
  return (
    <div className="bg-white border border-line rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-line">
        <h3 className="font-display font-bold text-lg text-primary">{title}</h3>
        {onAdd && (
          <button
            onClick={onAdd}
            className="btn btn-primary btn-sm"
            type="button"
          >
            <i className="fa-solid fa-plus" /> إضافة
          </button>
        )}
      </div>
      {rows.length === 0 ? (
        <div className="p-10 text-center text-ink-muted">{emptyText}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-soft">
              <tr>
                {columns.map((c) => (
                  <th key={c.header} className={`text-right px-5 py-3 font-bold text-primary text-sm ${c.className ?? ""}`}>
                    {c.header}
                  </th>
                ))}
                <th className="px-5 py-3 w-32" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-t border-line hover:bg-surface-soft transition-colors">
                  {columns.map((c) => (
                    <td key={c.header} className={`px-5 py-3.5 text-sm text-ink ${c.className ?? ""}`}>
                      {c.accessor(row)}
                    </td>
                  ))}
                  <td className="px-5 py-3.5 text-left">
                    <div className="inline-flex gap-2">
                      <button className="text-primary hover:text-accent text-sm" type="button" title="تعديل">
                        <i className="fa-solid fa-pen" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 text-sm" type="button" title="حذف">
                        <i className="fa-solid fa-trash" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
