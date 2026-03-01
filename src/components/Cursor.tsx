import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // Only show on desktop (mouse) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.style.cursor = "none";

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setDotPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      setHovered(!!(e.target as HTMLElement).closest("a, button, [role=button]"));
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${current.x}px`;
        ringRef.current.style.top = `${current.y}px`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", () => setClicking(true));
    window.addEventListener("mouseup", () => setClicking(false));
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));
    rafId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const size = hovered ? 48 : clicking ? 18 : 34;

  return (
    <>
      {/* Lagging glowing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9999] rounded-full border border-indigo-400/80 transition-[width,height,background,box-shadow,opacity] duration-200 ease-out"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          opacity: visible ? 1 : 0,
          background: hovered ? "rgba(99,102,241,0.1)" : "transparent",
          boxShadow: hovered ? "0 0 16px rgba(99,102,241,0.3)" : "none",
        }}
      />
      {/* Sharp dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-indigo-400 transition-[width,height,opacity] duration-100"
        style={{
          width: clicking ? 4 : 6,
          height: clicking ? 4 : 6,
          left: dotPos.x - (clicking ? 2 : 3),
          top: dotPos.y - (clicking ? 2 : 3),
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
