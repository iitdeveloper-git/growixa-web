import Home from './pages/Home';
import Platform from './pages/Platform';
import StagePage from './pages/StagePage';
import Pricing from './pages/Pricing';
import Roadmap from './pages/Roadmap';
import { SolutionPage, Security, About, Contact, Blog } from './pages/SimplePages';
import { Sandbox, StackCalculator } from './pages/Interactive';
import { STAGES } from './content/stages';
import { SOLUTIONS } from './content/nav';

export const ROUTES = [
  { path: '/', element: <Home />, label: 'Home' },
  { path: '/platform', element: <Platform />, label: 'Platform' },

  // One template, five hues — a stage page is a data change, not a new component.
  ...STAGES.map((s) => ({
    path: s.path,
    element: <StagePage id={s.id} />,
    label: s.name,
  })),

  ...SOLUTIONS.map((s) => ({
    path: s.path,
    element: <SolutionPage id={s.id} />,
    label: s.name,
  })),

  { path: '/pricing', element: <Pricing />, label: 'Pricing' },
  { path: '/roadmap', element: <Roadmap />, label: 'Roadmap' },
  { path: '/sandbox', element: <Sandbox />, label: 'Sandbox' },
  { path: '/stack-calculator', element: <StackCalculator />, label: 'Stack calculator' },
  { path: '/security', element: <Security />, label: 'Security' },
  { path: '/about', element: <About />, label: 'About' },
  { path: '/contact', element: <Contact />, label: 'Contact' },
  { path: '/blog', element: <Blog />, label: 'Blog' },
];
