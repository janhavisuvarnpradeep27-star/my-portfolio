import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Research & AI", href: "#research" },
  { label: "Software & Web", href: "#software" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/janhavisuvarnpradeep27-star",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/janhavi-jadhav-339683290",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:janhavik275@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="text-sm font-semibold text-white hover:text-indigo-300 transition"
          >
            Janhavi Jadhav
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-slate-500 hover:text-slate-200 transition"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-indigo-500/40 hover:text-indigo-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Janhavi Jadhav · Built with React &amp;
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
