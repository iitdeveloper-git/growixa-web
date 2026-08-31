import { PageHero, Sec, Head, ClosingCta } from '../components/sections/PageKit';
import own from './Roadmap.module.css';

const LANES = [
  {
    tone: 'now',
    kicker: '● Live now',
    title: 'Shipped',
    items: [
      ['send', 'Campaigns & sequences', 'Multi-step, reply detection, send windows.'],
      ['send', 'Deliverability suite', 'SPF/DKIM/DMARC, warm-up, blocklist monitoring.'],
      ['manage', 'Contacts & imports', 'Dedup, custom fields, CSV and ESP migration.'],
      ['manage', 'Consent & suppression', 'Global list, one-click unsubscribe, consent records.'],
    ],
  },
  {
    tone: 'next',
    kicker: 'In beta',
    title: 'Q3 2026',
    items: [
      ['find', 'Find — open beta', 'Currently invite-only. Opening to all paid plans.'],
      ['find', 'Phone enrichment', 'Direct dials where we can verify them.'],
      ['create', 'Create — brand voice', 'Learn tone from emails you have already sent.'],
      ['manage', 'Dynamic segments', 'Rules that re-evaluate as contacts change.'],
    ],
  },
  {
    kicker: 'Building',
    title: 'Q4 2026',
    items: [
      ['qualify', 'Qualify — first signals', 'Pricing visits, hiring, funding. The stage that does not exist yet.'],
      ['qualify', 'Editable signal weights', 'Tune what counts for your market.'],
      ['create', 'Approval workflow', 'Human sign-off before first-touch sends.'],
      ['send', 'A/B testing', 'Real variants, not two subject lines.'],
    ],
  },
  {
    kicker: 'Not started',
    title: '2027',
    items: [
      ['send', 'SMS & WhatsApp', 'Same sequences, more channels.'],
      ['create', 'Social scheduling', 'LinkedIn and X, from the same composer.'],
      ['manage', 'Public API & webhooks', 'So the engine can hand off to your own systems.'],
      ['ink', 'SSO & audit logs', 'When customers start needing a security review.'],
    ],
  },
];

const SHIPPED = [
  ['28 Aug', 'Blocklist monitoring', 'hourly checks across 34 lists, alert on listing.'],
  ['21 Aug', 'Klaviyo import', 'lists, templates and suppression in one pass.'],
  ['14 Aug', 'Reply detection across threads', 'sequences now stop when a colleague replies.'],
  ['06 Aug', 'Find beta', 'first fifty design partners onboarded.'],
  ['29 Jul', 'Automatic domain warm-up', '30-day ramp with per-domain ceilings.'],
];

export default function Roadmap() {
  return (
    <>
      <PageHero
        hue="manage"
        title="What we've shipped, what we're building, what we haven't started."
        lede="We're early, and pretending otherwise would be the fastest way to lose you. This page is the honest version, updated when things move — including when they slip."
      />

      <Sec hue="manage">
        <div className={own.lanes}>
          {LANES.map((l) => (
            <div key={l.title} className={`${own.lane} ${l.tone ? own[l.tone] : ''}`}>
              <div className={own.lh}>
                <span className={own.kicker}>{l.kicker}</span>
                <h3 className={own.lt}>{l.title}</h3>
              </div>
              <div className={own.items}>
                {l.items.map(([hue, title, body]) => (
                  <div key={title} className={own.item}>
                    <span className={own.it}>
                      <i style={{ background: `var(--${hue})` }} aria-hidden="true" />
                      {title}
                    </span>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <Sec tint hue="manage">
        <Head
          eyebrow="Changelog"
          title="Recently shipped."
          lede="Every release, dated. The best evidence a small team can offer is a visible pace."
        />
        <div className={own.log}>
          {SHIPPED.map(([date, title, body]) => (
            <div key={title} className={own.logRow}>
              <span className={own.date}>{date}</span>
              <span className={own.text}>
                <b>{title}</b> — {body}
              </span>
            </div>
          ))}
        </div>
      </Sec>

      <ClosingCta
        title="Want a say in what's next?"
        body="Design partners get the roadmap early, a direct line to the founders, and pricing locked for as long as they stay."
        primary={{ to: '/contact', label: 'Become a design partner' }}
        secondary={{ to: '/pricing', label: 'See pricing' }}
        foot="Fifty places."
      />
    </>
  );
}
