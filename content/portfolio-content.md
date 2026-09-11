# Portfolio content — Liana Valentino / Valentino Intelligence LLC

## Bio

Liana Valentino is a lead data scientist and applied AI systems builder with a decade of production machine learning and GenAI experience, including a multi-agent assistant used daily by analysts at Nike. Through Valentino Intelligence LLC she designs and ships applied AI systems for independent clients, from workflow automation and AI agents to full-stack data products. She is based in Beaverton, Oregon and works remote-first.

- **Name:** Liana Valentino
- **Title:** Founder, Valentino Intelligence LLC — AI Systems Consultant
- **Location:** Beaverton, OR (remote-first)
- **Email:** valentinoliana@gmail.com
- **LinkedIn:** https://linkedin.com/in/lianavalentino
- **GitHub:** https://github.com/lianavalentino

## Services

- **AI opportunity discovery** — process audits and automation-readiness scoring (current state, ROI estimate, quick-win vs. strategic-project classification) that turn a client's workflow into a scoped build spec.
- **Workflow automation (n8n)** — self-hosted n8n pipelines with approval gates, error handling, and audit trails for content, publishing, and back-office processes.
- **AI agents & Slack bots** — supervisor/sub-agent architectures, AI-drafted content agents, and Slack-based approval and query bots wired into real business channels.
- **Data pipelines & dashboards** — ingestion, parsing, and reporting pipelines (invoice/expense ingestion, POS analytics) feeding lightweight operational dashboards.

## Case studies

### Emergency Technical Decon (ETD)

- **Problem:** Fire departments evaluating ETD's Enertia CO2 decontamination machine needed a clear way to see department-level cost and ROI; ETD also needed a managed blog content operation.
- **What I built:** The Enertia ROI Calculator, a web app that computes department total cost of ownership and ROI for the Enertia machine, plus ongoing content/marketing support for ETD's WordPress blog (bi-weekly, 1,800–3,800 word posts). ETD's blog publishing now runs through a shared, approval-gated publishing operator built jointly with Emergent (see below).
- **Stack:** Next.js 16, React 19, TypeScript (built via vinext), Tailwind v4, Drizzle ORM, deployed to Cloudflare (Wrangler); WordPress (WP Engine) for the blog.
- **Outcome:** The ROI calculator has been used at three industry conferences and contributed to two roughly $1M machine sales.

### Emergent Content Hub

- **Problem:** Emergent (public safety software for fire, EMS, inspections, and fleet) needed to turn a monthly content-planning spreadsheet into drafted blog and social copy, with human review, without manual copy-paste between tools.
- **What I built:** An internal marketing-ops app: XLSX content-card intake and parsing, OpenAI-drafted blog and social copy generation, an image-upload and approval workflow, and automated output to Google Docs, Google Sheets trackers, and a Webflow-ready CSV export. Milestones 1 through 5 (shell/auth, intake, AI generation agents, review/approval, Google output) are built, merged, and in user testing; milestone 6 (Webflow export) is implementation-complete pending a live Webflow verification step.
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui, Drizzle ORM, Supabase Postgres, Vercel, OpenAI API, Google Docs/Drive/Sheets APIs, Webflow.
- **Outcome:** Shipped through milestone 5 and in active user testing; outcome TBD — no quantified business metric documented yet, and Google integrations currently run against a test account pending production cutover.

### Content Operator (shared publishing pipeline, ETD + Emergent)

- **Problem:** Both clients needed AI-drafted blog and social content to reach a reviewable draft without any risk of an unapproved item going live.
- **What I built:** A shared n8n-based publishing operator with brand-isolated skills for each client (content can't cross between ETD's and Emergent's reference packets or credentials) and 13 named n8n workflows: `route-content-card-intake`, `parse-content-card`, `create-editable-review-package`, `create-package-response-form`, `run-editorial-quality-pass`, `process-pending-review-responses`, `record-package-checkpoint`, `run-emergent-blog-package`, `run-etd-blog-package`, `handle-errors`, `capture-learning-evidence`, `refresh-istock-history`, `send-content-operator-email`.
- **Pipeline in short:** A content card is routed and parsed, an editable Google Doc review package is generated automatically and passed through an editorial quality check, then one authenticated "Approve and Schedule" response from the assigned reviewer authorizes the CMS draft and up to three scheduled social posts — with error handling and checkpointing throughout.
- **Stack:** n8n, WordPress, Webflow, Google Docs/Drive, Slack/email notifications.
- **Outcome:** TBD — operational infrastructure underpinning the two case studies above, not a standalone measured result.

### Italian Bistro Knightsville

- **Problem:** A family-owned Italian-American restaurant in Summerville, SC needed a social content operation, an approval workflow that didn't require constant owner attention, and basic operational analytics, without dedicated marketing or ops staff.
- **What I built:** A Slack-based operator across four channels (social approvals, general ops, structured data queries, and alerts); a social content pipeline that sources real menu-matched photos from Google Drive, generates additional assets with GPT-Image 2, and publishes to Facebook and Instagram through Meta Business Suite behind a Slack approval gate (live since July 2026); and a daily unattended expense-analytics job that ingests Gmail invoices and rebuilds an operations dashboard each morning. The restaurant's website runs on Wix, and all outstanding work is tracked through GitHub Issues across seven epics with an auto-generated roadmap view.
- **Stack:** Python orchestration, Slack API, Google Drive, GPT-Image 2, Meta Graph API, Wix, GitHub Actions.
- **Outcome:** Social publishing has been live on Facebook/Instagram since July 22, 2026, and the expense dashboard rebuilds automatically every morning. No quantified time-savings or revenue figure exists for this engagement — do not publish one.

### n8n infrastructure

- **Problem:** Client and personal automation work needed a reliable, always-on self-hosted automation runtime rather than depending on third-party SaaS automation platforms.
- **What I built:** Two independent self-hosted n8n instances — a Mac-based Docker instance for local/dev work, and a permanent always-on instance running as a Home Assistant Supervisor add-on on a physical NUC, with start-on-boot and watchdog enabled. The production instance sits behind Cloudflare Access plus n8n's own login, with a scoped WAF rule limiting which webhook paths are reachable.
- **Stack:** n8n, Docker, Home Assistant OS (Supervisor), Cloudflare Access and WAF.
- **Outcome:** TBD — infrastructure enablement for the automation work above, not independently measured.

## Stack tags

Next.js · React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Supabase (Postgres) · Drizzle ORM · Vercel · Cloudflare Workers/Wrangler · n8n · Python · OpenAI API / Agents SDK · Google Docs/Drive/Sheets APIs · Webflow · WordPress · Wix · Slack API · Meta Graph API · GPT-Image 2 · GitHub Actions · MLflow · Databricks

## Do not publish

- **ETD WordPress Application Password** — lives only in macOS Keychain (`etdecon-wordpress-api`); never in site copy or code samples.
- **Internal identifiers** — Supabase project refs, Slack channel/user IDs, n8n encryption keys — internal only, never in public copy.
- **Italian Bistro ownership/family detail** — do not publish the family ownership split (47% stake) or specific family-approval chain; the restaurant's public address/phone/hours are already public on its own site and are fine to reference.
- **No fabricated metrics for Italian Bistro** — the source KB is explicit that no quantified outcome (percentage, time saved, sales figure) exists for this engagement; any such number would be fabricated.
- **ETD blog volume/"52-post plan"** — this is in-progress work per source notes; don't present it as a completed content library or state a finished post count.
- **Conflicting internal note on ETD automation** — the source knowledge base separately marks "n8n/ETD automation" do-not-use for external claims, conflicting with this task's brief. Confirm with Liana which ETD automation detail is safe to publish before the case study goes live.
- **Emergent Content Hub production status** — Google integration still runs against a test account, not Emergent's real Drive/Sheets; don't imply full production use yet.
- General: no API keys, service-role keys, `.env` values, or credentials of any kind in public copy.
