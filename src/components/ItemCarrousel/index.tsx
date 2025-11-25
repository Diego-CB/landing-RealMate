import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { ItemCard } from "./ItemCard";
import { motion, useMotionValue, animate } from "framer-motion";

type Item = {
  id: string | number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
};

type ItemsCarouselProps = {
  items: Item[];
  className?: string;
  animated?: boolean;
};

export function ItemsCarousel({
  items,
  className = "",
  animated = false,
}: ItemsCarouselProps) {
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // computed constraints
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const calc = () => {
      const scrollWidth = el.scrollWidth; // total content width
      const clientWidth = el.clientWidth; // visible width
      const maxDrag = Math.max(0, scrollWidth - clientWidth);

      setConstraints({
        left: -maxDrag, // end position
        right: 0, // start position
      });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [items]);

  // ---- Idle autopan: to end, then back ----
  useEffect(() => {
    if (!animated) return;
    if (dragging) return; // don't autoplay while dragging
    if (constraints.left === 0) return; // nowhere to pan

    const timeoutId = window.setTimeout(() => {
      const start = dragX.get();
      const end = constraints.left; // negative value

      // if already at end/start, still do the full trip
      const SPEED_PX_PER_SEC = 120; // <- your "speed" knob

      const back = 0;

      const distToEnd = Math.abs(end - start);
      const distBack = Math.abs(back - end);
      const totalDist = distToEnd + distBack;

      const totalDuration = totalDist / SPEED_PX_PER_SEC;

      // weight keyframe times by distance so speed stays constant
      const t1 = distToEnd / totalDist; // % of time to reach end

      const controls = animate(dragX, [start, end, back], {
        duration: totalDuration,
        ease: "linear", // linear = constant speed
        times: [0, t1, 1],
      });

      return () => controls.stop();
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [constraints.left, dragging, dragX]);

  return (
    <motion.div
      ref={containerRef}
      style={{ x: dragX, touchAction: "pan-y" }}
      drag="x"
      dragConstraints={constraints}
      dragElastic={0.08}
      dragMomentum={true}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      whileTap={{ cursor: "grabbing" }}
      dragTransition={{
        bounceStiffness: 300,
        bounceDamping: 30,
        power: 0.1,
        timeConstant: 100,
      }}
      onScroll={(e) => {
        console.warn(e);
      }}
      className={`
        overflow-visible
        no-scrollbar
        cursor-grab
        flex gap-6 px-6 py-4
        ${dragging ? "select-none" : ""}
        ${className}
      `}
    >
      {items.map((it, index) => (
        <ItemCard
          key={it.id + index.toString()}
          title={it.title}
          location={it.location}
          price={it.price}
          imageUrl={it.imageUrl}
        />
      ))}
    </motion.div>
  );
}
