"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Software Engineer",
    "Full-Stack Developer",
    "Cloud Engineer",
    "AI Engineer",
    "Product Builder",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(45);
        }, 1800);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(90);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed, texts]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32 pb-16 flex items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-24 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT VISUAL */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[430px]">
              <div className="hidden lg:block absolute right-2 top-0 z-20">
                <div className="relative inline-block">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={110}
                    height={110}
                    className="absolute -left-0 -top-3 rotate-[12deg]"
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                  <p className="text-lg text-white whitespace-nowrap">
                    Hello! I am{" "}
                    <span className="font-semibold text-cyan-300">
                      Julliane Pamfilo
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:hidden mb-6 text-center">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
                  Hello! I am&nbsp;
                  <span className="font-semibold text-cyan-300">
                    Julliane Pamfilo
                  </span>
                </div>
              </div>
              <div className="relative mx-auto w-fit">
                <div className="relative mx-auto w-fit">
                  {/* flash core */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[180px] w-[180px] rounded-full bg-white/20 blur-[40px]" />

                  {/* cyan glow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] rounded-full bg-cyan-400/25 blur-[80px]" />

                  {/* blue glow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[120px]" />

                  {/* purple outer glow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[150px]" />

                  <Image
                    src="/assets/me.png"
                    alt="Julliane Pamfilo portrait"
                    width={360}
                    height={360}
                    className="relative z-10 max-w-[320px] sm:max-w-[360px]"
                    style={{ width: "auto", height: "auto" }}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 text-center lg:text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-white/45 sm:text-base">
              Software Engineer
            </p>

            <p className="mb-3 text-2xl text-white/90 sm:text-3xl">
              An Engineer who
            </p>

            <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Builds{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                full-stack systems
              </span>{" "}
              for real-world impact.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 lg:mx-0 lg:text-lg">
              I build high-performance software across frontend, backend, cloud
              infrastructure, and AI-powered workflows with a focus on
              scalability, usability, and strong engineering architecture.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.05] hover:shadow-blue-500/40"
              >
                View Projects
              </a>
              <a
                href="/resume/Julliane-Pamfilo-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Resume
              </a>

              <a
                href="https://github.com/JullianePamfilo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/julliane-pamfilo-750266231/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* LOWER GLASS CARD */}
        <div className="mt-16 max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <p className="text-3xl font-bold text-white sm:text-4xl">
              I&apos;m a {displayedText}
              <span className="animate-pulse text-cyan-300">|</span>
            </p>

            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              My work spans React, Next.js, TypeScript, Node.js, Python, AWS,
              Vercel, and AI-enhanced product systems built for performance,
              maintainability, and real user impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "AWS",
                "Vercel",
                "Python",
                "RAG",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
