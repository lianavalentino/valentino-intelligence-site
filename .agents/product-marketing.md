# Product Marketing Context

**Document version:** v2
**Last updated:** 2026-09-11

> Repositioning note: this doc deliberately overrides the copy currently on the site. The live site is written for hiring managers and technical peers (stack tag clouds, "supervisor/sub-agent architectures", "lead data scientist… decade of ML"). The real buyer is a non-technical small-business owner. Downstream skills should generate against this doc, not the site.

## Product Overview
**One-liner:** Practical AI and automation for small businesses — I find the manual work that's costing you hours and build the thing that takes it off your plate, with a person still in charge.

**What it does:** Valentino Intelligence is Liana Valentino's solo consulting practice. She works with owners and GMs of 5–75-person businesses to (1) figure out where AI and automation would actually pay off in their operation, (2) build it — reports that update themselves, approval flows that don't need the owner in the loop, content that drafts itself and waits for a thumbs-up, data pulled out of one system and put where it's useful — and (3) hand it over so the team can run it without her. Every build ships with an approval step, a log of what it did, and a way to undo it.

**Product category:** AI / automation consultant for small business. (How they search: "AI consultant for small business", "automate my business", "AI for manufacturing small company", "someone to set up AI for my business", "fractional AI person".) Not "AI systems engineer", not "data science consulting" — nobody in the ICP searches those.

**Product type:** Service (solo consultancy). Remote-first from Beaverton, OR; Pacific Northwest is the natural local market but nothing requires proximity.

**Business model:**
- Free 30–45 min fit call (qualify, not diagnose).
- **Discovery Sprint** — $5,500 fixed fee, two weeks. Deliverable: a written roadmap of 3–5 scoped opportunities, each with effort, expected ROI, and a build plan, plus a straight answer on whether their data is ready. 50% deposit, 50% at readout. They own the roadmap and can hand it to anyone.
- Build via **Retainer** ($4,500/mo, 25 hrs, 30-day notice) or **Fixed-price SOW** for a single scoped build (50% deposit).
- Rate anchor $175/hr for overages and change requests. Never quote hourly first.
- Client owns all deliverables built for them. Client data is never used to train anything. Documented handover at the end of every engagement.

## Target Audience
**Target companies:** Owner-operated or family-owned businesses, roughly 5–75 people and $1M–$20M revenue, with no in-house engineering or IT beyond maybe an outsourced MSP. Two archetypes seen so far:
1. **Small manufacturer / B2B operator** — has an ERP and a CRM, has data "in there somewhere", CEO personally leading a "we should be using AI on our data" push because nobody else can. Wants analytics → recommendations → eventually automated actions. Wants a "thought partner" and an "integrator", not a vendor.
2. **Local service business / restaurant / family business** — no marketing or ops staff. Needs social content that goes out on schedule, approvals that don't require the owner's constant attention, and basic visibility into expenses and operations. Owner is the bottleneck for everything.

Secondary fits: professional services firms (accounting, law, agencies) drowning in intake and document handling; distributors/wholesalers with quoting and reorder pain.

**Decision-makers:** The owner, CEO, or GM. Usually the same person who feels the pain, signs the check, and will be the first user. Occasionally an ops manager or office manager is the champion, but the owner signs. Budget authority for $5.5k–$15k typically sits with one person; family ownership sometimes adds a second signer.

**Primary use case:** Take a recurring manual process — retyping data between systems, chasing approvals, assembling reports, drafting content — and make it run on its own with a human checkpoint, so the owner and their people stop doing it by hand.

**Jobs to be done:**
- "Get this off my desk." Free the owner from work they were never supposed to be doing personally (data wrangling, content, follow-ups, approvals).
- "Tell me where AI would actually help us, honestly." Turn a vague "we should use AI" mandate into a short, costed, prioritized list — and say plainly what isn't ready.
- "Let me see my numbers without asking someone to build a spreadsheet." Daily/weekly visibility into expenses, orders, accounts, or throughput without manual assembly.
- "Make sure nothing falls through the cracks." Alerts and follow-ups that fire from the data, routed to the right person, with a record.

**Use cases:**
- Invoices and receipts read out of email, categorized, and rolled into a dashboard every morning.
- Social posts drafted, matched to real photos, and published only after a quick approval in the tool the team already uses.
- Order, quote, or account data pulled from an ERP and turned into plain-English reports and "here's who to call this week" lists for reps.
- Alerts when a customer's order pattern drops, a quote is priced out of range, or a job is stuck.
- Blog and marketing content moving from a planning spreadsheet to a reviewable draft to published — with one approval step and no copy-paste.
- First-pass drafts of routine things (quotes for repeat jobs, follow-up emails, weekly briefings) that a person checks and sends.
- Data that gets from one system into another on a schedule instead of via someone's export-and-paste routine.

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **Owner / CEO** (decision-maker, financial buyer, often the user) | Time back, not being the single point of failure, a number that moves, not wasting money | Has ideas but no one to execute; has been doing the technical work as a side project; afraid of buying something that doesn't work or nobody can maintain | A short, honest plan in two weeks; builds that ship with a human checkpoint; the team owns it when she leaves |
| **Ops / office manager** (champion, daily user) | Fewer manual steps, fewer things to remember, not being blamed when something slips | Lives in spreadsheets and copy-paste; every "system" they've been given added work instead of removing it | Tools that show up where they already work (email, Slack, the CRM), that they can approve or reject in one click, with a log |
| **Sales rep / front-line staff** (user) | Knowing who to call, fast answers on quotes and history, not learning yet another tool | Data lives in five places; the report they need is always a week old | Recommendations and alerts pushed into the system they already use; nothing auto-sends to a customer without them |
| **Outsourced IT / MSP or the "technical cousin"** (technical influencer, sometimes gatekeeper) | Access control, not getting paged, not inheriting a black box | Worried about credentials, security, and being left holding something undocumented | Read-only access by default, least privilege, runbooks and handover docs, credentials rotated at offboarding |
| **Co-owner / family member / spouse** (secondary financial buyer) | Is this real money well spent? Is it risky? | Skeptical of "AI", has seen the owner buy tools that gathered dust | Fixed price, fixed scope, walk-away roadmap at the end of two weeks |

## Problems & Pain Points
**Core problem:** The owner is the operating system. Hours every week go to retyping, reformatting, chasing approvals, and assembling reports by hand; things slip because a person forgot; the numbers that would drive better decisions exist but nobody can see them without a spreadsheet project. They know "AI" is supposed to help with exactly this, but they don't know where to start, who to trust, or how to avoid paying for something that breaks or that nobody on the team can touch.

**Why alternatives fall short:**
- **DIY (Zapier/Make, ChatGPT tab, the owner at 10pm):** works for a demo, breaks on the first edge case, and nobody knows why. The owner becomes maintenance staff.
- **Hiring a junior ops or "AI" person:** $50–80k/yr plus management time for someone who's learning on your dime, with no track record of shipping anything into production.
- **Dev shops / agencies:** quote in $50k+ increments, staff it with juniors behind an account manager, over-build, and leave without documentation.
- **Off-the-shelf SaaS with an "AI" checkbox:** solves the vendor's generic case, not your workflow; you still do the glue work by hand.
- **Big consulting / "AI strategy" decks:** $25k+ for a PowerPoint and no build.
- **Do nothing / keep the spreadsheet:** the safest-feeling option, and the one that guarantees the owner stays the bottleneck.

**What it costs them:** 5–15 hours a week of owner/manager time on work a machine should do; slow quotes and slow follow-up losing time-sensitive orders; invoices and reorders slipping; decisions made on a month-old spreadsheet; a CEO doing engineering as a side project instead of running the business; growth capped by how much the owner can personally hold in their head.

**Emotional tension:** "Everyone says use AI and I feel behind." "I've been burned — we paid for something that didn't work." "I don't want to be the only one who knows how this works." "What if it does something wrong to a customer?" "Am I too small for this to be worth it?" Underneath: exhaustion and a low-grade fear of looking foolish for buying the wrong thing.

## Competitive Landscape
**Direct:** Other fractional AI/automation consultants and small automation dev shops — falls short because most either sell a strategy deck with no build, or a build with no discovery (so it doesn't fit the real data), staff the work with juniors, skip approval gates and documentation, and leave the client with something only the vendor can maintain. Few have shipped production AI that real people used daily; most learned on their first client.

**Secondary:**
- **Zapier / Make / no-code DIY** — falls short because the owner becomes the engineer; brittle on edge cases, no error handling, no audit trail, no one to call when it breaks at 2am.
- **Hiring a junior ops/analyst** — falls short because it's a salary plus management overhead for someone who hasn't done this before, and the job is part-time in reality.
- **Off-the-shelf SaaS / the "AI features" in their ERP or CRM** — sometimes the right answer (and we'll say so in the sprint), but usually covers the generic 60% and leaves the glue work manual. Doesn't know their specific process.
- **Big-firm "AI readiness assessment"** — $25k–$150k for a deck; built for enterprises with IT departments.

**Indirect:** **Doing nothing / keeping the spreadsheet and the part-timer** — falls short because the hours don't come back, the errors keep happening, and the owner stays the bottleneck. This is the real competitor on most deals; the sprint is priced and shaped to make "find out for $5,500 in two weeks" an easier decision than "keep doing it."

## Differentiation
**Key differentiators:**
- **She's shipped this at scale, and she does the work herself.** A decade building production ML and AI systems, including an AI assistant used daily by analysts at Nike. You get the person with that track record on your account, not juniors behind an account manager.
- **Discovery before build, at a fixed price.** Two weeks, $5,500, and you get a roadmap you could hand to anyone. Nobody guesses at scope, and if your data isn't ready she says so before you spend more.
- **Nothing acts without a checkpoint.** Every automation ships with an approval step, a log of what it did and why, and a way to roll it back. Trust is earned in phases; full autonomy is never day one.
- **Built to be handed over.** Documentation, runbooks, and a handover checklist are part of every engagement. Your team owns it; credentials are rotated when she leaves. No lock-in.
- **Translates to a number.** She's built client-facing ROI tools that helped close large sales; every opportunity on the roadmap comes with effort and expected payoff, not just "wouldn't it be cool."
- **Small-business-sized.** Fixed prices under five figures to start, a retainer under $5k/mo, and a process built for a company with no IT department.

**How we do it differently:** Qualify on a free call, map before building (paid, scoped, fixed-fee), build only what the roadmap ranks first, ship with guardrails, hand over cleanly. Named, repeatable process, week by week, published.

**Why that's better:** The owner never buys a "maybe." The first check is small and produces something useful even if they walk. What gets built fits their actual data, can't quietly do damage, and doesn't depend on the consultant staying forever.

**Why customers choose us:** Someone credible who talks like an operator, not a startup; takes the technical seat so the owner can go back to running the business; is honest about what won't work; and prices in a way a small business can say yes to.

## Objections
| Objection | Response |
|-----------|----------|
| "Will it break? Who maintains it after you leave?" | Every build ships with an approval step, a log, a rollback path, and written runbooks your team can follow. Handover is a checklist, not a handshake. If you want me to keep an eye on it, that's what the retainer is for — but you're never stuck with a black box. |
| "We're too small for this." | Small is the point. The sprint is $5,500 and two weeks. The things that pay off first in a 20-person company are boring — invoices, follow-ups, reports — and they don't need a big budget, they need someone who's done it before. |
| "AI makes stuff up." | Yes, which is why nothing I build sends, posts, or changes a record on its own until a person approves it, and every action is logged with its source. AI drafts; your people decide. Autonomy is expanded only after it's earned a track record. |
| "We tried Zapier / we tried this ourselves." | Most DIY automation dies on the first edge case because there's no error handling and no one watching. The sprint looks at what you built, keeps what works, and tells you honestly what needs to be rebuilt properly. |
| "How do I know it'll pay off?" | You don't yet — that's what the two weeks are for. Each opportunity on the roadmap comes with an effort estimate and ROI logic; if the numbers don't work, I'll say so and you've spent $5,500 instead of $40,000. |
| "Can't you just start building?" | Building on a guess is how you end up with an expensive rebuild. Two weeks of discovery is cheap insurance. |
| "Why not hourly?" | Hourly is an open tab paying for my learning curve. Fixed fee means a known deliverable on a known date. |
| "You're new / a one-person shop." | Early as an independent, but the track record was built in production at Nike, used daily. You get the person doing the work, direct. |
| "We need someone on-site / full-time." | This work is mostly async; I show up for the decisions. If a build genuinely needs on-site time, we scope it. |
| "What about our data / customer confidentiality?" | Read-only access by default, least privilege, your data stays in your systems, never used to train anything, working copies deleted at offboarding. In writing. |

**Anti-persona:**
- Enterprise procurement, RFPs, vendor-onboarding cycles, security questionnaires longer than the SOW.
- Anyone looking to hire (full-time or contract-to-hire) — this is a business, not a resume.
- "Can you build me a chatbot for $500" / cheapest-option shoppers.
- Companies with no usable data and no willingness to grant access.
- Curiosity with no pain: "we should do something with AI" but no process that hurts and no one who signs.
- Technical teams wanting a staff-aug engineer or an ML researcher.

## Switching Dynamics
**Push:** The owner is exhausted doing work that should be automated; the last attempt (DIY tool, junior hire, agency) broke or stalled; a competitor or peer is visibly "using AI"; quotes and follow-ups are too slow; numbers arrive too late to act on; the CEO has been doing the technical work as a side project and wants to stop.

**Pull:** A credible person who's done this in production, at a price a small business can say yes to, with a small first step and a walk-away deliverable; guardrails that make automation feel safe; the promise that the team will own it.

**Habit:** The spreadsheet works, sort of. The part-timer knows the routine. The owner knows how everything works and quietly likes being needed. "We'll get to it after the busy season." Sunk cost in tools already paid for.

**Anxiety:** "It'll do something wrong to a customer." "Nobody here can maintain it." "I'll pay and get a deck." "I'll look stupid for buying AI hype." "She'll leave and we'll be stuck." "Our data's probably a mess." "We're too small to matter to a real expert."

## Customer Language
**How they describe the problem:**
- "I'm paying someone to retype invoices."
- "I'm doing all of this myself and I need to move faster."
- "We have a terrific data set in our system and we're not doing anything with it."
- "We've got the data out of the ERP into a place where we can look at it. Now what?"
- "I need a thought partner who can identify, scope, and implement."
- "I'm looking for an AI integrator."
- "I don't know where to start with AI."
- "Everyone keeps saying we should be using AI on our data."
- "Things fall through the cracks. Somebody forgets to follow up and we lose the order."
- "I can't see my numbers without someone building a spreadsheet."
- "I don't know what we spent last month until the bookkeeper tells me."
- "Every post has to go through me and I don't have time."
- "We built something but nobody uses it."
- "The last guy built something nobody could touch after he left."
- "We tried Zapier. It worked until it didn't, and nobody knew why."
- "I don't want to pay for something that doesn't work."
- "Who's going to maintain this?"
- "What if it makes something up and sends it to a customer?"
- "We're a small company."
- "Quoting takes days and we lose jobs to whoever answers first."
- "I'm the only one who knows how this works."
- "I want to get back to running the business."

**How they describe us (desired; paraphrased from prospect framing and engagement language, not yet quotable testimonials):**
- "She took it off my plate."
- "She actually built it, not just told us what to do."
- "It drafts, we approve, it posts. I check my phone once."
- "She told us what wasn't ready instead of selling us something."
- "Our team runs it now."
- "A thought partner who can also do the work."
- "Practical. No hype."

**Words to use:** take it off your plate · hours back · runs on its own · you approve, it does the rest · a person is still in charge · nothing goes out without a thumbs-up · a log of everything it did · you can undo it · your team owns it · handover · plain-English · see your numbers every morning · nothing falls through the cracks · fixed price, two weeks · a roadmap you can hand to anyone · honest read on whether your data's ready · quick win · where it pays off first · draft → approve → send · built for a company without an IT department · I've done this before, in production

**Words to avoid:** agents, agentic, pipelines, orchestration, supervisor/sub-agent, n8n, LLM, GenAI, ML, model, stack, architecture, RAG, workflow engine, integration layer, semantic layer, observability, human-in-the-loop (say "a person approves"), self-acting (their word, fine in conversation; on the site say "acts on its own, with a checkpoint"), leverage, unlock, transform, revolutionize, cutting-edge, seamless, synergy, "AI-powered", "solutions", "digital transformation", "data-driven" as a slogan, resume language (lead data scientist, decade of experience) as a headline — credibility belongs in the "about" line, not the hero.

**Translation table (technical → owner language):**
| We'd say internally | Say to the owner |
|---|---|
| approval gate / human-in-the-loop | a person approves before anything goes out |
| audit log | a record of everything it did and why |
| rollback path | a way to undo it |
| pipeline / workflow | the process / the thing that runs every morning |
| agent | the assistant / the system |
| NL-to-SQL / analytics layer | ask a question in plain English, get the answer from your own data |
| recommendation engine | a "who to call this week" list |
| anomaly detection | flags when something looks off |
| data readiness | whether your data is clean enough to build on |
| observability / drift | we watch it so you don't have to |

**Glossary:**
| Term | Meaning |
|------|---------|
| Fit call | Free 30–45 min call to decide whether the sprint makes sense. Qualifying, not free consulting. |
| Discovery Sprint | Two-week, $5,500 fixed-fee engagement. Interviews, data check, and a roadmap of 3–5 scoped opportunities with effort and ROI. Client owns it. |
| Roadmap / readout | The written deliverable and live walkthrough at the end of the sprint. Decision-maker attends. |
| Data-readiness | A plain 1–5 read on whether each system's data is fresh, owned, clean, and accessible enough to build on. |
| Retainer | $4,500/mo for 25 hours, 30-day notice. For ongoing builds and upkeep across several opportunities. |
| Fixed-price build | One scoped opportunity from the roadmap, built for a set price. 50% deposit. |
| Approval step | The point where a person says yes before the system sends, posts, or changes a record. |
| Handover | Docs, runbooks, and access transfer so the client's team runs it without the consultant. |
| Change request | The one-page form used when a client wants something outside scope. Priced before it's built. |

## Brand Voice
**Tone:** Plain, direct, calm. Competent operator, not a startup. Says what it will and won't do. Comfortable with silence and with "no."

**Style:** Short sentences. Concrete nouns (invoices, quotes, posts, reports) over abstractions. Specific numbers when they're real, none when they aren't. First person ("I"), because it's one person and that's the point. No exclamation marks. No hype verbs. States tradeoffs in one line. Sounds like someone who has been paged at 2am and designs so it doesn't happen to you.

**Personality:** Grounded · Honest · Practical · Careful · Direct

**Voice tests:**
- Would a 60-year-old manufacturer CEO read it without reaching for a glossary? Pass.
- Does it promise a result that hasn't been measured? Fail.
- Could a dev shop's landing page say the same thing? Rewrite.
- Does the credibility sentence come before the customer's problem? Reorder.

## Proof Points
**Metrics:**
- ROI calculator built for an equipment manufacturer has been used at three industry conferences and contributed to two roughly $1M machine sales. (Safe to publish.)
- Social publishing for a family-owned restaurant has been live on Facebook and Instagram behind a one-tap approval since July 2026; an expense dashboard rebuilds itself every morning from emailed invoices. **No time-saved or revenue number exists. Do not invent one.**
- A decade of production ML/AI work, including an assistant used daily by analysts at Nike. This is credibility about the person, not a client reference — never phrase it as if Nike was a consulting client.

**Customers:** Small equipment manufacturer (fire-service decon equipment) · public-safety software company (content operations, in user testing, no outcome yet) · family-owned restaurant in South Carolina. No logos cleared for publication; describe by category unless a client approves.

**Testimonials:**
> None collected yet. Testimonial and case-study asks go out after final payment on each engagement (see offboarding process). Do not fabricate.

**Value themes:**
| Theme | Proof |
|-------|-------|
| Takes real work off the owner's plate | Restaurant: social content drafted, photo-matched, and posted after a one-tap approval; expense dashboard rebuilt daily without anyone touching it |
| Turns technical work into a number the owner cares about | ROI calculator used at 3 conferences, contributed to two ~$1M sales |
| Nothing goes live without a person saying yes | Every content and publishing build to date runs behind an approval step; unapproved items cannot post |
| Has done this in production, not in a demo | Nike-scale AI assistant used daily by analysts; a decade of shipped ML/AI |
| Honest scoping before spending | Published, fixed-price two-week sprint with a walk-away roadmap; says "not ready" when data isn't |
| Team owns it afterward | Handover checklist: docs, runbooks, access transfer, credentials rotated |

**Publishing guardrails (from content/portfolio-content.md "Do not publish"):** no fabricated metrics for the restaurant engagement; no family-ownership detail; don't imply the content-hub client is in full production; the automation detail on the equipment manufacturer's blog publishing is flagged internally as needs-confirmation before it goes on the site; no internal identifiers, credentials, or client-internal numbers anywhere.

## Goals
**Business goal:** Land 2–3 paying Discovery Sprints in the next quarter from small-business owners, converting at least one to a retainer or build. Establish the site as a credible, shareable "who is this person and what will it cost me" page for referrals and inbound.

**Conversion action:** Book the free fit call. Until a booking link exists, the CTA is an email to valentinoliana@gmail.com with a one-line prompt ("Tell me the one thing you'd love to stop doing by hand"). Secondary: read the Discovery Sprint page and understand the price before the call.

**Current metrics:** Site launched 2026-09-11, no analytics yet. One inbound lead (LinkedIn, manufacturer CEO) reached fit-call stage; one restaurant engagement live; two content-ops engagements in progress. Baseline for everything is zero — first measurable goal is fit calls booked per month.

## Changelog
*Newest first. One line per revision: what changed and why.*
- v2 (2026-09-11) — Pricing raised after market research: sprint $4,500→$5,500, retainer $4,500→$4,500/mo, rate anchor $150→$175/hr. Offer structure unchanged.
- v1 (2026-09-11) — Initial context. Auto-drafted from repo content plus private engagement/process notes (language and process harvested, no identifying details). Deliberate repositioning away from the site's current technical-peer/hiring-manager copy toward the non-technical small-business owner.
