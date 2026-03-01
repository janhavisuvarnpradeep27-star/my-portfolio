import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "CRAFTOGRAM – Platform for Handicraft Artists",
    description:
      "A comprehensive platform designed to empower handicraft artisans by providing them a digital space to showcase their creative work, share their stories, and connect with buyers, event organizers, and fellow artisans.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    badge: "July 2024",
  },
  {
    title: "XPENSO – Expense Tracker for College Students",
    description:
      "Developed a student-focused expense tracking system to monitor daily spending and visualize financial data through interactive dashboards. Integrated OCR image recognition for bill scanning and a voice input system to enable effortless expense entry.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    badge: "Jan 2025",
  },
  {
    title: "COLLABRY – Forums and Project Collaboration",
    description:
      "Developed a web-based college discussion forum to organize academic, career, and project-related discussions in one platform. Implemented structured discussion threads and a project collaboration feature enabling students to share ideas and find teammates based on skills. Built with the MERN Stack, including secure user authentication and admin moderation.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/janhavisuvarnpradeep27-star/collabry-minor-proj",
    badge: "July 2025",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.07] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition">
          {project.title}
        </h3>
        {project.badge && (
          <span className="shrink-0 rounded-full bg-purple-500/15 border border-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-300">
            {project.badge}
          </span>
        )}
      </div>

      <p className="flex-1 text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-purple-400 transition hover:text-purple-300"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function SoftwareProjects() {
  return (
    <section
      id="software"
      className="relative bg-slate-950 py-24 px-4 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            Projects
          </p>
          <h2 className="font-serif mt-2 text-5xl font-bold text-white sm:text-6xl">
            Software &amp; Web
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="mt-4 max-w-xl mx-auto text-slate-400 text-sm">
            Full-stack applications and developer tools — built for performance,
            usability, and scale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
