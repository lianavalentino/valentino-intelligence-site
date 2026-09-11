import Link from "next/link";
import { engagement, actionItems, meetings, quickLinks } from "../_data";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-6">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Engagement summary
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold text-zinc-900">{engagement.name}</p>
          <p className="text-sm text-zinc-600">
            Week {engagement.week} of {engagement.totalWeeks}
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Next milestone</dt>
            <dd className="text-sm text-zinc-900">{engagement.nextMilestone}</dd>
            <dd className="text-xs text-zinc-500">{engagement.nextMilestoneDate}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Hours used</dt>
            <dd className="text-sm text-zinc-900">
              {engagement.hoursUsed} / {engagement.hoursCap}
            </dd>
            <div className="mt-1 h-1.5 w-full max-w-32 rounded-full bg-zinc-200">
              <div
                className="h-1.5 rounded-full bg-zinc-900"
                style={{ width: `${(engagement.hoursUsed / engagement.hoursCap) * 100}%` }}
              />
            </div>
          </div>
        </dl>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Needs your action
        </h2>
        <ul className="flex flex-col gap-3">
          {actionItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-4 hover:border-zinc-300"
              >
                <span className="text-sm font-medium text-zinc-900">{item.title}</span>
                <span className="text-sm text-zinc-600">{item.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-10 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Upcoming meetings
          </h2>
          <ul className="flex flex-col gap-3">
            {meetings.map((m) => (
              <li key={m.title} className="rounded-lg border border-zinc-200 bg-white p-4">
                <p className="text-sm font-medium text-zinc-900">{m.title}</p>
                <p className="text-sm text-zinc-600">
                  {m.date} · {m.time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Quick links
          </h2>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
