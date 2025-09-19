import dotFilled from "../../../assets/images/Elipse-dark.svg";
import dotEmpty from "../../../assets/images/Elipse-clear.svg";
import Button from "../../../components/Button";
import { ItemsCarousel } from "../../../components/ItemCarrousel/index";
import { useCallback, useEffect, useState } from "react";

import itemImg from "../../../assets/images/items/item1.png";
import item1 from "../../../assets/images/items/2.jpg";
import item2 from "../../../assets/images/items/3.jpg";
import item3 from "../../../assets/images/items/4.jpg";
import item4 from "../../../assets/images/items/5.jpg";
import item5 from "../../../assets/images/items/6.jpg";

const items = [
  {
    id: 1,
    title: "Casa con piscina en venta",
    location: "Guatemala, La Foresta zona 16",
    price: "Q3,264,000.00",
    imageUrl: itemImg,
  },
  {
    id: 2,
    title: "Apartamento en venta",
    location: "Guatemala, zona 8 Mixco",
    price: "Q1,080,000.00",
    imageUrl: item2,
  },
  {
    id: 3,
    title: "Apartamento en venta",
    location: "Guatemala, Palín",
    price: "Q1,464,000.00",
    imageUrl: item3,
  },
  {
    id: 4,
    title: "Casa en Venta",
    location: "Guatemala, Palín",
    price: "Q1,464,000.00",
    imageUrl: item4,
  },
  {
    id: 5,
    title: "Apartamento en venta",
    location: "Guatemala, Palín",
    price: "Q1,464,000.00",
    imageUrl: item5,
  },
];

type HeroInfoTyp = {
  title: string;
  subtTitle: string;
  info: string;
  btnText: string;
};

type HeroProps = {
  images: string[]; // URLs de fondo
  intervalMs?: number; // default: 10000
  onIndexChange?: (i: number) => void;
  className?: string;
  heroInfo: HeroInfoTyp[];
};

const HeroImage = ({
  images,
  intervalMs = 10000,
  onIndexChange,
  className = "",
  heroInfo,
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = images.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  // autoplay
  useEffect(() => {
    if (total <= 1 || paused) return;

    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [next, intervalMs, paused, total]);

  // sync externo (por si quieres leer el índice en el padre)
  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  if (total === 0) return null;

  return (
    <section
      className={`relative isolate h-[calc(100vh-110px)] shadow-md ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides con fade */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}

      {/* Contenido overlay */}
      <div className="absolute inset-0 flex items-start gap-2 flex-col px-[4vw] pt-[11%]">
        {/* Text */}
        <div className="w-1/2 text-left font-extrabold text-primary">
          <h1 className="text-9xl">{heroInfo[index].title}</h1>
          <h2 className="text-6xl">{heroInfo[index].subtTitle}</h2>

          <p className="w-2/3 py-2 text-primary text-left text-2xl">
            {heroInfo[index].info}
          </p>

          <Button text={heroInfo[index].btnText} className="mt-2 " />
        </div>

        {/* Dots */}
        <div className="flex flex-row items-center justify-start w-1/2">
          {images.map((_, dotIndex) => (
            <button
              className="cursor-pointer h-8 w-8 flex-center flex-row"
              onClick={() => setIndex(dotIndex)}
            >
              <img
                className="full-size"
                src={dotIndex === index ? dotFilled : dotEmpty}
              />
            </button>
          ))}
        </div>
      </div>

      <ItemsCarousel
        items={items}
        className="absolute bottom-[-100px] right-0"
      />
    </section>
  );
};

export default HeroImage;
