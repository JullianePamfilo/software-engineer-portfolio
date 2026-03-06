import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="px-6 py-20 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/40">
            Contact
          </p>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white lg:text-5xl">
            Let&apos;s build something exceptional.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 lg:text-lg">
            I&apos;m open to software engineering opportunities, product-focused
            teams, and technically ambitious work across full-stack systems,
            cloud infrastructure, and AI-powered applications.
          </p>

          <a
            href="mailto:pamfilojulliane@yahoo.com"
            className="mt-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
          >
            pamfilojulliane@yahoo.com
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/JullianePamfilo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/julliane-pamfilo-750266231/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              LinkedIn
            </Link>

            <a
              href="/resume/Julliane-Pamfilo-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
              Julliane Pamfilo
            </p>
            <p className="text-sm uppercase tracking-[0.22em] text-white/40">
              Software Engineer
            </p>
          </div>

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Julliane Pamfilo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}