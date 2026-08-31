import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import MobileNav from './MobileNav';
import Button from '../primitives/Button';
import Wrap from '../layout/Wrap';
import { STAGES } from '../../content/stages';
import { SOLUTIONS } from '../../content/nav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.hdr}>
      <Wrap>
        <nav className={styles.nav} aria-label="Main">
          <Link to="/" className={styles.brand}>
            <span className={styles.mark} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M7.6 1 2.6 8h3.1l-.5 5 5-7H7.1z" fill="var(--ink)" />
              </svg>
            </span>
            Growixa
          </Link>

          <div className={styles.links}>
            <MegaMenu
              label="Platform"
              items={STAGES}
              footer={
                <>
                  <span className={styles.note}>
                    Email campaigns are live today — the rest ships through 2026
                  </span>
                  <Button as={Link} to="/roadmap" size="sm">
                    See the roadmap
                  </Button>
                </>
              }
            />
            <MegaMenu label="Solutions" items={SOLUTIONS} />
            <Link to="/pricing" className={styles.link}>
              Pricing
            </Link>
            <Link to="/roadmap" className={styles.link}>
              Roadmap
            </Link>
          </div>

          <div className={styles.cta}>
            <Link to="/pricing" className={styles.login}>
              Log in
            </Link>
            <Button as={Link} to="/pricing" size="sm">
              Start free
            </Button>
            <MobileNav />
          </div>
        </nav>
      </Wrap>
    </header>
  );
}
