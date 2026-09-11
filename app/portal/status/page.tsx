import { statusReports } from "../_data";

const trafficLight = {
  green: { dot: "🟢", label: "On track" },
  yellow: { dot: "🟡", label: "At risk" },
  red: { dot: "🔴", label: "Blocked" },
} as const;

export default function StatusPage() {
  const [current, ...previous] = statusReports;
  const light = trafficLight[current.status];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Weekly status reports</h1>
        <p className="text-sm text-zinc-600">Sent every Friday for the duration of the engagement.</p>
      </div>

      <section className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">{current.week}</h2>
          <span className="text-sm font-medium text-zinc-700">
            {light.dot} {light.label}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Done this week</h3>
            <ul className="list-inside list-disc text-sm text-zinc-700">
              {current.done.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Next week</h3>
            <ul className="list-inside list-disc text-sm text-zinc-700">
              {current.next.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Blockers / needs from you
          </h3>
          {current.blockers.length === 0 ? (
            <p className="text-sm text-zinc-600">None this week.</p>
          ) : (
            <div className="overflow-x-auto rounded-md border border-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-3 py-2 font-medium">Blocker</th>
                    <th className="px-3 py-2 font-medium">What&apos;s needed</th>
                    <th className="px-3 py-2 font-medium">From whom</th>
                    <th className="px-3 py-2 font-medium">By when</th>
                  </tr>
                </thead>
                <tbody>
                  {current.blockers.map((b) => (
                    <tr key={b.blocker}>
                      <td className="px-3 py-2 text-zinc-900">{b.blocker}</td>
                      <td className="px-3 py-2 text-zinc-600">{b.needed}</td>
                      <td className="px-3 py-2 text-zinc-600">{b.from}</td>
                      <td className="px-3 py-2 text-zinc-600">{b.by}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Decisions needed</h3>
          {current.decisions.length === 0 ? (
            <p className="text-sm text-zinc-600">None this week.</p>
          ) : (
            <div className="overflow-x-auto rounded-md border border-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-3 py-2 font-medium">Decision</th>
                    <th className="px-3 py-2 font-medium">Options</th>
                    <th className="px-3 py-2 font-medium">Recommendation</th>
                    <th className="px-3 py-2 font-medium">Needed by</th>
                  </tr>
                </thead>
                <tbody>
                  {current.decisions.map((d) => (
                    <tr key={d.decision}>
                      <td className="px-3 py-2 text-zinc-900">{d.decision}</td>
                      <td className="px-3 py-2 text-zinc-600">{d.options}</td>
                      <td className="px-3 py-2 text-zinc-600">{d.recommendation}</td>
                      <td className="px-3 py-2 text-zinc-600">{d.neededBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Hours used vs. plan
          </h3>
          <p className="text-sm text-zinc-700">
            {current.hours.thisWeek} this week · {current.hours.total} total to date · {current.hours.cap} allotted
          </p>
        </div>
      </section>

      {previous.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Previous reports
          </h2>
          <ul className="flex flex-col gap-2">
            {previous.map((r) => (
              <li
                key={r.week}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4"
              >
                <span className="text-sm text-zinc-900">{r.week}</span>
                <span className="text-sm text-zinc-600">
                  {trafficLight[r.status].dot} {trafficLight[r.status].label}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
