import { intake } from "../_data";

function Field({ label, value, long = false }: { label: string; value: string; long?: boolean }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-zinc-700">{label}</span>
      {long ? (
        <textarea
          readOnly
          defaultValue={value}
          rows={2}
          className="resize-none rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900"
        />
      ) : (
        <input
          readOnly
          defaultValue={value}
          className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900"
        />
      )}
    </label>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-6">
      <legend className="px-1 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function IntakePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900">Pre-call intake questionnaire</h1>
        <p className="text-sm text-zinc-600">
          Pre-filled from your submitted responses. Let us know if anything has changed.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <Section title="Company">
          <Field label="Company name" value={intake.company.companyName} />
          <Field label="Your name and title" value={intake.company.contactNameTitle} />
          <Field label="Industry / what your company does" value={intake.company.industry} long />
          <Field label="Company size" value={intake.company.companySize} />
        </Section>

        <Section title="Systems & tools already in use">
          <Field label="ERP system(s)" value={intake.systems.erp} />
          <Field label="CRM system(s)" value={intake.systems.crm} />
          <Field label="Data warehouse / database" value={intake.systems.warehouse} />
          <Field label="BI / reporting tool(s)" value={intake.systems.bi} />
          <Field label="AI tools already in use" value={intake.systems.aiTools} long />
          <Field label="Off-limits tools/systems" value={intake.systems.offLimits} long />
        </Section>

        <Section title="Data">
          <Field label="Where does the data live?" value={intake.data.location} long />
          <Field label="Who owns/administers that data?" value={intake.data.owner} />
          <Field label="State of that data" value={intake.data.state} />
          <Field label="Named technical contact?" value={intake.data.technicalContact} />
        </Section>

        <Section title="Goals">
          <Field label="Business outcome" value={intake.goals.outcome} />
          <Field label="Problem, in your own words" value={intake.goals.problem} long />
          <Field label="What's already been tried" value={intake.goals.triedBefore} long />
          <Field label="Biggest 90-day lever" value={intake.goals.ninetyDayLever} long />
        </Section>

        <Section title="Budget & timeline">
          <Field label="Budget range" value={intake.budget.range} />
          <Field label="Timeline pressure" value={intake.budget.timeline} />
          <Field label="Confidence budget is approved (1-5)" value={intake.budget.confidence} />
        </Section>

        <Section title="Decision process">
          <Field label="Who decides / final sign-off" value={intake.decisionProcess} long />
        </Section>

        <button
          type="button"
          disabled
          className="w-fit rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
