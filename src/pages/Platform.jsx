import { Link } from 'react-router-dom';
import { STAGES, STATUS } from '../content/stages';
import { hueVars } from '../components/layout/Section';
import {
  PageHero,
  Sec,
  Head,
  ClosingCta,
  Tag,
  Button,
  styles,
  statusLabel,
} from '../components/sections/PageKit';
import own from './Platform.module.css';

const STATUS_ROWS = [
  { id: 'send', works: 'Campaigns, sequences, templates, warm-up, suppression, analytics', next: 'SMS and WhatsApp' },
  { id: 'manage', works: 'Contacts, dedup, custom fields, imports, consent and suppression', next: 'Dynamic segments' },
  { id: 'find', works: 'Sourcing and email verification, invite-only', next: 'Open beta, phone enrichment' },
  { id: 'create', works: 'Email and social drafting, brand voice', next: 'Approval workflow' },
  { id: 'qualify', works: 'Nothing yet — this one is honest vapour', next: 'First signals, Q4 2026' },
];

export default function Platform() {
  return (
    <>
      <PageHero
        hue="create"
        eyebrow="THE GROWIXA ENGINE"
        title="Five jobs a go-to-market team does. One system that does all five."
        lede="Most tools own one step and hand you a CSV. The engine owns the whole run — what Find learns, Qualify scores; what Qualify scores, Create writes about; what Create writes, Send delivers. Nothing to wire together."
        foot="Email campaigns and contacts are live today. Everything else is marked honestly below."
        actions={
          <>
            <Button as={Link} to="/platform/send">
              Start with campaigns
            </Button>
            <Button as={Link} to="/platform/find" variant="glass">
              See stage one
            </Button>
          </>
        }
      />

      <Sec hue="create">
        <Head
          eyebrow="The handoffs"
          title="What each stage passes to the next."
          lede="This is the part a stack of separate tools cannot do. Every handoff below is a place your data would otherwise need an integration, an export, or a person."
        />
        <div className={own.handoff}>
          {STAGES.map((s) => (
            <Link key={s.id} to={s.path} className={own.node} style={hueVars(s.hue)}>
              <span className={own.n}>
                {s.num} — {s.name.toUpperCase()}
              </span>
              <h3 className={styles.h3}>{s.name}</h3>
              <p className={styles.p}>{s.blurb}</p>
              <span className={own.out}>
                {s.id === 'manage' ? 'Hands back' : 'Hands over'}
                <b>{s.handoff}</b>
              </span>
            </Link>
          ))}
        </div>
      </Sec>

      <Sec tint hue="manage">
        <Head
          eyebrow="Where things stand"
          title="What's live, what isn't."
          lede="We would rather you knew now than found out after signing up. Dates move; when they do, this table moves with them."
        />
        <div className={own.tableWrap}>
          <table className={own.table}>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Status</th>
                <th>What works today</th>
                <th>What&rsquo;s next</th>
              </tr>
            </thead>
            <tbody>
              {STATUS_ROWS.map((r) => {
                const s = STAGES.find((x) => x.id === r.id);
                return (
                  <tr key={r.id}>
                    <td>
                      <span className={own.sname}>
                        <i style={{ background: `var(--${s.hue})` }} aria-hidden="true" />
                        {s.name}
                      </span>
                    </td>
                    <td>
                      <Tag status={s.status} label={statusLabel(s)} />
                    </td>
                    <td className={s.status === STATUS.SOON ? own.faint : own.mut}>{r.works}</td>
                    <td className={own.mut}>{r.next}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Sec>

      <ClosingCta
        title="Start where it already works."
        body="Campaigns and contacts are live and free to try. The rest of the engine switches on as it ships — no new contract, no migration."
        primary={{ to: '/platform/send', label: 'Explore campaigns' }}
        secondary={{ to: '/roadmap', label: 'See the roadmap' }}
        foot="No credit card · Import your list in one click"
      />
    </>
  );
}
