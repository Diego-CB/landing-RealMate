import type React from "react";
import arrowDown from "../../../assets/images/icons/arrow-down.svg";
import arrowUp from "../../../assets/images/icons/arrow-up.svg";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  text: string;
  children?: React.ReactNode;
};

const DropDownCard = ({ text, children }: Props) => {
  const [showContent, setShowContent] = useState(false);

  const arrowIcon = useMemo(
    () => (showContent ? arrowUp : arrowDown),
    [showContent]
  );
  const btnColor = useMemo(
    () => (showContent ? "secundary" : "text-light"),
    [showContent]
  );
  const textColor = useMemo(
    () => (showContent ? "white" : "primary"),
    [showContent]
  );

  return (
    <div className="w-[80%] z-0">
      <button
        onClick={() => setShowContent((prev) => !prev)}
        aria-expanded={showContent}
        className={`
          w-full flex justify-between items-center
          bg-${btnColor} px-5 py-2 rounded-xl text-${textColor} cursor-pointer
          transition z-20
        `}
      >
        {text}

        {/* Rotate arrow */}
        <motion.img
          src={arrowIcon}
          alt="arrow"
          className="w-5 h-5"
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      </button>

      {/* Animated content */}
      <AnimatePresence initial={false}>
        {showContent && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              relative overflow-hidden
              bg-light-bg text-primary w-full
              p-5 pt-[5vh] top-[-4vh] z-[-1] rounded-b-xl
              flex flex-col gap-5
            `}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownCard;
