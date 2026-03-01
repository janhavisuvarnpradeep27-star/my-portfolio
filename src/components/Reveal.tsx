import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("reveal-show");
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "reveal-from-left"
      : direction === "right"
        ? "reveal-from-right"
        : "reveal-from-up";

  return (
    <div ref={ref} className={`reveal-base ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
