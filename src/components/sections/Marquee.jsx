import styles from './Marquee.module.css';

const ROW_A = ['Apollo', 'Mailchimp', 'Clay', 'Lemlist', 'Hunter.io', 'Instantly', 'Zapier', 'Jasper', 'Smartlead', 'NeverBounce', 'Buffer', 'Copy.ai'];
const ROW_B = ['Snov.io', 'Lusha', 'Woodpecker', 'ZoomInfo', 'Klaviyo', 'Reply.io', 'Outreach', 'Warmbox', 'Dripify', 'Mailerlite', 'Phantombuster', 'Clearbit'];

function Row({ items, className }) {
  // Duplicated so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className={className} aria-hidden="true">
      {doubled.map((name, i) => (
        <span key={`${name}-${i}`} className={styles.tool}>
          {name}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <span className={styles.label}>Cancel these</span>
      <Row items={ROW_A} className={`${styles.row} ${styles.left}`} />
      <Row items={ROW_B} className={`${styles.row} ${styles.right}`} />
      <p className={styles.sr}>
        Growixa replaces tools including Apollo, Mailchimp, Clay, Lemlist, Hunter.io, ZoomInfo,
        Klaviyo, Outreach and Zapier.
      </p>
    </div>
  );
}
