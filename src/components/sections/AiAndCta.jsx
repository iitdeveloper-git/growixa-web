import Wrap from '../layout/Wrap';
import Button from '../primitives/Button';
import { hueVars } from '../layout/Section';
import styles from './AiAndCta.module.css';

const CLAIMS = [
  {
    hue: 'find',
    span: 'w7',
    title: 'It reads their company first',
    body: 'Before writing a word it reads the prospect&rsquo;s site, pricing and job posts — so the opening line is about them, not about you.',
    proof: ['→ read <b>northwind.io</b>', '→ found: usage-based pricing, hiring GTM', '→ angle: <b>&ldquo;scaling before hiring&rdquo;</b>'],
  },
  {
    hue: 'qualify',
    span: 'w5',
    title: 'It scores intent, and shows its work',
    body: 'Each score decomposes into the signals that produced it, with weights you can change.',
    proof: ['pricing ×3 &nbsp;<b>+38</b>', 'hiring demand gen &nbsp;<b>+31</b>', 'opened ×5 &nbsp;<b>+23</b>', '= &nbsp;<b>92</b>'],
  },
  {
    hue: 'send',
    span: 'w12',
    title: 'It rewrites per channel, not per word count',
    body: 'The same idea becomes a 90-word email, a 280-character post and a 160-character SMS — each written for its channel rather than truncated into it.',
    proof: ['email <b>94w</b> &nbsp;·&nbsp; linkedin <b>212c</b> &nbsp;·&nbsp; sms <b>148c, gsm-7, 1 segment</b> &nbsp;·&nbsp; whatsapp <b>template-safe</b>'],
  },
];

export function AiSection() {
  return (
    <section className={styles.sec}>
      <Wrap>
        <header className={styles.head}>
          <div>
            <span className={styles.mono}>What the AI actually does</span>
            <h2 className={styles.h2}>Three specific jobs. Not &ldquo;powered by AI&rdquo;.</h2>
          </div>
          <p className={styles.lede}>
            Every claim here is something you can watch happen in the sandbox before you give us an
            email address.
          </p>
        </header>

        <div className={styles.grid}>
          {CLAIMS.map((c) => (
            <article key={c.title} className={`${styles.card} ${styles[c.span]}`} style={hueVars(c.hue)}>
              <span className={styles.glow} aria-hidden="true" />
              <h3 className={styles.h3}>{c.title}</h3>
              <p className={styles.body} dangerouslySetInnerHTML={{ __html: c.body }} />
              <div className={styles.proof}>
                {c.proof.map((line, i) => (
                  <span key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className={styles.cta}>
      <Wrap className={styles.ctaWrap}>
        <h2 className={styles.ctaH2}>
          You built the product.
          <br />
          Let Growixa build the pipeline.
        </h2>
        <p className={styles.ctaP}>
          Start with email campaigns &mdash; live today, free to try. The rest of the engine switches
          on as it ships.
        </p>
        <div className={styles.ctaActions}>
          <Button as="a" href="#engine" variant="onstage">
            Start free
          </Button>
          <Button as="a" href="#engine" variant="ghoststage">
            Talk to a founder
          </Button>
        </div>
        <p className={styles.ctaFoot}>
          No credit card &middot; Import your list in one click &middot; Cancel whenever
        </p>
      </Wrap>
    </section>
  );
}
