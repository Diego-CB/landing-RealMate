import React from "react";
import AgentsCarrousel from "./AgentsCarrousel";

export type Agent = {
  id: string | number;
  name: string;
  role: string;
  photo: string; // URL
};

type FeaturedAgentsProps = {
  agents: Agent[];
  className?: string;
};

const FeaturedAgents: React.FC<FeaturedAgentsProps> = ({
  agents,
  className = "",
}) => {
  return (
    <section
      className={`mx-auto max-w-6xl px-4 py-10 md:py-14 gap-[20px] ${className}`}
    >
      {/* Título */}
      <header className="mb-8 text-center text-primary flex flex-col items-center justify-center">
        <h2 className="text-6xl font-champ font-light tracking-[0.15em]">
          AGENTES
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-wide text-slate-800">
          DESTACADOS
        </h3>
        <div className="mt-2 h-[4px] w-1/6 rounded-full bg-secundary" />
        {/* <div className="relative inline-block" /> */}
      </header>

      {/* Carrusel centrado */}
      <AgentsCarrousel agents={agents} />
    </section>
  );
};

export default FeaturedAgents;
