import { useEffect, useRef, useState } from 'react';
import styles from './WordRotator.module.css';

const WORDS = ['GTM', 'marketing', 'sales', 'outbound', 'growth'];
const INTERVAL = 2600;
const SWAP = 330;

export default function WordRotator() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const boxRef = useRef(null);
  const ghostRef = useRef(null);

  // Measure against a hidden ghost that mirrors the computed font, so the
  // width animation never jitters as glyph widths change.
  const measure = (word) => {
    const ghost = ghostRef.current;
    const box = boxRef.current;
    if (!ghost || !box) return;
    ghost.textContent = word;
    box.style.width = `${Math.ceil(ghost.getBoundingClientRect().width)}px`;
    // Clear immediately: the ghost is visually hidden but still contributes to
    // textContent, so leaving it filled makes the h1 read "GTMGTM" to crawlers.
    ghost.textContent = '';
  };

  useEffect(() => {
    measure(WORDS[index]);
    const onResize = () => measure(WORDS[index]);
    window.addEventListener('resize', onResize);
    // Fonts load after first paint; without this the initial width is wrong.
    if (document.fonts?.ready) document.fonts.ready.then(onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index]);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const tick = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setLeaving(false);
      }, SWAP);
    }, INTERVAL);
    return () => clearInterval(tick);
  }, []);

  return (
    <>
      <span className={styles.box} ref={boxRef}>
        <span className={`${styles.word} ${leaving ? styles.out : ''}`}>{WORDS[index]}</span>
      </span>
      <span className={styles.ghost} ref={ghostRef} aria-hidden="true" />
    </>
  );
}
