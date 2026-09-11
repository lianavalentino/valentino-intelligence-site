import { files } from "../_data";

function StatusPill({ status }: { status: "Received" | "Reviewed" }) {
  const styles =
    status === "Reviewed"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-zinc-100 text-zinc-600 border-zinc-200";
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default function FilesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Files</h1>
        <p className="text-sm text-zinc-600">Shared documents and data extracts for this engagement.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 bg-white p-10 text-center">
        <p className="text-sm font-medium text-zinc-900">Drop files here to upload</p>
        <p className="text-xs text-zinc-500">or click to browse — visual only in this prototype</p>
        <button
          type="button"
          disabled
          className="mt-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-500"
        >
          Browse files
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Uploaded by</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.name} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-900">{f.name}</td>
                <td className="px-4 py-3 text-zinc-600">{f.type}</td>
                <td className="px-4 py-3 text-zinc-600">{f.uploadedBy}</td>
                <td className="px-4 py-3 text-zinc-600">{f.date}</td>
                <td className="px-4 py-3">
                  <StatusPill status={f.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
