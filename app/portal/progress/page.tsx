import { milestones, board } from "../_data";

const milestoneIcon = {
  done: "✓",
  "in-progress": "◐",
  "not-started": "○",
} as const;

const milestoneColor = {
  done: "text-green-600",
  "in-progress": "text-amber-600",
  "not-started": "text-zinc-400",
} as const;

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Progress</h1>
        <p className="text-sm text-zinc-600">Milestone tracker and working board for this engagement.</p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Milestones</h2>
        <ol className="flex flex-col gap-3">
          {milestones.map((m) => (
            <li
              key={m.name}
              className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4"
            >
              <span className={`text-lg ${milestoneColor[m.status]}`}>{milestoneIcon[m.status]}</span>
              <span className="flex-1 text-sm font-medium text-zinc-900">{m.name}</span>
              <span className="text-xs text-zinc-500">{m.date}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Board</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(board).map(([column, items]) => (
            <div key={column} className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {column}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
