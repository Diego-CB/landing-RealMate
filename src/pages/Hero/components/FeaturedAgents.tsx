import * as React from "react";
import aleft from "../../../assets/images/icons/arrow-left.svg";
import aright from "../../../assets/images/icons/arrow-right.svg";
import Button from "../../../components/Button";

type Agent = {
  id: string | number;
  name: string;
  role: string;
  photo: string; // URL
};

type FeaturedAgentsProps = {
  agents: Agent[];
  className?: string;
  onContact?: (agent: Agent) => void;
};

export default function FeaturedAgents({
  agents,
  className = "",
  onContact,
}: FeaturedAgentsProps) {
  const [active, setActive] = React.useState(0);
  const total = agents.length;

  const goTo = (i: number) => setActive(((i % total) + total) % total); // wrap safely
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // Navegación con teclado (opcional)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  // Para el carrusel: calculamos los 5 visibles (prev2, prev1, active, next1, next2)
  const visible = [-2, -1, 0, 1, 2].map(
    (offset) => agents[(active + offset + total) % total]
  );

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
      <div className="relative">
        {/* Avatares (los laterales más pequeños y con blur suave para simular profundidad) */}
        <div className="flex items-center justify-center gap-6 md:gap-10 px-12">
          {visible.map((agent, idx) => {
            // idx: 0..4 con 2=centro
            const isCenter = idx === 2;
            const isNear = idx === 1 || idx === 3;
            const size = isCenter ? 500 : isNear ? 450 : 400; // px
            const opacity = isCenter
              ? "opacity-100"
              : isNear
              ? "opacity-90"
              : "opacity-70";
            const blur = isCenter ? "" : "backdrop-blur-[0.5px]";
            return (
              <button
                key={agent.id}
                onClick={() => goTo(agents.indexOf(agent))}
                className={`group relative shrink-0 transition-transform duration-300 ${
                  isCenter ? "scale-100" : "scale-95 hover:scale-100"
                }`}
                aria-label={`Ver ${agent.name}`}
              >
                <div
                  className={`rounded-full shadow-xl ring-1 ring-black/10 overflow-hidden ${opacity} ${blur}`}
                  style={{ width: size, height: size }}
                >
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Info del activo */}
        <div className="mt-6 text-center flex flex-col items-center justify-center">
          {/* Flechas */}
          {/* <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white"
          >
            <img src={aleft} className="h-6 w-6 text-slate-700" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white"
          >
            <img src={aright} className="h-6 w-6 text-slate-700" />
          </button> */}

          <h4 className="text-3xl font-extrabold text-primary">
            {agents[active].name}
          </h4>
          <p className="text-secundary font-extrabold text-lg">
            {agents[active].role}
          </p>

          <Button className="text-lg" text="Contactar" logo={<UserPlus />} />
        </div>
      </div>
    </section>
  );
}

function UserPlus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 19a6 6 0 0 0-12 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19 8v6M16 11h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
