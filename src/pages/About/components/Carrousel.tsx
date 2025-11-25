import { useEffect, useMemo, useState } from "react";
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

const DRAG_BUFFER = 50;

const ProjectCarousel = ({ data, className = "" }: ProjectCarouselProps) => {
  const [_, setDragging] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);

  const goData = (dir: number) => {
    setDataIndex((i) => {
      if (i + dir > data.length - 1) {
        return 0;
      }

      if (i + dir < 0) {
        return data.length - 1;
      }

      return i + dir;
    });
  };

  const count = data[dataIndex].images.length;
  const dragX = useMotionValue(0);

  console.log(dataIndex);

  useEffect(() => {
    setIndex(Math.floor(data[dataIndex].images.length / 2) - 1);
  }, [data[dataIndex].images]);

  const clampIndex = (i: number) => (i + count) % count;
  const go = (dir: number) => {
    setIndex((i) => {
      if (i + dir > data[dataIndex].images.length - 2 || i + dir < 0) {
        return i;
      }

      return clampIndex(i + dir);
    });
  };

  const onDragStart = () => setDragging(true);
  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      go(1);
    } else if (x >= DRAG_BUFFER) {
      go(-1);
    }
  };

  if (count === 0) return null;

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

      {/* Carousel rail */}
      <motion.div
        className="cursor-grab h-[80vh] w-full flex flex-row gap-[2%]"
        animate={{
          translateX: `-${index * 36}vw`,
        }}
        style={{ x: dragX }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {data[dataIndex].images.map(({ src }) => (
          <img
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
