import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "VibeCheck – AI Student Engagement Analytics Platform",
    description:
      "Built a computer vision-based system to track student attention, detect classroom chaos, and generate real-time engagement analytics. Applied deep learning pipelines for pose, face, and activity detection.",
    tags: ["OpenCV", "MediaPipe", "YOLOv8", "Python"],
    github: "https://github.com/KhushiChandak04/CodeQuest",
    badge: "Sep 2025",
  },
  {
    title: "CrediScope: Multimodal Fake News Detection",
    description:
      "Developed a multimodal system that detects potential fake news by combining image captioning with NLP-based credibility analysis. Trained on ISOT and LIAR datasets, achieving ~85–90% accuracy while revealing key limitations of text-only misinformation detection.",
    tags: ["NLP", "HuggingFace", "Scikit-learn", "PyTorch", "Python"],
    github: "https://github.com/janhavij/crediscope",
    badge: "Present",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.07] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition">
          {project.title}
        </h3>
        {project.badge && (
          <span className="shrink-0 rounded-full bg-indigo-500/15 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
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
            className="flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function ResearchProjects() {
  return (
    <section
      id="research"
      className="relative bg-slate-900 py-24 px-4 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Projects
          </p>
          <h2 className="font-serif mt-2 text-5xl font-bold text-white sm:text-6xl">
            Research &amp; AI
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mt-4 max-w-xl mx-auto text-slate-400 text-sm">
            Deep-learning and ML projects from research labs, competitions, and
            personal exploration.
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
