import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, Sec, Head, ClosingCta, Button } from '../components/sections/PageKit';
import own from './Pricing.module.css';

const TIERS = [
  {
    name: 'Free',
    desc: 'Enough to run your first real campaign and judge us on it.',
    price: { usd: [0, 0], inr: [0, 0] },
    per: 'forever',
    cta: 'Start free',
    variant: 'glass',
    items: ['1,000 contacts', '2,000 emails a month', '1 sending domain', 'Campaigns & templates', 'Growixa badge in the footer'],
  },
  {
    name: 'Starter',
    desc: 'For a founder doing outbound between everything else.',
    price: { usd: [29, 24], inr: [2400, 1990] },
    cta: 'Choose Starter',
    variant: 'glass',
    items: ['5,000 contacts', '25,000 emails a month', '3 sending domains + warm-up', 'Sequences & follow-ups', '500 Find credits a month'],
  },
  {
    name: 'Growth',
    desc: 'The whole engine, including everything the AI does.',
    price: { usd: [89, 74], inr: [7400, 6150] },
    cta: 'Choose Growth',
    variant: 'primary',
    featured: true,
    flag: 'Most founders start here',
    items: ['25,000 contacts', '150,000 emails a month', 'Unlimited sending domains', 'AI Create — brand voice, all channels', '2,500 Find credits a month', 'Qualify, the day it ships'],
  },
  {
    name: 'Scale',
    desc: 'Higher volume, your own infrastructure, a contract.',
    price: null,
    per: 'talk to us',
    cta: 'Book a call',
    variant: 'glass',
    items: ['Unlimited contacts', 'Volume email pricing', 'Bring your own SMTP', 'SSO & audit logs', 'DPA & security review'],
  },
];

const FAQS = [
  ['Half the engine is not built. Why would I pay now?', 'You should not pay for what is not built — so you do not. Free and Starter are priced against Send and Manage alone, which are live today and are most of what an email tool costs elsewhere. Find and Create are in beta and included rather than upsold. Qualify is free to every Growth customer the day it ships, at whatever price you are already on.'],
  ['What happens if I go over my contact or email limit?', 'Nothing breaks and nothing sends without your say-so. You get a warning at 80% and again at 100%, then the option to upgrade or let the campaign wait. We do not auto-charge overage and we do not silently stop delivering mid-sequence.'],
  ['Is there a discount for annual billing?', 'Two months free — that is the whole discount, applied to any plan. There is not a hidden "talk to sales" rate below the published one.'],
  ['Can I bring my existing lists and templates?', 'Yes. Direct import from Mailchimp, Klaviyo, Brevo and HubSpot, or a CSV. Suppression lists come across too, which is the part most migrations forget and then regret.'],
  ['Do you charge per seat?', 'No, on every plan including Free. Charging a three-person startup extra to let all three log in is a tax on the exact customer we are building for.'],
  ['What if I want to leave?', 'Cancel in the app, no call required. Export everything in one click, any time, including after you have cancelled. Your data was never the lock-in.'],
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [cur, setCur] = useState('usd');

  const fmt = (t) => {
    if (!t.price) return 'Custom';
    const v = t.price[cur][yearly ? 1 : 0];
    return cur === 'inr' ? `₹${v.toLocaleString('en-IN')}` : `$${v.toLocaleString('en-US')}`;
  };

  return (
    <>
      <PageHero
        hue="create"
        title="Start free. Pay when it's actually working."
        lede="One subscription instead of nine. No seat pricing, no annual lock-in to get a sane rate, and no charging you for contacts you never email."
      />

      <Sec hue="create">
        <div className={own.ctrl}>
          <div className={own.seg} role="group" aria-label="Billing period">
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>
              Monthly
            </button>
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>
              Yearly
            </button>
          </div>
          <span className={own.save}>Yearly = 2 months free</span>
          <div className={own.seg} role="group" aria-label="Currency">
            <button type="button" aria-pressed={cur === 'usd'} onClick={() => setCur('usd')}>
              USD $
            </button>
            <button type="button" aria-pressed={cur === 'inr'} onClick={() => setCur('inr')}>
              INR ₹
            </button>
          </div>
        </div>

        <div className={own.tiers}>
          {TIERS.map((t) => (
            <div key={t.name} className={`${own.tier} ${t.featured ? own.feat : ''}`}>
              {t.flag && <span className={own.flag}>{t.flag}</span>}
              <h3 className={own.tname}>{t.name}</h3>
              <p className={own.tdesc}>{t.desc}</p>
              <div className={own.price}>{fmt(t)}</div>
              <span className={own.per}>
                {t.per || (yearly ? 'per month, billed yearly' : 'per month')}
              </span>
              <Button as={Link} to="/contact" variant={t.variant} className={own.tcta}>
                {t.cta}
              </Button>
              <ul className={own.items}>
                {t.items.map((x) => (
                  <li key={x}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.4l3.2 3.2L13 4.8" stroke="var(--manage-d)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={own.note}>
          Placeholder figures pending final pricing. Find bills per <b>verified</b> contact — if an
          address fails a real mailbox check it never reaches your list and never reaches your bill.
        </p>
      </Sec>

      <Sec tint hue="create">
        <Head center eyebrow="Questions" title="The ones worth asking before you pay." />
        <div className={own.faq}>
          {FAQS.map(([q, a], i) => (
            <details key={q} className={own.q} open={i === 0}>
              <summary>{q}</summary>
              <div className={own.a}>{a}</div>
            </details>
          ))}
        </div>
      </Sec>

      <ClosingCta
        title="Try the half that's finished."
        body="Free forever up to 1,000 contacts. If Send and Manage do not earn their keep, nothing else we ship will convince you."
        primary={{ to: '/sandbox', label: 'Try it without signing up' }}
        secondary={{ to: '/platform', label: 'See the engine' }}
        foot="No credit card · Cancel whenever · Export any time"
      />
    </>
  );
}
