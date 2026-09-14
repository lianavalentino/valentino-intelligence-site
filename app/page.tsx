const EMAIL = "valentinointelligence@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Fit%20call`;

const link = "text-ink underline decoration-accent underline-offset-4";
const h2 = "font-mono text-small uppercase tracking-widest text-muted";
const small = "text-small text-muted sm:text-small-lg";
const mono = "font-mono text-small text-muted tracking-tight";

const built: [string, string][] = [
  [
    "Social posts, from photo to published",
    "Photos dropped in a shared folder come back as drafted posts. You tap approve in Slack and they go to Facebook and Instagram.",
  ],
  [
    "Payroll prep, down to a review",
    "Hours from the point-of-sale system land in the payroll spreadsheet on their own. You check it instead of building it.",
  ],
  [
    "An expense dashboard that rebuilds itself",
    "Invoices arriving by email become a spending view every morning. No data entry.",
  ],
  [
    "Ask the business anything, in Slack",
    "“What did we sell last Friday?” answered from your own numbers, in the channel you already use.",
  ],
  [
    "A calculator that helps close the sale",
    "Prospects enter their numbers and see cost of ownership and payback. Built for a fire-gear equipment maker and used at three industry conferences.",
  ],
  [
    "Blog posts, from spreadsheet row to live",
    "A row in the content plan becomes a draft with images, waits for one approval, and publishes to the site.",
  ],
];

const steps: [string, string][] = [
  ["Fit call", "Thirty minutes. You tell me the one thing you’d like to stop doing by hand."],
  ["Two-week plan", "I look at how the work gets done today and hand you a ranked short list of what’s worth automating first, with what each one saves and what it costs to run."],
  [
    "Build, handover, and support",
    "I build it. Someone on your team approves it before it goes live. When it’s done, you own it, and a job you used to do by hand now runs on autopilot. You decide whether I stay on for enhancements and the next thing.",
  ],
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[44rem] px-5 sm:px-8">
      <header className="flex items-baseline justify-between gap-4 py-6">
        <p className="font-display text-h3 font-semibold">Valentino Intelligence</p>
        <p className={`${mono} shrink-0`}>Portland, Oregon</p>
      </header>

      <main className="flex flex-col gap-16 py-10 sm:gap-24 sm:py-16">
        <section className="flex flex-col gap-5">
          <h1 className="font-display text-h1 font-semibold tracking-tight sm:text-h1-lg">
            I turn the data and busywork in your business into systems that run on their own.
          </h1>
          <p className="text-lg">
            AI and automation for owner-led businesses. You keep approving; the
            copying, retyping, and chasing stop.
          </p>
          <p>
            <a href={MAILTO} className={link}>
              {EMAIL}
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className={h2}>Things I&rsquo;ve built</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {built.map(([title, body]) => (
              <li key={title} className="flex flex-col gap-2 rounded-[3px] border border-rule p-5">
                <h3 className="font-display font-semibold">{title}</h3>
                <p className={small}>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className={h2}>How it works</h2>
          <ol className="flex flex-col divide-y divide-rule border-y border-rule">
            {steps.map(([title, body], i) => (
              <li key={title} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <h3 className="font-display font-semibold">
                  {i + 1}. {title}
                </h3>
                <p className={small}>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className={h2}>Who you’d be working with</h2>
          <p>
            I’m Liana. I spent ten years building data and AI systems at Nike
            and Microsoft. I also come from a family of small business owners,
            so I know what it’s like when the owner is also the office. I work
            directly with owners, one project at a time. Based in Portland,
            Oregon, working with businesses anywhere.
          </p>
          <p className={small}>
            Lately that’s meant a family restaurant in South Carolina, a
            fire-gear decontamination company, a public-safety software firm, and
            a label manufacturer here in Portland.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className={h2}>Start with an email</h2>
          <p>
            Tell me what you&rsquo;d like to stop doing by hand.{" "}
            <a href={MAILTO} className={link}>
              {EMAIL}
            </a>
          </p>
        </section>
      </main>

      <footer className={`${mono} flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8`}>
        <span>Valentino Intelligence LLC</span>
        <span className="flex gap-5">
          <a href="https://linkedin.com/in/lianavalentino" className={link}>
            LinkedIn
          </a>
        </span>
      </footer>
    </div>
  );
}
