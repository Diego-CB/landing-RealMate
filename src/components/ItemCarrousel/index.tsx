import { useRef, useState, useLayoutEffect } from "react";
import { ItemCard } from "./ItemCard";
import { motion, useMotionValue } from "framer-motion";

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
};

export function ItemsCarousel({ items, className = "" }: ItemsCarouselProps) {
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
      const maxDrag = scrollWidth - clientWidth;

      setConstraints({
        left: -maxDrag, // allow dragging left to reveal right side
        right: 0,
      });
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [items]);

  return (
    <motion.div
      ref={containerRef}
      style={{ x: dragX }}
      drag="x"
      dragConstraints={constraints}
      dragElastic={0.08}
      dragMomentum={true}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      whileTap={{ cursor: "grabbing" }}
      className={`
        overflow-visible
        no-scrollbar
        cursor-grab
        flex gap-6 px-6 py-4
        ${dragging ? "select-none" : ""}
        ${className}
      `}
    >
      {items.map((it) => (
        <ItemCard
          key={it.id}
          title={it.title}
          location={it.location}
          price={it.price}
          imageUrl={it.imageUrl}
        />
      ))}
    </motion.div>
  );
}
