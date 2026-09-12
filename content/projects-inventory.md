# Liana Valentino — Project Portfolio Inventory (capability-based)

Compiled from repo heads under `~/Developer/clients/`, `~/Developer/_services/`,
`~/Developer/personal/`, `~/Developer/vault/`, `~/Developer/career-ops/`.

---

### Italian Bistro — Website (Wix → Cloudflare Pages)
- Client: Italian Bistro Knightsville
- Category: Web apps & dashboards
- Problem: Wix site was slow, costly, off-brand.
- What was built: React/Vite/Tailwind site on Cloudflare Pages (free tier), menu synced from canonical `menu.json`, JSON-LD/SEO. Wix retired 2026-08-29.
- Stack: React, Vite, Tailwind, Cloudflare Pages/D1
- Status: shipped
- Outcome: not documented
- Evidence path: `clients/italian-bistro/.claude/rules/website.md`, `docs/site-migration.md`

### Italian Bistro — Social Photo/Content Pipeline
- Client: Italian Bistro Knightsville
- Category: Content & marketing ops
- Problem: No repeatable path from restaurant photos to approved on-brand posts.
- What was built: Drive photos → content plan → GPT-Image 2 assets → Slack approval (checksum-gated) → scheduled FB/IG publishing via Meta Graph API; enforces menu-accuracy and no-identifiable-people rules.
- Stack: Python, Meta Graph API, Slack API, Google Drive, GitHub Actions
- Status: shipped, live since 2026-07-22
- Outcome: Cadence set from competitive research (5x→2x/wk); photo shoot brief derived from Google review-topic gaps.
- Evidence path: `clients/italian-bistro/orchestration/social/`, `docs/adr/ADR-001`, `ADR-002`

### Italian Bistro — Slack Bots (ops/website-edit/ask)
- Client: Italian Bistro Knightsville
- Category: AI agents & LLM apps
- Problem: Owner needed to request website edits and business-fact answers from Slack.
- What was built: Cloudflare Worker routing Slack commands to edit/query/review handlers; GitHub PR integration; `#bistro-ask` answers from the KB.
- Stack: TypeScript, Cloudflare Workers, Slack API, GitHub API, OpenAI
- Status: shipped
- Outcome: not documented
- Evidence path: `clients/italian-bistro/bot-worker/src/`, `docs/adr/ADR-004`, `ADR-005`

### Italian Bistro — Ops Analytics / Sales MCP
- Client: Italian Bistro Knightsville
- Category: Data pipelines & analytics
- Problem: Shift4 POS has no sales API; no queryable sales/labor view.
- What was built: Unattended daily ingestion of Shift4 CSV emails into DuckDB (launchd); MCP server exposing revenue/top-sellers/specials tools.
- Stack: Python, DuckDB, Gmail IMAP, launchd, MCP
- Status: shipped, live since 2026-07-21
- Outcome: not documented (food-cost/margin data deferred to v2)
- Evidence path: `clients/italian-bistro/ops-analytics/mcp/README.md`

### Italian Bistro — Expense Pipeline & Dashboard
- Client: Italian Bistro Knightsville
- Category: Data pipelines & analytics
- Problem: No automated read of bank/vendor spend vs. revenue.
- What was built: Daily pipeline archiving bank exports, refreshing vendor invoices via Gmail, rebuilding a password-gated dashboard; fails closed on reconciliation errors.
- Stack: Python, launchd, Gmail IMAP, static dashboard, Cloudflare Pages
- Status: shipped, unattended since 2026-08-29
- Outcome: Surfaced a −$75,156 YTD cash swing driven by an 18.7% payroll increase.
- Evidence path: `clients/italian-bistro/ops-analytics/expenses/README.md`, `docs/ops/2026-08-28-status-report.md`

### Italian Bistro — Payroll Automation (Shift4 → iSolved)
- Client: Italian Bistro Knightsville
- Category: Workflow automation
- Problem: Manager retyped hours/rates by hand every 2 weeks (~60 min/cycle, OT-compliance risk).
- What was built: Script parses Shift4 labor export, joins a rates table, flags OT, produces the iSolved CSV; biweekly Slack review loop lets manager approve before a Gmail draft is drafted.
- Stack: Python, DuckDB, Slack API, Gmail API, launchd
- Status: builder shipped; Slack loop design approved, build in progress
- Outcome: Projected −23 hrs/year of manager time.
- Evidence path: `clients/italian-bistro/docs/ops/2026-08-28-process-optimization-payroll.md`, `docs/superpowers/specs/2026-08-31-payroll-slack-loop-design.md`

### Italian Bistro — POS Research & Online-Ordering Design
- Client: Italian Bistro Knightsville
- Category: Ops/business systems
- Problem: Owner assumed a POS migration was needed; unclear actual pain point.
- What was built: Reframed scope — Shift4 stays; real gap is first-party per-slot online ordering (currently auto-disables during Fri/Sat rush). Design spec written, not yet built.
- Stack: research/analysis
- Status: in-progress
- Outcome: not documented
- Evidence path: `clients/italian-bistro/pos/CLAUDE.md`, `docs/superpowers/specs/2026-08-31-online-ordering-design.md`

### Italian Bistro — DoorDash/Loyalty Change Request
- Client: Italian Bistro Knightsville
- Category: Ops/business systems
- Problem: DoorDash Drive + Marketplace half-configured, causing a live customer-facing confirmation defect.
- What was built: Change-request analysis (commission model, Fri/Sat throttle, pricing uplift) for an owner go/no-go decision.
- Stack: n/a (analysis)
- Status: prototype/decision doc, not executed
- Outcome: not documented — Shift4 shows 3 delivery tickets in 7 months.
- Evidence path: `clients/italian-bistro/docs/ops/2026-08-28-change-request-doordash.md`

### Italian Bistro — Vendor/Ops Tracker & Analysis
- Client: Italian Bistro Knightsville
- Category: Ops/business systems
- Problem: Vendor terms and renewal judgment lived only in memory.
- What was built: Vendor directory + judgment-layer KB pages; iSolved vendor review with ADP/Gusto quote-request drafts.
- Stack: Markdown KB
- Status: shipped
- Outcome: Found iSolved's fee doubled ($4,420→$9,100/yr) with no service change.
- Evidence path: `clients/italian-bistro/docs/kb/vendor-analysis.md`, `docs/ops/2026-08-28-vendor-review-isolved.md`

### Italian Bistro — Risk Register & Compliance Tracking
- Client: Italian Bistro Knightsville
- Category: Ops/business systems
- Problem: No structured operational/compliance risk view.
- What was built: 16-item scored risk register + compliance register.
- Stack: Markdown, skills-based analysis
- Status: shipped (dated snapshot)
- Outcome: Surfaced a Critical plaintext-credential leak and an FLSA overtime exposure.
- Evidence path: `clients/italian-bistro/docs/ops/2026-08-28-risk-register.md`

### Italian Bistro — Knowledge Base
- Client: Italian Bistro Knightsville
- Category: Knowledge & memory systems
- Problem: Business facts scattered across a doc, a spreadsheet, and memory.
- What was built: 14-page canonical KB rendered to a password-gated wiki and queryable via Slack.
- Stack: Markdown, static-site generator, Slack bot
- Status: shipped
- Outcome: not documented
- Evidence path: `clients/italian-bistro/docs/kb/README.md`

### ETD — Enertia ROI Calculator
- Client: Emergency Technical Decon
- Category: Web apps & dashboards
- Problem: Fire departments needed a TCO/ROI model for the Enertia decon machine to support sales.
- What was built: Next.js 16 + vinext + Drizzle app on Cloudflare, with PRD and 10-year ROI tables.
- Stack: Next.js 16, React 19, TypeScript, Tailwind v4, Drizzle, Cloudflare/Wrangler
- Status: shipped
- Outcome: Contributed to two ~$1M machine sales; used at three industry conferences (per career-ops KB).
- Evidence path: `clients/ETD/ETD Enertia Machine ROI Calculator/`, `career-ops/knowledge-base/03 Project Portfolio.md`

### ETD — WordPress Content Publishing Operator
- Client: Emergency Technical Decon
- Category: Content & marketing ops
- Problem: Turning the monthly SEO-vendor Content Card into a WordPress draft, 3 social posts, and a tracker row was fully manual.
- What was built: Multi-gate approval flow (schedule → copy quality → blog/social/image approval → execution confirmation) producing a WordPress **draft** (never auto-published), 3 scheduled Buffer posts, a Google Doc record, and a tracker row. Link menu covers 104 published posts (2026-08-11).
- Stack: Node.js, WordPress REST API, Google Drive/Docs API, Buffer API, macOS Keychain
- Status: shipped (superseded by shared `content-operator` repo)
- Outcome: 69-test suite asserting never-publish-live safety.
- Evidence path: `clients/ETD/content-publishing-operator/README.md`, `HANDOFF.md`

### ETD — Brand Kit & Blog Voice Guide
- Client: Emergency Technical Decon
- Category: Knowledge & memory systems
- Problem: Blog/marketing copy needed a consistent NFPA-literate, non-hype voice.
- What was built: Canonical brand kit + blog-voice guide (terminology, tone, cadence/formula) feeding the publishing operator.
- Stack: Markdown
- Status: shipped
- Outcome: not documented
- Evidence path: `clients/ETD/ETD Brand/`, `clients/ETD/memory/projects/etd-blog.md`

### ETD — Client Video Feedback Pipeline
- Client: Emergency Technical Decon
- Category: AI agents & LLM apps
- Problem: Stakeholder video feedback had no path into an implementation plan.
- What was built: Drive video → local whisper.cpp transcript → cue frames → implementation-plan markdown, run via a delegated agent.
- Stack: whisper.cpp, Google Drive, agent delegation
- Status: shipped, working end-to-end; being evaluated as standard intake path
- Outcome: not documented
- Evidence path: `clients/ETD/docs/timeline-weeks/digests/01-2026-W32-digest.md`

### Emergent — Content Hub App (Next.js/Supabase)
- Client: Emergent (public-safety software)
- Category: AI agents & LLM apps
- Problem: Needed a repeatable path from a content-card XLSX to brand-checked, approved blog + social copy published to Webflow.
- What was built: M1–M5 shipped (shell/auth, XLSX intake, generation agents, review/approval, Google outputs); M6 (Webflow export) implemented but not production-verified; M7–M8 not started.
- Stack: Next.js 16, React 19, TypeScript, Drizzle ORM, Supabase Postgres, Vercel
- Status: in-progress
- Outcome: not documented (live at emergent-content-hub.vercel.app)
- Evidence path: `clients/emergent/content-hub-app/README.md`, `docs/m1_build_plan.md`–`m6_build_plan.md`

### Emergent — Content Hub Codex Site (Cloudflare Workers/D1)
- Client: Emergent
- Category: AI agents & LLM apps
- Problem: Same product, parallel stack (Codex Sites vs. Vercel/Supabase) to compare approaches.
- What was built: vinext/D1/Drizzle workbench (Create → Review & Edit → Schedule → Blog Tracker) with two-gate copy approval and orchestrated package execution — mock-mode only for downstream writes.
- Stack: Next.js 16 via vinext, Cloudflare Workers, D1, Drizzle
- Status: in-progress
- Outcome: Generation scored 90.8/100 against 12/12 real Content Cards on attempt 1.
- Evidence path: `clients/emergent/codex-site/README.md`, `HANDOFF.md`

### Emergent — Shared Brand Kit & Content Strategy
- Client: Emergent
- Category: Knowledge & memory systems
- Problem: Two parallel builds plus the shared publishing operator needed one brand/product source of truth.
- What was built: Shared brand palette/logo rules, agent prompts, a 129-slug internal link menu, a marketing-loop register, and the authoritative product spec (`prd_v2.md`).
- Stack: Markdown
- Status: shipped
- Outcome: not documented
- Evidence path: `clients/emergent/CLAUDE.md`, `shared/`

### Content Operator — Shared n8n Publishing Automation
- Client: Emergent + ETD (shared)
- Category: Workflow automation
- Problem: Two brands' interactive publishing skills needed a single installable automation instead of duplicated logic.
- What was built: 13 n8n workflows (card parsing/routing, review-package creation, editorial QA, error handling, checkpointing) plus a Google Apps Script writer and a Dockerized mock-provider test harness. Draft-only guarantee: no workflow can publish live.
- Stack: n8n, Node.js, Google Apps Script, Docker
- Status: prototype (local source + controlled tests; not installed/activated on any instance)
- Outcome: 363 tests, 362 passing, 1 known bundler failure; zero `npm audit` vulnerabilities.
- Evidence path: `clients/content-operator/n8n/README.md`, `n8n/evidence/validation-summary.md`

### n8n Infrastructure — Mac Docker + Home Assistant (HAOS)
- Client: Personal infra (serves Italian Bistro + ETD)
- Category: Infra & DevOps
- Problem: Needed a persistent, access-controlled n8n runtime.
- What was built: Two independent self-hosted n8n instances — a Mac Docker instance (inventory not yet captured) and a permanent Home Assistant NUC instance behind Cloudflare Access plus a hostname-scoped WAF rule on the webhook path.
- Stack: Docker, n8n, Home Assistant Supervisor, Cloudflare Access/WAF
- Status: shipped (HAOS live since 2026-09-09)
- Outcome: not documented
- Evidence path: `_services/n8n/CLAUDE.md`, `haos/README.md`

### LIVAL OS — Personal Operating System
- Client: Personal
- Category: Ops/business systems
- Problem: No single system captured tasks/time/life-admin across delivery, personal builds, and job search.
- What was built: Vite/React/Supabase app with automation-fed ingestion — Claude Code session hooks, a planned Apple Shortcut, a Vault bridge — via 6 deployed Supabase Edge Functions.
- Stack: Vite, React 19, TypeScript, Supabase (Postgres/Auth/Edge Functions/Deno)
- Status: in-progress, daily-use
- Outcome: 28/28 Deno tests passing; a 2026-08-03 Supabase outage recovered with zero data loss via spool-and-replay (26 sessions).
- Evidence path: `personal/lival-os/CLAUDE.md`, `PRD.md`, `docs/adr/`

### Vault — Obsidian Memory System with Agent Scheduler
- Client: Personal
- Category: Knowledge & memory systems
- Problem: ~4,700 notes needed to stay navigable and non-duplicative of LIVAL OS's authoritative state.
- What was built: Index-not-copy Obsidian vault with 4 scheduled agents — morning (today's note + overdue-task projection), nightly (session gaps, Granola call capture, contradiction reconciliation), weekly (Friday rollup), health (Sunday anti-rot/orphan audit).
- Stack: Obsidian, Granola MCP, claude-mem, launchd
- Status: shipped, daily use
- Outcome: not documented
- Evidence path: `vault/CLAUDE.md`, `_meta/agents/`

### career-ops — AI Job Search Pipeline
- Client: Personal (tool by third party "santifer"; Liana runs her own instance)
- Category: AI agents & LLM apps
- Problem: Manually evaluating postings and tailoring CVs doesn't scale.
- What was built: CLI-agnostic pipeline — zero-token ATS scanners (Greenhouse/Ashby/Lever/Workday/iCIMS), offer scoring with legitimacy checks, LaTeX/HTML CV + cover-letter generation, an atomic-write tracker, follow-up/reply-watch automation.
- Stack: Node.js, Playwright, YAML, Markdown
- Status: shipped, actively used
- Outcome: Origin tool evaluated 740+ offers / 100+ CVs for its original author — not Liana's own numbers.
- Evidence path: `career-ops/AGENTS.md`, `personal/ai-job-search/CLAUDE.md`

### Career Knowledge Base — Claim-Verified Portfolio
- Client: Personal career materials
- Category: Knowledge & memory systems
- Problem: Resume claims needed a verifiable, non-fabricated source spanning prior employers.
- What was built: Claims-based KB backing a Project Portfolio and Achievement Library, separating verified claims from retired/prohibited metrics.
- Stack: Markdown, YAML
- Status: shipped, maintained
- Outcome: Documents Nike work (multi-agent GenAI assistant, 15+ daily analysts; 70+ KDE models; Isolation Forest migration; CI/CD weeks→under a day) and a security role (30B+ daily events, 1B+ accounts protected; WannaCry/Petya support for 40+ Fortune 500 clients).
- Evidence path: `career-ops/knowledge-base/03 Project Portfolio.md`, `04 Achievement Library.md`

### Restaurant Technology — Prior Family-Business POS/Marketing
- Client: Prior family restaurants (Sangaree/Valentino's/Bella Roma)
- Category: Integrations (APIs/CRM/ERP-style)
- Problem: Sangaree ran on a legacy POS (Benseron) with no combinatorial pizza-modifier support.
- What was built: Benseron→Toast migration (2020) — modifier data model, emulator-based QA, Digital Ordering launch, a 250-card gift-card program, FB/IG management with in-house photography since.
- Stack: Toast POS, Homebase, Mailchimp, Facebook/Instagram
- Status: shipped (historical — Sangaree since sold)
- Outcome: Negotiated POS install fee from ~$600 to $300/location. No quantified sales/time metric exists (explicit no-fabrication rule).
- Evidence path: `career-ops/knowledge-base/03 Project Portfolio.md` (Family D2)

### vows-valentino — Wedding Venue Outreach Tracker
- Client: Personal
- Category: Web apps & dashboards
- Problem: Needed a shared real-time board for villa/hotel outreach and quotes.
- What was built: Static HTML app, no build step, backed by Supabase (Postgres/Auth/Realtime), on Vercel.
- Stack: Static HTML/JS, Supabase, Vercel
- Status: shipped, live
- Outcome: not documented
- Evidence path: `personal/vows-valentino/CLAUDE.md`

### wedding — Wedding Planner App
- Client: Personal
- Category: Web apps & dashboards
- Problem: Venue research, guests, and timeline were spread across three disconnected prior tools.
- What was built: Consolidated local planner (overview, venue tracker, brain dump, follow-ups, to-dos, guests, timeline), migrated from an earlier Codex/ChatGPT prototype; private data kept out of Git via a local D1 preview.
- Stack: Next.js-family app, Cloudflare D1 (local preview)
- Status: in-progress, running locally
- Outcome: not documented
- Evidence path: `personal/wedding/CLAUDE.md`

### Additional Italian Bistro & infra items (shipped, brief)
- **GitHub Issues board sync** (Workflow automation) — script generates an HTML roadmap board from GitHub Issues/branch state; session-start check flags drift without blocking. `clients/italian-bistro/scripts/sync_board.py`
- **SOPs & runbooks** (Ops/business systems) — living vendor invoice-to-payment SOP and operational runbooks, kept current in place. `clients/italian-bistro/docs/ops/2026-08-28-sop-vendor-invoice-to-payment.md`
- **Runtime/deployment** (Infra & DevOps) — `italian-bistro-runtime` mirrors deployed state; Cloudflare Pages/Workers hub dashboards; launchd jobs; GitHub Actions digest workflow. `clients/italian-bistro-runtime/`
- **Review responder** (AI agents & LLM apps) — reply-drafting script + shadow-mode test harness; prototype, gated on owner Google Business Profile login. `clients/italian-bistro/scripts/review_responder.py`
- **Daily digest service** (Workflow automation) — standalone cross-project daily rollup generator, separate from Italian Bistro's/ETD's digests. `_services/daily-digest/digest.py`

### Smaller personal projects (idea/scaffold stage unless noted)
- **ig-saved-scraper** — Data pipelines & analytics. Daily Cowork agent: IG-saved posts → Claude classification → Notion DB. Idea only.
- **job-applier-agent** — AI agents & LLM apps. Planned Playwright job scraper + Claude-tailored resume/cover drafts to Drive + digest email. Idea only.
- **homeassistant-bridge** — Integrations. Planned TS MCP server for full HA read/write + automation editing. Idea only.
- **ai-job-search** — AI agents & LLM apps. Job-application workspace on career-ops's KB — fit scoring, LaTeX CV tailoring, interview prep. In-progress/active.
- **kanban** — Web apps & dashboards. Claude-artifact task board, `tasks.json` on Drive as sole source of truth. Scaffolded, artifact not built.
- **fitness-app / habit-tracker** — Web apps & dashboards. Two planned Next.js/Drizzle PWAs sharing a backend. Idea only.

(chocolate-moosen and markedit-direct-preview have no `CLAUDE.md`, skipped per instructions.)

---

## Needs Liana to confirm

1. "99-post tracker" (ETD WordPress operator) — closest match found is "104 published posts as of 2026-08-11" (`HANDOFF.md`). Which number is right?
2. `content-operator/n8n` evidence shows two test-count snapshots (348 vs. 363). Which is current, and is it installed anywhere?
3. Risk register flags a **Critical** plaintext Shift4 password in a Granola transcript, not yet confirmed rotated — check before this goes public.
4. `italian-bistro-runtime` and the older `restaurant` (Wix-era) repo look like duplicates — which, if either, should appear?
5. Mac Docker n8n instance's workflow inventory is undocumented — running anything client-facing, or dormant?
6. LIVAL OS's own docs say "not a portfolio piece" — OK to include here for an internal inventory anyway?
7. Emergent Content Hub has two full parallel builds — which ships, and is the other superseded?
8. DoorDash and online-ordering redesign are open owner decisions — confirm status before calling either "in progress."
9. Restaurant-tech work (Sangaree/Valentino's/Bella Roma) has a no-fabricated-metrics rule — OK to list it with zero quantified outcomes?
10. `career-ops` was built by a third party ("santifer"); Liana runs her own instance. List as her build, or just her usage?
11. Payroll Slack loop can't distinguish Franco from Liana as approver (shared Slack account) — still true, or fixed?
12. OK to include prior-employer achievements (Nike, a security-industry role) here, given some are marked "resume claim, no artifact"?
