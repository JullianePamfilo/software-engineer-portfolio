import Image from "next/image";

interface Project {
  id: number;
  label: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    label: "Flagship Platform",
    title: "DADO — Luxury Gifting & Social Commerce",
    description:
      "A premium gifting platform designed around wishlists, group gifting, curated discovery, and emotionally-driven commerce. Built with a product-first engineering mindset, the platform blends elegant UI, complex user flows, and scalable system architecture for a modern luxury experience.",
    stack: ["React", "TypeScript", "Node.js", "Python", "AWS", "RAG"],
    image: "/projects/worldofdado.png",
    liveLink: "#",
    codeLink: "https://github.com/JullianePamfilo",
  },
  {
    id: 2,
    label: "E-Commerce System",
    title: "Out of Stock — Custom Shopify Marketplace",
    description:
      "A custom sneaker marketplace engineered for real inventory workflows, advanced collection organization, mobile-first browsing, and polished customer experience. I worked across storefront structure, UX refinement, filtering logic, product mapping, and real-world merchandising improvements.",
    stack: ["Shopify", "Liquid", "JavaScript", "UX/UI", "Klaviyo"],
    image: "/projects/outofstockjoliet.png",
    liveLink: "#",
  },
  {
    id: 3,
    label: "Client Production Site",
    title: "Events By Mau — Luxury Event Design Website",
    description:
      "A branded production website for an event planning and balloon design business, focused on premium visuals, elegant service presentation, mobile responsiveness, and polished customer inquiry flows. Built to feel refined, modern, and conversion-aware.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/eventsbymau.png",
    liveLink: "#",
    codeLink: "https://github.com/JullianePamfilo",
  },
  {
    id: 4,
    label: "Product Platform",
    title: "Ola Electric — Platform Modernization",
    description:
      "Contributed to the modernization of a production web platform supporting next-generation electric scooters. Worked on React-based architecture improvements, maintainability, responsiveness, and frontend performance in a live product environment.",
    stack: ["React", "TypeScript", "Node.js", "Frontend Architecture"],
    image: "/projects/olae.png",
    liveLink: "#",
  },
  {
    id: 5,
    label: "Automotive Service Platform",
    title: "Wrench Garage Customs — High-Performance Service Website",
    description:
      "A modern automotive service website built with a premium dark UI, strong visual hierarchy, and conversion-focused layout. Designed to help customers quickly understand services, request quotes, and book with confidence through a sleek, high-impact digital experience.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Lead Gen", "UI/UX"],
    image: "/projects/wrenchgarage.png",
    liveLink: "#",
    codeLink: "https://github.com/JullianePamfilo",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-300/70">
            Featured Work
          </p>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white lg:text-6xl">
            Built for users,
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              shaped by engineering depth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 lg:text-lg">
            A selection of platforms, commerce systems, and production
            applications that reflect my work across full-stack engineering,
            scalable frontend architecture, and polished digital product
            execution.
          </p>
        </div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={project.id}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXT SIDE */}
                  <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                    <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-300/70">
                      {project.label}
                    </p>

                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white lg:text-5xl">
                      {project.title}
                    </h3>

                    <div className="relative z-10 mt-6">
                      <div
                        className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.25)] lg:p-8 ${
                          isEven ? "lg:ml-[-10%]" : "lg:w-[calc(100%+10%)]"
                        }`}
                      >
                        <p className="text-base leading-8 text-white/80 lg:text-lg">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.04] hover:shadow-blue-500/40"
                        >
                          View Project
                        </a>
                      )}

                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* IMAGE SIDE */}
                  <div
                    className={`${
                      isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b12] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-500/5" />
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                          priority={project.id === 1}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}