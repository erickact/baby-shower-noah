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
    <div className="relative -mt-24 min-h-[10rem]">
      {Array(40)
        .fill()
        .map((_, index) => {
          const randomColor = getRandomNumber(0, colors.length - 1);
          const randomSize = getRandomNumber(0, sizes.length - 1);
          const randomBottom = getRandomNumber(0, 85);
          const randomRight = getRandomNumber(0, 85);
          const iconClasses = clsx(
            "drop-shadow-md absolute move",
            sizes[randomSize],
            colors[randomColor]
          );
          return (
            <HeartIcon
              style={{ bottom: randomBottom + "%", right: randomRight + "%" }}
              key={`heart-${index}`}
              className={iconClasses}
            />
          );
        })}
    </div>
  );
};

export default Hearts;
