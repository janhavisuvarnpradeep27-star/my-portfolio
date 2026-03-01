import { BookOpen, Briefcase, GraduationCap, MapPin } from "lucide-react";

const experience = [
  {
    year: "Present",
    title: "React Intern",
    org: "Beyond Bound",
    desc: "Currently working as a React Intern — building and improving UI components, collaborating on real-world front-end projects, and gaining hands-on industry experience.",
    icon: Briefcase,
  },
];

const education = [
  {
    year: "2023 – 2027",
    title: "B.E. Computer Engineering",
    org: "K.J.Somaiya Institute of Technology, Sion, Mumbai",
    desc: "Currently pursuing a Bachelor of Engineering in Computer Engineering. Exploring AI/ML, full-stack development, and systems programming.",
    subbranches: [
      { label: "Honours", value: "Data Science" },
      { label: "Minor", value: "Entrepreneurship" },
    ],
    icon: GraduationCap,
  },
  {
    year: "May 2023",
    title: "Senior Secondary Education — Grade 12th",
    org: "Global Public School & Jr. College, Nashik, Maharashtra",
    desc: "HSC Board — 75.3%",
    icon: GraduationCap,
  },
  {
    year: "May 2021",
    title: "Higher Secondary Education — Grade 10th",
    org: "Aadarsh Secondary English Medium School, Nashik, Maharashtra",
    desc: "SSC Board — 92%",
    icon: GraduationCap,
  },
];

const facts = [
  { label: "Location", value: "Mumbai, Maharashtra", icon: MapPin },
  {
    label: "Degree",
    value: "B.E. Computer Engineering (2023–27)",
    icon: GraduationCap,
  },
  { label: "Focus", value: "AI / ML · Full-Stack", icon: BookOpen },
];

export function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-900 py-16 sm:py-24 px-4 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Get to know me
          </p>
          <h2 className="font-serif mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left – Bio + facts */}
          <div>
            {/* Avatar – styled monogram */}
            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
              {/* Spinning-ring wrapper */}
              <div className="relative shrink-0 h-20 w-20 sm:h-24 sm:w-24">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 opacity-80 blur-[2px] animate-[spin_6s_linear_infinite]" />
                <div className="absolute inset-[2px] rounded-[1.2rem] bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700" />
                {/* Inner glow highlight */}
                <div className="absolute inset-[2px] rounded-[1.2rem] bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.22),transparent_55%)]" />
                {/* Monogram */}
                <div className="absolute inset-[2px] flex items-center justify-center rounded-[1.2rem]">
                  <span className="flex items-center gap-[3px] leading-none select-none" style={{ fontVariantLigatures: "none" }}>
                    <span className="font-display text-[1.75rem] sm:text-[2rem] font-extrabold tracking-normal text-white drop-shadow-[0_2px_8px_rgba(139,92,246,0.7)]" style={{ display: "inline-block" }}>J</span>
                    <span className="font-display text-[1.75rem] sm:text-[2rem] font-extrabold tracking-normal text-white drop-shadow-[0_2px_8px_rgba(139,92,246,0.7)]" style={{ display: "inline-block" }}>J</span>
                  </span>
                </div>
                {/* Subtle bottom-edge shine */}
                <div className="absolute bottom-0 inset-x-[2px] h-[40%] rounded-b-[1.2rem] bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white">Janhavi Jadhav</h3>
                <p className="text-sm text-slate-400">
                  Computer Engineering Student · Mumbai
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I&apos;m a computer engineering student who loves sitting at the
              intersection of
              <span className="text-indigo-400 font-medium">
                {" "}
                research and real-world engineering
              </span>
              . Whether I&apos;m training a machine-learning model or wiring up
              a React front-end, I care about writing code that is clean,
              efficient, and genuinely useful.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Outside of code, you&apos;ll find me binge-watching thriller
              movies &amp; series, hitting the gym, following cricket, exploring
              new places, and hunting for the best sushi in the city. Big chai
              person — though I&apos;m slowly trying to cut down! ☕
            </p>

            {/* Quick facts */}
            <ul className="mt-6 sm:mt-8 space-y-2.5">
              {facts.map(({ label, value, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-indigo-400" />
                  <span className="text-slate-400 text-xs sm:text-sm shrink-0 w-20 sm:w-28">{label}</span>
                  <span className="text-white text-xs sm:text-sm font-medium min-w-0 break-words">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – two timelines */}
          <div className="space-y-8 sm:space-y-10">

            {/* Experience */}
            <div>
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-emerald-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Experience</h3>
              </div>
              <ol className="relative border-l border-white/10 space-y-6">
                {experience.map(({ year, title, org, desc, icon: Icon }) => (
                  <li key={year + title} className="ml-5 sm:ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/40 bg-slate-900 ring-4 ring-slate-900">
                      <Icon className="h-3 w-3 text-emerald-400" />
                    </span>
                    <span className="mb-1 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Present
                      </span>
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white">{title}</h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-400">{org}</p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5" />

            {/* Education */}
            <div>
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Education</h3>
              </div>
              <ol className="relative border-l border-white/10 space-y-6">
                {education.map(({ year, title, org, desc, icon: Icon, subbranches }) => (
                  <li key={year + title} className="ml-5 sm:ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-indigo-500/40 bg-slate-900 ring-4 ring-slate-900">
                      <Icon className="h-3 w-3 text-indigo-400" />
                    </span>
                    <span className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                        {year}
                      </span>
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">{title}</h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">{org}</p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
                    {subbranches && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {subbranches.map(({ label, value }) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-0.5 text-xs font-medium text-indigo-300"
                          >
                            <span className="text-indigo-500">{label}:</span>
                            {value}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
