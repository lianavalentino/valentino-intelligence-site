const services = [
  {
    title: "AI opportunity discovery",
    body: "Process audits and automation-readiness scoring — current state, ROI estimate, quick-win vs. strategic-project classification — that turn a client's workflow into a scoped build spec.",
  },
  {
    title: "Workflow automation (n8n)",
    body: "Self-hosted n8n pipelines with approval gates, error handling, and audit trails for content, publishing, and back-office processes.",
  },
  {
    title: "AI agents & Slack bots",
    body: "Supervisor/sub-agent architectures, AI-drafted content agents, and Slack-based approval and query bots wired into real business channels.",
  },
  {
    title: "Data pipelines & dashboards",
    body: "Ingestion, parsing, and reporting pipelines — invoice/expense ingestion, POS analytics — feeding lightweight operational dashboards.",
  },
];

const caseStudies = [
  {
    name: "Emergency Technical Decon (ETD)",
    problem:
      "Fire departments evaluating ETD's Enertia CO2 decontamination machine needed a clear way to see department-level cost and ROI; ETD also needed a managed blog content operation.",
    built:
      "The Enertia ROI Calculator, a web app that computes department total cost of ownership and ROI for the Enertia machine, plus ongoing content/marketing support for ETD's WordPress blog. ETD's blog publishing now runs through a shared, approval-gated n8n pipeline built jointly with Emergent: a content card is parsed, an editable review package is generated and passed through an editorial quality check, then a single authenticated approval from the assigned reviewer authorizes the CMS draft and scheduled social posts.",
    stack:
      "Next.js 16, React 19, TypeScript, Tailwind v4, Drizzle ORM, Cloudflare (Wrangler); WordPress (WP Engine) for the blog; n8n for the publishing pipeline.",
    outcome:
      "The ROI calculator has been used at three industry conferences and contributed to two roughly $1M machine sales.",
  },
  {
    name: "Emergent Content Hub",
    problem:
      "Emergent (public safety software for fire, EMS, inspections, and fleet) needed to turn a monthly content-planning spreadsheet into drafted blog and social copy, with human review, without manual copy-paste between tools.",
    built:
      "An internal marketing-ops app: spreadsheet content-card intake and parsing, AI-drafted blog and social copy generation, an image-upload and approval workflow, and automated output to Google Docs, Sheets trackers, and a CMS-ready CSV export.",
    stack:
      "Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui, Drizzle ORM, Supabase Postgres, Vercel, OpenAI API, Google Docs/Drive/Sheets APIs, Webflow.",
    outcome:
      "Core milestones are built, merged, and in active user testing. Google integrations currently run against a test account pending production cutover — outcome TBD.",
  },
  {
    name: "Italian Bistro Knightsville",
    problem:
      "A family-owned Italian-American restaurant in Summerville, SC needed a social content operation, an approval workflow that didn't require constant owner attention, and basic operational analytics, without dedicated marketing or ops staff.",
    built:
      "A Slack-based operator across four channels (social approvals, general ops, structured data queries, and alerts); a social content pipeline that sources menu-matched photos from Google Drive, generates additional assets with GPT-Image 2, and publishes to Facebook and Instagram behind a Slack approval gate; and a daily unattended expense-analytics job that ingests Gmail invoices and rebuilds an operations dashboard each morning.",
    stack:
      "Python orchestration, Slack API, Google Drive, GPT-Image 2, Meta Graph API, Wix, GitHub Actions.",
    outcome:
      "Social publishing has been live on Facebook/Instagram since July 2026, and the expense dashboard rebuilds automatically every morning.",
  },
  {
    name: "n8n infrastructure",
    problem:
      "Client and personal automation work needed a reliable, always-on self-hosted automation runtime rather than depending on third-party SaaS automation platforms.",
    built:
      "Two independent self-hosted n8n instances — a Mac-based Docker instance for local/dev work, and a permanent always-on instance running as a Home Assistant Supervisor add-on, with start-on-boot and watchdog enabled and access locked down behind Cloudflare Access plus a scoped WAF rule.",
    stack: "n8n, Docker, Home Assistant OS (Supervisor), Cloudflare Access and WAF.",
    outcome:
      "Infrastructure enablement underpinning the automation work above, not independently measured.",
  },
];

const stackTags = [
  "Next.js",
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "Supabase (Postgres)",
  "Drizzle ORM",
  "Vercel",
  "Cloudflare Workers/Wrangler",
  "n8n",
  "Python",
  "OpenAI API / Agents SDK",
  "Google Docs/Drive/Sheets APIs",
  "Webflow",
  "WordPress",
  "Wix",
  "Slack API",
  "Meta Graph API",
  "GitHub Actions",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-24 sm:px-8">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <p className="font-mono text-sm text-zinc-500">
            Valentino Intelligence LLC
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Liana Valentino
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
            Lead data scientist and applied AI systems builder with a decade
            of production machine learning and GenAI experience, including a
            multi-agent assistant used daily by analysts at Nike. Designs and
            ships applied AI systems for independent clients — from workflow
            automation and AI agents to full-stack data products.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm text-zinc-500">
            <span>Beaverton, OR (remote-first)</span>
            <a
              href="mailto:valentinoliana@gmail.com"
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              valentinoliana@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/lianavalentino"
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lianavalentino"
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col gap-2">
                <h3 className="font-medium text-zinc-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section className="flex flex-col gap-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Selected work
          </h2>
          <div className="flex flex-col gap-12">
            {caseStudies.map((c) => (
              <article
                key={c.name}
                className="flex flex-col gap-3 border-t border-zinc-200 pt-8"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {c.name}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  <span className="font-medium text-zinc-900">Problem — </span>
                  {c.problem}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  <span className="font-medium text-zinc-900">
                    What I built —{" "}
                  </span>
                  {c.built}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  <span className="font-medium text-zinc-900">Outcome — </span>
                  {c.outcome}
                </p>
                <p className="font-mono text-xs text-zinc-400">{c.stack}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {stackTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            How I work
          </h2>
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              [
                "1. Discovery sprint",
                "Two weeks, fixed fee. I map your data and workflows and hand back a roadmap of 3–5 scoped opportunities with effort, ROI, and a build plan.",
              ],
              [
                "2. Build",
                "Fixed-price or retainer. Every automation ships with approval gates, audit logs, and a rollback path before it acts on its own.",
              ],
              [
                "3. Operate",
                "Handover docs, runbooks, and exports so your team owns it. Ongoing support only if you want it.",
              ],
            ].map(([title, body]) => (
              <li key={title} className="flex flex-col gap-2">
                <h3 className="font-medium text-zinc-900">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-3 border-t border-zinc-200 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Get in touch
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Have a process worth automating or an AI system worth building?{" "}
            <a
              href="mailto:valentinoliana@gmail.com"
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
              valentinoliana@gmail.com
            </a>
          </p>
        </section>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Valentino Intelligence LLC
      </footer>
    </div>
  );
}
