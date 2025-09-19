import * as React from "react";
import { ItemCard } from "./ItemCard";

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
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollerRef}
      className={`
        ${className}
        overflow-scroll w-2/3
        no-scrollbar
        flex snap-x gap-6 overflow-x-auto scroll-px-6 px-6 py-4
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
    </div>
  );
}
