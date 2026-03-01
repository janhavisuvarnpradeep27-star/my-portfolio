import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const socials = [
  {
    label: "Email",
    value: "janhavik275@gmail.com",
    href: "mailto:janhavik275@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/janhavi-jadhav-339683290",
    href: "https://www.linkedin.com/in/janhavi-jadhav-339683290",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/janhavisuvarnpradeep27-star",
    href: "https://github.com/janhavisuvarnpradeep27-star",
    icon: Github,
  },
  {
    label: "Location",
    value: "Mumbai, Maharashtra",
    href: undefined,
    icon: MapPin,
  },
];

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xkovardy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40";

  return (
    <section
      id="contact"
      className="relative bg-slate-900 py-24 px-4 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Let&apos;s connect
          </p>
          <h2 className="font-serif mt-2 text-5xl font-bold text-white sm:text-6xl">
            Contact
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mt-4 max-w-md mx-auto text-slate-400 text-sm">
            Have a project in mind, a question, or just want to say hi? My inbox
            is always open.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left – info */}
          <div className="space-y-5">
            {socials.map(({ label, value, href, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <Icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-200">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right – form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or idea..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {status === "sending" ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : status === "sent" ? (
                "Message sent! 🎉"
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
