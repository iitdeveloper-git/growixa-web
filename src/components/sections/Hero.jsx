import Wrap from '../layout/Wrap';
import Button from '../primitives/Button';
import WordRotator from './WordRotator';
import styles from './Hero.module.css';

const LEADS = [
  { ini: 'PR', from: 'var(--send)', to: 'var(--qualify)', name: 'Priya Raghavan', role: 'VP Marketing', co: 'northwind.io', score: 92, why: 'Pricing page ×3', next: 'Draft ready', hot: true },
  { ini: 'DO', from: 'var(--create)', to: 'var(--find)', name: 'Daniel Okoye', role: 'Head of Growth', co: 'lumenlabs.com', score: 78, why: 'Hiring 2 SDRs', next: 'Draft ready', hot: true },
  { ini: 'MT', from: 'var(--manage)', to: 'var(--find)', name: 'Mei Tanaka', role: 'Founder', co: 'clearstep.app', score: 64, why: 'Opened ×5', next: 'Nurture', hot: false },
  { ini: 'AB', from: 'var(--qualify)', to: 'var(--send)', name: 'Adaeze Balogun', role: 'COO', co: 'tiderise.co', score: 57, why: 'Raised Series A', next: 'Nurture', hot: false },
];

const RAIL = [
  { hue: 'find', label: 'Sourced & verified', value: '3,410' },
  { hue: 'qualify', label: 'Scored for intent', value: '3,410' },
  { hue: 'create', label: 'Messages written', value: '1,204' },
  { hue: 'send', label: 'Delivered', value: '1,204' },
  { hue: 'manage', label: 'Replies waiting', value: '18' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.aurora} aria-hidden="true">
        <i className={styles.a1} />
        <i className={styles.a2} />
        <i className={styles.a3} />
        <i className={styles.a4} />
        <i className={styles.a5} />
      </div>
      <div className={styles.grain} aria-hidden="true" />

      <Wrap className={styles.top}>
        <div className={styles.grid}>
          <div>
            <p className={styles.eyebrow}>
              <i className={styles.pulse} aria-hidden="true" />
              <span>
                The engine ran <b>1,204 times</b> last night
              </span>
              <span className={styles.stamp}>02:41</span>
            </p>

            <h1 className={styles.h1}>
              Your AI <WordRotator /> team.
              <br />
              <span className={styles.line2}>Working while you sleep.</span>
            </h1>

            <p className={styles.sub}>
              It finds your buyers, spots who&rsquo;s ready to talk, writes the outreach and runs
              the campaigns &mdash; replacing 25 tools and the team you haven&rsquo;t hired yet.
            </p>

            <div className={styles.actions}>
              <Button as="a" href="#engine">
                Start free
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button as="a" href="#engine" variant="glass">
                Watch the engine run
              </Button>
            </div>

            <p className={styles.foot}>
              No credit card &middot; <b>Email campaigns live today</b> &middot; Lead finder in beta
            </p>
          </div>

          <aside className={styles.rail}>
            <div className={styles.railHead}>
              <span className={styles.mono}>Last night&rsquo;s run</span>
              <span className={styles.ok}>All systems go</span>
            </div>
            {RAIL.map((r) => (
              <div key={r.label} className={styles.railRow}>
                <i className={styles.dot} style={{ background: `var(--${r.hue})` }} aria-hidden="true" />
                <span className={styles.railLabel}>{r.label}</span>
                <span className={styles.railValue}>{r.value}</span>
              </div>
            ))}
            <p className={styles.railFoot}>Your morning starts at the replies.</p>
          </aside>
        </div>
      </Wrap>

      <div className={styles.composite}>
        <div className={styles.compGrid}>
          <div className={`${styles.glass} ${styles.queue}`}>
            <div className={styles.bar}>
              <span className={styles.dots} aria-hidden="true">
                <i style={{ background: '#ff5f57' }} />
                <i style={{ background: '#febc2e' }} />
                <i style={{ background: '#28c840' }} />
              </span>
              <span className={styles.mono}>Today&rsquo;s queue</span>
              <span className={styles.ready}>4 ready now</span>
            </div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Intent</th>
                    <th>Why now</th>
                    <th>Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {LEADS.map((l) => (
                    <tr key={l.co}>
                      <td>
                        <span className={styles.who}>
                          <span
                            className={styles.avatar}
                            style={{ background: `linear-gradient(135deg, ${l.from}, ${l.to})` }}
                            aria-hidden="true"
                          >
                            {l.ini}
                          </span>
                          <span>
                            <span className={styles.name}>{l.name}</span>
                            <span className={styles.role}>{l.role}</span>
                          </span>
                        </span>
                      </td>
                      <td className={styles.num}>{l.co}</td>
                      <td>
                        <span className={styles.meter}>
                          <span className={styles.track}>
                            <i
                              className={styles.fill}
                              style={{
                                width: `${l.score}%`,
                                background: l.hot
                                  ? 'linear-gradient(90deg, var(--qualify), var(--send))'
                                  : 'linear-gradient(90deg, var(--find), var(--qualify))',
                              }}
                            />
                          </span>
                          <b className={styles.num}>{l.score}</b>
                        </span>
                      </td>
                      <td className={styles.why}>{l.why}</td>
                      <td>
                        <span className={l.hot ? styles.chipCreate : styles.chipManage}>
                          {l.next}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.glass}>
              <div className={styles.cardHead}>
                <span className={styles.icoCreate} aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 16 16">
                    <path
                      d="M8 1.6l1.5 4.9 4.9 1.5-4.9 1.5L8 14.4 6.5 9.5 1.6 8l4.9-1.5z"
                      fill="var(--create)"
                    />
                  </svg>
                </span>
                <span className={styles.cardTitle}>Written for Priya</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.mailSub}>Northwind&rsquo;s pricing page, and the thing under it</p>
                <p className={styles.mailTxt}>
                  Hi Priya &mdash; you&rsquo;ve been back to our pricing three times this week, so
                  I&rsquo;ll skip the pitch. The bit teams usually want to see first is
                  <i className={styles.caret} aria-hidden="true" />
                </p>
              </div>
            </div>

            <div className={styles.glass}>
              <div className={styles.cardHead}>
                <span className={styles.icoSend} aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 16 16">
                    <path d="M14.4 8L2.4 2.8l1.9 5.2-1.9 5.2z" fill="var(--send)" />
                  </svg>
                </span>
                <span className={styles.cardTitle}>Sent overnight</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.stats}>
                  <div>
                    <span className={styles.statV} style={{ color: 'var(--send-d)' }}>
                      1,204
                    </span>
                    <span className={styles.statK}>Delivered</span>
                  </div>
                  <div>
                    <span className={styles.statV} style={{ color: 'var(--manage-d)' }}>
                      41%
                    </span>
                    <span className={styles.statK}>Opened</span>
                  </div>
                  <div>
                    <span className={styles.statV}>18</span>
                    <span className={styles.statK}>Replied</span>
                  </div>
                </div>
                <svg className={styles.spark} viewBox="0 0 200 36" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--send)" stopOpacity=".28" />
                      <stop offset="100%" stopColor="var(--send)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 29 L26 26 L52 27 L78 18 L104 20 L130 12 L156 14 L182 5 L200 6 L200 36 L0 36 Z"
                    fill="url(#sparkFill)"
                  />
                  <path
                    d="M0 29 L26 26 L52 27 L78 18 L104 20 L130 12 L156 14 L182 5 L200 6"
                    fill="none"
                    stroke="var(--send)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="200" cy="6" r="3" fill="var(--send)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
