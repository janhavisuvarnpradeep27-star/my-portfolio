import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = [
  "Computer Engineering Student",
  "AI & ML Enthusiast",
  "Full-Stack Developer",
  "Data Science Researcher",
];

const floatingTags = [
  { label: "Python",       x: "7%",  y: "22%", delay: "0s",   dur: "6s"   },
  { label: "React",        x: "83%", y: "16%", delay: "1.2s", dur: "7s"   },
  { label: "PyTorch",      x: "9%",  y: "70%", delay: "2.1s", dur: "5.5s" },
  { label: "TypeScript",   x: "78%", y: "65%", delay: "0.6s", dur: "8s"   },
  { label: "Node.js",      x: "73%", y: "38%", delay: "1.8s", dur: "6.5s" },
  { label: "ML / AI",      x: "4%",  y: "46%", delay: "3s",   dur: "7.5s" },
  { label: "Data Science", x: "46%", y: "83%", delay: "2.4s", dur: "6.2s" },
];

export function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent px-4 pt-20 pb-12 sm:pt-0 sm:pb-0"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fda2ac 1px, transparent 1px), linear-gradient(to right, #fda2ac 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-3xl" />

      {/* Floating tech badges */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingTags.map(({ label, x, y, delay, dur }) => (
          <span
            key={label}
            className="absolute hidden sm:inline-flex select-none items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 backdrop-blur-sm"
            style={{
              left: x,
              top: y,
              animation: `float-y ${dur} ease-in-out ${delay} infinite`,
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Badge */}
        <span className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-indigo-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
          </span>
          Available for opportunities
        </span>

        {/* Name */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="animate-shimmer bg-gradient-to-r from-[#FDA2AC] via-[#CB0E31] to-[#BAD62C] bg-clip-text text-transparent">
            Janhavi Jadhav
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <p className="mt-3 sm:mt-5 flex min-h-[2rem] items-center justify-center text-base font-medium text-slate-300 sm:text-xl lg:text-2xl">
          <span>{role}</span>
          <span className="typewriter-cursor" />
        </p>

        {/* Description */}
        <p className="mt-4 sm:mt-6 mx-auto max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
          I build intelligent, scalable software — from deep learning models to
          full-stack web applications. Passionate about turning research ideas
          into real-world products.
        </p>

        {/* CTAs */}
        <div className="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#research"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            View My Projects
          </a>
          <a
            href="/Janhavi Jadhav Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10 hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            View Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-7 sm:mt-10 flex items-center justify-center gap-4 sm:gap-5">
          {[
            {
              href: "https://github.com/janhavisuvarnpradeep27-star",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/janhavi-jadhav-339683290",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:janhavik275@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 hover:-translate-y-1"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
