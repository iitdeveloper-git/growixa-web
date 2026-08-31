import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MobileNav from './MobileNav';

function setup() {
  return render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MobileNav />
      <a href="/behind">behind the drawer</a>
    </MemoryRouter>
  );
}

const trigger = () => screen.getByRole('button', { name: /menu/i });

afterEach(() => {
  document.body.style.overflow = '';
});

describe('MobileNav', () => {
  it('starts closed, with the drawer absent from the DOM', () => {
    setup();
    expect(trigger()).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument();
  });

  it('opens on click and exposes the drawer', async () => {
    setup();
    await userEvent.click(trigger());
    expect(trigger()).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument();
  });

  it('reaches every destination the desktop nav offers', async () => {
    setup();
    await userEvent.click(trigger());
    const nav = screen.getByRole('navigation', { name: 'Mobile' });
    // The gap this component exists to close: these were unreachable on mobile.
    ['/platform', '/platform/find', '/platform/qualify', '/platform/create', '/platform/send',
      '/platform/manage', '/for/founders', '/for/gtm-teams', '/for/marketing-teams',
      '/pricing', '/roadmap', '/sandbox', '/stack-calculator'].forEach((path) => {
      const hit = within(nav)
        .getAllByRole('link')
        .some((a) => a.getAttribute('href') === path);
      expect(hit, `mobile nav has no link to ${path}`).toBe(true);
    });
  });

  it('carries the true build status for each stage', async () => {
    setup();
    await userEvent.click(trigger());
    const nav = screen.getByRole('navigation', { name: 'Mobile' });
    expect(within(nav).getAllByText('Live')).toHaveLength(2);
    expect(within(nav).getAllByText('Beta')).toHaveLength(2);
    expect(within(nav).getByText('Coming Q4 2026')).toBeInTheDocument();
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    setup();
    await userEvent.click(trigger());
    await userEvent.keyboard('{Escape}');
    expect(trigger()).toHaveAttribute('aria-expanded', 'false');
    expect(trigger()).toHaveFocus();
  });

  it('locks page scroll while open and restores it on close', async () => {
    setup();
    expect(document.body.style.overflow).toBe('');
    await userEvent.click(trigger());
    expect(document.body.style.overflow).toBe('hidden');
    await userEvent.keyboard('{Escape}');
    expect(document.body.style.overflow).toBe('');
  });

  it('moves focus into the drawer when it opens', async () => {
    setup();
    await userEvent.click(trigger());
    const nav = screen.getByRole('navigation', { name: 'Mobile' });
    expect(nav).toContainElement(document.activeElement);
  });

  it('keeps Tab inside the drawer rather than reaching the page behind', async () => {
    setup();
    await userEvent.click(trigger());
    const nav = screen.getByRole('navigation', { name: 'Mobile' });
    const behind = screen.getByRole('link', { name: 'behind the drawer' });
    for (let i = 0; i < 40; i += 1) {
      await userEvent.tab();
      expect(document.activeElement).not.toBe(behind);
    }
    expect(nav).toContainElement(document.activeElement);
  });
});
