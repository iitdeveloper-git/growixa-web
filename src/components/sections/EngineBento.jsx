import { Link } from 'react-router-dom';
import Wrap from '../layout/Wrap';
import Tag from '../primitives/Tag';
import { hueVars } from '../layout/Section';
import { STAGES, STATUS, getStage } from '../../content/stages';
import styles from './EngineBento.module.css';

const ICONS = {
  find: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="9.5" cy="9.5" r="6.2" stroke="var(--hue)" strokeWidth="1.9" />
      <path d="M14.2 14.2L19 19" stroke="var(--hue)" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
  qualify: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M4 17V13M9.6 17V8.5M15.2 17V4.5" stroke="var(--hue)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="18.4" cy="5" r="2.4" fill="var(--hue)" />
    </svg>
  ),
  create: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2.6l2 5.4 5.4 2-5.4 2-2 5.4-2-5.4-5.4-2 5.4-2z" fill="var(--hue)" />
      <circle cx="17.6" cy="16.6" r="1.9" fill="var(--hue)" />
    </svg>
  ),
  send: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M19.4 11L3.4 4l2.5 7-2.5 7z" fill="var(--hue)" />
    </svg>
  ),
  manage: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="8.4" cy="7" r="3.4" stroke="var(--hue)" strokeWidth="1.9" />
      <path d="M2.6 18c0-3.2 2.6-5.2 5.8-5.2s5.8 2 5.8 5.2" stroke="var(--hue)" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M15.4 8.6h4.4M17.6 6.4v4.4" stroke="var(--hue)" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
};

const COPY = {
  find: { span: 'b5', body: 'Point it at a market. It builds the list, finds the people, and verifies every address before it counts.', chips: ['3,410 sourced', '0 bounces'] },
  qualify: { span: 'b7', body: "Scores who's actually in-market from real behaviour, so you contact the four that matter — not the four hundred that don't.", bars: [22, 36, 28, 54, 41, 88, 33, 74, 47, 26, 92, 38] },
  create: { span: 'b7', body: 'Reads their site, learns your voice, and writes for the channel it&rsquo;s going out on — not one draft reused five ways.', chips: ['email · 94 words', 'linkedin · 212 chars', 'sms · 1 segment'] },
  send: { span: 'b5', body: 'Campaigns, sequences and follow-ups that land in the inbox. Warm-up, suppression and unsubscribes handled for you.', chips: ['1,204 delivered', '41% opened'] },
};

function label(stage) {
  return stage.status === STATUS.SOON ? `Coming ${stage.statusLabel}` : stage.statusLabel;
}

export default function EngineBento() {
  const manage = getStage('manage');

  return (
    <section className={styles.sec} id="engine">
      <Wrap>
        <header className={styles.head}>
          <div>
            <span className={styles.mono}>The Growixa Engine</span>
            <h2 className={styles.h2}>Four things a team does. One engine that does them.</h2>
          </div>
          <p className={styles.lede}>
            Each stage hands off to the next and writes back to your contacts &mdash; so every cycle
            starts better informed than the last.
          </p>
        </header>

        <div className={styles.bento}>
          {STAGES.filter((s) => s.id !== 'manage').map((s) => {
            const c = COPY[s.id];
            return (
              <Link
                key={s.id}
                to={s.path}
                className={`${styles.card} ${styles[c.span]}`}
                style={hueVars(s.hue)}
              >
                <span className={styles.n}>
                  {s.num} &mdash; {s.name}
                </span>
                <span className={styles.ico}>{ICONS[s.id]}</span>
                <h3 className={styles.h3}>{s.name}</h3>
                <p className={styles.body} dangerouslySetInnerHTML={{ __html: c.body }} />
                {c.chips ? (
                  <span className={styles.chips}>
                    {c.chips.map((x) => (
                      <span key={x} className={styles.chip}>
                        {x}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className={styles.bars} aria-hidden="true">
                    {c.bars.map((h, i) => (
                      <i key={i} className={h > 70 ? styles.hi : undefined} style={{ height: `${h}%` }} />
                    ))}
                  </span>
                )}
                <span className={styles.tag}>
                  <Tag status={s.status} label={label(s)} />
                </span>
              </Link>
            );
          })}

          <Link to={manage.path} className={styles.band} style={hueVars('manage')}>
            <span className={styles.bandLeft}>
              <span className={styles.bandIco}>{ICONS.manage}</span>
              <span>
                <h3 className={styles.h3}>
                  {manage.num} &mdash; {manage.name}
                </h3>
                <p className={styles.bandBody}>
                  Every stage writes back to one contact record. That&rsquo;s the memory the whole
                  engine runs on.
                </p>
              </span>
            </span>
            <Tag status={manage.status} label={label(manage)} />
          </Link>
        </div>
      </Wrap>
    </section>
  );
}
