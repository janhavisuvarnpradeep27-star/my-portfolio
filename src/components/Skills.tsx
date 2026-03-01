type Category = {
  title: string;
  accent: string;
  pill: string;
  skills: string[];
};

const categories: Category[] = [
  {
    title: "Languages",
    accent: "from-indigo-500 to-indigo-600",
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    title: "AI / ML",
    accent: "from-purple-500 to-purple-600",
    pill: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20",
    skills: ["PyTorch", "TensorFlow / Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Web & Full-Stack",
    accent: "from-pink-500 to-pink-600",
    pill: "bg-pink-500/10 text-pink-300 border-pink-500/20 hover:bg-pink-500/20",
    skills: ["React", "Node.js / Express", "Tailwind CSS", "REST & GraphQL APIs", "PostgreSQL / MongoDB", "Next.js"],
  },
  {
    title: "Tools & DevOps",
    accent: "from-teal-500 to-teal-600",
    pill: "bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20",
    skills: ["Git / GitHub", "VS Code", "Jupyter", "Linux"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-950 py-24 px-4 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            What I work with
          </p>
          <h2 className="font-serif mt-2 text-5xl font-bold text-white sm:text-6xl">
            Skills
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.accent}`} />
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${cat.pill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
