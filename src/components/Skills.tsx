import { useEffect, useRef, useState } from "react";

type Skill = { name: string; level: number };

type Category = {
  title: string;
  color: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages",
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "AI / ML",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow / Keras", level: 82 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    title: "Web & Full-Stack",
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js / Express", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "REST & GraphQL APIs", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "from-teal-500 to-teal-600",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, animated }: Skill & { color: string; animated: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-1.5 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${level}%` : "0%", transitionDelay: "200ms" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.color}`}
                />
                <h3 className="text-base font-semibold text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} animated={animated} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
