import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import clsx from "clsx";

const getRandomNumber = (n1, n2) => {
  return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
};

const colors = [
  "text-primary",
  "text-quaternary",
  "text-secondary",
  "text-brown",
];
const sizes = ["w-6", "w-8", "w-10"];

const Hearts = () => {
  return (
    <div className="relative -mt-32 min-h-[10rem]">
      {Array(40)
        .fill()
        .map((_, index) => {
          const randomColor = getRandomNumber(0, colors.length - 1);
          const randomSize = getRandomNumber(0, sizes.length - 1);
          const randomTop = getRandomNumber(0, 100);
          const randomLeft = getRandomNumber(0, 100);
          const iconClasses = clsx(
            "drop-shadow-md absolute",
            sizes[randomSize],
            colors[randomColor]
          );
          return (
            <HeartIcon
              style={{ top: randomTop + "%", left: randomLeft + "%" }}
              key={`heart-${index}`}
              className={iconClasses}
            />
          );
        })}
    </div>
  );
};

export default Hearts;
