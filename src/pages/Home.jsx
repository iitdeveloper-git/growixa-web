import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Sprawl from '../components/sections/Sprawl';
import EngineBento from '../components/sections/EngineBento';
import { AiSection, CtaBand } from '../components/sections/AiAndCta';

export default function Home() {
  return (
    <>
      {/* 1. State the wedge, and show the whole engine at once. */}
      <Hero />
      {/* 2. Make the sprawl visceral before explaining the alternative. */}
      <Marquee />
      <Sprawl />
      {/* 3. Explain the product, then prove the AI claims are checkable. */}
      <EngineBento />
      <AiSection />
      <CtaBand />
    </>
  );
}
