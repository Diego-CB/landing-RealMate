import dotFilled from "../../../assets/images/Elipse-dark.svg";
import dotEmpty from "../../../assets/images/Elipse-clear.svg";
import Button from "../../../components/Button";
import { ItemsCarousel } from "../../../components/ItemCarrousel/index";
import { useEffect, useRef, useState } from "react";
import { items } from "../../../mock/properties";

type HeroInfoTyp = {
  title: string;
  subtTitle: string;
  info: string;
  btnText: string;
  href: string;
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
  intervalMs = 4000,
  className = "",
  heroInfo,
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const total = images.length;
  if (total === 0) return null;

  const clearTimer = () => {
    console.warn("cleared");
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleNext = () => {
    if (total <= 1 || paused) return;

    clearTimer();
    timerRef.current = window.setTimeout(
      () => setIndex((prev) => (prev + 1) % total),
      intervalMs
    );
  };

  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [index, paused, intervalMs, total]);

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

          <Button
            href={heroInfo[index].href}
            text={heroInfo[index].btnText}
            className="mt-2 "
          />
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
