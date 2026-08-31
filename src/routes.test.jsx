import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import { ROUTES } from './routes';

/**
 * Link-integrity guard.
 *
 * The real risk is not the stage and solution routes — those are generated from
 * the same data the links are, so they cannot drift. It is the paths typed by
 * hand into Header.jsx and Footer.jsx: a typo there renders perfectly, fails no
 * test, and silently 404s. So this renders the actual shell, harvests every
 * href it produces, and checks each one against the route table.
 */
const REGISTERED = new Set(ROUTES.map((r) => r.path));

function hrefsFrom(ui) {
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{ui}</MemoryRouter>);
  return [...new Set(
    screen
      .getAllByRole('link')
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && h.startsWith('/'))
  )];
}

describe('route integrity', () => {
  it('every link the Footer renders resolves to a registered route', () => {
    const missing = hrefsFrom(<Footer />).filter((h) => !REGISTERED.has(h));
    expect(missing, `Footer links to unregistered paths: ${missing.join(', ')}`).toEqual([]);
  });

  it('every link the Header renders resolves to a registered route', () => {
    const missing = hrefsFrom(<Header />).filter((h) => !REGISTERED.has(h));
    expect(missing, `Header links to unregistered paths: ${missing.join(', ')}`).toEqual([]);
  });

  it('the Footer actually emits links (guards against a vacuous pass above)', () => {
    expect(hrefsFrom(<Footer />).length).toBeGreaterThan(10);
  });

  it('has no duplicate paths', () => {
    const paths = ROUTES.map((r) => r.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('gives every route an element and a label', () => {
    ROUTES.forEach((r) => {
      expect(r.element, `route "${r.path}" has no element`).toBeTruthy();
      expect(typeof r.label, `route "${r.path}" has no label`).toBe('string');
    });
  });
});
