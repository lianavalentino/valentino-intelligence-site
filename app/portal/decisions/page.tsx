import { decisions } from "../_data";

function StatusPill({ status }: { status: "Decided" | "Open" }) {
  const styles =
    status === "Decided"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-amber-50 text-amber-700 border-amber-200";
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default function DecisionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Decision log</h1>
        <p className="text-sm text-zinc-600">Every scoping and direction decision made on this engagement.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Decision</th>
              <th className="px-4 py-3 font-medium">Options considered</th>
              <th className="px-4 py-3 font-medium">Who decided</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {decisions.map((d) => (
              <tr key={d.decision} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 whitespace-nowrap text-zinc-600">{d.date}</td>
                <td className="px-4 py-3 font-medium text-zinc-900">{d.decision}</td>
                <td className="px-4 py-3 text-zinc-600">{d.options}</td>
                <td className="px-4 py-3 text-zinc-600">{d.decidedBy}</td>
                <td className="px-4 py-3">
                  <StatusPill status={d.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
