// src/utils.jsx
import React, { useState, useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function AnimatedStat({ value }) {
  const [display, setDisplay] = useState('0');
  const [ref, visible] = useScrollReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');
    let step = 0;
    const total = 40;
    const iv = setInterval(() => {
      step++;
      setDisplay(Math.round((num / total) * step) + suffix);
      if (step >= total) { setDisplay(value); clearInterval(iv); }
    }, 28);
    return () => clearInterval(iv);
  }, [visible, value]);
  return <span ref={ref}>{display}</span>;
}