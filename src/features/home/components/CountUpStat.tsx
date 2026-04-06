import { useState, useRef, useEffect } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const ANIMATION_DURATION = 1800;
const OBSERVER_THRESHOLD = 0.45;

interface CountUpStatProps {
  value: number;
  suffix?: string;
}

const CountUpStat = ({ value, suffix = "" }: CountUpStatProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: OBSERVER_THRESHOLD }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let frameId = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / ANIMATION_DURATION, 1);
      const eased = easeOutCubic(progress);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasStarted, value]);

  const formattedValue = suffix.includes("M")
    ? displayValue.toFixed(1).replace(/\.0$/, "")
    : Math.round(displayValue).toString();

  return (
    <p
      ref={counterRef}
      className="text-4xl md:text-5xl lg:text-[52px] font-[800] text-white mb-3 tracking-tighter [text-shadow:0_4px_24px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-[1.04]"
    >
      {formattedValue}
      {suffix}
    </p>
  );
};

export default CountUpStat;
