import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import { HeartIcon } from "@heroicons/react/solid";

const CurvedText = ({ children }) => {
  const circleTypeRef = useRef();

  useEffect(() => {
    circleTypeRef.current = new CircleType(
      document.getElementById("text")
    ).radius(350);

    return () => {
      circleTypeRef?.current?.destroy();
    };
  }, []);

  return (
    <div className="flex justify-between">
      <HeartIcon className="w-6 text-primary rotate-[-45deg] sm:translate-y-0 -translate-y-2" />
      <div
        id="text"
        className="sm:block hidden font-bold text-6xl text-primary"
      >
        {children}
      </div>
      <div className="sm:hidden block text-4xl font-bold text-primary">
        {children}
      </div>
      <HeartIcon className="w-6 text-primary rotate-[45deg] sm:translate-y-0 -translate-y-2" />
    </div>
  );
};

export default CurvedText;
