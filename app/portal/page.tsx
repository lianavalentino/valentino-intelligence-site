import Link from "next/link";
import { client } from "./_data";

export default function PortalLoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-8 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Client portal
        </h1>
        <p className="text-sm text-zinc-600">
          Sign in as {client.name} to view your engagement with {client.consultant}.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-zinc-700">Email</span>
          <input
            type="email"
            disabled
            placeholder="david@cleanmarklabels.com"
            className="rounded-md border border-zinc-300 bg-zinc-100 px-3 py-2 text-sm text-zinc-500"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="text-zinc-700">Password</span>
          <input
            type="password"
            disabled
            placeholder="••••••••"
            className="rounded-md border border-zinc-300 bg-zinc-100 px-3 py-2 text-sm text-zinc-500"
          />
        </label>
        <button
          type="button"
          disabled
          className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white opacity-50"
        >
          Sign in
        </button>
        <button
          type="button"
          disabled
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-500"
        >
          Send magic link
        </button>
      </form>

      <div className="flex flex-col items-center gap-2 border-t border-zinc-200 pt-6 text-center">
        <p className="text-xs text-zinc-500">Prototype only — auth is not wired up.</p>
        <Link
          href="/portal/overview"
          className="text-sm text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
        >
          Continue as demo client →
        </Link>
      </div>
    </div>
  );
}
