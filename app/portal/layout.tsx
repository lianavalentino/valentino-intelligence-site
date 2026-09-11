import Link from "next/link";
import { client } from "./_data";

const navItems = [
  { label: "Overview", href: "/portal/overview" },
  { label: "Intake", href: "/portal/intake" },
  { label: "Files", href: "/portal/files" },
  { label: "Progress", href: "/portal/progress" },
  { label: "Status reports", href: "/portal/status" },
  { label: "Decisions", href: "/portal/decisions" },
  { label: "Documents", href: "/portal/documents" },
  { label: "Billing", href: "/portal/billing" },
];

export function PrototypeBadge() {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
      Prototype — sample data
    </span>
  );
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 md:flex-row">
      <aside className="flex flex-col gap-6 border-b border-zinc-200 bg-white px-6 py-6 md:w-56 md:shrink-0 md:border-b-0 md:border-r md:py-8">
        <Link
          href="/"
          className="text-xs text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
        >
          ← back to site
        </Link>
        <nav className="flex flex-row flex-wrap gap-x-4 gap-y-2 text-sm md:flex-col">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex flex-col gap-2 border-b border-zinc-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-zinc-900">{client.name}</p>
            <p className="text-xs text-zinc-500">{client.consultant} · your consultant</p>
          </div>
          <PrototypeBadge />
        </header>
        <main className="flex-1 px-6 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
