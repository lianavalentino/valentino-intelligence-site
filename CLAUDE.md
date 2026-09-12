# valentino-intelligence-site

**Purpose:** Public site for Valentino Intelligence LLC (Liana's AI/automation consulting). Audience: owner/GM of a 5–75 person small business, non-technical. Job of the page: book the free fit call.

**Stack:** Next.js (App Router) + TypeScript + Tailwind v4. Static, no backend, no extra deps. Deployed on Vercel. Repo: github.com/lianavalentino/valentino-intelligence-site.

**State:** scaffolded 2026-09-11 as a resume-style page; repositioned same day for small-business owners (offer-led, plain language).

**Copy:** minimal version (hero + 6 outcome cards + 3 steps + email), no prices, no client names on the page. Contact email valentinointelligence@gmail.com.

**Source of truth for copy and positioning:**
- `.agents/product-marketing.md` — positioning, customer language, words to avoid, proof guardrails. Other marketing skills read this.
- `docs/offer.md` — the Two-Week Automation Plan offer (guarantee, bonuses, price, scarcity rule) and site copy.
- `docs/design-plan.md` — tokens, fonts, layout, banned visual traits.
- `content/portfolio-content.md` — case-study facts and the "Do not publish" list.

**Constraints:** no client credentials, PII, or internal process detail. Case-study facts must match `~/Developer/career-ops/knowledge-base/03 Project Portfolio.md`. Never invent outcome numbers (restaurant engagement has none). No technical vocabulary on the page (agents, pipelines, n8n, LLM, stack). "Next open start" line on the offer must be kept honest — update it when a plan is booked.

**Where this connects:** nothing. Standalone. Domain valentinointelligence.com (Cloudflare) not yet pointed. No booking link yet — CTA is mailto.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
