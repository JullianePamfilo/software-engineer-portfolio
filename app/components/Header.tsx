import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <Link
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-inner shadow-white/5 transition group-hover:border-cyan-300/30 group-hover:bg-white/10">
            JP
          </div>

          <div className="leading-tight">
            <p className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold tracking-wide text-white">
              Julliane Pamfilo
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Software Engineer
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            href="#projects"
            className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
          >
            Experience
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/resume/Julliane-Pamfilo-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10 sm:inline-flex"
          >
            Resume
          </a>

          <a
            href="https://github.com/JullianePamfilo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10 lg:inline-flex"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}