const MAILTO = "mailto:valentinoliana@gmail.com?subject=Fit%20call";
const CTA = "Book a free 30-minute fit call";

const btn =
  "inline-flex min-h-11 w-full items-center justify-center rounded-[3px] bg-accent px-6 font-semibold text-accent-ink hover:bg-accent-hover sm:w-auto";
const link = "text-ink underline decoration-accent underline-offset-4";
const h2 = "font-display text-h2 font-bold sm:text-h2-lg";
const h3 = "font-display text-h3 font-semibold sm:text-h3-lg";
const small = "text-small text-muted sm:text-small-lg";
const grid =
  "grid gap-y-5 py-7 sm:py-12 lg:grid-cols-[12rem_minmax(0,40rem)] lg:gap-x-12";
const row = "border-t border-rule py-3";

const familiar = [
  "I’m paying someone to retype invoices.",
  "Every post has to go through me and I don’t have time.",
  "I don’t know what we spent last month until the bookkeeper tells me.",
  "Somebody forgets to follow up and we lose the order.",
  "We tried Zapier. It worked until it didn’t, and nobody knew why.",
  "Everyone says we should be using AI. I don’t know where to start.",
];

const sheet: [string, string][] = [
  [
    "Two 45-minute conversations.",
    "One with you, one with the person who runs the work day to day. I ask how things actually get done and where time goes.",
  ],
  [
    "A look at where your information lives.",
    "Spreadsheets, your accounting system, email, your point-of-sale, whatever you use. I rate how ready each one is, so we don’t plan around numbers you can’t get to.",
  ],
  [
    "A week-1 note.",
    "By Friday of the first week you get a short note: the top candidates so far, and anything I’ve found that you should stop doing today.",
  ],
  [
    "A ranked list of the 3–5 things worth automating first.",
    "For each one: what it saves in hours or dollars, what it costs to build, what it costs to keep running, how long until it pays for itself, and how risky it is. Marked as a quick win or a bigger project.",
  ],
  [
    "A build plan for the top one or two.",
    "Written so you can act on it with me or hand it to anyone else. No lock-in.",
  ],
  [
    "A one-hour review on day 10.",
    "I walk you through the plan and you decide in the room, or don’t.",
  ],
];

const included: [string, string][] = [
  [
    "Running costs on every item.",
    "Tools per month and upkeep hours. No surprises after I leave.",
  ],
  [
    "An Owner’s Manual with every build.",
    "What it does, how to pause it, how to undo it, who to call. One page, plain English.",
  ],
  [
    "30 days of fix-it support after every handover.",
    "If something I built breaks in the first month, I fix it. No invoice.",
  ],
];

const examples = [
  {
    who: "Italian Bistro Knightsville — family restaurant, Summerville SC",
    slow: "No marketing staff and no office staff. Social posts happened when the owner had time, and there was no easy view of what the restaurant was spending.",
    now: "Posts are drafted with real photos of the food and wait in Slack. The owner taps approve and the post goes out to Facebook and Instagram. Every morning, an expense dashboard rebuilds itself from the invoices in the inbox.",
    result: "Posting since July 2026. Nothing goes out without the owner’s tap.",
  },
  {
    who: "Emergency Technical Decon (ETD) — fire-gear decontamination",
    slow: "Fire departments considering the machine had no clear way to see what it would cost them over time and what it would save.",
    now: "A calculator a department can use at a trade show: enter your numbers, see the cost of ownership and the payback.",
    result: "Used at three industry conferences. Helped close two sales of roughly $1 million each.",
  },
  {
    who: "Emergent — public-safety software",
    slow: "A monthly content plan lived in a spreadsheet, and turning each row into a blog post and social posts meant copying and pasting between tools.",
    now: "Upload the spreadsheet, and drafts appear for review with images attached. Approved pieces land in the right documents and trackers without anyone pasting.",
    result: "In user testing with their marketing team now.",
  },
];

type BuiltCard = {
  name: string;
  client: string;
  before: string;
  now: string;
  tools: string;
  status: string;
};

const built: [string, BuiltCard[]][] = [
  [
    "Marketing & content",
    [
      {
        name: "Social posts, from photo to published",
        client: "Italian Bistro Knightsville",
        before: "“Every post has to go through me and I don’t have time.”",
        now: "Real photos from Google Drive become a ready post in Slack — one tap and it’s live on Facebook and Instagram.",
        tools: "Google Drive, Slack, Facebook/Instagram",
        status: "running",
      },
      {
        name: "Review replies, drafted for you",
        client: "Italian Bistro Knightsville",
        before: "Every customer review needs a reply, and a good one takes longer than it should.",
        now: "A first-draft reply in the restaurant’s own voice is ready for the owner to read and post.",
        tools: "custom",
        status: "in testing",
      },
      {
        name: "Blog content, from idea to published post",
        client: "Emergency Technical Decon (ETD)",
        before: "Turning a content plan into a finished blog post meant a lot of manual back-and-forth with a vendor.",
        now: "A brief moves through drafting, a quality check, and one approval, then becomes a WordPress draft and scheduled posts — never auto-published.",
        tools: "WordPress, Google Drive",
        status: "running",
      },
      {
        name: "A consistent voice for every post",
        client: "Emergency Technical Decon (ETD)",
        before: "Blog posts and captions read differently depending on who wrote them.",
        now: "A written brand and voice guide feeds every draft, so the tone stays the same no matter who — or what — wrote it first.",
        tools: "custom",
        status: "designed",
      },
      {
        name: "A content hub that turns a spreadsheet into drafts",
        client: "Emergent",
        before: "A monthly content-planning spreadsheet had to be copy-pasted into blog posts and social captions one at a time.",
        now: "The spreadsheet is read directly, and drafts, images, and approvals happen in one tool instead of five.",
        tools: "Google Drive, custom",
        status: "in testing",
      },
    ],
  ],
  [
    "Back office & money",
    [
      {
        name: "Payroll prep, down to a review",
        client: "Italian Bistro Knightsville",
        before: "Every two weeks the manager retyped hours and rates by hand — close to an hour of error-prone work each cycle.",
        now: "Hours and rates pull straight from the point-of-sale export, overtime gets flagged automatically, and the manager reviews in Slack before anything’s submitted.",
        tools: "Shift4, Slack",
        status: "in testing",
      },
      {
        name: "Ask the business anything, in Slack",
        client: "Italian Bistro Knightsville",
        before: "Website edits and simple business questions all had to go through the owner personally.",
        now: "A Slack bot turns edit requests into a reviewable change and answers questions from the business’s own knowledge base.",
        tools: "Slack, custom",
        status: "running",
      },
      {
        name: "A vendor tracker and one source of truth",
        client: "Italian Bistro Knightsville",
        before: "Vendor pricing and contract terms lived only in one person’s memory.",
        now: "A vendor directory with renewal notes, plus a plain-English knowledge base, both answerable straight from Slack — it caught a vendor’s fee quietly doubling, from about $4,420 to $9,100 a year.",
        tools: "Slack, custom",
        status: "running",
      },
      {
        name: "A recorded call becomes a written plan",
        client: "Emergency Technical Decon (ETD)",
        before: "Feedback calls produced good input that then had to be re-watched and typed up by hand.",
        now: "A recorded video gets transcribed and turned into a written implementation plan the same day.",
        tools: "Google Drive, custom",
        status: "running",
      },
      {
        name: "The vendor-to-payment process, written down once",
        client: "Italian Bistro Knightsville",
        before: "How an invoice actually gets from a vendor’s email to a paid bill existed only as tribal knowledge.",
        now: "A standing runbook for invoice-to-payment, kept current as the real process changes.",
        tools: "custom",
        status: "running",
      },
    ],
  ],
  [
    "Sales & customers",
    [
      {
        name: "A calculator that helps close the sale",
        client: "Emergency Technical Decon (ETD)",
        before: "Fire departments evaluating a major equipment purchase had no easy way to see their own cost and payback.",
        now: "A web calculator turns a department’s own numbers into a side-by-side cost and return on investment.",
        tools: "custom",
        status: "running",
      },
      {
        name: "Your sales numbers, in plain English",
        client: "Italian Bistro Knightsville",
        before: "“I don’t know what we sold last night until someone runs a report.”",
        now: "A daily job reads the point-of-sale data so the owner gets a straight answer without running one.",
        tools: "Shift4, custom",
        status: "running",
      },
      {
        name: "Deciding what’s actually worth turning on",
        client: "Italian Bistro Knightsville",
        before: "A delivery-app integration was half set up and causing live order problems, with no read on whether fixing it was worth it.",
        now: "Pulled the real order data first — it showed only a handful of delivery orders over seven months, so the monthly fee wasn’t worth paying yet.",
        tools: "Shift4, custom",
        status: "designed",
      },
    ],
  ],
  [
    "Reports & decisions",
    [
      {
        name: "A dashboard that rebuilds itself every morning",
        client: "Italian Bistro Knightsville",
        before: "“I don’t know what we spent last month until the bookkeeper tells me.”",
        now: "A daily job reads bank and vendor emails and rebuilds the dashboard on its own — it caught a roughly $75,000 year-to-date cash swing driven by an 18.7% jump in payroll costs.",
        tools: "custom",
        status: "running",
      },
      {
        name: "Finding the risk before it finds you",
        client: "Italian Bistro Knightsville",
        before: "No one had ever sat down and written out what could actually go wrong in the business.",
        now: "A scored review of compliance, operations, and vendor exposure, kept as a standing register instead of a one-time conversation.",
        tools: "custom",
        status: "designed",
      },
      {
        name: "Every open item, in one place",
        client: "Italian Bistro Knightsville",
        before: "What was in progress, blocked, or done lived across text threads and memory.",
        now: "A board that builds itself from the actual work underway and stays current on its own.",
        tools: "custom",
        status: "running",
      },
    ],
  ],
  [
    "Websites & customer-facing tools",
    [
      {
        name: "Off Wix, onto something fast",
        client: "Italian Bistro Knightsville",
        before: "The website was slow, cost more than it should, and didn’t look like the rest of the brand.",
        now: "Rebuilt on a fast, modern host with the menu synced from one file, so it’s never out of date in two places.",
        tools: "custom",
        status: "running",
      },
      {
        name: "Fixing the right ordering problem",
        client: "Italian Bistro Knightsville",
        before: "The assumption going in was “we need a new point-of-sale system.”",
        now: "Found the real problem — online ordering auto-disabling during the Friday/Saturday rush — and scoped the fix that actually pays off.",
        tools: "Shift4, custom",
        status: "designed",
      },
    ],
  ],
  [
    "Keeping it running",
    [
      {
        name: "A private automation server that runs the client work",
        client: "Behind every client build",
        before: "Client automation work needed a reliable place to run, not a patchwork of personal laptops.",
        now: "A private, access-controlled automation server runs the approval queues, dashboards, and bots behind every client build.",
        tools: "custom",
        status: "running",
      },
    ],
  ],
];

const bigCompany: [string, string][] = [
  [
    "Built an AI assistant used daily by analysts at Nike.",
    "On your team, that looks like: your team asks a question in plain English and gets an answer from your own numbers, with a person checking before anything acts.",
  ],
  [
    "Built anomaly detection at Microsoft scale — tens of billions of events a day.",
    "I’ve built systems that notice the unusual automatically. The same idea flags a customer who stopped reordering, or a quote priced off-pattern, before anyone would notice.",
  ],
  [
    "Found the exceptions that matter across hundreds of thousands of records a day.",
    "Finding the few exceptions that matter inside a lot of data is routine for me; I make it work on your data.",
  ],
];

const steps: [string, string][] = [
  [
    "Free fit call",
    "Thirty minutes. You tell me the one thing you’d love to stop doing by hand. I tell you honestly whether the plan is a fit.",
  ],
  [
    "The Two-Week Automation Plan",
    "Two conversations, a look at your systems, a ranked list with the numbers, and a build plan for the top one or two. Yours to act on with me or anyone else.",
  ],
  [
    "Build and handover",
    "I build what the plan ranks first. A person on your team approves before it acts. When it’s done, your team owns it, with the Owner’s Manual and 30 days of fix-it support.",
  ],
];

const questions: [string, string][] = [
  [
    "What if it breaks?",
    "Everything I build has three things: a person approves before it acts, a record of what it did, and an off switch. And you get 30 days of fix-it support after handover. If it breaks in the first month, I fix it and you don’t get a bill.",
  ],
  [
    "We’re too small for this.",
    "If one person spends a few hours a week copying, re-typing, or chasing things down, you’re big enough. That’s the point of doing the plan first: you find out what it’s worth before you spend a dollar on building. I’ve done this for a family restaurant with no office staff.",
  ],
  [
    "We already tried Zapier or ChatGPT.",
    "Good. Then you already know the tools aren’t the hard part. The hard part is picking the right job, connecting it to where your information really lives, and making sure it can’t quietly do the wrong thing. Sometimes the answer is “keep Zapier, wire it differently.” The plan tells you which.",
  ],
  [
    "Do you use ChatGPT on my data?",
    "Nothing you share gets used to train any model, and no consumer AI tool touches your data without your sign-off first. Where I use an AI model at all, it’s a business-grade tool with the same data terms I’d put in writing for you.",
  ],
  [
    "Who owns what you build?",
    "Anything built specifically for you — code, configs, docs — is yours once you’ve paid for it. I keep ownership of the general-purpose tools I bring to every client, and you get a license to keep using them as part of what I deliver.",
  ],
  [
    "Will this replace my people?",
    "No. Every build I ship has a person approving before anything goes out or changes a record. The goal is getting the busywork off your team’s plate, not their jobs.",
  ],
  [
    "How long does this take?",
    "Two weeks for the plan. After that it depends what’s on the list — most builds run a few weeks to a couple of months. You’ll know the real timeline before you commit to anything past the plan.",
  ],
  [
    "What do you need from us?",
    "Read-only access to get started, and about three hours of your time across the two weeks — two conversations and a review at the end. Nothing needs to be prepped in advance.",
  ],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={grid}>
      <h2 className={h2}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="max-w-[56rem] px-5 sm:px-8">
      <header className="flex items-baseline justify-between gap-4 py-6">
        <p className="font-display text-h3 font-semibold">Valentino Intelligence</p>
        <p className={`${small} shrink-0`}>Beaverton, Oregon</p>
      </header>

      <main>
        <section className={grid}>
          <div className="flex flex-col gap-5 lg:col-start-2">
            <h1 className="font-display text-h1 font-bold sm:text-h1-lg">
              Find out where automation pays off in your business. Two weeks.
              Fixed price.
            </h1>
            <p>
              For owners of 5–75 person businesses who know they “should be
              using AI” and want a straight answer: what to automate first, what
              it saves, and what it costs to keep running.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
              <a href={MAILTO} className={btn}>
                {CTA}
              </a>
              <p className={small}>No slides. If it isn’t a fit, I’ll say so.</p>
            </div>
          </div>
        </section>

        <Section title="Sounds familiar?">
          <ul className="border-b border-rule">
            {familiar.map((q) => (
              <li key={q} className="flex min-h-10 items-center border-t border-rule py-2">
                “{q}”
              </li>
            ))}
          </ul>
          <p className="pt-5">
            If any of those sound like your week, the plan below is where to
            start.
          </p>
        </Section>

        <Section title="What you get">
          <div className="relative pl-10 before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-margin">
            <h3 className={`${h3} pb-3`}>The Two-Week Automation Plan</h3>
            <ul className="border-b border-rule">
              {sheet.map(([lead, text]) => (
                <li key={lead} className={row}>
                  <strong className="font-semibold">{lead}</strong> {text}
                </li>
              ))}
              <li className={`${row} flex items-baseline justify-between gap-6`}>
                <span>
                  <strong className="font-semibold">Fixed price.</strong> Half
                  to start, half at the review. No hourly surprises.
                </span>
                <span className="text-price font-semibold tabular-nums sm:text-price-lg">
                  $5,500
                </span>
              </li>
              <li className={`${row} font-semibold`}>
                If you get to the day-10 review and don’t have a plan you’d act
                on, with me or with anyone else, you don’t pay the second half.
              </li>
              {included.map(([lead, text]) => (
                <li key={lead} className={row}>
                  <strong className="font-semibold">{lead}</strong> {text}
                </li>
              ))}
              <li className={row}>
                <strong className="font-semibold">
                  Your time: about three hours over two weeks.
                </strong>{" "}
                You’ll need someone who can give me read-only access to your
                systems.
              </li>
              <li className={row}>I run one plan at a time. Next open start: now.</li>
            </ul>
          </div>
        </Section>

        <Section title="After the plan">
          <h3 className={h3}>Build and handover</h3>
          <p className="pt-3">If you want something built, there are two ways to pay.</p>
          <ul className="my-5 border-b border-rule">
            <li className={`${row} flex items-baseline justify-between gap-6`}>
              <span>
                <strong className="font-semibold">Monthly.</strong> About 25
                hours of my time a month. Stop with 30 days’ notice.
              </span>
              <span className="shrink-0 font-semibold tabular-nums">$4,500 a month</span>
            </li>
            <li className={`${row} flex items-baseline justify-between gap-6`}>
              <span>
                <strong className="font-semibold">One project.</strong> A fixed
                price for one item from your plan, half up front.
              </span>
              <span className="shrink-0 font-semibold">Quoted in your plan</span>
            </li>
          </ul>
          <p>
            Either way, every automation I build works the same: a person on
            your team approves before it does anything real, it keeps a record
            of everything it did, and it can be turned off or undone. When we’re
            done, you get the Owner’s Manual, copies of everything, and 30 days
            of fix-it support. You own it. Ongoing support is there if you want
            it, not required.
          </p>
        </Section>

        <section className={grid}>
          <h2 className={h2}>Real examples</h2>
          {examples.map((e) => (
            <article
              key={e.who}
              className="border-t border-rule lg:col-span-2 lg:grid lg:grid-cols-subgrid lg:border-t-0"
            >
              <p className={`${small} pt-4 lg:pt-6`}>{e.who}</p>
              <div className="pt-1 lg:border-t lg:border-rule lg:pt-6">
                <h3 className={h3}>{e.slow}</h3>
                <p className="pt-3">{e.now}</p>
                <p className="pt-3 font-semibold">{e.result}</p>
              </div>
            </article>
          ))}
        </section>

        <Section title="What I’ve built">
          <p>
            A family restaurant alone touches most of the areas below — this
            isn’t one pipeline, it’s the same approach applied wherever the
            busywork is.
          </p>
          <div className="flex flex-col gap-7 pt-5">
            {built.map(([group, cards]) => (
              <div key={group}>
                <h3 className={h3}>{group}</h3>
                <ul className="border-b border-rule">
                  {cards.map((c) => (
                    <li key={c.name} className={row}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <strong className="font-semibold">{c.name}</strong>
                        <span className={small}>{c.client}</span>
                      </div>
                      <p className="pt-2">{c.before}</p>
                      <p className="pt-2">{c.now}</p>
                      <p className={`pt-2 ${small}`}>
                        {c.tools} · {c.status}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <section className={grid}>
          <h2 className={h2}>How it works</h2>
          <ol className="contents">
            {steps.map(([title, body], i) => (
              <li
                key={title}
                className="flex gap-3 lg:col-span-2 lg:grid lg:grid-cols-subgrid lg:gap-x-12"
              >
                <span className={`${h3} shrink-0`}>{i + 1}.</span>
                <div>
                  <h3 className={h3}>{title}</h3>
                  <p className="pt-2">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Section title="Where the big-company years show up">
          <ul className="border-b border-rule">
            {bigCompany.map(([fact, translation]) => (
              <li key={fact} className={row}>
                <strong className="font-semibold">{fact}</strong> {translation}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Fair questions">
          <div className="flex flex-col gap-6">
            {questions.map(([q, a]) => (
              <div key={q}>
                <h3 className={h3}>“{q}”</h3>
                <p className="pt-2">{a}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Who I am">
          <p>
            I’m Liana Valentino. I grew up around family restaurants — Sangaree,
            Valentino’s, Bella Roma — and I was usually the one asked to fix
            the point-of-sale or the ordering system. I spent ten years after
            that building this kind of thing for large companies, including an
            assistant used every day by analysts at Nike. Now I build it for
            businesses that can’t afford a mistake. I work from Beaverton,
            Oregon, mostly remotely, and I do the work myself.
          </p>
        </Section>

        <Section title="Next step">
          <p>
            Tell me the one thing you’d love to stop doing by hand. We’ll take
            it from there.
          </p>
          <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:gap-5">
            <a href={MAILTO} className={btn}>
              {CTA}
            </a>
            <p className={small}>Thirty minutes. No slides.</p>
          </div>
        </Section>
      </main>

      <footer className={`${small} flex flex-wrap gap-x-6 gap-y-1 py-10`}>
        <span>© {new Date().getFullYear()} Valentino Intelligence LLC</span>
        <span>Beaverton, Oregon</span>
        <a href="mailto:valentinoliana@gmail.com" className={link}>
          valentinoliana@gmail.com
        </a>
        <a href="https://linkedin.com/in/lianavalentino" className={link}>
          LinkedIn
        </a>
        <a href="/portal" className={link}>
          Client portal preview
        </a>
      </footer>
    </div>
  );
}
