import { documents } from "../_data";

function StatusPill({ status }: { status: string }) {
  const styles =
    status === "None"
      ? "bg-zinc-100 text-zinc-500 border-zinc-200"
      : "bg-green-50 text-green-700 border-green-200";
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Documents</h1>
        <p className="text-sm text-zinc-600">Agreements and paperwork for this engagement.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">Document</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {documents.map((d) => (
              <tr key={d.name} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-900">{d.name}</td>
                <td className="px-4 py-3">
                  <StatusPill status={d.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    disabled={d.status === "None"}
                    className="rounded-md border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-600 disabled:opacity-40"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
