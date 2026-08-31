import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import Button from '../primitives/Button';
import Tag from '../primitives/Tag';
import { hueVars } from '../layout/Section';
import { STAGES, STATUS } from '../../content/stages';
import { SOLUTIONS } from '../../content/nav';
import styles from './MobileNav.module.css';

const DIRECT = [
  { to: '/pricing', label: 'Pricing' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/sandbox', label: 'Sandbox' },
  { to: '/stack-calculator', label: 'Stack calculator' },
];

function label(stage) {
  return stage.status === STATUS.SOON ? `Coming ${stage.statusLabel}` : stage.statusLabel;
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const { pathname } = useLocation();

  // Close on navigation. Without this the drawer stays over the new page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    // Lock the page behind the drawer, and restore whatever overflow was there.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      // Keep Tab inside the drawer: everything behind it is inert.
      const items = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector('a[href], button')?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`${styles.bars} ${open ? styles.barsOpen : ''}`} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      {open &&
        /* Portalled to <body> deliberately: Header sets backdrop-filter, which
           creates a containing block for fixed-position descendants, so a
           position:fixed drawer rendered in place would size itself against
           the header rather than the viewport. */
        createPortal(
          <>
            <div className={styles.scrim} onClick={() => setOpen(false)} aria-hidden="true" />
            <nav id="mobile-nav" className={styles.panel} ref={panelRef} aria-label="Mobile">
              <p className={styles.group}>The Engine</p>
              {STAGES.map((s) => (
                <Link key={s.id} to={s.path} className={styles.stage} style={hueVars(s.hue)}>
                  <i className={styles.dot} aria-hidden="true" />
                  <span className={styles.stageText}>
                    <b>{s.name}</b>
                    <span>{s.blurb}</span>
                  </span>
                  <Tag status={s.status} label={label(s)} />
                </Link>
              ))}
              <Link to="/platform" className={styles.item}>
                How it fits together
              </Link>

              <p className={styles.group}>Solutions</p>
              {SOLUTIONS.map((s) => (
                <Link key={s.id} to={s.path} className={styles.item}>
                  For {s.name.toLowerCase()}
                </Link>
              ))}

              <p className={styles.group}>Product</p>
              {DIRECT.map((d) => (
                <Link key={d.to} to={d.to} className={styles.item}>
                  {d.label}
                </Link>
              ))}

              <div className={styles.actions}>
                <Button as={Link} to="/pricing" className={styles.full}>
                  Start free
                </Button>
                <Button as={Link} to="/contact" variant="glass" className={styles.full}>
                  Talk to a founder
                </Button>
              </div>

              <p className={styles.honest}>
                Campaigns and contacts are live. Find and Create are in beta. Qualify ships Q4.
              </p>
            </nav>
          </>,
          document.body
        )}
    </div>
  );
}
