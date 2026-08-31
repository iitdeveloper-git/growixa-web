import Wrap from '../layout/Wrap';
import Button from '../primitives/Button';
import styles from './Sprawl.module.css';

const TOOLS = [
  'Lead database', 'Email finder', 'Email verifier', 'Phone enrichment', 'Intent data',
  'Website de-anonymiser', 'Sequencer', 'Inbox warm-up', 'Deliverability monitor', 'ESP',
  'Template builder', 'SMS gateway', 'WhatsApp API', 'Social scheduler', 'AI copywriter',
  'Brand voice tool', 'Landing pages', 'Forms', 'CRM', 'Data enrichment', 'List cleaning',
  'Suppression management', 'Attribution', 'Reporting', 'The glue that breaks',
];

export default function Sprawl() {
  return (
    <section className={styles.sprawl}>
      <Wrap className={styles.wrap}>
        <header className={styles.head}>
          <div>
            <span className={styles.mono}>The alternative</span>
            <h2 className={styles.h2}>The stack you&rsquo;d otherwise be buying.</h2>
          </div>
          <p className={styles.lede}>
            This is the toolchain a two-person startup is told it needs before it has sent a single
            email. Twenty-five subscriptions, four weeks of wiring, and somebody to run it.
          </p>
        </header>

        <div className={styles.grid}>
          <ul className={styles.cloud}>
            {TOOLS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className={styles.verdict}>
            <div className={styles.row}>
              <span className={styles.k}>25 tools, per month</span>
              <span className={`${styles.v} ${styles.strike}`}>$2,400</span>
            </div>
            <div className={styles.row}>
              <span className={styles.k}>Setup, one-off</span>
              <span className={`${styles.v} ${styles.strike}`}>4 weeks</span>
            </div>
            <div className={styles.row}>
              <span className={styles.k}>Someone to run it</span>
              <span className={`${styles.v} ${styles.strike}`}>1 hire</span>
            </div>
            <div className={`${styles.row} ${styles.win}`}>
              <span className={styles.kWin}>Growixa</span>
              <span className={`${styles.v} ${styles.gradient}`}>One login</span>
            </div>
            <p className={styles.note}>
              Illustrative list-price maths for a 10k-contact startup stack. Put your own numbers in
              &mdash; the stack calculator does it properly.
            </p>
            <Button as="a" href="#engine" variant="onstage" size="sm" className={styles.cta}>
              Price my current stack
            </Button>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
