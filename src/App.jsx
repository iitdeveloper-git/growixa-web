import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from './routes';
import Wrap from './components/layout/Wrap';
import Section from './components/layout/Section';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';

function NotFound() {
  return (
    <Section>
      <Wrap>
        <h1>Page not found</h1>
        <p>That page does not exist yet.</p>
      </Wrap>
    </Section>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function RouteChangeReset() {
  const { pathname } = useLocation();
  // Compare against the previous path rather than counting mounts: StrictMode
  // double-invokes effects in development, and a "skip the first mount" flag
  // survives the simulated unmount, so the second run would fire on page load.
  const prev = useRef(pathname);
  useEffect(() => {
    if (prev.current === pathname) return;
    prev.current = pathname;
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus();
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteChangeReset />
      <Header />
      <main id="main" tabIndex={-1}>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
