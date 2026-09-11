import { invoices, sprintTotal } from "../_data";

function StatusPill({ status }: { status: "Paid" | "Pending" }) {
  const styles =
    status === "Paid"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-amber-50 text-amber-700 border-amber-200";
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Billing</h1>
        <p className="text-sm text-zinc-600">
          Discovery Sprint total: <span className="font-medium text-zinc-900">{sprintTotal}</span>
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">Invoice</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-900">{inv.id}</td>
                <td className="px-4 py-3 text-zinc-600">{inv.description}</td>
                <td className="px-4 py-3 text-zinc-600">{inv.amount}</td>
                <td className="px-4 py-3 text-zinc-600">{inv.date}</td>
                <td className="px-4 py-3">
                  <StatusPill status={inv.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-500">
        Payment method: card on file, charged automatically on each invoice due date. Managed via Stripe in a real build — not wired up in this prototype.
      </p>
    </div>
  );
}
