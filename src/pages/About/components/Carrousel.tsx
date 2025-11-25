import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import arrowL from "../../../assets/images/icons/arrow-left.svg";
import arrowR from "../../../assets/images/icons/arrow-right.svg";

type CarouselImage = {
  src: string;
  alt?: string;
};

type imageSet = {
  title: string;
  subtitle?: string;
  images: CarouselImage[];
};

type ProjectCarouselProps = {
  data: imageSet[];
  className?: string;
};

const ProjectCarousel = ({ data, className = "" }: ProjectCarouselProps) => {
  const [_, setDragging] = useState<boolean>(false);
  const [dataIndex, setDataIndex] = useState(0);

  const goData = (dir: number) => {
    setDataIndex((i) => {
      if (i + dir > data.length - 1) return 0;
      if (i + dir < 0) return data.length - 1;
      return i + dir;
    });
  };

  const dragX = useMotionValue(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useLayoutEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const calc = () => {
      const contentW = contentEl.scrollWidth; // total images width
      const maxDrag = Math.max(0, contentW);

      setConstraints({
        left: -maxDrag,
        right: 0,
      });

      // clamp current x if it is out of bounds after resize / data change
      const current = dragX.get();
      if (current < -maxDrag) dragX.set(-maxDrag);
      if (current > 0) dragX.set(0);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [dataIndex, dragX]);

  // reset position when switching project
  useEffect(() => {
    dragX.set(0);
  }, [dataIndex, dragX]);

  const onDragStart = () => setDragging(true);
  const onDragEnd = () => setDragging(false);

  return (
    <div className={`w-full h-[110vh] ${className}`}>
      {/* Header */}
      <div className="mb-4 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex flex-row gap-[2vw] justify-center items-center">
          <button
            onClick={() => goData(-1)}
            className="cursor-pointer"
            aria-label="Previous"
          >
            <img src={arrowL} alt="" />
          </button>

          <div className="text-5xl font-bold text-primary">
            PROYECTO: {data[dataIndex].title.toUpperCase()}
          </div>

          <button
            onClick={() => goData(1)}
            className="cursor-pointer"
            aria-label="Next"
          >
            <img src={arrowR} alt="" />
          </button>
        </div>

        {data[dataIndex].subtitle && (
          <div className="text-secundary text-3xl">
            {data[dataIndex].subtitle}
          </div>
        )}
      </div>

      {/* Carousel viewport */}
      {/* Carousel rail */}
      <motion.div
        ref={contentRef}
        className="cursor-grab w-fit h-[80vh] flex flex-row gap-[2%]"
        style={{ x: dragX }}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.08}
        dragMomentum
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {data[dataIndex].images.map(({ src }, idx) => (
          <img
            key={`${src}-${idx}`}
            src={src}
            alt=""
            className="h-full w-[30vw] object-cover rounded-4xl"
            draggable={false}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCarousel;
