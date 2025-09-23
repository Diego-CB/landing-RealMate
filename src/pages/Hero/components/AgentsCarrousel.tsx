import * as React from "react";
import aleft from "../../../assets/images/icons/arrow-left.svg";
import aright from "../../../assets/images/icons/arrow-right.svg";
import Button from "../../../components/Button";
import { motion } from "motion/react";
import type { Agent } from "./FeaturedAgents";

type Props = {
  agents: Agent[];
};

const AgentsCarrousel: React.FC<Props> = ({ agents }) => {
  const [active, setActive] = React.useState(0);
  const total = agents.length;

  // NEW: track transition state
  const [isShifting, setIsShifting] = React.useState(false);
  const shiftTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const ANIM_MS = 200; // mantén cercano a tu transición (0.25s)

  const beginShift = React.useCallback(() => {
    if (shiftTimer.current) clearTimeout(shiftTimer.current);
    setIsShifting(true);
    shiftTimer.current = setTimeout(() => setIsShifting(false), ANIM_MS);
  }, []);

  React.useEffect(() => {
    return () => {
      if (shiftTimer.current) clearTimeout(shiftTimer.current);
    };
  }, []);

  const goTo = (i: number) => {
    beginShift(); // NEW
    setTimeout(() => setActive(((i % total) + total) % total), 100);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  // Para el carrusel: calculamos los 5 visibles (prev2, prev1, active, next1, next2)
  const visible = [-2, -1, 0, 1, 2].map(
    (offset) => agents[(active + offset + total) % total]
  );

  return (
    <div className="relative">
      {/* Avatares animados */}
      <motion.div
        className="flex items-center justify-center gap-[1vw]"
        initial={true}
        layout
      >
        {visible.map((agent, idx) => {
          const centerIndex = Math.floor(visible.length / 2);
          const indexInAgents = agents.findIndex((a) => a.id === agent.id);
          const isCenter = idx === centerIndex;
          const isNear = idx === centerIndex - 1 || idx === centerIndex + 1;
          const isEdge = idx === centerIndex - 2 || idx === centerIndex + 2;

          const getSize = () => {
            if (isCenter) return "28vw";
            if (isNear) return "25vw";
            return "22vw";
          };
          const size = getSize();

          const getOpacity = () => {
            if (isCenter) return 1;
            if (isNear) return 0.85;
            if (isEdge) return 0.7; // valor “reposo” para borde
            return 0;
          };
          const baseOpacity = getOpacity();

          const getScale = () => {
            if (isCenter) return 1;
            if (isNear) return 0.85;
            return 0.75;
          };
          const scale = getScale();

          const getBlur = () => {
            if (isCenter) return "blur(0px)";
            if (isNear) return "blur(0.5px)";
            return "blur(1px)";
          };

          return (
            <motion.button
              key={agent.id}
              onClick={() => goTo(indexInAgents)}
              className="group relative shrink-0 focus:outline-none focus:ring-2 rounded-full"
              style={{
                width: size,
                height: size,
                pointerEvents: isEdge && isShifting ? "none" : "auto", // opcional
              }}
              layout
              whileHover={{ scale: isCenter ? 1.02 : isNear ? 0.92 : 0.82 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              aria-label={`Ver ${agent.name}`}
              aria-selected={isCenter}
              role="option"
              animate={{
                filter: getBlur(),
                scale,
                // NEW: si es edge y estamos en transición, opacidad 0
                opacity: isEdge && isShifting ? 0 : baseOpacity,
              }}
            >
              <motion.img
                src={agent.photo}
                alt={agent.name}
                className="h-full w-full object-cover"
                layout="preserve-aspect"
                initial={false}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          );
        })}
      </motion.div>

      {/* Info del activo */}
      <div className="mt-6 text-center flex flex-row items-start justify-center">
        <button
          aria-label="Anterior"
          onClick={prev}
          className="p-2 cursor-pointer"
        >
          <img src={aleft} className="h-8 w-8 text-slate-700" />
        </button>

        <div className="flex flex-col items-center justify-center w-1/4">
          <h4 className="text-3xl font-extrabold text-primary">
            {agents[active].name}
          </h4>
          <p className="text-secundary font-extrabold text-lg">
            {agents[active].role}
          </p>

          <Button
            href="/login"
            className="text-lg"
            text="Contactar"
            logo={<UserPlus />}
          />
        </div>

        <button
          aria-label="Siguiente"
          onClick={next}
          className="p-2 cursor-pointer"
        >
          <img src={aright} className="h-8 w-8 text-slate-700" />
        </button>
      </div>
    </div>
  );
};

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

export default AgentsCarrousel;
