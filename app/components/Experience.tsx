import Image from "next/image";

interface ExperienceCard {
  id: number;
  company: string;
  role: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    company: "DADO",
    role: "Founding Engineer",
    description:
      "Leading full-stack architecture for a luxury gifting and social commerce platform. Building scalable systems using React, TypeScript, Node.js, and Python while integrating AI-powered personalization with Retrieval-Augmented Generation (RAG) and LangChain.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    company: "Ola Electric",
    role: "Software Development Intern",
    description:
      "Contributed to the modernization of a production web platform supporting next-generation electric scooters. Migrated legacy pages to a React architecture and improved performance through component-driven design.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    company: "Out of Stock Marketplace",
    role: "Full-Stack Engineer",
    description:
      "Engineered a custom Shopify sneaker marketplace implementing advanced filtering logic, category remapping, automated product drop workflows, and fraud-prevention checkout logic.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    company: "Quattris IT Services",
    role: "IT Field Technician",
    description:
      "Diagnosed and resolved enterprise network and POS system issues, ensuring operational reliability while supporting hardware deployment and enterprise logistics workflows.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Experience
        </h2>

        <p className="text-white/60 text-center mb-14 max-w-2xl mx-auto">
          Building scalable products across startups, production platforms,
          and enterprise systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
            >

              <div className="flex items-start gap-5">

                <Image
                  src={card.icon}
                  alt={card.company}
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {card.company}
                  </h3>

                  <p className="text-cyan-300 text-sm mb-2">
                    {card.role}
                  </p>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {card.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}