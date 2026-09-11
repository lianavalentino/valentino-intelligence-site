// Hardcoded sample data for the CleanMark Labels portal prototype. No backend.

export const client = {
  name: "CleanMark Labels",
  contact: "David Baker",
  consultant: "Liana Valentino",
};

export const engagement = {
  name: "Discovery Sprint",
  week: 1,
  totalWeeks: 2,
  nextMilestone: "Data readiness assessment",
  nextMilestoneDate: "Sep 18, 2026",
  hoursUsed: 11,
  hoursCap: 40,
};

export const actionItems = [
  {
    title: "Grant read-only ERP access",
    detail: "Needed before the data readiness assessment can start.",
    href: "/portal/files",
  },
  {
    title: "Review & sign SOW-01",
    detail: "Discovery Sprint statement of work — awaiting signature.",
    href: "/portal/documents",
  },
  {
    title: "Confirm stakeholder interview times",
    detail: "Ops lead and plant manager slots still open.",
    href: "/portal/overview",
  },
];

export const meetings = [
  { title: "Weekly sync", date: "Fri, Sep 12, 2026", time: "10:00 AM PT" },
  { title: "Data readiness walkthrough", date: "Wed, Sep 17, 2026", time: "1:00 PM PT" },
  { title: "Roadmap readout", date: "Fri, Sep 26, 2026", time: "10:00 AM PT" },
];

export const quickLinks = [
  { label: "Intake questionnaire", href: "/portal/intake" },
  { label: "Upload a file", href: "/portal/files" },
  { label: "This week's status report", href: "/portal/status" },
  { label: "Invoices", href: "/portal/billing" },
];

// --- Intake (pre-filled with CleanMark sample answers) ---

export const intake = {
  company: {
    companyName: "CleanMark Labels, Inc.",
    contactNameTitle: "David Baker, Operations Director",
    industry:
      "Custom pressure-sensitive label manufacturing for food, beverage, and industrial packaging customers.",
    companySize: "51-200",
  },
  systems: {
    erp: "NetSuite",
    crm: "HubSpot",
    warehouse: "Just spreadsheets, some Postgres for internal tooling",
    bi: "None — reporting is manual in Excel",
    aiTools: "ChatGPT Team (a few users), nothing custom-built yet",
    offLimits: "Do not touch the NetSuite production instance directly — sandbox only.",
  },
  data: {
    location:
      "Order and production data lives in NetSuite. Customer/quote data lives in HubSpot. Press-run scheduling is a shared spreadsheet nobody trusts.",
    owner: "Ops manager (Priya Shah) owns NetSuite exports; David owns HubSpot.",
    state: "Usable but messy",
    technicalContact: "Yes, named person",
  },
  goals: {
    outcome: "Time savings",
    problem:
      "Press-run scheduling and order-to-production handoff is manual and error-prone — double bookings, late jobs, no visibility into capacity until the week of.",
    triedBefore: "Looked at a scheduling SaaS add-on for NetSuite but it didn't fit our press changeover rules.",
    ninetyDayLever: "A shared, always-current press schedule that both sales and production trust.",
  },
  budget: {
    range: "$15k–$50k",
    timeline: "This quarter",
    confidence: "4",
  },
  decisionProcess: "David Baker (Ops Director) and Priya Shah (Ops Manager) decide together; David has final sign-off. Both on the fit call.",
};

// --- Files ---

export const files = [
  { name: "netsuite_orders_export.csv", type: "CSV", uploadedBy: "Priya Shah", date: "Sep 8, 2026", status: "Reviewed" as const },
  { name: "hubspot_crm_fields.csv", type: "CSV", uploadedBy: "David Baker", date: "Sep 9, 2026", status: "Reviewed" as const },
  { name: "cleanmark_org_chart.pdf", type: "PDF", uploadedBy: "David Baker", date: "Sep 9, 2026", status: "Received" as const },
  { name: "press_schedule_current.xlsx", type: "XLSX", uploadedBy: "Priya Shah", date: "Sep 10, 2026", status: "Received" as const },
];

// --- Progress ---

export const milestones = [
  { name: "Kickoff", status: "done" as const, date: "Sep 5, 2026" },
  { name: "Stakeholder interviews", status: "done" as const, date: "Sep 9, 2026" },
  { name: "Data readiness assessment", status: "in-progress" as const, date: "Sep 18, 2026" },
  { name: "Opportunity matrix", status: "not-started" as const, date: "Sep 23, 2026" },
  { name: "Roadmap readout", status: "not-started" as const, date: "Sep 26, 2026" },
];

export const board = {
  "To do": ["Score opportunity matrix candidates", "Draft roadmap outline"],
  "In progress": ["Data readiness assessment", "NetSuite schema review"],
  "Waiting on client": ["Read-only ERP access", "Press changeover rules doc"],
  "Done": ["Kickoff call", "Stakeholder interviews (Ops, Production)"],
};

// --- Status reports ---

export const statusReports = [
  {
    week: "Week of Sep 8, 2026",
    status: "green" as const,
    done: [
      "Completed stakeholder interviews with Ops and Production leads",
      "Received NetSuite order export and HubSpot field list",
      "Mapped current press-run scheduling process",
    ],
    next: [
      "Start data readiness assessment against NetSuite + HubSpot exports",
      "Draft opportunity matrix candidates",
    ],
    blockers: [
      { blocker: "Read-only ERP access not yet granted", needed: "NetSuite sandbox login", from: "Priya Shah", by: "Sep 15, 2026" },
    ],
    decisions: [
      { decision: "Scope press-changeover rules into v1 or defer", options: "Include now / defer to build phase", recommendation: "Defer — keep discovery scope tight", neededBy: "Sep 18, 2026" },
    ],
    hours: { thisWeek: 11, total: 11, cap: 40 },
  },
  {
    week: "Week of Sep 1, 2026",
    status: "green" as const,
    done: ["Kickoff call", "Access & data request sent"],
    next: ["Schedule stakeholder interviews"],
    blockers: [],
    decisions: [],
    hours: { thisWeek: 3, total: 3, cap: 40 },
  },
];

// --- Decisions ---

export const decisions = [
  {
    date: "Sep 10, 2026",
    decision: "Defer press-changeover rules to build phase",
    options: "Include in discovery scope / defer to build phase",
    decidedBy: "David Baker",
    status: "Decided" as const,
  },
  {
    date: "Sep 5, 2026",
    decision: "Use NetSuite sandbox, not production, for all discovery work",
    options: "Production read access / sandbox only",
    decidedBy: "David Baker, Priya Shah",
    status: "Decided" as const,
  },
  {
    date: "Sep 18, 2026",
    decision: "Whether to include HubSpot quote data in v1 opportunity matrix",
    options: "Include / exclude, revisit in build phase",
    decidedBy: "Pending",
    status: "Open" as const,
  },
];

// --- Documents ---

export const documents = [
  { name: "NDA", status: "Signed" as const },
  { name: "Proposal", status: "Accepted" as const },
  { name: "SOW-01 — Discovery Sprint", status: "Signed" as const },
  { name: "MSA", status: "Signed" as const },
  { name: "Change requests", status: "None" as const },
];

// --- Billing ---

export const sprintTotal = "$5,500";
export const deposit = "$2,750";

export const invoices = [
  { id: "INV-001", description: "Discovery Sprint — deposit", amount: deposit, status: "Paid" as const, date: "Sep 5, 2026" },
  { id: "INV-002", description: "Discovery Sprint — due on readout", amount: deposit, status: "Pending" as const, date: "Due Sep 26, 2026" },
];
