# Client portal — prototype

Clickable mockup of a client portal, built for a fictional client ("Northwind Labels", contact
Dana Whitfield) to show what a real portal on this site would look like. Static, hardcoded sample
data — no auth, no backend, no persistence. Every screen carries a "Prototype — sample data"
badge.

## Screens

| Route | Purpose |
|---|---|
| `/portal` | Login mockup — email/password (disabled) + magic link (disabled) + "Continue as demo client" |
| `/portal/overview` | Engagement snapshot: sprint/week, next milestone, hours used, action items, upcoming meetings, quick links |
| `/portal/intake` | Pre-call intake questionnaire, rendered as a real form pre-filled with sample answers |
| `/portal/files` | Upload dropzone (visual only) + table of shared files and their review status |
| `/portal/progress` | Milestone tracker + kanban board (To do / In progress / Waiting on client / Done) |
| `/portal/status` | Weekly status reports — traffic light, done/next, blockers, decisions needed, hours |
| `/portal/decisions` | Decision log — date, decision, options considered, who decided, status |
| `/portal/documents` | NDA, Proposal, SOW, MSA, change requests — status pill + no-op "View" |
| `/portal/billing` | Invoices (deposit paid, balance pending) + payment method note |

## What a real build would need

- **Auth:** Supabase Auth, magic link only (no passwords) — one client contact per client org, scoped to their engagement.
- **Storage:** Supabase Storage for uploaded files, one bucket per client, signed URLs for downloads.
- **Database tables:** `clients`, `engagements`, `milestones`, `files`, `status_reports`, `decisions`, `documents`, `invoices` — all keyed off `client_id` / `engagement_id`.
- **RLS:** row-level security per client — a client's auth user can only read/write rows where `client_id` matches their own record. Liana's own account bypasses RLS via a service role for internal admin views.
- **Billing:** Stripe for real invoicing/payment status instead of the static table shown here.
- **Estimated effort:** 2–3 days for a working v1 (auth, tables, RLS, CRUD for each screen, file upload) on top of this UI.
