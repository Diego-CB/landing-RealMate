import { useState } from "react";
import heartFilled from "../../assets/images/icons/heart-filled.svg";
import heartUnfilled from "../../assets/images/icons/heart-unfilled.svg";

type ItemCardProps = {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  className?: string;
};

export function ItemCard({
  title,
  location,
  price,
  imageUrl,
  className = "",
}: ItemCardProps) {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <article
      className={`
        relative w-[320px] snap-start shrink-0 rounded-[28px]
        shadow-[0px_0px_15px_3px_rgba(0,_0,_0,_0.2)]
        overflow-hidden bg-white
        text-primary
        ${className}
      `}
    >
      {/* Header */}
      <div className="rounded-t-[28px] px-5 pt-5 pb-4 bg-gradient-to-r from-white to-[rgba(0,0,0,0.1)] text-left">
        <h3 className="font-extrabold text-2xl leading-tight">{title}</h3>
        <p className="text-[15px] leading-tight text-secundary">{location}</p>
        <p className="text-[15px] font-semibold text-text-light">{price}</p>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          className="h-[220px] w-full object-cover"
          src={imageUrl}
          alt={title}
        />

        {/* Like button */}
        <button
          type="button"
          onClick={() => setLiked((prev) => !prev)}
          className={`
            absolute right-3 top-3 h-12 w-12
            flex items-center justify-center rounded-full
            bg-white hover:scale-102 transition
            cursor-pointer
          `}
        >
          <img
            className="h-5 w-5"
            src={liked ? heartFilled : heartUnfilled}
            alt="like"
          />
        </button>
      </div>
    </article>
  );
}
