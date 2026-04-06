import { useState, useEffect } from "react";

const words = [
  "Scalable Web Engineering",
  "Mobile App Development",
  "Website Optimization",
  "Growth Engineering",
  "Enterprise Support",
];

const TypewriterText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 40 : 80;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 300;

    if (!isDeleting && charIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), pauseAfterType);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, pauseAfterDelete);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, wordIndex]);

  const displayed = words[wordIndex].substring(0, charIndex);

  return (
    <span style={{ color: '#666666' }} className="relative">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-blink" />
    </span>
  );
};

export default TypewriterText;
