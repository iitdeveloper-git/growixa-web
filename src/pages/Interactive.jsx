import { useMemo, useState } from 'react';
import { PageHero, Sec, Head, ClosingCta, Button } from '../components/sections/PageKit';
import own from './Interactive.module.css';

/* ─────────────────────────── Sandbox ─────────────────────────── */

const PEOPLE = [
  ['PR', 'Priya Raghavan', 'VP Marketing', 'northwind.io', true],
  ['DO', 'Daniel Okoye', 'Head of Growth', 'lumenlabs.com', true],
  ['MT', 'Mei Tanaka', 'Founder', 'clearstep.app', true],
  ['AB', 'Adaeze Balogun', 'COO', 'tiderise.co', true],
  ['JW', 'James Whitfield', 'Marketing Lead', 'pinehurst.dev', false],
];

const COPY = {
  email: {
    sub: "Northwind's pricing page, and the thing under it",
    body: "Hi Priya — you've been back to our pricing three times this week, so I'll skip the pitch.\n\nYou're hiring a demand gen manager, which usually means the founder has been doing it. The bit teams in that spot want to see first is how fast a list goes from \"described\" to \"sent to\".\n\nWorth ten minutes?",
    meta: '94 words · grade 6 · 0 banned claims',
  },
  linkedin: {
    sub: 'LinkedIn — thought leadership',
    body: "Most founders don't have an outbound problem.\n\nThey have a twenty-five-tab problem.\n\nList tool. Verifier. Enrichment. Sequencer. Warm-up. Copy tool. CRM. Something to glue it together that breaks on a Tuesday.\n\nWe built one system that does the whole run instead. What's the tab you'd close first?",
    meta: '212 characters · 1 hook · 1 question',
  },
  sms: {
    sub: 'SMS — transactional tone',
    body: 'Priya — saw Northwind is hiring for demand gen. We help founders run that motion before the hire lands. 10 mins this week? Reply STOP to opt out.',
    meta: '148 chars · GSM-7 · 1 segment',
  },
};

export function Sandbox() {
  const [query, setQuery] = useState('Series A B2B SaaS in the UK, hiring for marketing');
  const [searching, setSearching] = useState(false);
  const [channel, setChannel] = useState('email');
  const [writing, setWriting] = useState(false);

  const run = (set) => {
    set(true);
    setTimeout(() => set(false), 800);
  };

  return (
    <>
      <PageHero
        hue="find"
        title="Try it before you tell us who you are."
        lede="No email gate, no book-a-demo, no sales call. Two of the engine's stages are below, running live. If they don't impress you, you've lost ninety seconds and we've lost nothing."
      />

      <Sec hue="find">
        <div className={own.two}>
          <div className={own.box} style={{ '--hue': 'var(--find)', '--hue-l': 'var(--find-l)', '--hue-d': 'var(--find-d)' }}>
            <div className={own.boxHead}>
              <span className={own.mono}>01 — Find</span>
              <h3>Describe a customer. Get people.</h3>
              <p>Type who you sell to the way you&rsquo;d say it out loud.</p>
            </div>
            <div className={own.boxBody}>
              <label className={own.field}>
                <span>Who are you trying to reach?</span>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
              </label>
              <Button onClick={() => run(setSearching)} disabled={searching} className={own.full}>
                {searching ? 'Searching…' : 'Find people'}
              </Button>
              <div className={own.out}>
                {searching ? (
                  <p className={own.pending}>Checking mailboxes…</p>
                ) : (
                  PEOPLE.map(([ini, name, role, co, ok]) => (
                    <div key={co} className={own.person}>
                      <span className={own.ini} aria-hidden="true">
                        {ini}
                      </span>
                      <span className={ok ? own.pt : own.ptDim}>
                        <b>{name}</b>
                        <span>
                          {role} · {co}
                        </span>
                      </span>
                      <span className={ok ? own.ok : own.dim}>{ok ? 'MX ok' : 'Not billed'}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className={own.boxFoot}>
              <span>Sample data · the real thing runs on live sources</span>
              <span>4 verified · 1 rejected · 4 credits</span>
            </div>
          </div>

          <div className={own.box} style={{ '--hue': 'var(--create)', '--hue-l': 'var(--create-l)', '--hue-d': 'var(--create-d)' }}>
            <div className={own.boxHead}>
              <span className={own.mono}>03 — Create</span>
              <h3>Watch it write for a channel.</h3>
              <p>Same idea, three genuinely different pieces of writing.</p>
            </div>
            <div className={own.boxBody}>
              <label className={own.field}>
                <span>Channel</span>
                <select value={channel} onChange={(e) => setChannel(e.target.value)}>
                  <option value="email">Email</option>
                  <option value="linkedin">LinkedIn post</option>
                  <option value="sms">SMS</option>
                </select>
              </label>
              <Button onClick={() => run(setWriting)} disabled={writing} className={own.full}>
                {writing ? 'Writing…' : 'Write it'}
              </Button>
              <div className={own.out}>
                {writing ? (
                  <p className={own.pending}>Reading their site…</p>
                ) : (
                  <div className={own.mail}>
                    <p className={own.mailSub}>{COPY[channel].sub}</p>
                    <p className={own.mailBody}>{COPY[channel].body}</p>
                  </div>
                )}
              </div>
            </div>
            <div className={own.boxFoot}>
              <span>Sample output · shows the shape, not live generation</span>
              <span>{COPY[channel].meta}</span>
            </div>
          </div>
        </div>

        <div className={own.honest}>
          <h3>What&rsquo;s real here and what isn&rsquo;t</h3>
          <p>
            These two demos run on prepared data so they work instantly and cost you nothing. The
            product they represent is real: Send and Manage are live today, Find and Create are in
            open beta. We&rsquo;d rather show you a fast honest mock-up than a slow live demo you
            abandon — and rather say so than let you assume.
          </p>
        </div>
      </Sec>

      <ClosingCta
        title="Liked it? The free plan does this for real."
        body="1,000 contacts, 2,000 emails a month, no card. The same engine, pointed at your own market."
        primary={{ to: '/pricing', label: 'See pricing' }}
        secondary={{ to: '/platform', label: 'How it fits together' }}
      />
    </>
  );
}

/* ────────────────────── Stack calculator ────────────────────── */

const STACK = [
  ['find', 'Replaced by 01 — Find', [['Apollo', 49, true], ['Hunter.io', 34], ['Clearbit', 99], ['ZoomInfo', 250], ['NeverBounce', 39]]],
  ['qualify', 'Replaced by 02 — Qualify', [['Clay', 149], ['Common Room', 99], ['RB2B / de-anon', 79]]],
  ['create', 'Replaced by 03 — Create', [['Jasper', 49, true], ['Copy.ai', 49], ['ChatGPT Plus', 20]]],
  ['send', 'Replaced by 04 — Send', [['Mailchimp', 60, true], ['Klaviyo', 70], ['Lemlist', 59, true], ['Instantly', 37], ['Smartlead', 39], ['Warmbox', 15, true]]],
  ['manage', 'Replaced by 05 — Manage', [['HubSpot Starter', 20, true], ['Zapier', 29, true], ['Airtable', 25]]],
];

const GROWIXA = 89;

export function StackCalculator() {
  const [picked, setPicked] = useState(() => {
    const init = {};
    STACK.forEach(([, , tools]) => tools.forEach(([n, , on]) => on && (init[n] = true)));
    return init;
  });

  const { total, count } = useMemo(() => {
    let t = 0;
    let c = 0;
    STACK.forEach(([, , tools]) =>
      tools.forEach(([n, price]) => {
        if (picked[n]) {
          t += price;
          c += 1;
        }
      })
    );
    return { total: t, count: c };
  }, [picked]);

  const money = (v) => `$${Math.round(v).toLocaleString('en-US')}`;
  const saved = Math.max(0, (total - GROWIXA) * 12);

  return (
    <>
      <PageHero
        hue="send"
        title="What are you paying for the stack you already have?"
        lede="Tick everything you subscribe to. We'll add it up at list price and show which stage of the engine replaces each one. No email required, nothing saved."
      />

      <Sec hue="send">
        <div className={own.calc}>
          <div>
            {STACK.map(([hue, title, tools]) => (
              <div key={title} className={own.group} style={{ '--hue': `var(--${hue})`, '--hue-l': `var(--${hue}-l)`, '--hue-d': `var(--${hue}-d)` }}>
                <div className={own.gh}>
                  <i aria-hidden="true" />
                  {title}
                </div>
                <div className={own.tools}>
                  {tools.map(([name, price]) => (
                    <label key={name} className={own.tick}>
                      <input
                        type="checkbox"
                        checked={!!picked[name]}
                        onChange={(e) => setPicked((p) => ({ ...p, [name]: e.target.checked }))}
                      />
                      <span className={own.bx} aria-hidden="true">
                        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                          <path d="M2.6 7.2l3 3 5.8-6.4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className={own.lb}>{name}</span>
                      <span className={own.pr}>${price}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <p className={own.disclaimer}>
              Public list prices for an entry paid tier at roughly 10,000 contacts, as of August
              2026. Your actual bill will differ — this is a starting point, not an invoice.
            </p>
          </div>

          <div className={own.out2}>
            <div className={own.outHead}>Your stack today</div>
            <div className={own.big}>
              <span className={own.bigV}>{money(total)}</span>
              <span className={own.bigK}>{count} tools, per month</span>
            </div>
            <div className={own.line}>
              <span>Per year</span>
              <b>{money(total * 12)}</b>
            </div>
            <div className={own.line}>
              <span>Growixa Growth</span>
              <b style={{ color: 'var(--create-d)' }}>${GROWIXA}</b>
            </div>
            <div className={own.line}>
              <span>Logins to manage</span>
              <b>{count} → 1</b>
            </div>
            <div className={own.saved}>
              <span className={own.savedV}>{money(saved)}</span>
              <span className={own.savedK}>saved a year</span>
            </div>
          </div>
        </div>
      </Sec>

      <ClosingCta
        title="One login instead of that."
        body="Start on the free plan and move the pieces across as you go. Nothing needs migrating on day one."
        primary={{ to: '/pricing', label: 'See pricing' }}
        secondary={{ to: '/sandbox', label: 'Try it first' }}
      />
    </>
  );
}
