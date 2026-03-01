import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  id?: string;
  label: string;
  href?: string;
  children?: { id: string; label: string; href: string }[];
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  {
    label: "Projects",
    children: [
      { id: "research", label: "Research & AI", href: "#research" },
      { id: "software", label: "Software & Web", href: "#software" },
    ],
  },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const sectionIds = useMemo(
    () => ["home", "about", "skills", "research", "software", "contact"],
    []
  );

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setProjectsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isProjectsActive = activeId === "research" || activeId === "software";

  const linkBase =
    "relative inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";
  const underline = (active: boolean) =>
    active
      ? "after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-indigo-500"
      : "after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:scale-x-0 after:bg-indigo-500 after:transition after:duration-200 hover:after:scale-x-100";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-700 shadow-[0_10px_24px_-10px_rgba(99,102,241,0.85)] ring-1 ring-white/20 transition duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_14px_34px_-14px_rgba(139,92,246,0.95)]">
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.28),transparent_52%)]" />
            <span className="inline-flex items-center gap-[3px] font-display text-xl font-extrabold text-white" style={{ fontVariantLigatures: "none" }}>
              <span style={{ display: "inline-block" }}>J</span>
              <span style={{ display: "inline-block" }}>J</span>
            </span>
          </span>
          <span className="hidden text-left leading-tight text-white sm:block">
            <span className="block font-display text-base font-semibold tracking-tight group-hover:text-indigo-100">
              Janhavi Jadhav
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
              Computer Engineer
            </span>
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  type="button"
                  className={`${linkBase} ${underline(isProjectsActive)} gap-1`}
                  aria-haspopup="true"
                  aria-expanded={projectsOpen}
                  onFocus={() => setProjectsOpen(true)}
                  onClick={() => setProjectsOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 mt-3 w-52 rounded-lg border border-white/10 bg-slate-900/95 p-2 shadow-xl backdrop-blur transition ${
                    projectsOpen
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.id}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      onClick={() => setProjectsOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`${linkBase} ${underline(activeId === item?.id)}`}
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="/Janhavi Jadhav Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            View Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMenuOpen((v) => !v);
            setProjectsOpen(false);
          }}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-3 shadow-lg">
            {navItems.map((item) =>
              item.children ? (
                <details
                  key={item.label}
                  className="rounded-md text-slate-200"
                  open={projectsOpen}
                  onToggle={(e) => setProjectsOpen((e.target as HTMLDetailsElement).open)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition ${projectsOpen ? "rotate-180" : ""}`}
                    />
                  </summary>
                  <div className="mt-1 space-y-1 rounded-md bg-white/5 p-2">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setProjectsOpen(false);
                        }}
                        className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  {item.label}
                  {activeId === item?.id && (
                    <span className="ml-2 inline-block h-1 w-8 rounded-full bg-indigo-500 align-middle" />
                  )}
                </a>
              )
            )}
            <a
              href="/Janhavi Jadhav Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-md transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
