import { Link } from 'react-router-dom';
import { PageHero, Sec, Head, Bento, ClosingCta, Button } from '../components/sections/PageKit';
import own from './SimplePages.module.css';

/* ─────────────────────────── Solutions ─────────────────────────── */

const SOLUTION_CONTENT = {
  founders: {
    hue: 'send',
    eyebrow: 'FOR FOUNDERS',
    title: 'Right now, you are the go-to-market team.',
    lede: 'You built something good. Nobody knows. And the advice is to hire a growth person you cannot afford, or wire together nine tools you do not have time to learn. Growixa is the third option.',
    head: { eyebrow: 'Built for your situation', title: 'Nothing here assumes you have a team.', lede: 'Every default assumes you will be back in the code in twenty minutes and nothing should be waiting on you.' },
    features: [
      { span: 'w6', title: 'No seats, ever', body: 'Bring your co-founder and your first hire. Free plans included.', chips: ['Unlimited seats'] },
      { span: 'w6', title: 'Approval is off by default', body: 'There is nobody to approve it. Turn it on when there is.' },
      { span: 'w4', title: 'The deliverability trap, avoided', body: 'Warm-up and authentication run automatically. The mistake that kills a founder’s domain is the one you never see coming.' },
      { span: 'w4', title: 'Support is a founder', body: 'On Growth you are talking to someone who wrote the thing, not a tier-one queue.' },
      { span: 'w4', title: 'Set up in an afternoon', body: 'Connect a domain, import whatever you have, describe your customer, read the drafts. About forty minutes.' },
    ],
  },
  'gtm-teams': {
    hue: 'find',
    eyebrow: 'FOR GTM TEAMS',
    title: 'Replace the stack you inherited.',
    lede: 'You did not choose these nine tools. They accumulated. Now half your week is spent keeping data moving between them, and the integration nobody owns breaks on a Tuesday.',
    head: { eyebrow: 'What changes', title: 'Consolidation you can defend in a budget review.', lede: 'The pitch to your CFO is cost. The pitch to your team is that the data stops disagreeing with itself.' },
    features: [
      { span: 'w6', title: 'One number instead of nine invoices', body: 'Most teams cannot say what their GTM stack costs without opening a spreadsheet. One contract, one renewal date, one vendor review.', chips: ['One contract', 'One renewal'] },
      { span: 'w6', title: 'Suppression that cannot be bypassed', body: 'When unsubscribes live in one tool and sending lives in another, someone eventually emails a person who opted out. Here there is no second list to fall out of sync with.', chips: ['Global suppression', 'Audit trail'] },
      { span: 'w4', title: 'Migration in an afternoon', body: 'Lists, templates, sending history and suppression from Mailchimp, Klaviyo, Brevo or HubSpot.' },
      { span: 'w4', title: 'Keep your sending infrastructure', body: 'Already invested in Postmark, SES or Sendgrid? Growixa runs the campaigns, they carry the mail.' },
      { span: 'w4', title: 'No hostage data', body: 'Full export any time, including after you cancel. We would rather earn the renewal.' },
    ],
    notForUs: [
      ['You need enterprise ABM attribution today', 'Multi-touch attribution across paid, events and web is not on our roadmap. Factors or Dreamdata will serve you better.'],
      ['Your GTM runs on a data warehouse', 'If your source of truth is Snowflake and you need reverse ETL, that is Hightouch’s job, not ours.'],
      ['You have twelve SDRs and a sales engineering function', 'At that size you want depth per tool, not consolidation. Apollo and Outreach are built for you.'],
    ],
  },
  'marketing-teams': {
    hue: 'create',
    eyebrow: 'FOR MARKETING TEAMS',
    title: "AI copy you'd actually put your brand behind.",
    lede: 'The reason marketing teams distrust AI writing is not quality — it is risk. One confident false claim in front of a customer costs more than the tool saved. Growixa makes the guardrails part of generation, not part of review.',
    head: { eyebrow: 'The real objection', title: '"We tried AI copy. We spent longer editing it than writing it."', lede: 'Usually true — because most tools generate first and personalise afterwards. The output is grammatical and completely generic, so a human rewrites it anyway.' },
    features: [
      { span: 'w8', title: 'Claims you have banned, it cannot make', body: 'List what you are not allowed to say — a certification you do not hold, a superlative legal vetoed — and it is blocked at generation, not caught in review.', chips: ['Banned claims', 'Required disclaimers', 'Tone lock'] },
      { span: 'w4', title: 'You will still edit', body: 'Anyone promising copy you send untouched is selling you something. The goal is an eighty-percent draft grounded in real facts.' },
      { span: 'w4', title: 'Approval before anything goes out', body: 'An optional queue where a named person signs off on first-touch messages. Every decision logged against the contact.' },
      { span: 'w4', title: 'Templates that survive Outlook', body: 'Drag-and-drop when you want design, plain text when you want replies. Both tested where it matters.' },
      { span: 'w4', title: 'Compliance you do not have to remember', body: 'One-click unsubscribe, consent provenance, and a global suppression list every campaign checks first.' },
    ],
  },
};

export function SolutionPage({ id }) {
  const c = SOLUTION_CONTENT[id];
  return (
    <>
      <PageHero
        hue={c.hue}
        eyebrow={c.eyebrow}
        title={c.title}
        lede={c.lede}
        actions={
          <>
            <Button as={Link} to="/pricing">
              Start free
            </Button>
            <Button as={Link} to="/platform" variant="glass">
              See the engine
            </Button>
          </>
        }
        foot="Free up to 1,000 contacts · No card · Set up in an afternoon"
      />

      <Sec hue={c.hue}>
        <Head {...c.head} />
        <Bento items={c.features} />
      </Sec>

      {c.notForUs && (
        <Sec tint hue={c.hue}>
          <Head
            center
            eyebrow="Straight answer"
            title="Where we're not the right choice."
            lede="Being honest about this saves us both a procurement cycle."
          />
          <div className={own.post}>
            {c.notForUs.map(([t, b]) => (
              <div key={t} className={own.postRow}>
                <span className={own.no}>Not us</span>
                <span className={own.pt}>
                  <b>{t}</b>
                  <span>{b}</span>
                </span>
              </div>
            ))}
            <div className={own.postRow}>
              <span className={own.yes}>Good fit</span>
              <span className={own.pt}>
                <b>A team of one to ten carrying the whole motion</b>
                <span>Where the cost of switching between tools is a real fraction of the week.</span>
              </span>
            </div>
          </div>
        </Sec>
      )}

      <ClosingCta
        title="You built the product. Let Growixa build the pipeline."
        body="Free up to 1,000 contacts. If it does not save you a Tuesday, do not pay us."
        primary={{ to: '/pricing', label: 'Start free' }}
        secondary={{ to: '/about', label: 'Read why we built it' }}
      />
    </>
  );
}

/* ─────────────────────────── Security ─────────────────────────── */

const POSTURE = [
  ['yes', 'Encryption in transit and at rest', 'TLS 1.3 everywhere. AES-256 at rest, including database backups.'],
  ['yes', 'Tenant isolation', 'Every row is scoped to an account at the database layer, enforced in queries rather than application logic.'],
  ['yes', 'Credential encryption', 'SMTP and third-party credentials are encrypted with per-tenant keys and never logged or displayed after entry.'],
  ['yes', 'Least-privilege access', 'A named subset of the team can reach production. Access is logged, reviewed monthly, revoked the day someone leaves.'],
  ['soon', 'SOC 2 Type II', 'Observation window opens Q1 2027. We will not claim it, or imply it, before the report exists.'],
  ['soon', 'Third-party penetration test', 'First external test scheduled for Q4 2026. Summary published here when it is done.'],
  ['no', 'ISO 27001', 'Not started. If it is a procurement blocker for you, tell us — it moves up the list when customers need it.'],
  ['no', 'SSO & SCIM', 'On the 2027 roadmap. Available on Scale before general release if you need it.'],
  ['no', 'HIPAA / FedRAMP', 'Out of scope. Growixa is not suitable for protected health data.'],
];

export function Security() {
  return (
    <>
      <PageHero
        hue="manage"
        title="What we hold, where it lives, and what we don't have yet."
        lede="Most security pages are a wall of badges. We are a young company and we do not have all of them, so this page tells you exactly what is true today instead."
      />
      <Sec hue="manage">
        <Head center title="Our posture, honestly" />
        <div className={own.post}>
          {POSTURE.map(([state, t, b]) => (
            <div key={t} className={own.postRow}>
              <span className={own[state === 'yes' ? 'yes' : state === 'soon' ? 'soon' : 'no']}>
                {state === 'yes' ? 'In place' : state === 'soon' ? 'In progress' : 'Not yet'}
              </span>
              <span className={own.pt}>
                <b>{t}</b>
                <span>{b}</span>
              </span>
            </div>
          ))}
        </div>
        <p className={own.note}>
          Lead data comes from public business sources only — company websites, public professional
          profiles, job boards, company registries and press releases. Every record carries its
          provenance. Removal requests are honoured within 30 days, from the individual directly.
        </p>
      </Sec>
      <ClosingCta
        title="Found something?"
        body="Email security@growixa.com. We acknowledge within one business day and we will not threaten you."
        primary={{ to: '/contact', label: 'Contact us' }}
      />
    </>
  );
}

/* ─────────────────────────── About ─────────────────────────── */

export function About() {
  return (
    <>
      <PageHero
        hue="qualify"
        title="We're building the team we couldn't afford to hire."
        lede="Growixa started because we shipped a product, had no idea how to sell it, and found that every tool for doing so assumed we had already solved that."
      />
      <Sec hue="qualify">
        <div className={own.note2}>
          <div className={own.by}>
            <span className={own.avatar} aria-hidden="true">
              G
            </span>
            <div>
              <b>A note from the founders</b>
              <span>Written August 2026 · updated when it stops being true</span>
            </div>
          </div>
          <div className={own.prose}>
            <p>
              We spent four months building something we were proud of and then discovered the hard
              part had not started. Selling it meant a lead tool, a verifier, an enrichment service,
              a sequencer, a warm-up service, a copy tool and a CRM — around{' '}
              <strong>$220 a month and seven logins</strong> — before a single email went out. Every
              one of them was built for a team that already knew what it was doing.
            </p>
            <p>
              So we built the thing we wanted: one system that runs the whole motion, for people who
              do not have a go-to-market team and cannot yet justify hiring one.
            </p>
            <h3>Where we actually are</h3>
            <p>
              Two of the five stages are live and good — <strong>Send</strong> and{' '}
              <strong>Manage</strong>. Two are in beta and improving weekly. One,{' '}
              <strong>Qualify</strong>, does not exist yet and will not until Q4. We have written
              that on the pricing page, the roadmap and every product page, because finding out
              after you have paid is how companies lose people permanently.
            </p>
            <p>
              We have no customer logos on this site. We could have invented some — plenty do — but
              you are a founder and you would have checked. When we have customers willing to be
              named, they will be here with their real numbers.
            </p>
          </div>
        </div>
      </Sec>
      <Sec tint hue="qualify">
        <Head
          eyebrow="What we hold to"
          title="Four things we've decided not to negotiate."
          lede="Written down so you can hold us to them, and so we cannot quietly drift."
        />
        <Bento
          items={[
            { span: 'w6', title: 'Say what is built, not what is planned', body: 'Every feature carries a real status. Nothing on this site describes something that does not exist without saying so in the same breath.' },
            { span: 'w6', title: 'No invented proof', body: 'No fake testimonials, no stock-photo customers, no metric we cannot source.' },
            { span: 'w6', title: 'Your data leaves when you do', body: 'One-click full export, any time, including after cancellation.' },
            { span: 'w6', title: 'Deliverability over volume', body: 'We will keep building things that stop you sending — verification, suppression, warm-up ceilings — even though they lower the number on our invoice.' },
          ]}
        />
      </Sec>
      <ClosingCta
        title="Fifty design partners."
        body="Direct line to the founders, roadmap influence, and pricing locked for as long as you stay."
        primary={{ to: '/contact', label: 'Apply to join' }}
        secondary={{ to: '/roadmap', label: "See what's shipping" }}
      />
    </>
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */

const ROUTES_TO = [
  ['find', "Something's broken", 'Deliverability trouble, a campaign misbehaving, or anything urgent with sending.', 'support@growixa.com'],
  ['create', 'Thinking about switching', 'Migration questions, whether we fit, or a walkthrough with someone who built it.', 'hello@growixa.com'],
  ['manage', 'Security or privacy', 'DPA requests, vulnerability reports, data removal, procurement questionnaires.', 'security@growixa.com'],
];

export function Contact() {
  return (
    <>
      <PageHero
        hue="find"
        title="There's no sales team. You'll get one of us."
        lede="Small company, so the addresses below go to actual people. Weekday replies within a business day, usually much sooner."
      />
      <Sec hue="find">
        <div className={own.cards}>
          {ROUTES_TO.map(([hue, title, body, addr]) => (
            <div
              key={addr}
              className={own.card}
              style={{ '--hue': `var(--${hue})`, '--hue-l': `var(--${hue}-l)`, '--hue-d': `var(--${hue}-d)` }}
            >
              <h3>{title}</h3>
              <p>{body}</p>
              <a href={`mailto:${addr}`} className={own.addr}>
                {addr}
              </a>
            </div>
          ))}
        </div>
        <p className={own.note}>
          Placeholder addresses pending domain confirmation.
        </p>
      </Sec>
    </>
  );
}

/* ─────────────────────────── Blog ─────────────────────────── */

export function Blog() {
  return (
    <>
      <PageHero
        hue="create"
        title="Nothing here yet."
        lede="We'd rather have an empty blog than four posts written to fill a nav item. When we've learned something worth the read, it'll be here."
      />
      <Sec hue="create">
        <Head center title="What we're planning to write" lede="All of it from running this thing ourselves." />
        <div className={own.soon}>
          {[
            ['Soon', 'What we learned warming a cold domain, with the actual numbers'],
            ['Soon', 'Why we shipped sending before lead sourcing'],
            ['Later', 'The intent signals that turned out not to predict anything'],
            ['Later', 'Building a GTM tool when you have never worked in GTM'],
          ].map(([when, title]) => (
            <div key={title} className={own.soonRow}>
              <span className={own.when}>{when}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </Sec>
    </>
  );
}
