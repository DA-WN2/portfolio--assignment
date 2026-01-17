import { useEffect, useRef, useState } from "react";

export default function useInView(options = { once: true, threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once !== false) obs.unobserve(el);
        } else if (options.once === false) {
          setInView(false);
        }
      },
      { threshold: options.threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options.once, options.threshold]);

  return [ref, inView];
}
